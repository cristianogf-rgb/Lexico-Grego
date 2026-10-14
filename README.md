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

Sem servidor, sem build, sem dependências — e dividido em duas camadas, porque o
grego não se traduz e a prosa sim:

```
index.html              o aplicativo inteiro (abre direto no navegador)
montar.js               junta núcleo + pacote de língua no boot

nucleo/                 NEUTRO DE LÍNGUA — não contém prosa em idioma nenhum
  lexico.js             5410 lemas: grego, transliteração, beta, morfologia,
                        referências (ID USFM) e grafo de cognatos        1,5 MB
  versos.js             texto grego Nestle 1904 + token→lema, 7943 vers.  3,9 MB
  livros.js             ordem canônica dos 27 livros, por ID USFM

linguas/pt-BR/          PACOTE DE LÍNGUA — tudo que é português vive aqui
  meta.js               identidade, edição bíblica, licenças e cobertura
  ui.js                 59 textos de interface
  livros.js             abreviaturas, nomes e aliases de busca dos livros
  lexico.js             prosa dos verbetes: classe, raiz, LSJ, Abbott, nt, pt  4,6 MB
  versos.js             Almeida 1911, 7960 versículos                     1,0 MB

linguas/pt-BR-atual/    Almeida 1911 com a grafia de hoje — HERDA de pt-BR
  meta.js               declara herda:"pt-BR"; traz só o texto bíblico
  versos.js             mesmo texto, grafia atualizada                     1,0 MB

linguas/es/             PACOTE DE LÍNGUA espanhol — cobertura parcial declarada
  meta.js  ui.js  livros.js
  lexico.js             glosas, classe e ocorrências; sem os ensaios        0,8 MB
  versos.js             Reina-Valera 1909, 7960 versículos                 1,0 MB

ferramentas/
  verificar.js          integridade de núcleo + pacote (rode antes de publicar)
  ocorrencias.js        gera o campo nt de um pacote a partir da lematização
  grafia-1911.js        atualiza a ortografia da Almeida 1911
  grafia-1911.dados.js  as 1.122 decisões da atualização, uma por linha
  juntar.js             gera a forma plana (dados.js + versiculos.js) derivada
  separar.js            volta da forma plana para núcleo + pacote
ingestao_lsj.py         script para expandir ao corpus completo do LSJ + Abbott-Smith
```

O núcleo é a parte caríssima e pronta: 3,1 MB de grego verificado que **nunca**
muda de idioma. O pacote é a parte que se traduz, e troca o aplicativo inteiro:
interface, verbetes e texto bíblico.

O idioma sai do seletor no alto da página, de `?lang=es` na URL, do que ficou
guardado no navegador ou do idioma do próprio navegador, nessa ordem. Como a
âncora do link é o lema grego, trocar de idioma com um verbete aberto mantém o
mesmo verbete.

Cobertura atual do léxico — **5410 verbetes** sobre o **Novo Testamento completo (27 livros)**:
os quatro Evangelhos, Atos, todas as 21 Epístolas, Hebreus e o Apocalipse. Todo o texto grego e
português dos 27 livros está disponível e navegável (`versiculos.js`), com destaque das palavras
cobertas pelo léxico.

A expansão de 1913 para 5410 verbetes foi dirigida por frequência real, não por gosto: a lematização
CC0 do Nestle 1904 foi cruzada com a base para produzir a lista exata do que faltava, e o trabalho
desceu dos lemas mais frequentes até o último hápax. Isso fechou as três lacunas que a curadoria
por assunto deixara abertas: as palavras gramaticais de altíssima frequência (conjunções, preposições,
pronomes, partículas, correlativos), a onomástica (topônimos, gentílicos, genealogias, autoridades
romanas) e o vocabulário técnico de Atos — náutico, jurídico e administrativo. Resultado: **100% dos
137.779 tokens do texto grego do NT** são hoje palavras destacadas e clicáveis, contra ~65% antes.
Nenhum toque numa palavra grega fica sem resposta.

Cada verbete acrescentado foi validado por máquina contra o texto: as referências existem, e as formas
gregas citadas estão atestadas nos versículos indicados. Os Evangelhos sinóticos, Atos e o Apocalipse
mantêm os verbetes próprios do seu vocabulário distintivo — de Lucas (o médico evangelista, as
parábolas do bom samaritano e do filho pródigo), de Atos (as cidades helenísticas e a viagem marítima
de Paulo) e do Apocalipse (o Cordeiro, a Besta, o dragão, os selos, as trombetas, as taças e a Nova
Jerusalém). Os hápax entraram todos, inclusive os mais técnicos: as doze pedras dos fundamentos, os
latinismos do comércio de Babilônia, os nomes hebraicos que o próprio livro traduz.

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

1. Mantenha `index.html`, `montar.js`, `nucleo/` e `linguas/` na **mesma pasta**.
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
o texto: em `linguas/pt-BR/versos.js`, cada chave (`"ROM|8|15"`) aponta direto para a
string em português — basta trocar o valor pelo texto correspondente da ARA. O núcleo,
o grego e os destaques não são tocados.

---

## A Almeida 1911 com grafia de hoje

O texto de 1911 não é português arcaico: é português moderno escrito na
ortografia anterior à reforma de 1943. Das 163.353 palavras do Novo Testamento,
**82% já estão exatamente como o Brasil escreve hoje**. O que soa antigo é quase
tudo grafia — `Christo`, `Espirito Sancto`, `peccado`, `elle`, `pae`,
`d'elle`, `baptismo`, `tambem`.

O pacote `pt-BR-atual` troca essa camada e **só essa**: 19,79% das palavras
mudam de grafia, nenhuma frase muda de forma. A morfologia fica intacta — *vós
recebestes* continua *vós recebestes*, e não virou *vocês receberam*. Não é
tradução nova nem revisão de sentido; é a mesma Almeida de 1911, escrita como
se escreve agora.

```bash
node ferramentas/grafia-1911.js              # relatório e amostra
node ferramentas/grafia-1911.js --escrever   # gera linguas/pt-BR-atual/versos.js
```

**O método, e por que ele é conservador.** Só se toca no que carrega marca de
grafia antiga; o que não tem marca fica como está, porque `começando` e
`mostrou` já são português de hoje e o silêncio de um dicionário pequeno não é
prova de nada. As regras automáticas valem apenas para sequências que o
português moderno **não admite em posição nenhuma** — `ph`, `th`, `ll`, `nn`,
`cc`, `mm`, `ff`, `pp`, `mn`, `y`, `chr` — onde não existe falso positivo
possível. `pt`, `ct`, `ch`, `sc` e `cç` ficaram fora das regras, porque
*apto*, *pacto*, *chegou*, *buscar* e *ficção* são modernos: esses vão por lista
explícita, palavra a palavra. As 1.122 decisões estão em
`ferramentas/grafia-1911.dados.js`, uma por linha, para serem conferidas sem
ler código.

Duas armadilhas que a construção revelou e que a lista registra:

- Uma primeira versão das regras trocou **`apta` por `ata`** em Hb 4.12, e
  apagou o `h` de `filho`, `chegou` e `manhã`. Daí a restrição às sequências
  impossíveis e a exclusão de `c`, `l` e `n` da regra de consoante + `h`.
- O acento de **`tornára`** marca o mais-que-perfeito: a correção é tirar o
  acento (`tornara`), nunca deslocá-lo para o fim (`tornará`), o que faria do
  passado um futuro. Os cinco casos estão explícitos na tabela.

A conversão preserva a estrutura: 7.960 versículos, pontuação intacta, e as
únicas mudanças de contagem de palavras são as 132 contrações que legitimamente
viraram duas (`d'Israel` → `de Israel`).

**Herança de pacote.** `pt-BR-atual` declara `herda: "pt-BR"` no `meta.js` e
traz um arquivo só. Os 4,6 MB de prosa do léxico, os textos de interface e os
nomes dos livros vêm do pacote pai e não se duplicam. O `index.html` carrega
primeiro o pacote herdado e depois o herdeiro, que sobrescreve o que trouxe.

---

## Acrescentar um idioma

Um pacote de língua é um diretório com cinco arquivos. Nada no núcleo muda, e o
`index.html` não contém texto em idioma nenhum: tudo o que aparece na tela vem do
pacote carregado.

```bash
node ferramentas/verificar.js pt-BR
```

O verificador é o contrato: ele recusa um pacote que não cubra todos os 5410 lemas,
que deixe versículo com grego e sem vernáculo, que use alias ambíguo de livro ou que
não traga alguma das chaves de interface que o `index.html` pede. Rode-o antes de
publicar.

O pacote **es** é o exemplo de um pacote honestamente parcial: traz as 6.611
glosas, as 450 classes gramaticais, as ocorrências e a Reina-Valera 1909, e
declara em `meta.cobertura` que os ensaios de Abbott-Smith e LSJ ainda não
foram escritos. O verificador lê essa declaração: campo declarado presente e
ausente é erro; campo declarado ausente é aviso contado. No aplicativo, as duas
seções simplesmente não aparecem.

O que um pacote novo precisa trazer:

| arquivo | conteúdo | custo real |
|---|---|---|
| `meta.js` | código do idioma, edição bíblica usada, licenças | minutos |
| `livros.js` | abreviatura, nome e aliases dos 27 livros | minutos |
| `ui.js` | 59 textos de interface | horas |
| `versos.js` | uma tradução bíblica em domínio público ou licença aberta | mecânico |
| `lexico.js` | glosas e classe | ~78 mil caracteres |
| `lexico.js` | **os ensaios de Abbott-Smith e LSJ** | ~2,8 milhões de caracteres |

A última linha é a que decide: um idioma novo não é localização, é um livro. As
glosas curtas são 3% do volume e dão a maior parte do valor de consulta; os
ensaios, média de 554 caracteres por verbete, são os outros 97%. E o campo das
ocorrências não se traduz: `ferramentas/ocorrencias.js` o gera da lematização do
Nestle 1904, com contagem exata — λόγος aparece 331 vezes, não "≈330".

**Os ensaios não se traduzem por máquina.** Um erro exegético que você não
escreveria sai assinado por você, num idioma em que você não revisa. Escrevem-se
a partir de LSJ e Abbott-Smith, como se fez em português.

**Licenças não se misturam.** Cada pacote declara as suas em `meta.js`, e por isso
um texto bíblico sob CC BY-SA pode conviver com esta prosa sob CC BY: são arquivos
distintos, com atribuição distinta. Não mescle texto licenciado dentro do
`lexico.js` de um pacote.

**Domínio público é jurisdicional.** O campo `biblia.jurisdicaoDominioPublico` existe
para registrar isso: há traduções livres num país e protegidas noutro, e o que vale
é a lei do lugar onde o arquivo é servido.

---

## Decisão de integridade acadêmica

Todos os 5410 verbetes foram **redigidos e traduzidos por mim em português**, a
partir da erudição lexicográfica de domínio público (LSJ e Abbott-Smith). **Não é
cópia do BDAG** (Bauer-Danker, que é protegido por direito autoral da University of
Chicago) nem de qualquer obra sob copyright. Por isso este material pode ser
consultado, copiado, hospedado e redistribuído livremente.

O recorte cobre o vocabulário do NT por frequência, com **densidade deliberada em
Romanos 8** — υἱοθεσία, κατάκριμα, φρόνημα, προορίζω, προγινώσκω, πρόθεσις,
συγκληρονόμος, ἀπολύτρωσις, στενάζω, ἐντυγχάνω — além dos termos-chave do NT
(θεός, λόγος, ἀγάπη, πίστις, χάρις, δικαιοσύνη, σάρξ, πνεῦμα, νόμος, σῴζω…).

São verbetes **precisos e verificados**, não um corpus inflado: cada citação grega
foi conferida por máquina contra o texto do Nestle 1904, e cada referência bíblica
existe. A expansão ao corpus completo do LSJ é trabalho incremental — descrito abaixo.

---

## Expandir ao corpus completo (LSJ + Abbott-Smith)

Os 5410 verbetes cobrem o NT por inteiro. Para carregar os léxicos completos (~116 mil verbetes
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
  (biblicalhumanities.org, Ulrik Sandborg-Petersen). A mesma lematização CC0 foi usada para
  medir a cobertura do léxico, priorizar os verbetes por frequência e alinhar cada token do
  texto grego ao seu verbete — é dela que vêm os destaques clicáveis.
- **Texto português** (`versiculos.js`) — João Ferreira de Almeida, edição de 1911, domínio público.

As obras-fonte são de domínio público. Ao citar em trabalho acadêmico, refira
sempre a **obra original** (LSJ, Abbott-Smith), não esta ferramenta.

Licenciamento deste repositório (detalhes em [`LICENSE`](LICENSE)):

- **Código** (`index.html`, `ingestao_lsj.py`) — **MIT**.
- **Os verbetes** (`linguas/<codigo>/lexico.js`) — **CC BY 4.0**: use, adapte e
  redistribua, inclusive comercialmente, dando crédito.
- **Textos bíblicos** (`linguas/<codigo>/versos.js`) — Almeida 1911 (e a sua
  atualização ortográfica) e Reina-Valera 1909, em **domínio público**; não são de
  autoria deste projeto.
