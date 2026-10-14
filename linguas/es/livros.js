/* Léxikon · PAQUETE DE IDIOMA es — nombres y abreviaturas de los 27 libros.
   `abrev` es lo que se muestra en las referencias ("Ro 8.15").
   `alias` es lo que el usuario puede escribir en la búsqueda: sin acentos,
   en minúsculas y sin espacios, porque el analizador normaliza la entrada
   antes de comparar. La propia abreviatura entra como alias automáticamente. */
window.LEXIKON_PACK_LIVROS = {
  MAT: { abrev: "Mt",  nome: "Mateo",            alias: ["mt", "mateo"] },
  MRK: { abrev: "Mr",  nome: "Marcos",           alias: ["mr", "mc", "mar", "marcos"] },
  LUK: { abrev: "Lc",  nome: "Lucas",            alias: ["lc", "luc", "lucas"] },
  JHN: { abrev: "Jn",  nome: "Juan",             alias: ["jn", "jua", "juan"] },
  ACT: { abrev: "Hch", nome: "Hechos",           alias: ["hch", "hec", "hechos"] },
  ROM: { abrev: "Ro",  nome: "Romanos",          alias: ["ro", "rom", "romanos"] },
  "1CO": { abrev: "1Co", nome: "1 Corintios",    alias: ["1co", "1cor", "1corintios"] },
  "2CO": { abrev: "2Co", nome: "2 Corintios",    alias: ["2co", "2cor", "2corintios"] },
  GAL: { abrev: "Gá",  nome: "Gálatas",          alias: ["ga", "gal", "galatas"] },
  EPH: { abrev: "Ef",  nome: "Efesios",          alias: ["ef", "efesios"] },
  PHP: { abrev: "Fil", nome: "Filipenses",       alias: ["fil", "flp", "filipenses"] },
  COL: { abrev: "Col", nome: "Colosenses",       alias: ["col", "colosenses"] },
  "1TH": { abrev: "1Ts", nome: "1 Tesalonicenses", alias: ["1ts", "1tes", "1tesalonicenses"] },
  "2TH": { abrev: "2Ts", nome: "2 Tesalonicenses", alias: ["2ts", "2tes", "2tesalonicenses"] },
  "1TI": { abrev: "1Ti", nome: "1 Timoteo",      alias: ["1ti", "1tim", "1timoteo"] },
  "2TI": { abrev: "2Ti", nome: "2 Timoteo",      alias: ["2ti", "2tim", "2timoteo"] },
  TIT: { abrev: "Tit", nome: "Tito",             alias: ["tit", "tito"] },
  PHM: { abrev: "Flm", nome: "Filemón",          alias: ["flm", "film", "filemon"] },
  HEB: { abrev: "He",  nome: "Hebreos",          alias: ["he", "heb", "hebreos"] },
  JAS: { abrev: "Stg", nome: "Santiago",         alias: ["stg", "sant", "santiago"] },
  "1PE": { abrev: "1P", nome: "1 Pedro",         alias: ["1p", "1pe", "1pedro"] },
  "2PE": { abrev: "2P", nome: "2 Pedro",         alias: ["2p", "2pe", "2pedro"] },
  "1JN": { abrev: "1Jn", nome: "1 Juan",         alias: ["1jn", "1juan"] },
  "2JN": { abrev: "2Jn", nome: "2 Juan",         alias: ["2jn", "2juan"] },
  "3JN": { abrev: "3Jn", nome: "3 Juan",         alias: ["3jn", "3juan"] },
  JUD: { abrev: "Jud", nome: "Judas",            alias: ["jud", "judas"] },
  REV: { abrev: "Ap",  nome: "Apocalipsis",      alias: ["ap", "apoc", "apocalipsis"] }
};
