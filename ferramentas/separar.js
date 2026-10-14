/* Léxikon · separa a forma plana (dados.js + versiculos.js) em núcleo + pacote pt-BR.

       node ferramentas/separar.js

   A forma plana NÃO é a fonte da verdade: o núcleo e os pacotes são. Esta
   ferramenta existe para dois casos — reproduzir a migração original e
   re-separar depois de uma edição em massa feita no formato plano
   (que se obtém com ferramentas/juntar.js).

   Decisões gravadas aqui:
   Decisões:
   - chave canônica de versículo passa de abreviatura PT ("Mt|1|1") para ID USFM ("MAT|1|1")
   - as referências de cada verbete deixam de ser extraídas da prosa em tempo de execução
     e passam a ser dados no núcleo (campo `refs`)
   - cognatos/verTambem são lemas gregos: núcleo
*/
const fs = require("fs");
const path = require("path");

const REPO = require("path").resolve(__dirname, "..");
/* Origem: plano/<lingua>/ por padrão (saída de juntar.js); a raiz do repo serve
   de alternativa, para reproduzir a migração original. */
const LINGUA = process.argv[2] || "pt-BR";
const CANDIDATOS = [path.join(REPO, "plano", LINGUA), REPO];
const ORIGEM = CANDIDATOS.find(function (d) { return fs.existsSync(path.join(d, "dados.js")); });
if (!ORIGEM) {
  console.error("nao encontrei dados.js em: " + CANDIDATOS.join(" nem ") +
    "\nGere a forma plana primeiro:  node ferramentas/juntar.js " + LINGUA);
  process.exit(1);
}
console.log("origem: " + path.relative(REPO, ORIGEM) + " (lingua " + LINGUA + ")\n");
global.window = {};
require(path.join(ORIGEM, "dados.js"));
require(path.join(ORIGEM, "versiculos.js"));
const D = window.LEXICON_DATA, V = window.LEXICON_VERSOS;

/* ---------- tabela de livros ---------- */
// [USFM, abrev PT, nome PT, aliases de busca]
const LIVROS = [
  ["MAT", "Mt", "Mateus", ["mt", "mateus"]],
  ["MRK", "Mc", "Marcos", ["mc", "marcos"]],
  ["LUK", "Lc", "Lucas", ["lc", "lucas"]],
  ["JHN", "Jo", "João", ["jo", "joao"]],
  ["ACT", "At", "Atos", ["at", "atos"]],
  ["ROM", "Rm", "Romanos", ["rm", "rom", "ro", "romanos"]],
  ["1CO", "1Co", "1 Coríntios", ["1co", "1corintios"]],
  ["2CO", "2Co", "2 Coríntios", ["2co", "2corintios"]],
  ["GAL", "Gl", "Gálatas", ["gl", "galatas"]],
  ["EPH", "Ef", "Efésios", ["ef", "efesios"]],
  ["PHP", "Fp", "Filipenses", ["fp", "filipenses"]],
  ["COL", "Cl", "Colossenses", ["cl", "colossenses"]],
  ["1TH", "1Ts", "1 Tessalonicenses", ["1ts", "1tessalonicenses"]],
  ["2TH", "2Ts", "2 Tessalonicenses", ["2ts", "2tessalonicenses"]],
  ["1TI", "1Tm", "1 Timóteo", ["1tm", "1timoteo"]],
  ["2TI", "2Tm", "2 Timóteo", ["2tm", "2timoteo"]],
  ["TIT", "Tt", "Tito", ["tt", "tito"]],
  ["PHM", "Fm", "Filemom", ["fm", "filemom", "filemon"]],
  ["HEB", "Hb", "Hebreus", ["hb", "hebreus"]],
  ["JAS", "Tg", "Tiago", ["tg", "tiago"]],
  ["1PE", "1Pe", "1 Pedro", ["1pe", "1pedro"]],
  ["2PE", "2Pe", "2 Pedro", ["2pe", "2pedro"]],
  ["1JN", "1Jo", "1 João", ["1jo", "1joao"]],
  ["2JN", "2Jo", "2 João", ["2jo"]],
  ["3JN", "3Jo", "3 João", ["3jo"]],
  ["JUD", "Jd", "Judas", ["jd", "judas"]],
  ["REV", "Ap", "Apocalipse", ["ap", "apocalipse"]]
];
const PT2USFM = {}; LIVROS.forEach(([u, a]) => { PT2USFM[a] = u; });

/* ---------- parseNT: cópia literal da lógica de index.html ---------- */
const ABBRS = LIVROS.map((l) => l[1]);
const _booksAlt = ABBRS.slice().sort((a, b) => b.length - a.length)
  .map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
function _expandSpec(spec) {
  const out = [];
  spec.split(",").forEach((part) => {
    part = part.trim();
    const m = part.match(/^(\d+)\s*[\u2013-]\s*(\d+)$/);
    if (m) { for (let v = +m[1]; v <= +m[2]; v++) out.push(v); }
    else if (/^\d+$/.test(part)) out.push(+part);
  });
  return out;
}
function parseNT(nt) {
  const refs = [];
  const re = new RegExp("(" + _booksAlt + ")" +
    "|vv?\\.?\\s*(\\d+)\\s*[\\u2013-]\\s*(\\d+)" +
    "|(\\d+)\\.(\\d+(?:\\s*[,\\u2013-]\\s*\\d+)*)" +
    "|(\\d+)(?![.\\d])", "g");
  let m, livro = null, cap = null, lastBook = false;
  const add = (v) => { const k = livro + "|" + cap + "|" + v; if (refs.indexOf(k) === -1) refs.push(k); };
  while ((m = re.exec(nt))) {
    if (m[1]) { livro = m[1]; lastBook = true; continue; }
    if (m[2] !== undefined) { if (livro && cap) { for (let v = +m[2]; v <= +m[3]; v++) add(v); } lastBook = false; continue; }
    if (m[4] !== undefined) { cap = +m[4]; if (livro) _expandSpec(m[5]).forEach(add); lastBook = false; continue; }
    if (m[6] !== undefined) { if (lastBook) cap = +m[6]; lastBook = false; continue; }
  }
  return refs;
}
const paraUsfm = (chavePt) => {
  const p = chavePt.split("|");
  const u = PT2USFM[p[0]];
  if (!u) throw new Error("livro desconhecido: " + p[0] + " em " + chavePt);
  return u + "|" + p[1] + "|" + p[2];
};

/* ---------- 1. núcleo do léxico ---------- */
const nucleo = D.map((e) => ({
  lema: e.lema,
  translit: e.translit,
  beta: e.beta,
  morf: e.morf,
  refs: parseNT(e.nt || "").map(paraUsfm),
  cognatos: e.cognatos,
  verTambem: e.verTambem
}));

/* ---------- 2. pacote pt-BR do léxico ---------- */
const packLexico = {};
for (const e of D) {
  packLexico[e.lema] = { classe: e.classe, raiz: e.raiz, lsj: e.lsj, abbott: e.abbott, nt: e.nt, pt: e.pt };
}

/* ---------- 3. versículos: grego no núcleo, vernáculo no pacote ---------- */
const nucleoVersos = {}, packVersos = {};
for (const k in V) {
  const u = paraUsfm(k);
  if (V[k].g) nucleoVersos[u] = V[k].g;
  packVersos[u] = V[k].p || "";
}

/* ---------- escrita ---------- */
function escreve(destino, cabecalho, nomeVar, valor) {
  const abs = path.join(REPO, destino);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, cabecalho + "\nwindow." + nomeVar + " = " + JSON.stringify(valor) + ";\n", "utf8");
  return (fs.statSync(abs).size / 1048576).toFixed(2) + " MB";
}

const CAB_NUCLEO = `/* Léxikon · NÚCLEO — neutro de língua. Não contém prosa em idioma nenhum.
   Grego, transliteração, código beta, morfologia, grafo de cognatos e referências.
   Chave de verbete: o lema grego exato (NFC). Chave de versículo: ID USFM do livro.
   Texto grego: Nestle 1904 (CC0). Lematização: biblicalhumanities/Nestle1904 (CC0). */`;

const CAB_PACK = `/* Léxikon · PACOTE DE LÍNGUA pt-BR — prosa original de Cristiano Fonseca.
   Redigida a partir de LSJ e Abbott-Smith (domínio público). NÃO reproduz o BDAG.
   Licença: CC BY 4.0. Chaveado pelo lema grego exato do núcleo. */`;

const CAB_PACK_V = `/* Léxikon · PACOTE DE LÍNGUA pt-BR — texto bíblico vernáculo.
   Almeida Revista e Corrigida, 1911. Domínio público.
   Chaveado por ID USFM: "MAT|1|1". */`;

const r = [];
r.push(["nucleo/lexico.js", escreve("nucleo/lexico.js", CAB_NUCLEO, "LEXIKON_NUCLEO", nucleo)]);
r.push(["nucleo/versos.js", escreve("nucleo/versos.js", CAB_NUCLEO, "LEXIKON_NUCLEO_VERSOS", nucleoVersos)]);
r.push(["nucleo/livros.js", escreve("nucleo/livros.js", CAB_NUCLEO, "LEXIKON_CANON", LIVROS.map((l) => l[0]))]);
r.push(["linguas/pt-BR/lexico.js", escreve("linguas/pt-BR/lexico.js", CAB_PACK, "LEXIKON_PACK_LEXICO", packLexico)]);
r.push(["linguas/pt-BR/versos.js", escreve("linguas/pt-BR/versos.js", CAB_PACK_V, "LEXIKON_PACK_VERSOS", packVersos)]);

const packLivros = {};
LIVROS.forEach(([u, a, n, al]) => { packLivros[u] = { abrev: a, nome: n, alias: al }; });
r.push(["linguas/pt-BR/livros.js", escreve("linguas/pt-BR/livros.js", CAB_PACK, "LEXIKON_PACK_LIVROS", packLivros)]);

console.log("--- arquivos gerados ---");
r.forEach(([f, s]) => console.log(s.padStart(8) + "  " + f));
console.log();
console.log("verbetes no nucleo: " + nucleo.length);
console.log("verbetes no pacote: " + Object.keys(packLexico).length);
console.log("versiculos (grego): " + Object.keys(nucleoVersos).length);
console.log("versiculos (pt-BR): " + Object.keys(packVersos).length);
console.log("refs totais no nucleo: " + nucleo.reduce((a, e) => a + e.refs.length, 0));
