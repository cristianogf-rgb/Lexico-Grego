/* Léxikon · atualização ortográfica da Almeida Revista e Corrigida de 1911.

       node ferramentas/grafia-1911.js            (relatório, não grava)
       node ferramentas/grafia-1911.js --escrever (gera linguas/pt-BR-atual/)

   O QUE ESTA FERRAMENTA FAZ: troca a grafia pré-1943 pela de hoje.
   O QUE ELA NÃO FAZ: não mexe em morfologia nem em sintaxe. "Vós recebestes"
   continua "vós recebestes". A tradução é a mesma de 1911; muda só como as
   palavras se escrevem.

   MÉTODO. Só se toca no que carrega marca de grafia antiga. O que não tem
   marca fica como está — "começando" e "mostrou" já são português de hoje, e
   o silêncio de um dicionário pequeno não é prova de nada. Em ordem:

     1. contrações com apóstrofo (d'elle → dele), lista fechada
     2. sequências que o português moderno não admite em posição nenhuma
        (ph, th, ll, nn, cc, mm, ff, pp, bb, tt, gg, dd, vv, mn, y, consoante+h)
        — aqui não existe falso positivo possível
     3. terminações e prefixos de regra verificada (-aes → -ais, com+s/t/v/n)
     4. lista explícita para ct/pt/sc, que EXISTEM no moderno (apto, pacto,
        disciplina) e por isso não admitem regra
     5. lista explícita de acentuação
     6. lista explícita de léxico morto (adereçada, alparcas, mister)

   A regra que gerou a lista 5 errava em um caso que muda sentido: o acento
   de "tornára" marca o mais-que-perfeito, e a correção é tirar o acento
   ("tornara"), nunca pôr no fim ("tornará"). Esses casos estão em CORRIGE. */
"use strict";
const fs = require("fs");
const path = require("path");

const RAIZ = path.resolve(__dirname, "..");
const ESCREVER = process.argv.includes("--escrever");
const DADOS = require(path.join(RAIZ, "ferramentas/grafia-1911.dados.js"));

global.window = globalThis;
require(path.join(RAIZ, "linguas/pt-BR/versos.js"));
const ORIGEM = globalThis.LEXIKON_PACK_VERSOS;

/* ---------- 2. sequências impossíveis ---------- */
const IMPOSSIVEL = [
  [/ph/g, "f"], [/th/g, "t"], [/ll/g, "l"], [/nn/g, "n"], [/cc/g, "c"],
  [/mm/g, "m"], [/ff/g, "f"], [/pp/g, "p"], [/bb/g, "b"], [/tt/g, "t"],
  [/gg/g, "g"], [/dd/g, "d"], [/vv/g, "v"], [/mn/g, "n"], [/y/g, "i"],
  [/chr/g, "cr"],                      // Christo → Cristo (chr não existe no moderno)
  /* consoante + h, MENOS c, l e n: ch, lh e nh são dígrafos do português e
     apagá-los destruiria "filho", "chegou", "manhã". O ch latinizante
     (sepulchro, patriarcha) vai por lista explícita. */
  [/([bdfgjkmpqrstvxz])h/g, "$1"]
];
const temImpossivel = (p) => IMPOSSIVEL.some(([re]) => { re.lastIndex = 0; return re.test(p); });
function semImpossivel(p) { let s = p; for (const [re, r] of IMPOSSIVEL) s = s.replace(re, r); return s; }

/* ---------- 3. terminações e prefixos ---------- */
const FORMA = [
  [/(?<![ãâ])aes$/, "ais"],      // quaes → quais, sejaes → sejais
  [/(?<![ãâ])ae$/, "ai"],        // pae → pai, orae → orai
  [/eos$/, "eus"],               // judeos → judeus
  [/eo$/, "eu"]                  // galileo → galileu
];
const PREFIXO = [
  [/^com(?=[stvn])/, "con"],     // comvosco → convosco (com+p/b é moderno: compaixão)
  [/^em(?=q)/, "en"],            // emquanto → enquanto
  [/^circum/, "circun"]          // circumcisão → circuncisão
];

/* ---------- motor ---------- */
const { CONTRACOES, LATINAS, ACENTOS, CORRIGE, INTOCAVEIS, LEXICO } = DADOS;
const EXPLICITO = Object.assign({}, LATINAS, ACENTOS, LEXICO, CORRIGE);
const estat = { contracao: 0, impossivel: 0, forma: 0, prefixo: 0, explicito: 0, lexico: 0 };
const usados = new Set();

function umaPalavra(p) {
  if (INTOCAVEIS.has ? INTOCAVEIS.has(p) : INTOCAVEIS.includes(p)) return null;
  if (EXPLICITO[p] !== undefined) {
    usados.add(p);
    estat[LEXICO[p] !== undefined ? "lexico" : "explicito"]++;
    return EXPLICITO[p];
  }
  if (temImpossivel(p)) { estat.impossivel++; return posRegra(semImpossivel(p)); }
  const r = posRegra(p);
  return r === p ? null : r;
}
function posRegra(p) {
  let s = p, mudou = false;
  for (const [re, sub] of PREFIXO) if (re.test(s)) { s = s.replace(re, sub); mudou = true; estat.prefixo++; break; }
  for (const [re, sub] of FORMA) if (re.test(s)) { s = s.replace(re, sub); mudou = true; estat.forma++; break; }
  if (EXPLICITO[s] !== undefined) { usados.add(s); return EXPLICITO[s]; }
  return mudou ? s : s;
}

function caixa(orig, novo) {
  if (orig.length > 1 && orig === orig.toUpperCase()) return novo.toUpperCase();
  if (orig[0] === orig[0].toUpperCase()) return novo.charAt(0).toUpperCase() + novo.slice(1);
  return novo;
}

function atualizar(txt) {
  let s = String(txt);
  /* 1. contrações, antes de tudo: o apóstrofo separa o que é uma palavra só */
  s = s.replace(/([A-Za-zÀ-ÿ]+)'([A-Za-zÀ-ÿ]+)/g, (m) => {
    const alvo = CONTRACOES[m.toLowerCase()];
    if (alvo === undefined) return m;
    estat.contracao++; usados.add(m.toLowerCase());
    return caixa(m, alvo);
  });
  /* 2–6. palavra a palavra */
  return s.replace(/[A-Za-zÀ-ÿ]+/g, (w) => {
    const novo = umaPalavra(w.toLowerCase());
    return novo === null ? w : caixa(w, novo);
  });
}

/* ---------- execução ---------- */
const destino = {};
let versiculosMudados = 0;
for (const k in ORIGEM) {
  const novo = atualizar(ORIGEM[k]);
  destino[k] = novo;
  if (novo !== ORIGEM[k]) versiculosMudados++;
}

const pal = (s) => (String(s).toLowerCase().match(/[a-zà-ÿ]+/g) || []);
let totalPal = 0, mudadas = 0;
for (const k in ORIGEM) {
  const a = pal(ORIGEM[k]), b = pal(destino[k]);
  totalPal += a.length;
  for (let i = 0; i < Math.min(a.length, b.length); i++) if (a[i] !== b[i]) mudadas++;
}

console.log("Almeida 1911 → grafia atualizada");
console.log("  versículos ............. " + Object.keys(destino).length +
  "   alterados: " + versiculosMudados + " (" + (100 * versiculosMudados / Object.keys(destino).length).toFixed(1) + "%)");
console.log("  palavras ............... " + totalPal.toLocaleString("pt-BR") +
  "   alteradas: " + mudadas.toLocaleString("pt-BR") + " (" + (100 * mudadas / totalPal).toFixed(2) + "%)");
console.log("  por contração .......... " + estat.contracao);
console.log("  por sequência impossível " + estat.impossivel);
console.log("  por terminação ......... " + estat.forma);
console.log("  por prefixo ............ " + estat.prefixo);
console.log("  por lista explícita .... " + estat.explicito);
console.log("  léxico morto trocado ... " + estat.lexico);

const naoUsados = Object.keys(EXPLICITO).concat(Object.keys(CONTRACOES)).filter((k) => !usados.has(k));
if (naoUsados.length) {
  console.log("\nAVISO  " + naoUsados.length + " entrada(s) da lista nunca usadas (grafia já corrigida antes?): " +
    naoUsados.slice(0, 12).join(", "));
}

if (!ESCREVER) {
  console.log("\n--- amostra ---");
  for (const k of ["MAT|1|18", "JHN|1|14", "JHN|3|16", "ROM|8|15", "ACT|2|38", "HEB|4|12", "REV|21|2", "MAT|5|3"]) {
    console.log("\n" + k);
    console.log("  1911   " + ORIGEM[k]);
    console.log("  atual  " + destino[k]);
  }
  console.log("\n(relatório apenas — use --escrever para gerar linguas/pt-BR-atual/)");
  process.exit(0);
}

const DIR = path.join(RAIZ, "linguas/pt-BR-atual");
fs.mkdirSync(DIR, { recursive: true });
const CAB = `/* Léxikon · PACOTE DE LÍNGUA pt-BR-atual — texto bíblico vernáculo.
   Almeida Revista e Corrigida, 1911, com a grafia atualizada para a norma
   brasileira de hoje. Domínio público (a obra de origem é de 1911; a
   atualização ortográfica não cria obra nova).
   Gerado por ferramentas/grafia-1911.js — reexecutável e auditável.
   A tradução é a de 1911: morfologia e sintaxe intactas, inclusive o "vós". */`;
fs.writeFileSync(path.join(DIR, "versos.js"),
  CAB + "\nwindow.LEXIKON_PACK_VERSOS = " + JSON.stringify(destino) + ";\n", "utf8");
console.log("\nlinguas/pt-BR-atual/versos.js: " +
  (fs.statSync(path.join(DIR, "versos.js")).size / 1048576).toFixed(2) + " MB");
