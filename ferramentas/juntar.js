/* Léxikon · gera a forma plana a partir do núcleo + um pacote de língua.

       node ferramentas/juntar.js pt-BR [destino]

   Produz dados.js e versiculos.js no formato de arquivo único que o projeto
   usava antes da separação — com as chaves de versículo de volta na
   abreviatura do pacote ("Mt|1|1"). Serve para três coisas:

     · editar em massa num arquivo só e re-separar com ferramentas/separar.js
     · alimentar scripts antigos que esperavam window.LEXICON_DATA plano
     · publicar uma cópia de leitura em formato único

   A saída é derivada: não a edite esperando que o aplicativo mude. A fonte da
   verdade é nucleo/ + linguas/<codigo>/. */
"use strict";
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const LINGUA = process.argv[2] || "pt-BR";
const DEST = process.argv[3] || path.join(RAIZ, "plano", LINGUA);

global.window = globalThis;
for (const f of ["nucleo/livros.js", "nucleo/lexico.js", "nucleo/versos.js",
  "linguas/" + LINGUA + "/meta.js", "linguas/" + LINGUA + "/ui.js",
  "linguas/" + LINGUA + "/livros.js", "linguas/" + LINGUA + "/lexico.js",
  "linguas/" + LINGUA + "/versos.js", "montar.js"]) {
  require(path.join(RAIZ, f));
}

const D = globalThis.LEXICON_DATA;
const V = globalThis.LEXICON_VERSOS;
const LIVROS = globalThis.LEXIKON_PACK_LIVROS;

/* ordem e campos do formato plano original */
const CAMPOS = ["lema", "translit", "beta", "classe", "morf", "raiz", "lsj", "abbott", "nt", "cognatos", "verTambem", "pt"];
const planoLexico = D.map((e) => {
  const o = {};
  for (const c of CAMPOS) o[c] = e[c];
  return o;
});

/* chaves de volta para a abreviatura do pacote */
const planoVersos = {};
for (const k in V) {
  const p = k.split("|");
  const abrev = (LIVROS[p[0]] && LIVROS[p[0]].abrev) || p[0];
  const o = {};
  if (V[k].g) o.g = V[k].g;
  o.p = V[k].p;
  planoVersos[abrev + "|" + p[1] + "|" + p[2]] = o;
}

fs.mkdirSync(DEST, { recursive: true });
const cab = (o) => "/* Léxikon · forma plana DERIVADA de nucleo/ + linguas/" + LINGUA + "/.\n" +
  "   Gerada por ferramentas/juntar.js. Não é a fonte da verdade.\n   " + o + " */\n";

fs.writeFileSync(path.join(DEST, "dados.js"),
  cab(planoLexico.length + " verbetes."), "utf8");
fs.appendFileSync(path.join(DEST, "dados.js"),
  "window.LEXICON_DATA = " + JSON.stringify(planoLexico) + ";\n", "utf8");

fs.writeFileSync(path.join(DEST, "versiculos.js"),
  cab(Object.keys(planoVersos).length + " versículos, chaveados pela abreviatura do pacote."), "utf8");
fs.appendFileSync(path.join(DEST, "versiculos.js"),
  "window.LEXICON_VERSOS = " + JSON.stringify(planoVersos) + ";\n", "utf8");

const mb = (f) => (fs.statSync(path.join(DEST, f)).size / 1048576).toFixed(2) + " MB";
console.log("forma plana de " + LINGUA + " gerada em " + path.relative(RAIZ, DEST));
console.log("  dados.js ....... " + mb("dados.js") + "  (" + planoLexico.length + " verbetes)");
console.log("  versiculos.js .. " + mb("versiculos.js") + "  (" + Object.keys(planoVersos).length + " versículos)");
