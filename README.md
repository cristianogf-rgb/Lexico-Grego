# Léxikon — Léxicos Gregos (LSJ + Abbott-Smith) em Português do Brasil

Ferramenta web para **consultar, pesquisar e cruzar** dois léxicos gregos de
**domínio público**, com interface inteiramente em **português do Brasil**:

- **LSJ** — Liddell, Scott & Jones, *A Greek-English Lexicon* (grego clássico e koiné).
- **Abbott-Smith** — *A Manual Greek Lexicon of the New Testament* (1922, foco no NT).

Busca por **grego** (`λόγος`), por **transliteração latina** (`logos`, `agape` — sem
teclado grego) ou pelo **significado em português** dentro das definições, tudo
ignorando acentos e diacríticos. Cada verbete cruza automaticamente para termos
da mesma família e do mesmo campo semântico. Tema claro/escuro. Compartilhável por link.

---

## O que é este pacote

Quatro arquivos, nada mais:

```
index.html        o aplicativo inteiro (abre direto no navegador)
dados.js          a base de dados (1194 verbetes curados em PT-BR)
versiculos.js     texto bíblico de 23 livros (grego Nestle 1904 + português Almeida 1911)
ingestao_lsj.py   script para expandir ao corpus completo do LSJ + Abbott-Smith
```

Cobertura atual do léxico — **1194 verbetes**: todas as 21 Epístolas e Hebreus com cobertura
plena de vocabulário, o **Evangelho de João** completo, e o **Evangelho de Mateus** (texto
integral dos 28 capítulos, com 78 verbetes próprios do seu vocabulário distintivo e ampla
cobertura pelo léxico comum). Romanos e 1–2 Pedro receberam expansão adicional. O `versiculos.js`
traz o texto integral de 23 livros. Faltam, do NT, Marcos, Lucas, Atos e Apocalipse.

Não há servidor, banco de dados, instalação nem dependências. O `index.html` é
autocontido: basta **dar dois cliques** nele para abrir. Funciona offline, a partir
do disco (`file://`), e pode ser hospedado em qualquer lugar sem configuração.

---

## Busca e leitura

- **Por significado em português** — `graça`, `redenção`, `mansidão` chegam ao verbete
  grego certo; o resultado é ranqueado (glosa nuclear primeiro).
- **Por grego ou transliteração** — `πνεῦμα` ou `pneuma` (acentos e diacríticos são ignorados).
- **Por referência bíblica** — `Rm 8.15`, `Romanos 8`, `Rm 8.15-17`. Para os livros cobertos,
  o app mostra **o versículo em grego** (Nestle 1904) com as palavras que têm verbete
  **destacadas e clicáveis**, e logo abaixo **o versículo em português** (Almeida 1911),
  antes da lista de verbetes. As palavras destacadas coincidem com os verbetes listados,
  porque ambos derivam da mesma lematização do Nestle 1904.

---

## Como usar agora

1. Coloque `index.html`, `dados.js` e `versiculos.js` na **mesma pasta**.
2. Abra `index.html` no navegador (Chrome, Firefox, Safari, Edge).
3. Busque por significado, grego, transliteração ou referência bíblica.
4. Clique num verbete (ou numa palavra grega destacada) para ver Abbott-Smith, LSJ,
   ocorrências no NT, cognatos e referências cruzadas (clicáveis).
5. Dentro de um verbete: **Copiar verbete**, **Copiar link** ou **Compartilhar**.
   O link traz a âncora (`#lema`), abrindo direto naquele verbete.

### Sobre o texto português (e a ARA)

A versão exibida é a **Almeida de 1911**, em **domínio público**. A **ARA** (Almeida
Revista e Atualizada) é protegida por direitos autorais da Sociedade Bíblica do Brasil
e **não** pode ser redistribuída aqui. Se você tem licença para usá-la, pode substituir
o texto: em `versiculos.js`, cada versículo tem o campo `p` (português) — basta trocar
o valor pelo texto correspondente da ARA. O grego e os destaques continuam funcionando.

---

## Decisão de integridade acadêmica

O núcleo destes 60 verbetes foi **redigido e traduzido por mim em português**, a
partir da erudição lexicográfica de domínio público (LSJ e Abbott-Smith). **Não é
cópia do BDAG** (Bauer-Danker, que é protegido por direito autoral da University of
Chicago) nem de qualquer obra sob copyright. Por isso este material pode ser
consultado, copiado, hospedado e redistribuído livremente.

O recorte é o vocabulário central do grego bíblico, com **densidade deliberada em
Romanos 8** — υἱοθεσία, κατάκριμα, φρόνημα, προορίζω, προγινώσκω, πρόθεσις,
συγκληρονόμος, ἀπολύτρωσις, στενάζω, ἐντυγχάνω — além dos termos-chave do NT
(θεός, λόγος, ἀγάπη, πίστις, χάρις, δικαιοσύνη, σάρξ, πνεῦμα, νόμος, σῴζω…).

São 60 verbetes **precisos e verificados**, não um corpus inflado. A expansão ao
corpus completo é trabalho incremental e honesto — descrito abaixo.

---

## Expandir ao corpus completo (LSJ + Abbott-Smith)

Os 60 verbetes são a semente. Para carregar os léxicos inteiros (~116 mil verbetes
do LSJ), use `ingestao_lsj.py`. O processamento **não cabe neste navegador** — o
XML do LSJ passa de 1 GB —, então rode numa máquina com espaço:

```bash
# 1. Baixe os dados de domínio público da Perseus
git clone https://github.com/PerseusDL/lexica.git

# 2. Gere uma nova base a partir do LSJ (e, opcionalmente, do Abbott-Smith)
python3 ingestao_lsj.py \
    --lsj-dir lexica/CTS_XML_TEI/perseus/pdllex/grc/lsj \
    --abbott abbott-smith-tei.xml \
    --saida dados_completo.js

# 3. No index.html, troque a linha
#      <script src="dados.js"></script>
#    por
#      <script src="dados_completo.js"></script>
```

Pronto — o mesmo `index.html` passa a servir o léxico inteiro.

**Nota honesta sobre idioma:** os verbetes ingeridos automaticamente trazem as
glosas no original (inglês do LSJ/Abbott-Smith), marcados internamente com
`idioma: "en"`. Traduzir as ~116 mil entradas para o português é um projeto à
parte, feito de forma incremental — não algo a fabricar de uma vez. Enquanto isso,
o app funciona plenamente com as glosas originais, e o núcleo PT-BR já entrega o
vocabulário que mais importa para a exegese.

---

## Hospedar para compartilhar (grátis)

Como é tudo estático, qualquer hospedagem de arquivos serve:

- **GitHub Pages** — suba `index.html` + `dados.js` + `versiculos.js` num repositório, ative Pages.
- **Netlify / Cloudflare Pages / Vercel** — arraste a pasta; publica em segundos.
- **Pendrive ou e-mail** — os três arquivos juntos funcionam em qualquer máquina.

Não há chave de API, build nem servidor para manter.

---

## Fontes e licença

- **LSJ** — texto digital: Perseus Digital Library (TEI XML, betacode), domínio público.
- **Abbott-Smith** — *A Manual Greek Lexicon of the NT* (1922), domínio público.
- **Texto grego do NT** (`versiculos.js`) — *Novum Testamentum Graece*, ed. Eberhard Nestle,
  1904 (British & Foreign Bible Society), domínio público; morfologia e lematização CC0
  (biblicalhumanities.org, Ulrik Sandborg-Petersen).
- **Texto português** (`versiculos.js`) — João Ferreira de Almeida, edição de 1911, domínio público.

As obras-fonte são de domínio público. Ao citar em trabalho acadêmico, refira
sempre a **obra original** (LSJ, Abbott-Smith), não esta ferramenta. O código e o
núcleo de verbetes em PT-BR podem ser usados e adaptados livremente.
