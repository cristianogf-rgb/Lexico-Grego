/* Léxikon · service worker
   Serve para uma coisa só: deixar o app abrir sem rede depois da primeira
   visita. Ele não muda nada do que o app faz — por file:// nem chega a ser
   registrado, e o Léxikon continua funcionando como sempre funcionou.

   ESTRATÉGIA. O instalador guarda apenas a casca: index.html, o montador e os
   nomes dos livros. Alguns quilobytes. Os 15 MB de léxico e texto grego NÃO
   são pré-carregados — baixar tudo isso na instalação, em rede móvel, seria
   hostil com quem só queria olhar um verbete. Cada arquivo entra no cache
   quando é de fato pedido, e a partir daí o app abre offline no idioma que a
   pessoa realmente usou.

   Navegação vai à rede primeiro (senão uma correção no index.html nunca
   chegaria); todo o resto sai do cache primeiro, porque são dados que não
   mudam sozinhos. */
"use strict";

/* ATENÇÃO — ao publicar dados novos, incremente VERSAO.
   O cache é "cache primeiro": uma vez guardado, lexico.js nunca mais é
   buscado na rede. Quem já instalou fica com os verbetes do dia em que
   instalou, para sempre, e não há aviso nenhum de que isso aconteceu.
   Trocar VERSAO faz o activate apagar os caches antigos e tudo ser rebaixado.
   É a única coisa neste repositório que, esquecida, falha em silêncio. */
const VERSAO = "lexikon-v2";
const CASCA = [
  "./",
  "./index.html",
  "./montar.js",
  "./nucleo/livros.js",
  "./manifest.json"
];

self.addEventListener("install", (ev) => {
  ev.waitUntil(
    caches.open(VERSAO)
      /* addAll falha inteiro se um item falhar; aqui cada um é por sua conta,
         para que uma casca incompleta não impeça a instalação. */
      .then((c) => Promise.all(CASCA.map((u) => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (ev) => {
  ev.waitUntil(
    caches.keys()
      .then((nomes) => Promise.all(
        nomes.filter((n) => n !== VERSAO).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (ev) => {
  const req = ev.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  /* O documento: rede primeiro, cache como rede de segurança. */
  if (req.mode === "navigate") {
    ev.respondWith(
      fetch(req)
        .then((res) => {
          const copia = res.clone();
          caches.open(VERSAO).then((c) => c.put("./index.html", copia));
          return res;
        })
        .catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  /* Dados, scripts e fontes: cache primeiro. */
  ev.respondWith(
    caches.match(req).then((guardado) => {
      if (guardado) return guardado;
      return fetch(req).then((res) => {
        /* Resposta opaca (as fontes do Google) não dá para inspecionar, mas
           dá para guardar e reapresentar — é o que faz o app manter a própria
           tipografia offline. */
        if (res && (res.ok || res.type === "opaque")) {
          const copia = res.clone();
          caches.open(VERSAO).then((c) => c.put(req, copia).catch(() => {}));
        }
        return res;
      });
    })
  );
});
