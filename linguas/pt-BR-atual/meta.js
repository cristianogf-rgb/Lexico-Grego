/* Léxikon · PACOTE DE LÍNGUA pt-BR-atual — Almeida 1911 com grafia de hoje.

   Este pacote HERDA de pt-BR: a prosa dos verbetes, os textos de interface e
   os nomes dos livros são os mesmos, e não se duplicam. O que ele traz de
   próprio é um arquivo só — versos.js, com o texto bíblico reescrito na norma
   ortográfica brasileira vigente.

   O que mudou em relação a 1911: só a grafia. Christo→Cristo, Espirito
   Sancto→Espírito Santo, peccado→pecado, elle→ele, d'elle→dele, pae→pai,
   baptismo→batismo, tambem→também. 19,68% das palavras, nenhuma frase.

   O que NÃO mudou: a tradução. Morfologia e sintaxe estão intactas — "vós
   recebestes" continua "vós recebestes", e não virou "vocês receberam". Esta
   não é uma tradução nova nem uma revisão de sentido; é a mesma Almeida de
   1911 escrita como o Brasil escreve desde 1943.

   Gerado por ferramentas/grafia-1911.js, a partir de 1.102 decisões listadas
   em ferramentas/grafia-1911.dados.js. Reexecutável: apagar e regerar dá o
   mesmo arquivo. */
window.LEXIKON_PACK_META = {
  codigo: "pt-BR-atual",
  nome: "Português do Brasil — grafia atualizada",
  nomeNativo: "Português (grafia atual)",
  htmlLang: "pt-BR",
  direcao: "ltr",
  colacao: "pt-BR",

  /* herda lexico.js, ui.js e livros.js do pacote pt-BR */
  herda: "pt-BR",

  biblia: {
    nome: "Almeida Revista e Corrigida",
    sigla: "Almeida 1911 — grafia atualizada",
    ano: 1911,
    licenca: "Domínio público",
    jurisdicaoDominioPublico: "global",
    revisao: "Atualização ortográfica para a norma brasileira. A obra de " +
      "origem é de 1911 e está em domínio público; atualizar a grafia não " +
      "cria obra nova nem altera a tradução.",
    versiculosSemVernaculo: ["MRK|16|99", "3JN|1|15", "REV|12|18"]
  },

  lexico: {
    autor: "Cristiano Fonseca",
    licenca: "CC BY 4.0",
    fontes: "Liddell-Scott-Jones (LSJ) e Abbott-Smith, Manual Greek Lexicon of the New Testament — domínio público",
    naoContem: "BDAG (Bauer-Danker), protegido por direito autoral da University of Chicago Press"
  },

  cobertura: { glosas: true, classe: true, ocorrencias: true, raiz: true, ensaios: true }
};
