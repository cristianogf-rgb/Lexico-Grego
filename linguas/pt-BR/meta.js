/* Léxikon · PACOTE DE LÍNGUA pt-BR — identidade e procedência.
   Um pacote declara aqui a sua língua, o texto bíblico que traz e as licenças
   de cada camada. Licenças ficam no pacote, não no núcleo: a prosa do léxico e
   o texto bíblico podem ter termos diferentes em cada idioma, e a tela de
   créditos lê daqui. */
window.LEXIKON_PACK_META = {
  codigo: "pt-BR",
  nome: "Português do Brasil",
  nomeNativo: "Português do Brasil",
  htmlLang: "pt-BR",
  direcao: "ltr",
  colacao: "pt-BR",

  // texto bíblico vernáculo deste pacote
  biblia: {
    nome: "Almeida Revista e Corrigida",
    sigla: "Almeida 1911",
    ano: 1911,
    licenca: "Domínio público",
    jurisdicaoDominioPublico: "global"
  },

  // prosa dos verbetes deste pacote
  lexico: {
    autor: "Cristiano Fonseca",
    licenca: "CC BY 4.0",
    fontes: "Liddell-Scott-Jones (LSJ) e Abbott-Smith, Manual Greek Lexicon of the New Testament — domínio público",
    naoContem: "BDAG (Bauer-Danker), protegido por direito autoral da University of Chicago Press"
  }
};
