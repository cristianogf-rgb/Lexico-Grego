/* Léxikon · PAQUETE DE IDIOMA es — identidad y procedencia. */
window.LEXIKON_PACK_META = {
  codigo: "es",
  nome: "Espanhol",
  nomeNativo: "Español",
  htmlLang: "es",
  direcao: "ltr",
  colacao: "es",

  // texto bíblico vernáculo deste pacote
  biblia: {
    nome: "Santa Biblia — Reina Valera",
    sigla: "Reina Valera 1909",
    ano: 1909,
    licenca: "Dominio público",
    jurisdicaoDominioPublico: "global",
    fonte: "eBible.org · spaRV1909_vpl.zip (2013-12-13)",
    /* A RV1909 segue a versificação do Textus Receptus. Onde o Nestle 1904
       divide um versículo que o TR não divide, o pacote fica sem vernáculo:
       MRK|16|99, 3JN|1|15 e REV|12|18 têm grego e não têm espanhol. Em
       ACT|19|41 e 2CO|13|14 não há nem um nem outro. São cinco, e são fato
       de versificação, não lacuna de dados. */
    versiculosSemVernaculo: ["MRK|16|99", "3JN|1|15", "REV|12|18", "ACT|19|41", "2CO|13|14"]
  },

  // prosa dos verbetes deste pacote
  lexico: {
    autor: "Cristiano Fonseca",
    licenca: "CC BY 4.0",
    fontes: "Liddell-Scott-Jones (LSJ) y Abbott-Smith, Manual Greek Lexicon of the New Testament — dominio público",
    naoContem: "BDAG (Bauer-Danker), protegido por derecho de autor de la University of Chicago Press"
  },

  /* Moldes do campo `nt`, gerado por ferramentas/ocorrencias.js a partir da
     lematização do Nestle 1904 — contagem exata, não estimativa. Um pacote que
     não declare `geracao` simplesmente não é gerável, e escreve o campo à mão. */
  geracao: {
    ocorrencias: {
      uma: "1 aparición. {refs}",
      poucas: "{n} apariciones. {refs}",
      poucasRepetidas: "{n} apariciones en {v} versículos. {refs}",
      poucasRepetidasUmVerso: "{n} apariciones, todas en el mismo versículo. {refs}",
      muitasUmLivro: "{n} apariciones, todas en {livro}.",
      muitas: "{n} apariciones en {m} libros. Más frecuente en {livro} ({k}×).",
      semOcorrencia: "No aparece en el Nuevo Testamento: es cognado de una palabra que sí aparece.",
      separadorRefs: "; "
    }
  },

  /* O que este pacote cobre. O verificador lê daqui: um campo declarado como
     false pode faltar sem que isso seja erro; um campo declarado true e
     ausente é erro. Os ensaios de Abbott-Smith e LSJ ainda não foram escritos
     em espanhol — e não serão traduzidos por máquina a partir do português. */
  cobertura: {
    glosas: true,
    classe: true,
    ocorrencias: true,
    raiz: false,
    ensaios: false
  }
};
