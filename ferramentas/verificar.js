/* Léxikon · verificador de integridade de núcleo + pacote de língua.
   Use antes de publicar e sempre que acrescentar um pacote novo:

       node ferramentas/verificar.js pt-BR

   Confere o que um pacote precisa cumprir para ser carregável: cobertura de
   lemas, consistência das chaves de versículo, integridade do grafo de
   cognatos, resolução de todo token marcado e presença das chaves de UI. */
"use strict";
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const LINGUA = process.argv[2] || "pt-BR";
const DIR = path.join(RAIZ, "linguas", LINGUA);

if (!fs.existsSync(DIR)) {
  console.error("pacote inexistente: linguas/" + LINGUA);
  process.exit(1);
}

global.window = globalThis;
require(path.join(RAIZ, "nucleo/livros.js"));
require(path.join(RAIZ, "nucleo/lexico.js"));
require(path.join(RAIZ, "nucleo/versos.js"));
/* Pacote com herança: carrega o herdado por inteiro e depois só os arquivos
   próprios, que sobrescrevem. O verificador confere o resultado montado, que é
   o que o aplicativo vê. */
const TODOS = ["meta.js", "ui.js", "livros.js", "lexico.js", "versos.js"];
require(path.join(DIR, "meta.js"));
const HERDA = globalThis.LEXIKON_PACK_META.herda;
if (HERDA) {
  const PAI = path.join(RAIZ, "linguas", HERDA);
  if (!fs.existsSync(PAI)) { console.error("pacote herdado inexistente: " + HERDA); process.exit(1); }
  for (const f of TODOS) require(path.join(PAI, f));
  for (const f of TODOS) if (fs.existsSync(path.join(DIR, f))) require(path.join(DIR, f));
} else {
  for (const f of TODOS.slice(1)) require(path.join(DIR, f));
}
require(path.join(RAIZ, "montar.js"));

const N = globalThis.LEXIKON_NUCLEO;
const NV = globalThis.LEXIKON_NUCLEO_VERSOS;
const CANON = globalThis.LEXIKON_CANON;
const PL = globalThis.LEXIKON_PACK_LEXICO;
const PV = globalThis.LEXIKON_PACK_VERSOS;
const PLIV = globalThis.LEXIKON_PACK_LIVROS;
const UI = globalThis.LEXIKON_PACK_UI;
const D = globalThis.LEXICON_DATA;
const V = globalThis.LEXICON_VERSOS;

const erros = [], avisos = [];
const E = (m) => erros.push(m);
const A = (m) => avisos.push(m);

/* 1. lemas: núcleo e pacote cobrem exatamente o mesmo conjunto */
const lemasN = new Set(N.map((e) => e.lema));
if (lemasN.size !== N.length) E("lemas duplicados no núcleo: " + (N.length - lemasN.size));
const semProsa = [...lemasN].filter((l) => !PL[l]);
const sobrando = Object.keys(PL).filter((l) => !lemasN.has(l));
if (semProsa.length) E(semProsa.length + " lema(s) do núcleo sem prosa no pacote: " + semProsa.slice(0, 5).join(", "));
if (sobrando.length) E(sobrando.length + " lema(s) no pacote sem entrada no núcleo: " + sobrando.slice(0, 5).join(", "));

/* 2. campos obrigatórios, conforme a cobertura que o pacote declara.
   Um pacote pode ser honestamente parcial: declara em meta.cobertura o que
   traz e o que ainda não traz. Campo declarado presente e ausente é erro;
   campo declarado ausente é aviso, com a contagem à vista. */
const COB = globalThis.LEXIKON_PACK_META.cobertura ||
  { glosas: true, classe: true, ocorrencias: true, raiz: true, ensaios: true };
const CAMPO_POR_COBERTURA = {
  classe: "classe", raiz: "raiz", nt: "ocorrencias", pt: "glosas",
  lsj: "ensaios", abbott: "ensaios"
};
const CAMPOS_N = ["lema", "translit", "beta", "morf", "refs", "cognatos", "verTambem"];
const CAMPOS_P = ["classe", "raiz", "lsj", "abbott", "nt", "pt"];

let faltaN = 0;
for (const e of N) for (const c of CAMPOS_N) if (e[c] === undefined) faltaN++;
if (faltaN) E("campos ausentes no núcleo: " + faltaN);

const ausente = {};   // campo -> quantos verbetes o têm vazio
let faltaP = 0;
for (const l in PL) {
  for (const c of CAMPOS_P) {
    if (PL[l][c] === undefined) { faltaP++; continue; }
    const vazio = Array.isArray(PL[l][c]) ? !PL[l][c].length : !String(PL[l][c]).trim();
    if (vazio) ausente[c] = (ausente[c] || 0) + 1;
  }
}
if (faltaP) E("campos ausentes no pacote (chave inexistente): " + faltaP);

for (const c of CAMPOS_P) {
  const n = ausente[c] || 0;
  if (!n) continue;
  const declarado = COB[CAMPO_POR_COBERTURA[c]];
  const msg = n + " verbete(s) com `" + c + "` vazio";
  if (declarado) E(msg + " — meta.cobertura declara este campo presente");
  else A(msg + " — declarado ausente em meta.cobertura, não é erro");
}
for (const chave in COB) {
  if (!COB[chave]) continue;
  const campos = Object.keys(CAMPO_POR_COBERTURA).filter((c) => CAMPO_POR_COBERTURA[c] === chave);
  if (campos.length && campos.every((c) => (ausente[c] || 0) === Object.keys(PL).length)) {
    E("meta.cobertura declara `" + chave + "` presente, mas nenhum verbete o traz");
  }
}

/* 3. livros: canon, núcleo e pacote de acordo */
const canonSet = new Set(CANON);
if (CANON.length !== 27) E("canon com " + CANON.length + " livros, esperado 27");
for (const u of CANON) if (!PLIV[u]) E("livro sem rótulo no pacote: " + u);
for (const u in PLIV) if (!canonSet.has(u)) E("livro no pacote fora do canon: " + u);
const livroDaChave = (k) => k.split("|")[0];
for (const k in NV) if (!canonSet.has(livroDaChave(k))) E("chave de versículo com livro fora do canon: " + k);
for (const k in PV) if (!canonSet.has(livroDaChave(k))) E("chave de versículo com livro fora do canon: " + k);

/* 4. aliases de busca não colidem entre livros */
const alias = {};
for (const u in PLIV) for (const a of (PLIV[u].alias || [])) {
  if (alias[a] && alias[a] !== u) E("alias ambíguo \"" + a + "\": " + alias[a] + " e " + u);
  alias[a] = u;
}

/* 5. versículos: o pacote cobre tudo o que o núcleo tem */
const faltamNoPack = Object.keys(NV).filter((k) => PV[k] === undefined);
if (faltamNoPack.length) E(faltamNoPack.length + " versículo(s) com grego e sem vernáculo: " + faltamNoPack.slice(0, 5).join(", "));
const semGrego = Object.keys(PV).filter((k) => !NV[k]);
if (semGrego.length) A(semGrego.length + " versículo(s) do pacote sem grego (ausentes do texto crítico): " + semGrego.slice(0, 3).join(", ") + "…");

/* 5b. versículos sem vernáculo: divergência de versificação entre a edição
   bíblica do pacote e o Nestle 1904. Tem de bater com o que meta.js declara. */
const semVernaculo = Object.keys(PV).filter((k) => !String(PV[k]).trim());
const declarados = ((globalThis.LEXIKON_PACK_META.biblia || {}).versiculosSemVernaculo) || [];
const naoDeclarados = semVernaculo.filter((k) => !declarados.includes(k));
const declaradosAToa = declarados.filter((k) => !semVernaculo.includes(k));
if (naoDeclarados.length) {
  E(naoDeclarados.length + " versículo(s) sem texto vernáculo e não declarados em " +
    "meta.biblia.versiculosSemVernaculo: " + naoDeclarados.slice(0, 5).join(", "));
}
if (declaradosAToa.length) {
  E("meta.biblia.versiculosSemVernaculo lista versículo(s) que têm texto: " + declaradosAToa.join(", "));
}
if (semVernaculo.length && !naoDeclarados.length) {
  A(semVernaculo.length + " versículo(s) sem texto vernáculo, todos declarados (versificação): " +
    semVernaculo.join(", "));
}

/* 6. referências de cada verbete existem no corpus */
let refMorta = 0;
for (const e of N) for (const r of e.refs) if (!V[r]) refMorta++;
if (refMorta) E("referências que não existem no corpus: " + refMorta);

/* 7. grafo: cognatos e verTambem apontam para lemas existentes */
let linkMorto = 0;
for (const e of N) {
  for (const c of e.cognatos) if (!lemasN.has(c)) linkMorto++;
  for (const c of e.verTambem) if (!lemasN.has(c)) linkMorto++;
}
/* Cognato fora do NT é legítimo: ἀίδιος, ἀθάνατος, θεμιτός existem no grego e
   não ocorrem no Novo Testamento. O app os exibe esmaecidos, sem link. */
if (linkMorto) A(linkMorto + " link(s) de cognatos/verTambem apontando para palavra fora do NT (exibidos esmaecidos)");

/* 8. todo token marcado no grego resolve para um verbete */
let orfaos = 0, tokens = 0, marcados = 0;
for (const k in NV) for (const t of NV[k]) {
  tokens++;
  if (Array.isArray(t)) { marcados++; if (!lemasN.has(t[1])) orfaos++; }
}
if (orfaos) E("tokens marcados sem verbete: " + orfaos);

/* 9. chaves de UI exigidas pelo index.html */
const html = fs.readFileSync(path.join(RAIZ, "index.html"), "utf8");
const exigidas = new Set();
for (const m of html.matchAll(/T\(\s*"([^"]+)"/g)) exigidas.add(m[1]);
for (const m of html.matchAll(/data-t(?:-title|-placeholder)?="([^"]+)"/g)) exigidas.add(m[1]);
const faltamUI = [...exigidas].filter((k) => UI[k] === undefined);
const ociosas = Object.keys(UI).filter((k) => !exigidas.has(k));
if (faltamUI.length) E("chaves de UI usadas no index.html e ausentes do pacote: " + faltamUI.join(", "));
if (ociosas.length) A("chaves de UI no pacote que o index.html não usa: " + ociosas.join(", "));

/* 10. metadados mínimos */
for (const c of ["codigo", "nome", "htmlLang", "biblia", "lexico"]) {
  if (!globalThis.LEXIKON_PACK_META[c]) E("meta.js sem o campo " + c);
}

/* ----- relatório ----- */
/* um pacote com herança não tem todos os arquivos: os que faltam vêm do pai */
const mb = (p) => {
  const abs = path.join(RAIZ, p);
  return fs.existsSync(abs) ? (fs.statSync(abs).size / 1048576).toFixed(2) + " MB" : "herdado";
};
console.log("Léxikon · verificação do pacote " + LINGUA);
console.log("  verbetes ............ " + D.length);
console.log("  versículos .......... " + Object.keys(V).length);
console.log("  tokens gregos ....... " + tokens + " | marcados: " + marcados +
  " (" + (100 * marcados / tokens).toFixed(2) + "%)");
console.log("  referências ......... " + N.reduce((a, e) => a + e.refs.length, 0));
console.log("  chaves de UI ........ " + Object.keys(UI).length + " no pacote | " + exigidas.size + " exigidas");
console.log("  núcleo .............. " + mb("nucleo/lexico.js") + " + " + mb("nucleo/versos.js"));
console.log("  pacote " + LINGUA + " ...... " + mb("linguas/" + LINGUA + "/lexico.js") + " + " + mb("linguas/" + LINGUA + "/versos.js"));
console.log();
avisos.forEach((a) => console.log("AVISO  " + a));
erros.forEach((e) => console.log("ERRO   " + e));
console.log((erros.length ? "FALHOU" : "OK") + " — erros: " + erros.length + " | avisos: " + avisos.length);
process.exit(erros.length ? 1 : 0);
