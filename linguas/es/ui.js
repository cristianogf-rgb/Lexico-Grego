/* Léxikon · PAQUETE DE IDIOMA es — textos de interfaz.
   Las 58 claves que el index.html pide. {biblia} y {grego} se sustituyen por
   los nombres de las ediciones declaradas en meta.js. */
window.LEXIKON_PACK_UI = {

  /* encabezado y página */
  "pagina.titulo": "Léxikon — Léxico del Griego Bíblico",
  "pagina.descricao": "Léxico del griego bíblico y clásico para consulta, búsqueda y referencia cruzada. Fuentes de dominio público (LSJ y Abbott-Smith), en español.",
  "cabecalho.kicker": "Léxico del Griego del Nuevo Testamento",
  "cabecalho.tagline": "Consulta, búsqueda y referencia cruzada · fuentes de dominio público &nbsp;<b>LSJ</b>&nbsp;+&nbsp;<b>Abbott-Smith</b>",
  "cabecalho.tema": "Cambiar tema",
  "cabecalho.idioma": "Idioma",

  /* búsqueda */
  /* Placeholder es ejemplo de formato, no rótulo ni manual: el texto anterior
     tenía 105 caracteres y en el móvil solo se veía el 28%. La explicación
     completa vive en las pistas. */
  "busca.placeholder": "ej.: amor · ἀγάπη · agape",
  "busca.limpar": "Limpiar",
  "ref.placeholder": "ej.: Ro 8.15 · Romanos 8",
  "busca.placeholderUnico": "ej.: amor · ἀγάπη · Ro 8.15",
  "ref.formatoInvalido": "<span class=\"err\">Formato no reconocido.</span> Use <b style=\"font-size:14px\">Libro Cap.Versículo</b> — ej. Ro 8.15, Romanos 8, Ro 8.15-17.",
  "dica.versiculo": "<kbd>Versículo</kbd> revela las entradas que aparecen en el pasaje",
  "dica.busca": "Búsqueda por <kbd>griego</kbd>, <kbd>transliteración</kbd> o <kbd>significado</kbd>",
  "dica.acentos": "Los acentos y diacríticos se ignoran",
  "dica.esc": "<kbd>Esc</kbd> cierra la entrada",

  /* filtros y conteo */
  /* instalación en la pantalla de inicio */
  "instalar.titulo": "Instalar en la pantalla de inicio",
  "instalar.convite": "Funciona sin internet.",
  "instalar.botao": "Instalar",
  "instalar.dispensar": "Ahora no",
  "instalar.fechar": "Cerrar",
  "instalar.nota": "Deja el Léxikon como aplicación en este dispositivo, funcionando sin internet.",
  "instalar.notaIos": "En el iPhone la instalación se hace desde Safari, en dos toques. El botón muestra el camino.",
  "instalar.jaInstalado": "Ya está instalado en este dispositivo.",
  "instalar.ios.titulo": "Instalar en el iPhone",
  "instalar.ios.p1": "Toque el botón de <b>compartir</b>, en la barra inferior de Safari.",
  "instalar.ios.p2": "Baje por la lista y elija <b>Añadir a pantalla de inicio</b>.",
  "instalar.ios.p3": "Confirme. El Léxikon pasa a abrirse como aplicación, sin internet.",
  "instalar.ios.safari": "¿No encuentra la opción? El enlace probablemente se abrió dentro de otra aplicación, y solo Safari tiene ese elemento. Toque <b>Abrir en Safari</b> y repita.",

  /* ajustes */
  "cfg.titulo": "Ajustes",
  "cfg.fechar": "Cerrar ajustes",
  "cfg.tema": "Tema",
  "cfg.tema.light": "Claro",
  "cfg.tema.dark": "Oscuro",
  "cfg.tema.sistema": "Sistema",
  "cfg.idioma": "Idioma",
  "cfg.favoritos": "Favoritos",
  "cfg.favoritosContagem": "{n} {rotulo} en su lista.",
  "cfg.favoritosVazio": "Aún no hay entradas guardadas. Toque la estrella de cualquier entrada para guardarla aquí.",
  "cfg.limparFavoritos": "Borrar todos los favoritos",
  "cfg.limparConfirma": "¿Borrar los {n} favoritos? No se puede deshacer.",

  /* favoritos */
  "fav.adicionar": "Guardar en favoritos",
  "fav.remover": "Quitar de favoritos",
  "fav.salvar": "Guardar",
  "fav.salvo": "Guardado",
  "toast.favoritosLimpos": "Favoritos borrados",

  /* concordancia — la lista completa de apariciones de la entrada en el NT */
  "conc.resumo": "Todas las apariciones · {versiculos} {rotulo}",
  "conc.versiculo": "versículo",
  "conc.versiculos": "versículos",
  "conc.emLivro": "En {livro} · {versiculos} {rotulo}",
  "conc.mais": "Mostrar {n} más · quedan {restam}",
  "conc.nenhuma": "Este lema no aparece en el texto de Nestle 1904.",

  "filtro.todos": "Todos",
  "filtro.favoritos": "Favoritos",
  "filtro.verbos": "Verbos",
  "filtro.substantivos": "Sustantivos",
  "filtro.adjetivos": "Adjetivos",
  "contagem.um": "entrada",
  "contagem.varios": "entradas",
  "contagem.zero": "0 entradas",
  "contagem.parcial": "{mostrados} de {total}",
  "lista.mais": "Mostrar más {lote}",
  "lista.restam": "quedan {restam}",

  /* estados vacíos */
  "vazio.ref": "Ninguna entrada del léxico aparece en <b>{ref}</b>.<br>Pruebe el capítulo entero (p. ej. {exemplo}) u otro versículo.",
  "vazio.busca": "No se encontró ninguna entrada para &ldquo;{termo}&rdquo;.<br>Pruebe otra grafía, la transliteración o un significado en español.",
  "vazio.favoritos": "Todavía no ha guardado ninguna entrada.<br>Toque la estrella de cualquier entrada y aparecerá aquí.",
  "vazio.favoritosFiltro": "Ningún favorito corresponde a este filtro.<br>Desmarque la clase o la letra para ver la lista completa.",

  /* panel de versículos */
  "versos.legenda": "Griego: <b>{grego}</b> · Español: <b>{biblia}</b> — dominio público. Las palabras resaltadas tienen entrada; toque para abrir.",
  "versos.trechoExtenso": "Pasaje extenso ({n} versículos). Afine a un versículo o a un rango menor — p. ej. <b>{exemplo}</b> — para ver el griego y el español.",
  "ref.ocorreUm": "entrada aparece",
  "ref.ocorreVarios": "entradas aparecen",
  "ref.sufixo": "en este pasaje.",

  /* entrada */
  "verbete.flexao": "Flexión",
  "verbete.raiz": "Raíz",
  "verbete.nt": "NT",
  "verbete.significado": "Significado en español",
  "verbete.classe": "Clase gramatical",
  "verbete.fonteAbbott": "— enfoque en el Nuevo Testamento",
  "verbete.fonteLsj": "— uso clásico y general",
  "verbete.ocorrencias": "Apariciones en el NT",
  "verbete.cognatos": "Familia de palabras (cognados)",
  "verbete.verTambem": "Véase también",
  "verbete.semVerbete": "Todavía no consta en el núcleo",
  "verbete.fechar": "Cerrar entrada",
  /* Sin pictograma: 🔗 era un emoji usado como icono. */
  "verbete.copiar": "Copiar entrada",
  "verbete.copiarLink": "Copiar enlace",
  "verbete.compartilhar": "Compartir",

  /* texto copiado */
  "copia.flexao": "Flexión: ",
  "copia.raiz": "Raíz: ",
  "copia.portugues": "Significados: ",
  "copia.abbott": "ABBOTT-SMITH (NT): ",
  "copia.lsj": "LSJ (clásico): ",
  "copia.nt": "NT: ",
  "copia.cognatos": "Cognados: ",
  "copia.verTambem": "Véase también: ",
  "copia.assinatura": "— Léxikon · ",

  /* avisos */
  "toast.verbeteCopiado": "Entrada copiada",
  "toast.linkCopiado": "Enlace copiado",
  "toast.erroCopia": "No se pudo copiar",

  /* pie */
  "rodape.fontes": "<b>Léxikon</b> reúne datos lexicográficos de <span class=\"src\">obras de dominio público</span> — el <i>Liddell-Scott-Jones (LSJ)</i> y el <i>Manual Greek Lexicon of the New Testament</i> de G. Abbott-Smith.",
  "rodape.cobertura": "Cobertura íntegra del Nuevo Testamento: <b>5.410 entradas</b>, 100% de los 137.779 tokens del texto griego. &nbsp;·&nbsp; Los ensayos de Abbott-Smith y LSJ todavía están solo en portugués. &nbsp;·&nbsp; Distribuya libremente."
};
