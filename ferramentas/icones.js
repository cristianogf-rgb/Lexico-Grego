/* Léxikon · gerador de ícones
   Desenha o lambda do Λέξικον em PNG, sem dependência nenhuma: a forma é
   geométrica (dois traços retos) e o PNG é escrito à mão com o zlib que já
   vem no Node. Reexecutável — apagar os .png e rodar de novo dá os mesmos
   arquivos.

       node ferramentas/icones.js

   Por que não exportar de um canvas do navegador: porque isso não é
   reproduzível. Um ícone que só existe porque alguém abriu uma aba um dia
   não pode ser regerado quando a paleta mudar. */
"use strict";
const fs = require("fs");
const zlib = require("zlib");
const path = require("path");

const PAPEL   = [0x1a, 0x16, 0x11];
const RUBRICA = [0xcf, 0x6c, 0x54];
const MOLDURA = [0x4a, 0x2f, 0x27];

/* distância de um ponto ao segmento AB — é o que define a espessura do traço
   sem precisar montar polígono nenhum. */
function distSeg(px, py, ax, ay, bx, by) {
  const vx = bx - ax, vy = by - ay;
  const wx = px - ax, wy = py - ay;
  const c2 = vx * vx + vy * vy;
  let t = c2 === 0 ? 0 : (wx * vx + wy * vy) / c2;
  t = t < 0 ? 0 : t > 1 ? 1 : t;
  const dx = px - (ax + t * vx), dy = py - (ay + t * vy);
  return Math.sqrt(dx * dx + dy * dy);
}

function mistura(fundo, frente, a) {
  return [
    Math.round(fundo[0] + (frente[0] - fundo[0]) * a),
    Math.round(fundo[1] + (frente[1] - fundo[1]) * a),
    Math.round(fundo[2] + (frente[2] - fundo[2]) * a)
  ];
}

/* `recuo` é a margem livre em fração do lado: 0.10 para o ícone comum,
   0.26 para o maskable, que precisa sobreviver a um recorte circular. */
function desenha(lado, recuo) {
  const px = Buffer.alloc(lado * lado * 3);
  const util = lado * (1 - 2 * recuo);
  const x0 = lado * recuo, y0 = lado * recuo;

  /* o lambda: ápice no alto ao centro, duas pernas até a base */
  const apx = x0 + util / 2, apy = y0 + util * 0.08;
  const eX = x0 + util * 0.10, eY = y0 + util * 0.95;
  const dX = x0 + util * 0.90, dY = y0 + util * 0.95;
  const esp = util * 0.135;          // espessura do traço
  const meia = esp / 2;

  /* moldura: só no ícone comum — no maskable ela cairia fora do recorte */
  const temMoldura = recuo < 0.2;
  const mIn = lado * 0.055, mEx = lado - mIn;
  const mEsp = Math.max(2, lado * 0.011);

  for (let y = 0; y < lado; y++) {
    for (let x = 0; x < lado; x++) {
      const cx = x + 0.5, cy = y + 0.5;
      let cor = PAPEL;

      if (temMoldura) {
        const dentro = cx >= mIn && cx <= mEx && cy >= mIn && cy <= mEx;
        const naBanda = cx < mIn + mEsp || cx > mEx - mEsp ||
                        cy < mIn + mEsp || cy > mEx - mEsp;
        if (dentro && naBanda) cor = MOLDURA;
      }

      /* perna esquerda e perna direita do Λ */
      const d1 = distSeg(cx, cy, apx, apy, eX, eY);
      const d2 = distSeg(cx, cy, apx, apy, dX, dY);
      const d = Math.min(d1, d2);
      const cob = d <= meia - 0.5 ? 1 : d >= meia + 0.5 ? 0 : meia + 0.5 - d;
      if (cob > 0) cor = mistura(cor, RUBRICA, cob);

      const i = (y * lado + x) * 3;
      px[i] = cor[0]; px[i + 1] = cor[1]; px[i + 2] = cor[2];
    }
  }
  return png(px, lado, lado);
}

/* PNG mínimo: cor verdadeira 8 bits, sem filtro, uma IDAT deflacionada. */
function png(rgb, w, h) {
  const bruto = Buffer.alloc(h * (w * 3 + 1));
  for (let y = 0; y < h; y++) {
    bruto[y * (w * 3 + 1)] = 0;                         // filtro "none"
    rgb.copy(bruto, y * (w * 3 + 1) + 1, y * w * 3, (y + 1) * w * 3);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 2; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0;
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    bloco("IHDR", ihdr),
    bloco("IDAT", zlib.deflateSync(bruto, { level: 9 })),
    bloco("IEND", Buffer.alloc(0))
  ]);
}
function bloco(tipo, dados) {
  const tam = Buffer.alloc(4); tam.writeUInt32BE(dados.length, 0);
  const corpo = Buffer.concat([Buffer.from(tipo, "ascii"), dados]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(corpo) >>> 0, 0);
  return Buffer.concat([tam, corpo, crc]);
}
const TAB = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return t;
})();
function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = TAB[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return c ^ 0xffffffff;
}

const destino = path.join(__dirname, "..", "icones");
fs.mkdirSync(destino, { recursive: true });
const saidas = [
  ["icone-192.png",          192, 0.10],
  ["icone-512.png",          512, 0.10],
  ["icone-maskable-512.png", 512, 0.26],
  ["apple-touch-icon.png",   180, 0.10]
];
for (const [nome, lado, recuo] of saidas) {
  const buf = desenha(lado, recuo);
  fs.writeFileSync(path.join(destino, nome), buf);
  console.log(nome.padEnd(26) + lado + "x" + lado + "  " + buf.length + " bytes");
}
