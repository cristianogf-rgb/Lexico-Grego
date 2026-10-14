/* Léxikon · gera o campo `nt` de um pacote a partir da lematização do núcleo.

       node ferramentas/ocorrencias.js es [--escrever]

   Sem --escrever, só mostra uma amostra. Com, grava o campo `nt` de cada
   verbete em linguas/<codigo>/lexico.js.

   Por que gerar em vez de traduzir: o campo `nt` do pacote português é prosa
   com números aproximados ("≈330 ocorrências"), herdados da redação. O núcleo
   tem a lematização completa do Nestle 1904, com 100% dos 137.779 tokens
   atribuídos a um lema — de onde sai a contagem exata (λόγος: 331, não ≈330) e
   a distribuição por livro. Traduzir a prosa propagaria a aproximação; gerar
   dos dados a corrige. Os moldes de frase vêm de meta.geracao.ocorrencias, no
   próprio pacote, para que acrescentar um idioma não exija tocar nesta
   ferramenta. */
"use strict";
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const LINGUA = process.argv[2] || "es";
const ESCREVER = process.argv.includes("--escrever");
const DIR = path.join(RAIZ, "linguas", LINGUA);

global.window = globalThis;
require(path.join(RAIZ, "nucleo/livros.js"));
require(path.join(RAIZ, "nucleo/lexico.js"));
require(path.join(RAIZ, "nucleo/versos.js"));
require(path.join(DIR, "meta.js"));
require(path.join(DIR, "livros.js"));

const N = globalThis.LEXIKON_NUCLEO;
const NV = globalThis.LEXIKON_NUCLEO_VERSOS;
const CANON = globalThis.LEXIKON_CANON;
const LIVROS = globalThis.LEXIKON_PACK_LIVROS;
const MOLDE = (globalThis.LEXIKON_PACK_META.geracao || {}).ocorrencias;

if (!MOLDE) {
  console.error("linguas/" + LINGUA + "/meta.js não declara geracao.ocorrencias.");
  process.exit(1);
}

const LIMITE_LISTA = 6; // acima disto, listar referência a referência deixa de informar

/* ---------- contagem a partir da lematização ---------- */
const ordemLivro = {};
CANON.forEach((u, i) => { ordemLivro[u] = i; });

const ocor = {};
for (const chave in NV) {
  const [livro, cap, vers] = chave.split("|");
  for (const tok of NV[chave]) {
    if (!Array.isArray(tok)) continue;
    const lema = tok[1];
    if (!ocor[lema]) ocor[lema] = { n: 0, livros: {}, refs: [] };
    const o = ocor[lema];
    o.n++;
    o.livros[livro] = (o.livros[livro] || 0) + 1;
    const r = livro + "|" + cap + "|" + vers;
    if (o.refs[o.refs.length - 1] !== r) o.refs.push(r);
  }
}

const abrev = (u) => (LIVROS[u] && LIVROS[u].abrev) || u;
const nomeLivro = (u) => (LIVROS[u] && LIVROS[u].nome) || u;
const formatarRef = (r) => { const p = r.split("|"); return abrev(p[0]) + " " + p[1] + "." + p[2]; };
const preencher = (molde, subs) => molde.replace(/\{(\w+)\}/g, (_, k) => (subs[k] !== undefined ? subs[k] : "{" + k + "}"));

function frase(lema) {
  const o = ocor[lema];
  if (!o) return MOLDE.semOcorrencia;
  const livros = Object.keys(o.livros).sort((a, b) => ordemLivro[a] - ordemLivro[b]);
  const refs = o.refs
    .slice()
    .sort((a, b) => {
      const A = a.split("|"), B = b.split("|");
      return (ordemLivro[A[0]] - ordemLivro[B[0]]) || (+A[1] - +B[1]) || (+A[2] - +B[2]);
    })
    .map(formatarRef)
    .join(MOLDE.separadorRefs || "; ");

  if (o.n === 1) return preencher(MOLDE.uma, { refs: refs + "." });
  if (o.refs.length <= LIMITE_LISTA) {
    /* a palavra pode repetir-se dentro do mesmo versículo: dizer só "2
       apariciones" ao lado de uma referência única confundiria. */
    let molde = MOLDE.poucas;
    if (o.n > o.refs.length) {
      molde = (o.refs.length === 1 && MOLDE.poucasRepetidasUmVerso)
        ? MOLDE.poucasRepetidasUmVerso
        : (MOLDE.poucasRepetidas || MOLDE.poucas);
    }
    return preencher(molde, { n: o.n, v: o.refs.length, refs: refs + "." });
  }
  if (livros.length === 1) return preencher(MOLDE.muitasUmLivro, { n: o.n, livro: nomeLivro(livros[0]) });
  const topo = livros.slice().sort((a, b) => o.livros[b] - o.livros[a])[0];
  return preencher(MOLDE.muitas, { n: o.n, m: livros.length, livro: nomeLivro(topo), k: o.livros[topo] });
}

/* ---------- aplicar ---------- */
const gerado = {};
let semOcorrencia = 0;
for (const e of N) {
  gerado[e.lema] = frase(e.lema);
  if (!ocor[e.lema]) semOcorrencia++;
}

console.log("pacote " + LINGUA + " · campo nt gerado para " + N.length + " verbetes");
console.log("  lemas sem ocorrência no NT (só cognatos): " + semOcorrencia);
console.log("\namostra:");
["λόγος", "ἀγάπη", "υἱοθεσία", "λιβανωτός", "ἄψινθος", "Ἀβαδδών", "κεράννυμι"].forEach((l) => {
  if (gerado[l]) console.log("  " + l.padEnd(12) + " " + gerado[l]);
});

if (!ESCREVER) {
  console.log("\n(amostra apenas — use --escrever para gravar em linguas/" + LINGUA + "/lexico.js)");
  process.exit(0);
}

const alvo = path.join(DIR, "lexico.js");
if (!fs.existsSync(alvo)) {
  console.error("\nlinguas/" + LINGUA + "/lexico.js ainda não existe.");
  process.exit(1);
}
delete require.cache[require.resolve(alvo)];
require(alvo);
const PL = globalThis.LEXIKON_PACK_LEXICO;
for (const l in PL) PL[l].nt = gerado[l] !== undefined ? gerado[l] : "";

const cab = fs.readFileSync(alvo, "utf8").split("window.LEXIKON_PACK_LEXICO")[0];
fs.writeFileSync(alvo, cab + "window.LEXIKON_PACK_LEXICO = " + JSON.stringify(PL) + ";\n", "utf8");
console.log("\ngravado em linguas/" + LINGUA + "/lexico.js");
