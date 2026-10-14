/* Léxikon · MONTADOR
   Junta o núcleo neutro de língua com o pacote de língua carregado e expõe o
   contrato de execução que o index.html consome:

     window.LEXICON_DATA    array de verbetes completos (núcleo + prosa do pacote)
     window.LEXICON_VERSOS  { "MAT|1|1": { g:[tokens gregos], p:"texto vernáculo" } }
     window.LEXIKON_CANON   ordem canônica dos 27 livros, por ID USFM
     window.LEXIKON_LIVROS  { MAT: { abrev, nome, alias[] } } — vem do pacote

   Adicionar um idioma é soltar linguas/<codigo>/{meta,lexico,versos,livros,ui}.js
   e apontar as tags <script> do index.html para ele. O núcleo não muda.
   Roda no navegador por file:// e também no Node (ferramentas/verificar.js). */
(function (raiz) {
  "use strict";

  var nucleo = raiz.LEXIKON_NUCLEO;
  var nucleoVersos = raiz.LEXIKON_NUCLEO_VERSOS;
  var packLexico = raiz.LEXIKON_PACK_LEXICO;
  var packVersos = raiz.LEXIKON_PACK_VERSOS;
  var packLivros = raiz.LEXIKON_PACK_LIVROS;
  var meta = raiz.LEXIKON_PACK_META || {};

  /* Herança: um pacote que muda só uma camada declara `herda` no meta.js e
     traz apenas os arquivos próprios. O index.html carrega primeiro os do
     pacote herdado e depois os do herdeiro, que sobrescreve o que trouxe.
     É o caso de pt-BR-atual: mesma prosa, mesma interface, outro texto
     bíblico — e 4,6 MB que não se duplicam. */
  if (meta.herda) {
    raiz.LEXIKON_HERANCA = { de: meta.herda, para: meta.codigo };
  }

  if (!nucleo || !packLexico) {
    throw new Error("Léxikon: núcleo ou pacote de língua não carregado. " +
      "Verifique a ordem das tags <script> no index.html.");
  }
  if (!packVersos || !packLivros) {
    throw new Error("Léxikon: o pacote \"" + (meta.codigo || "?") + "\" não trouxe " +
      "versos.js ou livros.js, e não declarou `herda` para recebê-los de outro.");
  }

  /* ----- verbetes: núcleo + prosa ----- */
  var CAMPOS_PROSA = ["classe", "raiz", "lsj", "abbott", "nt", "pt"];
  var dados = new Array(nucleo.length);
  var semProsa = [];

  for (var i = 0; i < nucleo.length; i++) {
    var n = nucleo[i];
    var p = packLexico[n.lema];
    if (!p) { semProsa.push(n.lema); p = {}; }
    var e = {
      lema: n.lema,
      translit: n.translit,
      beta: n.beta,
      morf: n.morf,
      cognatos: n.cognatos || [],
      verTambem: n.verTambem || [],
      refs: n.refs || []
    };
    for (var c = 0; c < CAMPOS_PROSA.length; c++) {
      var campo = CAMPOS_PROSA[c];
      e[campo] = p[campo] !== undefined ? p[campo] : (campo === "pt" ? [] : "");
    }
    dados[i] = e;
  }

  /* ----- versículos: grego do núcleo + vernáculo do pacote ----- */
  var versos = {};
  var k;
  for (k in nucleoVersos) versos[k] = { g: nucleoVersos[k], p: "" };
  for (k in packVersos) {
    if (versos[k]) versos[k].p = packVersos[k];
    else versos[k] = { g: null, p: packVersos[k] }; // versículo ausente do texto crítico
  }

  raiz.LEXICON_DATA = dados;
  raiz.LEXICON_VERSOS = versos;
  raiz.LEXIKON_LIVROS = packLivros || {};
  raiz.LEXIKON_CANON = raiz.LEXIKON_CANON || [];
  raiz.LEXIKON_MONTAGEM = {
    verbetes: dados.length,
    versiculos: Object.keys(versos).length,
    lingua: (raiz.LEXIKON_PACK_META && raiz.LEXIKON_PACK_META.codigo) || "?",
    semProsa: semProsa
  };

  if (semProsa.length && raiz.console) {
    raiz.console.warn("Léxikon: " + semProsa.length +
      " verbete(s) sem prosa no pacote de língua: " + semProsa.slice(0, 10).join(", "));
  }
})(typeof window !== "undefined" ? window : globalThis);
