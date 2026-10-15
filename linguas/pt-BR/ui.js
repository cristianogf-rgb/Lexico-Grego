/* Léxikon · PACOTE DE LÍNGUA pt-BR — textos de interface.
   Todo texto visível fora dos dados vive aqui. O index.html não traz string
   em língua nenhuma: lê por T("chave", {substituicoes}).
   {biblia} e {grego} saem dos nomes das edições declaradas em meta.js. */
window.LEXIKON_PACK_UI = {

  /* cabeçalho e página */
  "pagina.titulo": "Léxikon — Léxico do Grego Bíblico",
  "pagina.descricao": "Léxico do grego bíblico e clássico para consulta, busca e referência cruzada. Fontes de domínio público (LSJ e Abbott-Smith), em português do Brasil.",
  "cabecalho.kicker": "Léxico do Grego do Novo Testamento",
  "cabecalho.tagline": "Consulta, busca e referência cruzada · fontes de domínio público &nbsp;<b>LSJ</b>&nbsp;+&nbsp;<b>Abbott-Smith</b>",
  "cabecalho.tema": "Alternar tema",
  "cabecalho.idioma": "Idioma",

  /* busca */
  /* Placeholder é exemplo de formato, não rótulo nem manual: o texto antigo
     tinha 105 caracteres (950px de texto num campo de 270px), de modo que no
     celular só 28% dele aparecia. A explicação inteira vive nas dicas. */
  "busca.placeholder": "ex.: amor · ἀγάπη · agape",
  "busca.limpar": "Limpar",
  "ref.placeholder": "ex.: Rm 8.15 · Romanos 8",
  "busca.placeholderUnico": "ex.: amor · ἀγάπη · Rm 8.15",
  "ref.formatoInvalido": "<span class=\"err\">Formato não reconhecido.</span> Use <b style=\"font-size:14px\">Livro Cap.Versículo</b> — p.ex. Rm 8.15, Romanos 8, Rm 8.15-17.",
  "dica.versiculo": "<kbd>Versículo</kbd> revela os verbetes que ocorrem no trecho",
  "dica.busca": "Busca por <kbd>grego</kbd>, <kbd>transliteração</kbd> ou <kbd>significado</kbd>",
  "dica.acentos": "Acentos e diacríticos são ignorados",
  "dica.esc": "<kbd>Esc</kbd> fecha o verbete",

  /* filtros e contagem */
  "filtro.todos": "Todos",
  "filtro.verbos": "Verbos",
  "filtro.substantivos": "Substantivos",
  "filtro.adjetivos": "Adjetivos",
  "contagem.um": "verbete",
  "contagem.varios": "verbetes",
  "contagem.zero": "0 verbetes",
  "contagem.parcial": "{mostrados} de {total}",
  "lista.mais": "Mostrar mais {lote}",
  "lista.restam": "restam {restam}",

  /* estados vazios */
  "vazio.ref": "Nenhum verbete do léxico aparece em <b>{ref}</b>.<br>Tente o capítulo inteiro (p.ex. {exemplo}) ou outro versículo.",
  "vazio.busca": "Nenhum verbete encontrado para &ldquo;{termo}&rdquo;.<br>Tente outra grafia, a transliteração ou um significado em português.",

  /* painel de versículos */
  "versos.legenda": "Grego: <b>{grego}</b> · Português: <b>{biblia}</b> — domínio público. As palavras destacadas têm verbete; toque para abrir.",
  "versos.trechoExtenso": "Trecho extenso ({n} versículos). Refine para um versículo ou uma faixa menor — p.ex. <b>{exemplo}</b> — para ver o grego e o português.",
  "ref.ocorreUm": "verbete ocorre",
  "ref.ocorreVarios": "verbetes ocorrem",
  "ref.sufixo": "neste trecho.",

  /* verbete */
  "verbete.flexao": "Flexão",
  "verbete.raiz": "Raiz",
  "verbete.nt": "NT",
  "verbete.significado": "Significado em português",
  "verbete.classe": "Classe gramatical",
  "verbete.fonteAbbott": "— foco no Novo Testamento",
  "verbete.fonteLsj": "— uso clássico e geral",
  "verbete.ocorrencias": "Ocorrências no NT",
  "verbete.cognatos": "Família de palavras (cognatos)",
  "verbete.verTambem": "Ver também",
  "verbete.semVerbete": "Ainda não consta no núcleo",
  "verbete.fechar": "Fechar verbete",
  /* Sem pictograma: 🔗 era emoji usado como ícone, e os outros dois marcadores
     só existiam para acompanhá-lo. Botão começa por verbo. */
  "verbete.copiar": "Copiar verbete",
  "verbete.copiarLink": "Copiar link",
  "verbete.compartilhar": "Compartilhar",

  /* texto copiado */
  "copia.flexao": "Flexão: ",
  "copia.raiz": "Raiz: ",
  "copia.portugues": "Significados: ",
  "copia.abbott": "ABBOTT-SMITH (NT): ",
  "copia.lsj": "LSJ (clássico): ",
  "copia.nt": "NT: ",
  "copia.cognatos": "Cognatos: ",
  "copia.verTambem": "Ver também: ",
  "copia.assinatura": "— Léxikon · ",

  /* avisos */
  "toast.verbeteCopiado": "Verbete copiado",
  "toast.linkCopiado": "Link copiado",
  "toast.erroCopia": "Não foi possível copiar",

  /* rodapé */
  "rodape.fontes": "<b>Léxikon</b> reúne dados lexicográficos de <span class=\"src\">obras de domínio público</span> — o <i>Liddell-Scott-Jones (LSJ)</i> e o <i>Manual Greek Lexicon of the New Testament</i> de G. Abbott-Smith — redigidos e traduzidos para o português do Brasil.",
  "rodape.cobertura": "Cobertura integral do Novo Testamento: <b>5.410 verbetes</b>, 100% dos 137.779 tokens do texto grego. &nbsp;·&nbsp; Distribua livremente."
};
