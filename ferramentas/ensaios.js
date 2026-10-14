/* Léxikon · pipeline de tradução dos ensaios.

       node ferramentas/ensaios.js proximos es 40     mostra o próximo lote
       node ferramentas/ensaios.js instalar es lote.json   grava no pacote
       node ferramentas/ensaios.js progresso es       quanto falta

   Os lotes traduzidos vão direto para linguas/<lingua>/lexico.js e são
   versionados no git: o progresso é durável e retomável entre sessões, sem
   depender de arquivo temporário nenhum.

   Campos traduzidos: raiz, lsj, abbott. O campo `nt` não entra — é gerado da
   lematização por ferramentas/ocorrencias.js.

   Regra de ouro, cobrada por ferramentas/verificar-ensaios.js: o grego e o
   hebraico passam byte a byte, e o conjunto de referências bíblicas é o mesmo
   do original, só que escrito com as abreviaturas do pacote de chegada. */
"use strict";
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const MODO = process.argv[2];
const LINGUA = process.argv[3] || "es";
const ARG = process.argv[4];
const CAMPOS = ["raiz", "lsj", "abbott"];

global.window = globalThis;
function fresco(codigo, arquivo) {
  const abs = path.join(RAIZ, "linguas", codigo, arquivo);
  delete require.cache[require.resolve(abs)];
  require(abs);
}
fresco("pt-BR", "lexico.js"); const PT = globalThis.LEXIKON_PACK_LEXICO;
fresco(LINGUA, "lexico.js"); const ES = globalThis.LEXIKON_PACK_LEXICO;

/* ordem estável: a do núcleo, que é a ordem do aplicativo */
fresco("pt-BR", "lexico.js");
const ORDEM = Object.keys(PT);
const pendente = (l) => CAMPOS.some((c) => String(PT[l][c] || "").trim() && !String((ES[l] || {})[c] || "").trim());
const PENDENTES = ORDEM.filter(pendente);

if (MODO === "progresso") {
  const feitos = ORDEM.length - PENDENTES.length;
  const chars = PENDENTES.reduce((a, l) => a + CAMPOS.reduce((x, c) => x + String(PT[l][c] || "").length, 0), 0);
  console.log("pacote " + LINGUA + ": " + feitos + " de " + ORDEM.length +
    " verbetes com ensaio (" + (100 * feitos / ORDEM.length).toFixed(1) + "%)");
  console.log("pendentes: " + PENDENTES.length + " verbetes, " +
    chars.toLocaleString("pt-BR") + " caracteres de origem");
  if (PENDENTES.length) console.log("próximo: " + PENDENTES[0]);
  process.exit(0);
}

if (MODO === "proximos") {
  const n = parseInt(ARG || "40", 10);
  const lote = PENDENTES.slice(0, n);
  const saida = {};
  for (const l of lote) {
    const o = {};
    for (const c of CAMPOS) { const v = String(PT[l][c] || "").trim(); if (v) o[c] = v; }
    saida[l] = o;
  }
  const chars = JSON.stringify(saida).length;
  console.error("lote de " + lote.length + " verbetes · " + chars.toLocaleString("pt-BR") +
    " caracteres · restam " + (PENDENTES.length - lote.length) + " verbetes depois deste");
  console.log(JSON.stringify(saida, null, 1));
  process.exit(0);
}

if (MODO === "instalar") {
  if (!ARG || !fs.existsSync(ARG)) { console.error("informe o arquivo do lote traduzido"); process.exit(1); }
  const lote = JSON.parse(fs.readFileSync(ARG, "utf8"));
  const erros = [];
  let n = 0, campos = 0;
  for (const lema in lote) {
    if (!PT[lema]) { erros.push("lema inexistente no pt-BR: " + lema); continue; }
    if (!ES[lema]) { erros.push("lema inexistente no pacote " + LINGUA + ": " + lema); continue; }
    for (const c of CAMPOS) {
      const orig = String(PT[lema][c] || "").trim();
      const novo = lote[lema][c];
      if (novo === undefined) { if (orig) erros.push("campo " + c + " faltando em " + lema); continue; }
      if (!orig) { erros.push("campo " + c + " traduzido mas vazio no original: " + lema); continue; }
      if (!String(novo).trim()) { erros.push("tradução vazia em " + lema + "." + c); continue; }
      ES[lema][c] = String(novo).trim();
      campos++;
    }
    n++;
  }
  if (erros.length) {
    console.error("ABORTADO — nada gravado (" + erros.length + "):");
    erros.slice(0, 15).forEach((e) => console.error("  " + e));
    process.exit(1);
  }
  const alvo = path.join(RAIZ, "linguas", LINGUA, "lexico.js");
  const cab = fs.readFileSync(alvo, "utf8").split("window.LEXIKON_PACK_LEXICO")[0];
  fs.writeFileSync(alvo, cab + "window.LEXIKON_PACK_LEXICO = " + JSON.stringify(ES) + ";\n", "utf8");
  console.log("instalado: " + n + " verbetes, " + campos + " campos");
  const restam = ORDEM.filter((l) => CAMPOS.some((c) => String(PT[l][c] || "").trim() && !String(ES[l][c] || "").trim()));
  console.log("restam: " + restam.length + " verbetes de " + ORDEM.length);
  process.exit(0);
}

console.error("modos: proximos | instalar | progresso");
process.exit(1);
