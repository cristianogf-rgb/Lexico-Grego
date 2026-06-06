/* ============================================================================
   LÉXIKON — Base de dados-semente
   ----------------------------------------------------------------------------
   Conjunto curado e VERIFICADO de verbetes do grego bíblico/clássico, redigido
   e traduzido para o português do Brasil. NÃO é o corpus completo do LSJ nem do
   Abbott-Smith — é um núcleo preciso para uso imediato e para validar o sistema.
   Para a cobertura total (~116 mil verbetes do LSJ + Abbott-Smith integral),
   use o script de ingestão `ingestao_lsj.py`, que carrega os dados de domínio
   público da Perseus Digital Library.

   Campos de cada verbete:
     lema      — forma de citação em grego politônico
     translit  — transliteração (acentuação tônica indicada)
     beta      — chave de busca latinizada, sem diacríticos
     classe    — classe gramatical / flexão de citação
     morf      — informação morfológica (genitivo + artigo, ou partes principais)
     raiz      — raiz/étimo quando relevante
     lsj       — síntese das acepções no padrão LSJ (clássico → geral)
     abbott    — síntese das acepções no padrão Abbott-Smith (foco no NT)
     nt        — frequência aproximada no NT e ocorrências-chave
     cognatos  — palavras da mesma família (referência cruzada)
     verTambem — verbetes relacionados por campo semântico
   ============================================================================ */

window.LEXICON_DATA = [
  {
    lema: "θεός", translit: "theós", beta: "theos",
    classe: "substantivo, masc./fem. (2ª decl.)", morf: "θεός, -οῦ, ὁ (também ἡ, deusa)", raiz: "—",
    lsj: "1. Divindade, ser divino; um deus ou deusa do panteão. 2. No singular com artigo (ὁ θεός), a divindade suprema. 3. Em sentido atributivo: o que é divino, sagrado. 4. Metaforicamente, aquilo que é tido como soberano ou objeto supremo de devoção.",
    abbott: "Deus. 1. Em sentido pagão, uma divindade. 2. No uso judaico-cristão, o Deus único e verdadeiro, criador e soberano. 3. Aplicado a Cristo (Jo 1.1; 20.28; Rm 9.5; Tt 2.13). 4. Predicado de poderes ou ídolos falsos (1Co 8.5; 2Co 4.4 — “o deus deste século”).",
    nt: "≈1318 ocorrências. Jo 1.1 (καὶ θεὸς ἦν ὁ λόγος); Rm 8.31 (εἰ ὁ θεὸς ὑπὲρ ἡμῶν).",
    cognatos: ["θεῖος", "θεότης", "θεοσέβεια"], verTambem: ["κύριος", "πατήρ", "πνεῦμα"]
  },
  {
    lema: "λόγος", translit: "lógos", beta: "logos",
    classe: "substantivo, masc. (2ª decl.)", morf: "λόγος, -ου, ὁ", raiz: "λεγ- (λέγω, “dizer, reunir”)",
    lsj: "1. Aquilo que é dito: palavra, discurso, fala. 2. Conta, cálculo, razão (ratio). 3. Relação, proporção. 4. Faculdade da razão; pensamento. 5. Princípio racional que ordena o cosmo (esp. na filosofia estoica). 6. Tratado, narrativa, argumento.",
    abbott: "1. Palavra, dito, declaração (Mt 8.8). 2. Discurso, mensagem; a “Palavra” como pregação do evangelho (At 6.4). 3. Causa, motivo, razão de prestar contas (Mt 12.36; Hb 4.13). 4. ὁ Λόγος como título de Cristo, a Palavra pré-existente e encarnada (Jo 1.1,14; 1Jo 1.1; Ap 19.13).",
    nt: "≈330 ocorrências. Jo 1.1,14; Hb 4.12 (ζῶν ὁ λόγος τοῦ θεοῦ).",
    cognatos: ["λέγω", "λογίζομαι", "λογικός", "διαλέγομαι"], verTambem: ["ῥῆμα", "ἀλήθεια"]
  },
  {
    lema: "ἀγάπη", translit: "agápē", beta: "agape",
    classe: "substantivo, fem. (1ª decl.)", morf: "ἀγάπη, -ης, ἡ", raiz: "ἀγαπα-",
    lsj: "Termo raro no grego clássico; afeição, estima. Ganha relevo no grego helenístico e na LXX (Ct 2.4 et al.), onde traduz o hebr. ’ahăbâ.",
    abbott: "Amor; especialmente o amor benevolente e deliberado, dirigido ao bem do outro. 1. O amor de Deus e de Cristo pelos homens (Rm 5.8; 8.35,39; 1Jo 4.9). 2. O amor cristão ao próximo e a Deus, fruto do Espírito (1Co 13; Gl 5.22). 3. Plural ἀγάπαι: ágapes, refeições fraternais (Jd 12).",
    nt: "≈116 ocorrências. 1Co 13.13; Rm 8.39; 1Jo 4.8 (ὁ θεὸς ἀγάπη ἐστίν).",
    cognatos: ["ἀγαπάω", "ἀγαπητός"], verTambem: ["χάρις", "ἔλεος", "φιλία"]
  },
  {
    lema: "ἀγαπάω", translit: "agapáō", beta: "agapao",
    classe: "verbo", morf: "ἀγαπάω, fut. ἀγαπήσω, aor. ἠγάπησα, pf. ἠγάπηκα", raiz: "ἀγαπα-",
    lsj: "1. Tratar com afeição, acolher com estima. 2. Contentar-se com, dar-se por satisfeito. 3. Preferir, dar preferência a.",
    abbott: "Amar — o amor da vontade e da estima, distinto do afeto instintivo (στέργω) e da amizade afetuosa (φιλέω). Usado do amor de Deus pelo mundo (Jo 3.16), de Cristo pela Igreja (Ef 5.25), e do mandamento de amar a Deus e ao próximo (Mt 22.37,39).",
    nt: "≈143 ocorrências. Jo 3.16; Rm 8.28 (τοῖς ἀγαπῶσιν τὸν θεόν).",
    cognatos: ["ἀγάπη", "ἀγαπητός"], verTambem: ["φιλέω"]
  },
  {
    lema: "πίστις", translit: "pístis", beta: "pistis",
    classe: "substantivo, fem. (3ª decl.)", morf: "πίστις, -εως, ἡ", raiz: "πιθ-/πειθ- (πείθω)",
    lsj: "1. Confiança em outrem; fidelidade, lealdade. 2. Garantia, penhor, prova que gera confiança. 3. Crédito (comercial). 4. Persuasão, convicção.",
    abbott: "Fé. 1. Fidelidade, confiabilidade (Rm 3.3; Gl 5.22). 2. Confiança, segurança. 3. Fé cristã como aceitação confiante de Deus e de Cristo, meio da justificação (Rm 1.17; 3.28; Gl 2.16). 4. ἡ πίστις: o conjunto da fé crida, o corpo da doutrina (Jd 3; 1Tm 4.1).",
    nt: "≈243 ocorrências. Hb 11.1; Rm 1.17 (ἐκ πίστεως εἰς πίστιν).",
    cognatos: ["πιστεύω", "πιστός", "ἄπιστος", "πείθω"], verTambem: ["ἐλπίς", "δικαιοσύνη"]
  },
  {
    lema: "πιστεύω", translit: "pisteúō", beta: "pisteuo",
    classe: "verbo", morf: "πιστεύω, fut. πιστεύσω, aor. ἐπίστευσα, pf. πεπίστευκα", raiz: "πιστ-",
    lsj: "1. Confiar em, depositar fé em (com dat.). 2. Confiar algo a alguém (πιστεύω τί τινι). 3. Crer, estar persuadido de algo.",
    abbott: "Crer, ter fé. 1. Estar persuadido de, dar crédito a (Mt 21.25). 2. Confiar em, entregar-se a — esp. com εἰς + acus.: crer “em” Cristo, movimento de adesão pessoal (Jo 3.16; 6.29). 3. Voz passiva: ser confiado, ter algo entregue à própria responsabilidade (Rm 3.2; Gl 2.7).",
    nt: "≈241 ocorrências. Jo 3.16; At 16.31 (πίστευσον ἐπὶ τὸν κύριον Ἰησοῦν).",
    cognatos: ["πίστις", "πιστός"], verTambem: ["ἐλπίζω"]
  },
  {
    lema: "χάρις", translit: "cháris", beta: "charis",
    classe: "substantivo, fem. (3ª decl.)", morf: "χάρις, -ιτος, ἡ", raiz: "χαρ- (χαίρω, “alegrar-se”)",
    lsj: "1. Graça exterior, beleza, encanto. 2. Favor, boa vontade; benevolência demonstrada. 3. Gratidão, reconhecimento (χάριν ἔχειν). 4. Favor concedido, benefício. 5. Em favor de (χάριν + gen., como preposição).",
    abbott: "Graça. 1. Charme, agradabilidade do discurso (Lc 4.22; Cl 4.6). 2. Favor, boa vontade (Lc 2.52). 3. O favor imerecido de Deus em Cristo, fonte da salvação (Rm 3.24; Ef 2.8). 4. Dom ou capacitação concedida pela graça (Rm 12.6; 2Co 12.9). 5. Gratidão (Lc 17.9; 1Co 15.57, χάρις τῷ θεῷ).",
    nt: "≈155 ocorrências. Ef 2.8 (τῇ γὰρ χάριτί ἐστε σεσῳσμένοι); Jo 1.14,16.",
    cognatos: ["χαίρω", "χαρά", "χαρίζομαι", "χάρισμα", "εὐχαριστέω"], verTambem: ["ἔλεος", "ἀγάπη", "δωρεά"]
  },
  {
    lema: "χάρισμα", translit: "chárisma", beta: "charisma",
    classe: "substantivo, neutro (3ª decl.)", morf: "χάρισμα, -ατος, τό", raiz: "χαρ-",
    lsj: "Termo tardio: dádiva, favor gratuitamente concedido (palavra característica do grego helenístico e do NT).",
    abbott: "Dom da graça, dádiva gratuita. 1. O dom da salvação e da vida eterna (Rm 5.15,16; 6.23). 2. Dons espirituais concedidos para o serviço na Igreja (Rm 12.6; 1Co 12.4,9,28). 3. Capacitação ou bênção particular (1Co 7.7; 2Tm 1.6).",
    nt: "≈17 ocorrências. Rm 6.23 (τὸ δὲ χάρισμα τοῦ θεοῦ ζωὴ αἰώνιος); 1Co 12.4.",
    cognatos: ["χάρις", "χαρίζομαι"], verTambem: ["δωρεά", "πνεῦμα"]
  },
  {
    lema: "δικαιοσύνη", translit: "dikaiosýnē", beta: "dikaiosune",
    classe: "substantivo, fem. (1ª decl.)", morf: "δικαιοσύνη, -ης, ἡ", raiz: "δικ- (δίκη, “justiça, direito”)",
    lsj: "1. Justiça como virtude; observância do que é reto e devido. 2. Retidão, probidade. 3. Em Platão e Aristóteles, a virtude que dá a cada um o que lhe é devido.",
    abbott: "Justiça, retidão. 1. Conformidade à norma divina; integridade moral (Mt 5.6,20). 2. Em Paulo, a justiça que vem de Deus e é imputada/concedida ao crente pela fé — a justificação (Rm 1.17; 3.21–22; 2Co 5.21; Fp 3.9). 3. Ato justo, prática da retidão (1Jo 2.29; 3.7).",
    nt: "≈92 ocorrências. Rm 1.17; Rm 3.21 (δικαιοσύνη θεοῦ … χωρὶς νόμου).",
    cognatos: ["δίκαιος", "δικαιόω", "δικαίωμα", "δικαίωσις", "δίκη"], verTambem: ["πίστις", "νόμος", "χάρις"]
  },
  {
    lema: "δικαιόω", translit: "dikaióō", beta: "dikaioo",
    classe: "verbo", morf: "δικαιόω, fut. δικαιώσω, aor. ἐδικαίωσα, pf. pass. δεδικαίωμαι", raiz: "δικ-",
    lsj: "1. Considerar justo ou correto. 2. Reivindicar como direito; julgar. 3. Fazer justiça a alguém — frequentemente punir, condenar (sentido forense clássico).",
    abbott: "Justificar. 1. Declarar justo, absolver, considerar reto — termo forense (Mt 12.37; Lc 18.14). 2. Em Paulo, declarar o pecador justo diante de Deus com base na fé em Cristo, não nas obras da Lei (Rm 3.24,28; 5.1; Gl 2.16). 3. Voz passiva: ser justificado, reconhecido como justo (Rm 4.2; 1Co 6.11).",
    nt: "≈39 ocorrências. Rm 5.1 (δικαιωθέντες οὖν ἐκ πίστεως); Rm 8.30,33.",
    cognatos: ["δίκαιος", "δικαιοσύνη", "δικαίωμα", "δικαίωσις"], verTambem: ["κατακρίνω", "σῴζω"]
  },
  {
    lema: "δίκαιος", translit: "díkaios", beta: "dikaios",
    classe: "adjetivo (2-1-2)", morf: "δίκαιος, -α, -ον", raiz: "δικ-",
    lsj: "1. Conforme ao direito, justo, reto. 2. Observador das leis, honesto. 3. Equitativo, devido, legítimo. 4. (de coisas) regular, exato.",
    abbott: "Justo, reto. 1. Que observa a vontade de Deus, íntegro (Mt 1.19; Lc 1.6). 2. Inocente, sem culpa (Mt 27.19,24). 3. Conforme à justiça, equitativo (Cl 4.1). 4. Substantivado, ὁ δίκαιος: o justo (Rm 1.17, citando Hc 2.4; 1Pe 4.18).",
    nt: "≈79 ocorrências. Rm 1.17 (ὁ δὲ δίκαιος ἐκ πίστεως ζήσεται).",
    cognatos: ["δικαιοσύνη", "δικαιόω", "δίκη"], verTambem: ["ἅγιος", "ὅσιος"]
  },
  {
    lema: "δικαίωμα", translit: "dikaíōma", beta: "dikaioma",
    classe: "substantivo, neutro (3ª decl.)", morf: "δικαίωμα, -ατος, τό", raiz: "δικ-",
    lsj: "1. Ato de justiça; reparação de um erro. 2. Decisão judicial, sentença. 3. Estatuto, ordenança que estabelece o direito. 4. Reivindicação justa.",
    abbott: "1. Exigência ou ordenança justa, decreto (Lc 1.6; Rm 1.32; Hb 9.1,10). 2. Ato justo, justiça realizada (Rm 5.18; Ap 19.8). 3. Sentença de justificação, veredicto absolutório (Rm 5.16).",
    nt: "≈10 ocorrências. Rm 8.4 (ἵνα τὸ δικαίωμα τοῦ νόμου πληρωθῇ); Rm 5.18.",
    cognatos: ["δικαιόω", "δικαιοσύνη", "δίκαιος"], verTambem: ["νόμος", "ἐντολή"]
  },
  {
    lema: "ἁμαρτία", translit: "hamartía", beta: "hamartia",
    classe: "substantivo, fem. (1ª decl.)", morf: "ἁμαρτία, -ας, ἡ", raiz: "ἁμαρτ- (ἁμαρτάνω, “errar o alvo”)",
    lsj: "1. Erro, falha, equívoco. 2. Culpa, falta. 3. Em sentido moral, transgressão. (Lit.: ato de não atingir o alvo.)",
    abbott: "Pecado. 1. Ato concreto de transgressão da lei de Deus (Mt 12.31; Jo 8.34). 2. Como princípio ou poder que habita e domina o homem — quase personificado em Paulo (Rm 5.12; 6.6,12; 7.8–11). 3. Estado de pecaminosidade, culpa (Jo 9.41; 1Jo 1.8). 4. περὶ ἁμαρτίας: oferta pelo pecado (Rm 8.3; Hb 10.6).",
    nt: "≈173 ocorrências. Rm 6.23 (τὰ ὀψώνια τῆς ἁμαρτίας θάνατος); Rm 8.3.",
    cognatos: ["ἁμαρτάνω", "ἁμαρτωλός", "ἀναμάρτητος"], verTambem: ["παράπτωμα", "ἀνομία", "θάνατος"]
  },
  {
    lema: "σάρξ", translit: "sárx", beta: "sarx",
    classe: "substantivo, fem. (3ª decl.)", morf: "σάρξ, σαρκός, ἡ", raiz: "σαρκ-",
    lsj: "1. Carne, o tecido muscular do corpo. 2. Plural σάρκες: as carnes do corpo. 3. O corpo como um todo. 4. A natureza humana, em contraste com o divino.",
    abbott: "Carne. 1. O tecido carnal do corpo (Lc 24.39; 1Co 15.39). 2. O corpo (2Co 7.1). 3. A humanidade, “toda carne” (Mt 24.22; Jo 17.2). 4. A descendência ou parentesco natural (Rm 1.3; 9.3). 5. Em Paulo, a natureza humana caída, sede do pecado e oposta ao Espírito (Rm 7.18; 8.4–9; Gl 5.16–17).",
    nt: "≈147 ocorrências. Jo 1.14 (ὁ λόγος σὰρξ ἐγένετο); Rm 8.5–8.",
    cognatos: ["σαρκικός", "σάρκινος"], verTambem: ["πνεῦμα", "σῶμα", "ψυχή"]
  },
  {
    lema: "πνεῦμα", translit: "pneûma", beta: "pneuma",
    classe: "substantivo, neutro (3ª decl.)", morf: "πνεῦμα, -ατος, τό", raiz: "πνε- (πνέω, “soprar”)",
    lsj: "1. Sopro, ar em movimento; vento. 2. Respiração, hálito. 3. Espírito, princípio vital. 4. Inspiração, sopro divino.",
    abbott: "Espírito. 1. Vento, sopro (Jo 3.8; Hb 1.7). 2. O fôlego de vida, espírito do homem (Lc 8.55; 23.46; 1Co 2.11). 3. Espíritos incorpóreos: anjos e demônios (Mt 8.16; Hb 1.14). 4. Disposição, temperamento (Rm 8.15; 1Co 4.21). 5. τὸ Πνεῦμα (τὸ ἅγιον): o Espírito Santo, terceira pessoa da Trindade (Mt 28.19; Jo 14.26; Rm 8.9–16,26).",
    nt: "≈379 ocorrências. Jo 4.24 (πνεῦμα ὁ θεός); Rm 8.16 (αὐτὸ τὸ πνεῦμα συμμαρτυρεῖ).",
    cognatos: ["πνέω", "πνευματικός", "πνοή"], verTambem: ["ψυχή", "σάρξ", "θεός"]
  },
  {
    lema: "νόμος", translit: "nómos", beta: "nomos",
    classe: "substantivo, masc. (2ª decl.)", morf: "νόμος, -ου, ὁ", raiz: "νεμ- (νέμω, “distribuir, atribuir”)",
    lsj: "1. Aquilo que é distribuído como uso; costume, convenção. 2. Lei, ordenança estatuída. 3. Norma, regra, princípio. 4. (mús.) modo, melodia tradicional.",
    abbott: "Lei. 1. Princípio ou regra de ação (Rm 7.21,23). 2. A Lei mosaica, o Pentateuco (Mt 5.17; Rm 3.28). 3. ὁ νόμος: as Escrituras do AT em geral (Jo 10.34; 1Co 14.21). 4. Lei como sistema de obrigação contraposto à graça (Rm 6.14; Gl 3.23). 5. νόμος sem artigo: lei em sentido genérico, princípio (Rm 2.14).",
    nt: "≈194 ocorrências. Rm 8.2 (ὁ νόμος τοῦ πνεύματος τῆς ζωῆς); Gl 3.24.",
    cognatos: ["νομικός", "νόμιμος", "ἀνομία", "παρανομέω"], verTambem: ["ἐντολή", "δικαίωμα", "χάρις"]
  },
  {
    lema: "σῴζω", translit: "sṓzō", beta: "sozo",
    classe: "verbo", morf: "σῴζω, fut. σώσω, aor. ἔσωσα, pf. pass. σέσῳσμαι/σέσωσμαι", raiz: "σω- (σῶς, “salvo, são”)",
    lsj: "1. Salvar, manter são e salvo. 2. Preservar, conservar. 3. Resgatar do perigo ou da morte. 4. Guardar na memória; manter (uma lei, um costume).",
    abbott: "Salvar. 1. Livrar de perigo, doença ou morte; curar (Mt 8.25; 9.21–22). 2. Preservar, manter incólume (Mt 16.25). 3. Em sentido soteriológico: salvar do pecado e do juízo, conferir a salvação escatológica (Mt 1.21; Rm 5.9; Ef 2.5,8; 1Tm 1.15).",
    nt: "≈106 ocorrências. Ef 2.8 (τῇ χάριτί ἐστε σεσῳσμένοι); Rm 10.9.",
    cognatos: ["σωτηρία", "σωτήρ", "σωτήριος"], verTambem: ["δικαιόω", "λυτρόω", "ῥύομαι"]
  },
  {
    lema: "σωτηρία", translit: "sōtēría", beta: "soteria",
    classe: "substantivo, fem. (1ª decl.)", morf: "σωτηρία, -ας, ἡ", raiz: "σω-",
    lsj: "1. Libertação, preservação, segurança. 2. Meio de salvação ou de manutenção. 3. Bem-estar, conservação do estado.",
    abbott: "Salvação. 1. Livramento físico, segurança (At 7.25; 27.34; Hb 11.7). 2. A salvação espiritual e escatológica em Cristo — libertação do pecado, da ira e da morte, e participação na vida eterna (Lc 1.77; Rm 1.16; 13.11; 2Co 6.2; Hb 2.3).",
    nt: "≈46 ocorrências. Rm 1.16 (δύναμις … εἰς σωτηρίαν παντὶ τῷ πιστεύοντι).",
    cognatos: ["σῴζω", "σωτήρ", "σωτήριος"], verTambem: ["ζωή", "ἀπολύτρωσις"]
  },
  {
    lema: "ἐλπίς", translit: "elpís", beta: "elpis",
    classe: "substantivo, fem. (3ª decl.)", morf: "ἐλπίς, -ίδος, ἡ", raiz: "ἐλπ- (ἔλπω/ἐλπίζω)",
    lsj: "1. Expectativa do que está por vir (boa ou má); esperança ou apreensão. 2. Esperança, confiança no futuro. 3. Objeto da esperança.",
    abbott: "Esperança. 1. Expectativa confiante do bem futuro (Rm 5.4–5; 8.24). 2. Aquilo em que se espera; objeto ou fundamento da esperança (Cl 1.5,27, “Cristo… a esperança da glória”; 1Tm 1.1). 3. A virtude teologal da esperança, ao lado da fé e do amor (1Co 13.13).",
    nt: "≈53 ocorrências. Rm 8.24 (τῇ γὰρ ἐλπίδι ἐσώθημεν); Hb 6.19.",
    cognatos: ["ἐλπίζω"], verTambem: ["πίστις", "ἀγάπη", "ὑπομονή"]
  },
  {
    lema: "εἰρήνη", translit: "eirḗnē", beta: "eirene",
    classe: "substantivo, fem. (1ª decl.)", morf: "εἰρήνη, -ης, ἡ", raiz: "—",
    lsj: "1. Paz, ausência de guerra. 2. Tratado de paz. 3. Tempo de paz; tranquilidade.",
    abbott: "Paz. 1. Ausência de hostilidade, concórdia entre pessoas (Mt 10.34; At 7.26). 2. Tranquilidade, bem-estar — traduzindo o hebr. šalôm (Lc 2.14; 19.42). 3. Paz com Deus, reconciliação pela justificação (Rm 5.1). 4. Paz interior, serenidade do crente (Jo 14.27; Fp 4.7). 5. Saudação e bênção (Lc 24.36; Rm 1.7).",
    nt: "≈92 ocorrências. Rm 5.1 (εἰρήνην ἔχομεν πρὸς τὸν θεόν); Fp 4.7.",
    cognatos: ["εἰρηνεύω", "εἰρηνικός", "εἰρηνοποιός"], verTambem: ["χάρις", "καταλλαγή"]
  },
  {
    lema: "χαρά", translit: "chará", beta: "chara",
    classe: "substantivo, fem. (1ª decl.)", morf: "χαρά, -ᾶς, ἡ", raiz: "χαρ-",
    lsj: "Alegria, gozo, deleite.",
    abbott: "Alegria, gozo. 1. Sentimento de júbilo (Mt 2.10; Lc 15.7). 2. Causa ou objeto da alegria (Lc 2.10; 1Ts 2.19–20). 3. A alegria como fruto do Espírito, independente das circunstâncias (Jo 15.11; Rm 14.17; Gl 5.22; Fp 1.4).",
    nt: "≈59 ocorrências. Gl 5.22; Jo 15.11 (ἡ χαρὰ ἡ ἐμὴ ἐν ὑμῖν).",
    cognatos: ["χαίρω", "χάρις", "συγχαίρω"], verTambem: ["εἰρήνη", "ἀγαλλίασις"]
  },
  {
    lema: "κύριος", translit: "kýrios", beta: "kurios",
    classe: "substantivo, masc. (2ª decl.)", morf: "κύριος, -ου, ὁ", raiz: "κυρ- (κῦρος, “autoridade, poder”)",
    lsj: "1. Que tem poder ou autoridade sobre algo; senhor, dono. 2. (adj.) legítimo, válido, autorizado. 3. O chefe da casa, o tutor. 4. Decisivo, soberano.",
    abbott: "Senhor. 1. Dono, proprietário, mestre (Mt 20.8; Gl 4.1). 2. Forma de tratamento respeitoso: “senhor” (Mt 13.27; Jo 4.11). 3. Tradução do hebr. YHWH/Adonai na LXX, aplicada a Deus (Mt 1.20; At 2.39). 4. Título de Jesus como Senhor exaltado, confissão central da fé (Rm 10.9; 1Co 12.3; Fp 2.11).",
    nt: "≈717 ocorrências. Rm 10.9 (ἐὰν ὁμολογήσῃς… κύριον Ἰησοῦν); Fp 2.11.",
    cognatos: ["κυριεύω", "κυριότης", "κυριακός"], verTambem: ["θεός", "Χριστός", "δεσπότης"]
  },
  {
    lema: "Χριστός", translit: "Christós", beta: "christos",
    classe: "adjetivo verbal subst., masc.", morf: "Χριστός, -οῦ, ὁ", raiz: "χρι- (χρίω, “ungir”)",
    lsj: "(adj.) que se pode untar/ungir; ungido. (No grego clássico, dito de substâncias aplicáveis à pele.)",
    abbott: "O Ungido, o Messias — tradução do hebr. māšîaḥ. 1. Título oficial de Jesus como o Messias prometido (Mt 16.16; Jo 1.41). 2. Empregado quase como nome próprio, “Cristo” (Rm 5.6,8; 1Co 1.23). 3. Ἰησοῦς Χριστός / Χριστὸς Ἰησοῦς (Rm 1.1; Fp 1.1).",
    nt: "≈529 ocorrências. Mt 16.16 (σὺ εἶ ὁ Χριστός); Rm 5.8.",
    cognatos: ["χρίω", "χρῖσμα", "Χριστιανός"], verTambem: ["κύριος", "υἱός", "Ἰησοῦς"]
  },
  {
    lema: "υἱός", translit: "huiós", beta: "huios",
    classe: "substantivo, masc. (2ª decl.)", morf: "υἱός, -οῦ, ὁ", raiz: "—",
    lsj: "1. Filho. 2. Descendente; membro de uma linhagem. 3. (em sentido amplo) discípulo, seguidor; aquele que partilha de uma qualidade.",
    abbott: "Filho. 1. Filho varão, descendente direto (Mt 1.21). 2. Descendente, posteridade (Mt 1.1, “filho de Davi”). 3. Idiomatismo hebraico: “filho de” = participante de uma qualidade (Lc 10.6, “filho da paz”; Ef 2.2, “filhos da desobediência”). 4. υἱὸς τοῦ θεοῦ: o Filho de Deus, título de Cristo (Mt 4.3; Rm 1.4); υἱὸς τοῦ ἀνθρώπου: o Filho do Homem (Mt 8.20).",
    nt: "≈377 ocorrências. Rm 1.4 (ὁρισθέντος υἱοῦ θεοῦ ἐν δυνάμει); Rm 8.14.",
    cognatos: ["υἱοθεσία"], verTambem: ["τέκνον", "πατήρ", "Χριστός"]
  },
  {
    lema: "πατήρ", translit: "patḗr", beta: "pater",
    classe: "substantivo, masc. (3ª decl.)", morf: "πατήρ, πατρός, ὁ", raiz: "πατ-",
    lsj: "1. Pai. 2. (pl.) os antepassados, os pais. 3. Fundador, autor, originador.",
    abbott: "Pai. 1. Pai natural (Mt 2.22). 2. Antepassado, patriarca (Jo 8.39; Rm 4.1). 3. Originador, arquétipo (Jo 8.44; Rm 4.11–12). 4. Tratamento de respeito a um ancião (At 7.2). 5. Deus como Pai — de Israel, de Cristo de modo único, e dos crentes pela adoção (Mt 6.9; Jo 20.17; Rm 8.15, Ἀββᾶ ὁ πατήρ).",
    nt: "≈413 ocorrências. Rm 8.15 (κράζομεν· Ἀββᾶ ὁ πατήρ); Jo 14.6.",
    cognatos: ["πατριά", "πατρικός", "πατρῷος"], verTambem: ["υἱός", "θεός", "υἱοθεσία"]
  },
  {
    lema: "κόσμος", translit: "kósmos", beta: "kosmos",
    classe: "substantivo, masc. (2ª decl.)", morf: "κόσμος, -ου, ὁ", raiz: "—",
    lsj: "1. Ordem, disposição harmoniosa. 2. Adorno, enfeite, ornamento. 3. O mundo ordenado, o universo (uso introduzido pelos pitagóricos). 4. A terra habitada; os homens.",
    abbott: "Mundo. 1. Ordem, adorno (1Pe 3.3). 2. O universo criado (At 17.24; Rm 1.20). 3. A terra, o globo (Mt 4.8; Jo 1.10). 4. A humanidade, os habitantes do mundo (Jo 3.16; Rm 3.19). 5. A ordem humana alienada de Deus, sob o pecado e hostil ao evangelho (Jo 15.18–19; 1Co 1.21; Tg 4.4; 1Jo 2.15–17).",
    nt: "≈186 ocorrências. Jo 3.16 (ἠγάπησεν ὁ θεὸς τὸν κόσμον); Jo 1.10.",
    cognatos: ["κοσμέω", "κόσμιος", "κοσμικός"], verTambem: ["αἰών", "γῆ", "σάρξ"]
  },
  {
    lema: "ζωή", translit: "zōḗ", beta: "zoe",
    classe: "substantivo, fem. (1ª decl.)", morf: "ζωή, -ῆς, ἡ", raiz: "ζω-/ζη- (ζάω, “viver”)",
    lsj: "1. Vida; o modo de viver. 2. Meio de subsistência, sustento. 3. O período de uma vida.",
    abbott: "Vida. 1. A vida natural, princípio vital do corpo (Lc 16.25; At 17.25). 2. Duração da vida (Hb 7.3; Tg 4.14). 3. ζωὴ αἰώνιος: a vida eterna — não mera duração, mas a vida de Deus comunicada ao crente, presente e escatológica (Jo 3.16; 17.3; Rm 6.23; 1Jo 5.11–12).",
    nt: "≈135 ocorrências. Jo 11.25 (ἐγώ εἰμι ἡ ἀνάστασις καὶ ἡ ζωή); Rm 6.23.",
    cognatos: ["ζάω", "ζῷον", "ζωοποιέω"], verTambem: ["θάνατος", "ἀνάστασις", "σωτηρία"]
  },
  {
    lema: "θάνατος", translit: "thánatos", beta: "thanatos",
    classe: "substantivo, masc. (2ª decl.)", morf: "θάνατος, -ου, ὁ", raiz: "θαν- (θνῄσκω, “morrer”)",
    lsj: "1. Morte. 2. Pena de morte, execução. 3. Cadáver. 4. (personif.) Tánatos, a morte como divindade.",
    abbott: "Morte. 1. A morte física, separação da alma e do corpo (Jo 11.13; Fp 1.20). 2. A morte como pena do pecado e poder hostil (Rm 5.12,17; 6.23; 1Co 15.26). 3. A “segunda morte”, perdição escatológica (Ap 2.11; 20.14). 4. Morte espiritual, separação de Deus (Rm 7.10; 8.6; 1Jo 3.14).",
    nt: "≈120 ocorrências. Rm 6.23 (ὀψώνια τῆς ἁμαρτίας θάνατος); 1Co 15.26.",
    cognatos: ["θνῄσκω", "ἀποθνῄσκω", "θνητός", "θανατόω"], verTambem: ["ζωή", "ἁμαρτία", "ἀνάστασις"]
  },
  {
    lema: "ἀνάστασις", translit: "anástasis", beta: "anastasis",
    classe: "substantivo, fem. (3ª decl.)", morf: "ἀνάστασις, -εως, ἡ", raiz: "ἀνα- + στα- (ἀνίστημι, “levantar”)",
    lsj: "1. Ato de levantar-se ou fazer levantar. 2. Remoção, expulsão (de um povo). 3. Erguimento, restauração.",
    abbott: "Ressurreição. 1. Ato de levantar-se. 2. A ressurreição dos mortos — esperança escatológica e fundamento da fé (Mt 22.23; Jo 11.24–25; At 17.18; 1Co 15.12–13). 3. A ressurreição de Cristo, garantia da do crente (At 1.22; Rm 1.4; 6.5; Fp 3.10).",
    nt: "≈42 ocorrências. Jo 11.25; Fp 3.10 (τὴν δύναμιν τῆς ἀναστάσεως αὐτοῦ).",
    cognatos: ["ἀνίστημι", "ἐξανάστασις"], verTambem: ["ζωή", "θάνατος", "ἐγείρω"]
  },
  {
    lema: "βασιλεία", translit: "basileía", beta: "basileia",
    classe: "substantivo, fem. (1ª decl.)", morf: "βασιλεία, -ας, ἡ", raiz: "βασιλ- (βασιλεύς, “rei”)",
    lsj: "1. Realeza, dignidade régia, soberania. 2. Reino, domínio governado por um rei. 3. Monarquia.",
    abbott: "Reino, reinado. 1. Dignidade ou poder real (Lc 19.12; Ap 17.12). 2. Domínio, território governado (Mt 4.8; 24.7). 3. ἡ βασιλεία τοῦ θεοῦ / τῶν οὐρανῶν: o Reino de Deus — o reinado soberano de Deus, presente em Cristo e consumado na escatologia (Mt 3.2; 6.33; Mc 1.15; Rm 14.17).",
    nt: "≈162 ocorrências. Mt 6.33 (ζητεῖτε δὲ πρῶτον τὴν βασιλείαν); Rm 14.17.",
    cognatos: ["βασιλεύς", "βασιλεύω", "βασίλειος", "βασιλικός"], verTambem: ["θεός", "οὐρανός", "δόξα"]
  },
  {
    lema: "ἐκκλησία", translit: "ekklēsía", beta: "ekklesia",
    classe: "substantivo, fem. (1ª decl.)", morf: "ἐκκλησία, -ας, ἡ", raiz: "ἐκ- + καλ- (ἐκκαλέω, “convocar”)",
    lsj: "Assembleia regularmente convocada dos cidadãos; reunião deliberativa do povo (na pólis grega).",
    abbott: "1. Assembleia, reunião convocada (At 19.32,39,41). 2. Na LXX, a congregação de Israel (At 7.38, citando o AT). 3. No NT, a Igreja: (a) a comunidade universal dos remidos, corpo de Cristo (Mt 16.18; Ef 1.22; Cl 1.18); (b) a congregação local de crentes (At 13.1; Rm 16.5; 1Co 1.2).",
    nt: "≈114 ocorrências. Mt 16.18 (οἰκοδομήσω μου τὴν ἐκκλησίαν); Ef 5.25.",
    cognatos: ["ἐκκαλέω", "καλέω", "κλῆσις"], verTambem: ["σῶμα", "λαός", "συναγωγή"]
  },
  {
    lema: "εὐαγγέλιον", translit: "euangélion", beta: "euangelion",
    classe: "substantivo, neutro (2ª decl.)", morf: "εὐαγγέλιον, -ου, τό", raiz: "εὖ + ἀγγελ- (ἄγγελος)",
    lsj: "1. Recompensa pela boa notícia, gratificação ao mensageiro. 2. (pl.) sacrifício de ação de graças por boas-novas. (No grego clássico/helenístico raramente designa a notícia em si.)",
    abbott: "Evangelho, boa-nova. 1. A mensagem da salvação em Cristo — sua vinda, morte e ressurreição (Mc 1.1; Rm 1.16; 1Co 15.1). 2. εὐαγγέλιον τοῦ θεοῦ / τοῦ Χριστοῦ (Rm 1.1; 15.19). 3. Em sentido posterior, escrito que narra a vida de Jesus.",
    nt: "≈76 ocorrências. Rm 1.16 (οὐ … ἐπαισχύνομαι τὸ εὐαγγέλιον); Mc 1.1.",
    cognatos: ["εὐαγγελίζω", "εὐαγγελιστής", "ἄγγελος"], verTambem: ["κήρυγμα", "λόγος"]
  },
  {
    lema: "δόξα", translit: "dóxa", beta: "doxa",
    classe: "substantivo, fem. (1ª decl.)", morf: "δόξα, -ης, ἡ", raiz: "δοκ- (δοκέω, “parecer, opinar”)",
    lsj: "1. Opinião, juízo, expectativa. 2. Reputação, conceito (bom ou mau). 3. Boa reputação, honra, glória. 4. Aparência, esplendor visível.",
    abbott: "Glória. 1. Opinião, estima — daí honra, boa fama (Jo 12.43; Rm 2.7). 2. Esplendor, brilho, magnificência (Mt 6.29; 1Co 15.40–41). 3. A glória de Deus: a manifestação visível de sua majestade e perfeições (Lc 2.9; Jo 1.14; Rm 3.23). 4. O estado glorioso futuro dos remidos (Rm 8.18,21; 2Co 4.17).",
    nt: "≈166 ocorrências. Rm 3.23 (ὑστεροῦνται τῆς δόξης τοῦ θεοῦ); Rm 8.18.",
    cognatos: ["δοξάζω", "δοκέω", "ἔνδοξος"], verTambem: ["τιμή", "βασιλεία", "εἰκών"]
  },
  {
    lema: "σταυρός", translit: "staurós", beta: "stauros",
    classe: "substantivo, masc. (2ª decl.)", morf: "σταυρός, -οῦ, ὁ", raiz: "στα- (ἵστημι)",
    lsj: "1. Estaca fincada em pé; poste. 2. Paliçada, conjunto de estacas. 3. (época romana) cruz, instrumento de execução.",
    abbott: "Cruz. 1. O instrumento romano de execução, em que Jesus foi crucificado (Mt 27.32; Jo 19.17). 2. Metonímia da morte expiatória de Cristo e seu significado salvífico (1Co 1.17–18; Gl 6.14; Cl 1.20). 3. Figura do autorrenúncia e do discipulado: “tomar a cruz” (Mt 10.38; 16.24).",
    nt: "≈27 ocorrências. 1Co 1.18 (ὁ λόγος… ὁ τοῦ σταυροῦ); Gl 6.14.",
    cognatos: ["σταυρόω", "συσταυρόω", "ἀνασταυρόω"], verTambem: ["θάνατος", "αἷμα", "ἀπολύτρωσις"]
  },
  {
    lema: "αἷμα", translit: "haîma", beta: "haima",
    classe: "substantivo, neutro (3ª decl.)", morf: "αἷμα, -ατος, τό", raiz: "—",
    lsj: "1. Sangue. 2. Derramamento de sangue, assassínio. 3. Parentesco consanguíneo, linhagem.",
    abbott: "Sangue. 1. O sangue do corpo (Mc 5.25; Jo 19.34). 2. Sangue derramado — morte violenta, homicídio (Mt 23.30,35; At 22.20). 3. Origem natural (Jo 1.13). 4. O sangue de Cristo como meio da expiação, da redenção e da nova aliança (Rm 3.25; 5.9; Ef 1.7; Hb 9.12–14; 1Pe 1.19).",
    nt: "≈97 ocorrências. Rm 5.9 (δικαιωθέντες… ἐν τῷ αἵματι αὐτοῦ); Hb 9.22.",
    cognatos: ["αἱματεκχυσία", "αἱμορροέω"], verTambem: ["σταυρός", "θάνατος", "ἀπολύτρωσις"]
  },
  {
    lema: "καρδία", translit: "kardía", beta: "kardia",
    classe: "substantivo, fem. (1ª decl.)", morf: "καρδία, -ας, ἡ", raiz: "καρδ- (cf. lat. cor)",
    lsj: "1. Coração, o órgão. 2. O coração como sede das emoções e do ânimo. 3. A parte interior, o âmago (de uma planta, da terra).",
    abbott: "Coração. Na antropologia bíblica, o centro da vida interior do homem: 1. Sede dos pensamentos e da inteligência (Mt 9.4; Rm 1.21). 2. Sede das emoções e desejos (Jo 16.6; Rm 9.2). 3. Sede da vontade e do caráter moral, o “homem interior” diante de Deus (Mt 5.8; Rm 2.5; 10.9–10; Ef 3.17).",
    nt: "≈156 ocorrências. Rm 10.9 (πιστεύσῃς ἐν τῇ καρδίᾳ σου); Mt 5.8.",
    cognatos: ["καρδιογνώστης", "σκληροκαρδία"], verTambem: ["ψυχή", "νοῦς", "πνεῦμα"]
  },
  {
    lema: "ψυχή", translit: "psychḗ", beta: "psuche",
    classe: "substantivo, fem. (1ª decl.)", morf: "ψυχή, -ῆς, ἡ", raiz: "ψυχ- (ψύχω, “soprar, esfriar”)",
    lsj: "1. Sopro de vida; princípio vital. 2. A alma, distinta do corpo. 3. A vida. 4. Sede dos desejos e afeições; o eu, a pessoa. 5. A alma do morto, o espírito.",
    abbott: "Alma, vida. 1. O princípio da vida natural, o fôlego vital (Mt 2.20; At 20.10). 2. A vida como tal, que se pode perder ou salvar (Mt 16.25–26; Jo 10.11). 3. A alma como sede de sentimentos, desejos e afeições (Mt 26.38; Lc 1.46). 4. A pessoa, o indivíduo (At 2.41, “três mil almas”; Rm 13.1, “toda alma”).",
    nt: "≈103 ocorrências. Mt 16.26 (τὴν δὲ ψυχὴν αὐτοῦ ζημιωθῇ); Mc 12.30.",
    cognatos: ["ψυχικός", "ψύχω", "ἀναψύχω"], verTambem: ["πνεῦμα", "σῶμα", "καρδία", "ζωή"]
  },
  {
    lema: "νοῦς", translit: "noûs", beta: "nous",
    classe: "substantivo, masc. (contrato)", morf: "νοῦς, νοός, ὁ (gen. ático νοῦ)", raiz: "νο- (νοέω)",
    lsj: "1. Mente, intelecto; faculdade de pensar. 2. Pensamento, propósito, intenção. 3. Sentido ou significado (de uma palavra). 4. Bom senso, sensatez.",
    abbott: "Mente, entendimento. 1. A faculdade da percepção e do juízo moral, a razão (Lc 24.45; Rm 7.23,25). 2. Modo de pensar, disposição mental, mentalidade (Rm 12.2, “renovação da mente”; Ef 4.23). 3. Propósito, parecer, intenção (Rm 11.34; 1Co 2.16).",
    nt: "≈24 ocorrências. Rm 12.2 (μεταμορφοῦσθε τῇ ἀνακαινώσει τοῦ νοός); 1Co 2.16.",
    cognatos: ["νοέω", "νόημα", "διάνοια", "ἔννοια"], verTambem: ["καρδία", "φρόνημα", "ψυχή"]
  },
  {
    lema: "σῶμα", translit: "sôma", beta: "soma",
    classe: "substantivo, neutro (3ª decl.)", morf: "σῶμα, -ατος, τό", raiz: "—",
    lsj: "1. Corpo, esp. o corpo morto, o cadáver (em Homero). 2. O corpo vivo. 3. A pessoa inteira. 4. Corpo material, em oposição ao espírito ou à forma. 5. Conjunto orgânico, totalidade.",
    abbott: "Corpo. 1. O corpo físico, vivo ou morto (Mt 6.22; 27.58). 2. A pessoa, o ser corporal (Rm 12.1). 3. O corpo de ressurreição, transformado (1Co 15.44, σῶμα πνευματικόν). 4. Metáfora da Igreja como corpo de Cristo, com membros diversos e um só organismo (Rm 12.4–5; 1Co 12.12–27; Ef 1.23; Cl 1.18).",
    nt: "≈142 ocorrências. 1Co 12.27 (ὑμεῖς δέ ἐστε σῶμα Χριστοῦ); Rm 12.1.",
    cognatos: ["σωματικός", "σύσσωμος"], verTambem: ["σάρξ", "ψυχή", "ἐκκλησία", "μέλος"]
  },
  {
    lema: "ἀλήθεια", translit: "alḗtheia", beta: "aletheia",
    classe: "substantivo, fem. (1ª decl.)", morf: "ἀλήθεια, -ας, ἡ", raiz: "ἀ- (priv.) + λαθ- (λανθάνω, “estar oculto”)",
    lsj: "1. Verdade, em oposição à mentira ou à aparência. 2. Realidade, o que de fato é. 3. Veracidade, sinceridade de caráter. (Lit.: o estado de não estar oculto.)",
    abbott: "Verdade. 1. O que é verdadeiro, conforme à realidade (Mc 5.33; Rm 1.25). 2. Veracidade, sinceridade (1Co 5.8; 2Co 7.14). 3. A verdade de Deus revelada em Cristo e no evangelho (Jo 8.32; 14.6; Gl 2.5; Ef 1.13). 4. Fidelidade, retidão (Rm 15.8).",
    nt: "≈110 ocorrências. Jo 14.6 (ἐγώ εἰμι ἡ ὁδὸς καὶ ἡ ἀλήθεια); Jo 8.32.",
    cognatos: ["ἀληθής", "ἀληθινός", "ἀληθεύω", "ἀληθῶς"], verTambem: ["λόγος", "πίστις"]
  },
  {
    lema: "ἐλευθερία", translit: "eleuthería", beta: "eleutheria",
    classe: "substantivo, fem. (1ª decl.)", morf: "ἐλευθερία, -ας, ἡ", raiz: "ἐλευθερ-",
    lsj: "1. Liberdade, condição de homem livre (em oposição à escravidão). 2. Independência política. 3. Licença, franqueza.",
    abbott: "Liberdade. 1. Condição de livre, não escravo. 2. No NT, a liberdade espiritual: emancipação do pecado, da Lei como sistema de condenação e da corrupção (Rm 8.21; Gl 5.1,13; 2Co 3.17; Tg 1.25). 3. Distinta da libertinagem — liberdade para servir no amor (Gl 5.13; 1Pe 2.16).",
    nt: "≈11 ocorrências. Gl 5.1 (τῇ ἐλευθερίᾳ ἡμᾶς Χριστὸς ἠλευθέρωσεν); Rm 8.21.",
    cognatos: ["ἐλεύθερος", "ἐλευθερόω"], verTambem: ["δοῦλος", "χάρις", "νόμος"]
  },
  {
    lema: "δοῦλος", translit: "doûlos", beta: "doulos",
    classe: "substantivo/adjetivo, masc. (2ª decl.)", morf: "δοῦλος, -ου, ὁ (adj. -η, -ον)", raiz: "—",
    lsj: "1. (subst.) escravo, servo destituído de liberdade. 2. (adj.) servil, próprio de escravo; sujeito, submisso.",
    abbott: "Escravo, servo. 1. O escravo, propriedade do senhor, sem direitos próprios (Mt 8.9; 1Co 7.21). 2. Em sentido figurado, sujeição absoluta: escravo do pecado ou da justiça (Rm 6.17,20; Jo 8.34). 3. Título de honra: “servo de Deus/de Cristo”, dedicação total ao Senhor (Rm 1.1; Fp 1.1; Tg 1.1).",
    nt: "≈124 ocorrências. Rm 1.1 (Παῦλος δοῦλος Χριστοῦ Ἰησοῦ); Fp 2.7.",
    cognatos: ["δουλεύω", "δουλεία", "δουλόω", "σύνδουλος"], verTambem: ["ἐλευθερία", "κύριος", "υἱός"]
  },
  {
    lema: "υἱοθεσία", translit: "huiothesía", beta: "huiothesia",
    classe: "substantivo, fem. (1ª decl.)", morf: "υἱοθεσία, -ας, ἡ", raiz: "υἱός + θε- (τίθημι, “pôr, constituir”)",
    lsj: "Termo jurídico do grego helenístico (inscrições e papiros): adoção, ato de constituir alguém como filho.",
    abbott: "Adoção filial. Conceito exclusivamente paulino no NT: o ato gracioso pelo qual Deus constitui os crentes como seus filhos, com todos os direitos e a herança. 1. Privilégio histórico de Israel (Rm 9.4). 2. Realidade presente do crente, pela qual clama “Abba, Pai” (Rm 8.15; Gl 4.5; Ef 1.5). 3. Sua consumação futura: a redenção do corpo (Rm 8.23).",
    nt: "5 ocorrências. Rm 8.15 (ἐλάβετε πνεῦμα υἱοθεσίας); Rm 8.23; Gl 4.5; Ef 1.5; Rm 9.4.",
    cognatos: ["υἱός", "τίθημι"], verTambem: ["κληρονόμος", "πατήρ", "πνεῦμα", "τέκνον"]
  },
  {
    lema: "κληρονόμος", translit: "klēronómos", beta: "kleronomos",
    classe: "substantivo, masc. (2ª decl.)", morf: "κληρονόμος, -ου, ὁ", raiz: "κλῆρος (“sorte, quinhão”) + νεμ- (νέμω)",
    lsj: "Aquele que recebe um quinhão por sorteio ou herança; herdeiro.",
    abbott: "Herdeiro. 1. Em sentido próprio, quem herda bens (Mt 21.38; Gl 4.1). 2. Em sentido espiritual: o crente como herdeiro de Deus e das promessas, em virtude da adoção (Rm 4.13–14; 8.17; Gl 3.29; Tt 3.7). 3. Cristo, “herdeiro de tudo” (Hb 1.2).",
    nt: "≈15 ocorrências. Rm 8.17 (κληρονόμοι μὲν θεοῦ, συγκληρονόμοι δὲ Χριστοῦ); Gl 4.7.",
    cognatos: ["κληρονομία", "κληρονομέω", "κλῆρος", "συγκληρονόμος"], verTambem: ["υἱοθεσία", "ἐπαγγελία"]
  },
  {
    lema: "συγκληρονόμος", translit: "synklēronómos", beta: "sunkleronomos",
    classe: "adjetivo/substantivo, masc.", morf: "συγκληρονόμος, -ον", raiz: "σύν + κληρονόμος",
    lsj: "Co-herdeiro; aquele que herda juntamente com outro (termo do grego helenístico).",
    abbott: "Co-herdeiro, herdeiro juntamente com. 1. Os crentes como co-herdeiros de Cristo, partilhando de sua glória após partilhar de seu sofrimento (Rm 8.17). 2. Os gentios como co-herdeiros com Israel das promessas (Ef 3.6). 3. Marido e mulher, “co-herdeiros da graça da vida” (1Pe 3.7); cf. Hb 11.9.",
    nt: "4 ocorrências. Rm 8.17; Ef 3.6; Hb 11.9; 1Pe 3.7.",
    cognatos: ["κληρονόμος", "κληρονομία", "σύν"], verTambem: ["υἱοθεσία", "δόξα", "πάσχω"]
  },
  {
    lema: "προορίζω", translit: "proorízō", beta: "proorizo",
    classe: "verbo", morf: "προορίζω, aor. προώρισα, aor. pass. προωρίσθην", raiz: "πρό + ὁρίζω (“delimitar, determinar”)",
    lsj: "Determinar de antemão, demarcar previamente (termo raro, tardio).",
    abbott: "Predestinar, determinar de antemão. Ato de Deus que, antes da fundação do mundo, fixa o destino e o propósito dos eleitos: conformá-los à imagem de seu Filho e chamá-los à glória (At 4.28; Rm 8.29–30; 1Co 2.7; Ef 1.5,11).",
    nt: "6 ocorrências. Rm 8.29 (οὓς προέγνω, καὶ προώρισεν); Ef 1.5,11; At 4.28; 1Co 2.7; Rm 8.30.",
    cognatos: ["ὁρίζω", "ὅριον", "πρόθεσις"], verTambem: ["προγινώσκω", "καλέω", "ἐκλέγομαι"]
  },
  {
    lema: "προγινώσκω", translit: "proginṓskō", beta: "proginosko",
    classe: "verbo", morf: "προγινώσκω, aor. προέγνων, pf. pass. προέγνωσμαι", raiz: "πρό + γινώσκω (“conhecer”)",
    lsj: "Conhecer ou perceber de antemão; saber previamente.",
    abbott: "Conhecer de antemão, pré-conhecer. 1. Saber previamente um fato (At 26.5; 2Pe 3.17). 2. Em sentido teológico, o pré-conhecimento eletivo de Deus — não mera presciência, mas o conhecer que precede e funda a predestinação dos seus (Rm 8.29; 11.2; 1Pe 1.20, dito de Cristo).",
    nt: "5 ocorrências. Rm 8.29 (οὓς προέγνω); Rm 11.2; 1Pe 1.20; At 26.5; 2Pe 3.17.",
    cognatos: ["γινώσκω", "πρόγνωσις", "γνῶσις"], verTambem: ["προορίζω", "ἐκλέγομαι", "πρόθεσις"]
  },
  {
    lema: "πρόθεσις", translit: "próthesis", beta: "prothesis",
    classe: "substantivo, fem. (3ª decl.)", morf: "πρόθεσις, -εως, ἡ", raiz: "πρό + θε- (τίθημι)",
    lsj: "1. Ato de pôr diante, exposição pública. 2. Propósito, plano, intenção. 3. (gram.) prefixo, preposição.",
    abbott: "1. Exposição: οἱ ἄρτοι τῆς προθέσεως, os “pães da proposição” expostos no santuário (Mt 12.4; Hb 9.2). 2. Propósito, desígnio — esp. o propósito eterno e soberano de Deus na eleição e salvação (Rm 8.28; 9.11; Ef 1.11; 3.11; 2Tm 1.9).",
    nt: "≈12 ocorrências. Rm 8.28 (τοῖς κατὰ πρόθεσιν κλητοῖς οὖσιν); Ef 1.11.",
    cognatos: ["προτίθημι", "τίθημι"], verTambem: ["προορίζω", "βουλή", "θέλημα"]
  },
  {
    lema: "κατάκριμα", translit: "katákrima", beta: "katakrima",
    classe: "substantivo, neutro (3ª decl.)", morf: "κατάκριμα, -ατος, τό", raiz: "κατά + κρι- (κρίνω, “julgar”)",
    lsj: "Sentença condenatória; condenação, penalidade (termo tardio/forense).",
    abbott: "Condenação, sentença penal. O veredicto adverso e a pena que dele decorre. Em Paulo, o estado de condenação sob o pecado, do qual o crente em Cristo é libertado (Rm 5.16,18; 8.1, οὐδὲν ἄρα νῦν κατάκριμα τοῖς ἐν Χριστῷ Ἰησοῦ).",
    nt: "3 ocorrências. Rm 5.16; Rm 5.18; Rm 8.1.",
    cognatos: ["κατακρίνω", "κατάκρισις", "κρίνω", "κρίμα"], verTambem: ["δικαίωμα", "δικαιόω", "ἁμαρτία"]
  },
  {
    lema: "φρόνημα", translit: "phrónēma", beta: "phronema",
    classe: "substantivo, neutro (3ª decl.)", morf: "φρόνημα, -ατος, τό", raiz: "φρην- (φρονέω, “pensar, ter mentalidade”)",
    lsj: "1. Modo de pensar, disposição da mente. 2. Espírito altivo, arrogância. 3. Resolução, determinação.",
    abbott: "Mentalidade, modo de pensar — a inclinação fundamental da mente e da vontade. Exclusivo de Romanos 8: o “φρόνημα da carne” é morte e inimizade contra Deus, ao passo que o “φρόνημα do Espírito” é vida e paz (Rm 8.6,7,27).",
    nt: "4 ocorrências. Rm 8.6 (τὸ γὰρ φρόνημα τῆς σαρκὸς θάνατος); Rm 8.7; 8.27.",
    cognatos: ["φρονέω", "φρόνησις", "φρόνιμος", "σωφρονέω"], verTambem: ["νοῦς", "σάρξ", "πνεῦμα"]
  },
  {
    lema: "στενάζω", translit: "stenázō", beta: "stenazo",
    classe: "verbo", morf: "στενάζω, fut. στενάξω, aor. ἐστέναξα", raiz: "στεν- (στενός, “estreito, apertado”)",
    lsj: "Gemer, suspirar; lamentar-se com som profundo (sob pressão ou angústia).",
    abbott: "Gemer, suspirar. 1. Soltar gemido de dor, opressão ou anseio (Mc 7.34; 2Co 5.2,4; Hb 13.17; Tg 5.9). 2. Em Romanos 8, o gemer da criação e dos crentes sob a presente decadência, na expectativa ansiosa da redenção (Rm 8.23; cf. o subst. cognato em 8.22,26).",
    nt: "6 ocorrências (verbo). 2Co 5.2,4; Rm 8.23; Mc 7.34; Hb 13.17; Tg 5.9.",
    cognatos: ["στεναγμός", "συστενάζω", "ἀναστενάζω", "στενός"], verTambem: ["ἐλπίς", "ὑπομονή", "πνεῦμα"]
  },
  {
    lema: "ἀπολύτρωσις", translit: "apolýtrōsis", beta: "apolutrosis",
    classe: "substantivo, fem. (3ª decl.)", morf: "ἀπολύτρωσις, -εως, ἡ", raiz: "ἀπό + λυτρ- (λύτρον, “resgate”)",
    lsj: "Resgate mediante pagamento; libertação de cativos por preço (termo raro, helenístico).",
    abbott: "Redenção, libertação por resgate. 1. Livramento mediante um preço pago — a obra de Cristo que liberta do pecado e da culpa (Rm 3.24; 1Co 1.30; Ef 1.7; Cl 1.14). 2. Sua consumação escatológica: a redenção do corpo e a libertação plena (Rm 8.23; Ef 1.14; 4.30; Lc 21.28). 3. Em Hb 11.35, livramento ao preço de apostasia (recusado).",
    nt: "≈10 ocorrências. Rm 8.23 (τὴν ἀπολύτρωσιν τοῦ σώματος ἡμῶν); Ef 1.7.",
    cognatos: ["λυτρόω", "λύτρον", "λύτρωσις", "λυτρωτής"], verTambem: ["σωτηρία", "αἷμα", "υἱοθεσία"]
  },
  {
    lema: "ἐντυγχάνω", translit: "entynchánō", beta: "entugchano",
    classe: "verbo", morf: "ἐντυγχάνω, aor. ἐνέτυχον", raiz: "ἐν + τυγχάνω (“encontrar, alcançar”)",
    lsj: "1. Encontrar-se com, deparar com (com dat.). 2. Dirigir-se a alguém; abordar com um pedido. 3. Interceder, fazer petição em favor (ou contra) alguém.",
    abbott: "Interceder, dirigir petição. 1. Apelar a uma autoridade contra alguém (At 25.24; Rm 11.2, “contra Israel”). 2. Interceder em favor de outrem: Cristo intercede pelos santos (Rm 8.34; Hb 7.25) e o Espírito intercede por nós (Rm 8.27; cf. o composto ὑπερεντυγχάνει em 8.26).",
    nt: "5 ocorrências. Rm 8.27; Rm 8.34; Hb 7.25; At 25.24; Rm 11.2.",
    cognatos: ["ὑπερεντυγχάνω", "τυγχάνω", "ἔντευξις"], verTambem: ["πνεῦμα", "προσεύχομαι", "παράκλητος"]
  },
  {
    lema: "ἐλπίζω", translit: "elpízō", beta: "elpizo",
    classe: "verbo", morf: "ἐλπίζω, fut. ἐλπιῶ, aor. ἤλπισα, pf. ἤλπικα", raiz: "ἐλπ-",
    lsj: "1. Esperar, aguardar (bem ou mal). 2. Supor, antecipar. 3. Confiar, pôr a esperança em.",
    abbott: "Esperar, ter esperança. 1. Aguardar com confiança (Lc 6.34; 1Co 16.7). 2. Pôr a esperança em Deus ou em Cristo, com a ideia de confiança fundada (Rm 15.12; 1Tm 4.10; 1Pe 1.13). 3. Construído com εἰς, ἐπί ou dat. para indicar o objeto da esperança.",
    nt: "≈31 ocorrências. Rm 8.24–25 (ὃ … οὐ βλέπει, ἐλπίζει); 1Tm 4.10.",
    cognatos: ["ἐλπίς", "προελπίζω", "ἀπελπίζω"], verTambem: ["πιστεύω", "ὑπομένω", "ἐλπίς"]
  },
  {
    lema: "ἅγιος", translit: "hágios", beta: "hagios",
    classe: "adjetivo (2-1-2)", morf: "ἅγιος, -α, -ον", raiz: "ἁγ- (cf. ἅζομαι, “venerar”)",
    lsj: "1. Dedicado aos deuses, sagrado, consagrado. 2. (de lugares e ritos) santo, inviolável. 3. (sentido moral, tardio) puro, santo.",
    abbott: "Santo. 1. Separado para Deus, consagrado (Mt 4.5, “a santa cidade”; 2Tm 3.15). 2. Moralmente puro, sem mácula (Rm 12.1; 1Pe 1.16). 3. τὸ ἅγιον / τὰ ἅγια: o santuário (Hb 9.1–3). 4. οἱ ἅγιοι: “os santos”, designação dos crentes como povo consagrado de Deus (Rm 1.7; 8.27; 1Co 1.2; Ef 1.1). 5. τὸ Πνεῦμα τὸ ἅγιον: o Espírito Santo.",
    nt: "≈233 ocorrências. Rm 12.1 (θυσίαν ζῶσαν ἁγίαν); 1Pe 1.16 (ἅγιοι ἔσεσθε).",
    cognatos: ["ἁγιάζω", "ἁγιασμός", "ἁγιότης", "ἁγιωσύνη"], verTambem: ["δίκαιος", "καθαρός", "ἀκάθαρτος"]
  },
  {
    lema: "ἁγιασμός", translit: "hagiasmós", beta: "hagiasmos",
    classe: "substantivo, masc. (2ª decl.)", morf: "ἁγιασμός, -οῦ, ὁ", raiz: "ἁγ-",
    lsj: "Termo bíblico/eclesiástico (ausente no grego clássico): consagração, santificação.",
    abbott: "Santificação. 1. O processo e o estado de ser tornado santo — separação do pecado e consagração a Deus, obra do Espírito na vida do crente (Rm 6.19,22; 1Ts 4.3,4,7; 2Ts 2.13; 1Pe 1.2). 2. O resultado: santidade de vida (1Co 1.30; Hb 12.14, “sem a qual ninguém verá o Senhor”).",
    nt: "≈10 ocorrências. Rm 6.22 (ἔχετε τὸν καρπὸν… εἰς ἁγιασμόν); 1Ts 4.3.",
    cognatos: ["ἁγιάζω", "ἅγιος", "ἁγιωσύνη"], verTambem: ["δικαιοσύνη", "καθαρισμός", "τελειόω"]
  },
  {
    lema: "ἔργον", translit: "érgon", beta: "ergon",
    classe: "substantivo, neutro (2ª decl.)", morf: "ἔργον, -ου, τό", raiz: "ϝεργ- (cf. ingl. work)",
    lsj: "1. Obra, trabalho, ação. 2. Tarefa, ofício, função. 3. Feito, façanha. 4. Obra realizada, produto. 5. Realidade (ἔργῳ, “de fato”).",
    abbott: "Obra, ação. 1. Trabalho, atividade, ocupação (Mc 13.34; Jo 6.28). 2. Feito, ato realizado — bom ou mau (Mt 5.16; Jo 3.19–20; Tt 1.16). 3. αἱ ἔργα τοῦ νόμου: as “obras da Lei”, que não justificam (Rm 3.20,28; Gl 2.16). 4. As obras de Deus e as obras boas que decorrem da fé (Jo 9.3; Ef 2.10; Tg 2.14–26).",
    nt: "≈169 ocorrências. Ef 2.9–10 (οὐκ ἐξ ἔργων… κτισθέντες… ἐπὶ ἔργοις ἀγαθοῖς); Tg 2.17.",
    cognatos: ["ἐργάζομαι", "ἐργάτης", "ἐνεργέω", "συνεργός"], verTambem: ["νόμος", "πίστις", "χάρις"]
  },
  {
    lema: "ἀγαθός", translit: "agathós", beta: "agathos",
    classe: "adjetivo (2-1-2)", morf: "ἀγαθός, -ή, -όν (comp. ἀμείνων/βελτίων; superl. ἄριστος/βέλτιστος)", raiz: "—",
    lsj: "1. Bom, de boa qualidade. 2. (de pessoas) hábil, valoroso, nobre. 3. Moralmente bom, virtuoso. 4. Benéfico, útil, vantajoso.",
    abbott: "Bom. 1. Útil, benéfico, agradável (Mt 7.11; Rm 8.28, “todas as coisas concorrem para o bem”). 2. Moralmente bom, reto, virtuoso (Mt 19.16–17; Lc 6.45). 3. ἀγαθὸν ἔργον: boa obra (2Co 9.8; Cl 1.10). 4. τὸ ἀγαθόν: o bem (Rm 7.18–19; 12.21).",
    nt: "≈102 ocorrências. Rm 8.28 (πάντα συνεργεῖ εἰς ἀγαθόν); Gl 6.10.",
    cognatos: ["ἀγαθωσύνη", "ἀγαθοποιέω", "ἀγαθοεργέω"], verTambem: ["καλός", "δίκαιος", "χρηστός"]
  },
  {
    lema: "γινώσκω", translit: "ginṓskō", beta: "ginosko",
    classe: "verbo", morf: "γινώσκω, fut. γνώσομαι, aor. ἔγνων, pf. ἔγνωκα", raiz: "γνω-",
    lsj: "1. Vir a conhecer, perceber, aprender. 2. Conhecer por observação ou experiência. 3. Reconhecer, discernir. 4. Decidir, julgar.",
    abbott: "Conhecer. 1. Adquirir conhecimento, perceber, compreender (Mt 13.11; Jo 8.32). 2. Conhecer por experiência ou relação pessoal — incl. o conhecimento íntimo entre Deus e os seus (Jo 10.14–15,27; Gl 4.9; 1Co 8.3). 3. Idiomatismo semítico para a relação conjugal (Mt 1.25; Lc 1.34). 4. Reconhecer, estar ciente (Mc 5.29).",
    nt: "≈222 ocorrências. Jo 8.32 (γνώσεσθε τὴν ἀλήθειαν); Fp 3.10.",
    cognatos: ["γνῶσις", "γνωρίζω", "ἐπιγινώσκω", "προγινώσκω"], verTambem: ["οἶδα", "νοῦς", "ἀλήθεια"]
  },
  {
    lema: "καλέω", translit: "kaléō", beta: "kaleo",
    classe: "verbo", morf: "καλέω, fut. καλέσω, aor. ἐκάλεσα, pf. κέκληκα, pf. pass. κέκλημαι", raiz: "καλ-",
    lsj: "1. Chamar, convocar. 2. Convidar (a um banquete). 3. Dar nome a; chamar por um nome. 4. Invocar (uma divindade).",
    abbott: "Chamar. 1. Chamar em voz alta, convocar (Mt 20.8). 2. Convidar (Mt 22.3; Lc 14.8). 3. Dar nome, denominar (Mt 1.21; Lc 1.13). 4. Em sentido teológico, o chamado eficaz de Deus à salvação e à comunhão com Cristo (Rm 8.30; 9.24; 1Co 1.9; Gl 1.6,15).",
    nt: "≈148 ocorrências. Rm 8.30 (οὓς προώρισεν, τούτους καὶ ἐκάλεσεν); 1Co 1.9.",
    cognatos: ["κλῆσις", "κλητός", "ἐκκλησία", "παρακαλέω"], verTambem: ["προορίζω", "ἐκλέγομαι", "δικαιόω"]
  },
  {
    lema: "ἐλπίς", translit: "elpís", beta: "elpis_dup", oculto: true,
    classe: "", morf: "", raiz: "", lsj: "", abbott: "", nt: "", cognatos: [], verTambem: []
  }
];

/* Remove marcadores internos de duplicação, se houver. */
window.LEXICON_DATA = window.LEXICON_DATA.filter(function (e) { return !e.oculto; });
