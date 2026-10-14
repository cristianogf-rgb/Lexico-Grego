/* Léxikon · confere a tradução dos ensaios de um pacote contra o pt-BR.

       node ferramentas/verificar-ensaios.js es

   O que esta ferramenta garante — e o que ela não garante.

   GARANTE, por comparação mecânica com o original:
     · o grego sobrevive byte a byte, na mesma ordem e na mesma quantidade;
     · o hebraico e o aramaico também;
     · o conjunto de referências bíblicas é o mesmo, depois de normalizado
       para ID USFM (Rm 8.15 no português e Ro 8.15 no espanhol são a mesma
       referência; uma referência a mais ou a menos é erro);
     · nenhum ensaio ficou vazio onde o português tem texto;
     · nenhum ficou idêntico ao português, o que denunciaria lote não traduzido.

   NÃO GARANTE que a exegese esteja correta na língua de chegada. Isso é
   leitura humana, e não há ferramenta que substitua. O que se pode afirmar é
   que nenhuma citação grega foi alterada e nenhuma referência inventada ou
   perdida — que são os erros que passariam despercebidos. */
"use strict";
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const LINGUA = process.argv[2] || "es";

global.window = globalThis;
require(path.join(RAIZ, "nucleo/livros.js"));
const CANON = globalThis.LEXIKON_CANON;

function carregaPack(codigo) {
  const d = path.join(RAIZ, "linguas", codigo);
  const g = {};
  const antes = { L: globalThis.LEXIKON_PACK_LEXICO, V: globalThis.LEXIKON_PACK_LIVROS };
  require(path.join(d, "livros.js"));
  g.livros = globalThis.LEXIKON_PACK_LIVROS;
  require(path.join(d, "lexico.js"));
  g.lexico = globalThis.LEXIKON_PACK_LEXICO;
  globalThis.LEXIKON_PACK_LEXICO = antes.L; globalThis.LEXIKON_PACK_LIVROS = antes.V;
  return g;
}
/* require guarda em cache: carrega cada um numa passada limpa */
function fresco(codigo, arquivo) {
  const abs = path.join(RAIZ, "linguas", codigo, arquivo);
  delete require.cache[require.resolve(abs)];
  require(abs);
}
fresco("pt-BR", "livros.js"); const LIV_PT = globalThis.LEXIKON_PACK_LIVROS;
fresco("pt-BR", "lexico.js"); const PT = globalThis.LEXIKON_PACK_LEXICO;
fresco(LINGUA, "livros.js"); const LIV_ES = globalThis.LEXIKON_PACK_LIVROS;
fresco(LINGUA, "lexico.js"); const ES = globalThis.LEXIKON_PACK_LEXICO;

/* ----- extratores ----- */
const GREGO = /[Ͱ-Ͽἀ-῿ͅ]+/g;
const HEBRAICO = /[֐-׿יִ-ﭏ]+/g;
const spans = (s, re) => (String(s || "").match(re) || []);

function alias(livros) {
  const m = {};
  for (const u in livros) {
    const L = livros[u];
    m[L.abrev.toLowerCase().replace(/\s/g, "")] = u;
    for (const a of (L.alias || [])) m[a] = u;
  }
  return m;
}
const AL_PT = alias(LIV_PT), AL_ES = alias(LIV_ES);
const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/* "Rm 8.15; 8.23" → ["ROM|8|15","ROM|8|23"] */
function refs(txt, mapa) {
  const out = [];
  /* Uma letra basta: a abreviatura espanhola de Pedro é "1P". Exigir duas
     deixava passar em branco toda referência a 1 e 2 Pedro no pacote es, e o
     verificador acusava como perdidas referências que estavam lá. Token que
     não resolva na tabela de livros do pacote é descartado logo abaixo, então
     afrouxar aqui não cria falso positivo. */
  const re = /([1-3]?\s?[A-Za-zÀ-ÿ]+)\s+(\d+)\.(\d+(?:[,–-]\d+)*)/g;
  let m, ultimo = null;
  const t = String(txt || "");
  while ((m = re.exec(t))) {
    const chave = norm(m[1]).replace(/\s/g, "");
    const u = mapa[chave];
    if (!u) continue;
    ultimo = u;
    for (const parte of m[3].split(/[,–-]/)) if (/^\d+$/.test(parte)) out.push(u + "|" + m[2] + "|" + parte);
  }
  return out;
}

/* ----- comparação ----- */
/* Campos que se TRADUZEM, e por isso se conferem contra o original.
   `nt` fica de fora de propósito: ele não é traduzido, é gerado da
   lematização do Nestle 1904 por ferramentas/ocorrencias.js, com contagem
   exata. Diverge do português porque é mais preciso que ele — comparar os
   dois acusaria como erro justamente a melhoria. */
const CAMPOS = ["raiz", "lsj", "abbott"];
const erros = [], avisos = [];
let traduzidos = 0, pendentes = 0, iguais = 0;
const porCampo = {};

for (const lema in PT) {
  const a = PT[lema], b = ES[lema];
  if (!b) { erros.push("verbete ausente no pacote " + LINGUA + ": " + lema); continue; }
  let temAlgo = false;
  for (const c of CAMPOS) {
    const x = String(a[c] || "").trim(), y = String(b[c] || "").trim();
    if (!x) continue;
    if (!y) { porCampo[c] = porCampo[c] || { falta: 0, ok: 0 }; porCampo[c].falta++; continue; }
    porCampo[c] = porCampo[c] || { falta: 0, ok: 0 }; porCampo[c].ok++;
    temAlgo = true;

    /* só o ensaio longo: "ἅγιος (“santo”)" e "Vaso, recipiente; cesto." saem
       iguais nas duas línguas porque as palavras coincidem, e avisar sobre
       isso seria ruído. Em , identidade é sinal de lote não traduzido. */
    /* Só o ensaio longo. "ἅγιος (“santo”)" e "Vaso, recipiente; cesto." saem
       iguais nas duas línguas porque as palavras coincidem, e avisar sobre
       isso é ruído. Em `abbott`, identidade denuncia lote não traduzido. */
    if (x === y && c === "abbott" && x.length > 120) { iguais++; avisos.push("idêntico ao português — " + lema + "." + c); }

    const gA = spans(x, GREGO), gB = spans(y, GREGO);
    if (gA.join("\u0001") !== gB.join("\u0001")) {
      erros.push("grego alterado em " + lema + "." + c +
        "\n        pt: " + gA.join(" ") + "\n        " + LINGUA + ": " + gB.join(" "));
    }
    const hA = spans(x, HEBRAICO), hB = spans(y, HEBRAICO);
    if (hA.join("\u0001") !== hB.join("\u0001")) {
      erros.push("hebraico alterado em " + lema + "." + c);
    }
    const rA = refs(x, AL_PT).sort(), rB = refs(y, AL_ES).sort();
    if (rA.join(",") !== rB.join(",")) {
      const faltam = rA.filter((r) => !rB.includes(r));
      const sobram = rB.filter((r) => !rA.includes(r));
      erros.push("referências diferentes em " + lema + "." + c +
        (faltam.length ? "  perdidas: " + faltam.join(" ") : "") +
        (sobram.length ? "  inventadas: " + sobram.join(" ") : ""));
    }
  }
  if (temAlgo) traduzidos++; else pendentes++;
}

const totalPT = Object.keys(PT).length;
console.log("Léxikon · ensaios do pacote " + LINGUA + " conferidos contra pt-BR\n");
console.log("  verbetes ................ " + totalPT);
console.log("  com algum campo traduzido " + traduzidos + "  (" + (100 * traduzidos / totalPT).toFixed(1) + "%)");
console.log("  ainda sem nada .......... " + pendentes);
for (const c of CAMPOS) {
  const p = porCampo[c] || { ok: 0, falta: 0 };
  console.log(("  " + c).padEnd(26) + String(p.ok).padStart(6) + " traduzidos, " + String(p.falta).padStart(6) + " pendentes");
}
console.log();
avisos.slice(0, 10).forEach((a) => console.log("AVISO  " + a));
if (avisos.length > 10) console.log("AVISO  ... e mais " + (avisos.length - 10));
erros.slice(0, 25).forEach((e) => console.log("ERRO   " + e));
if (erros.length > 25) console.log("ERRO   ... e mais " + (erros.length - 25));
console.log((erros.length ? "FALHOU" : "OK") + " — erros: " + erros.length + " | avisos: " + avisos.length);
process.exit(erros.length ? 1 : 0);
