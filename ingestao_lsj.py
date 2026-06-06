#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
============================================================================
 LÉXIKON — Script de ingestão (LSJ + Abbott-Smith de domínio público)
============================================================================

Este script converte os dados lexicográficos ABERTOS da Perseus Digital
Library para o formato `dados.js` que o aplicativo Léxikon consome. Com ele
você escala o léxico do núcleo curado (~60 verbetes) para a cobertura
completa, SEM tocar em nenhuma obra protegida por direitos autorais.

----------------------------------------------------------------------------
DE ONDE VÊM OS DADOS (domínio público / licença aberta)
----------------------------------------------------------------------------
1) LIDDELL-SCOTT-JONES (LSJ) — TEI XML da Perseus
   Repositório: https://github.com/PerseusDL/lexica
   Caminho:     CTS_XML_TEI/perseus/pdllex/grc/lsj/
   Arquivos:    grc.lsj.perseus-eng1.xml … grc.lsj.perseus-eng27.xml
   Licença:     Creative Commons (consulte o LICENSE do repositório).

2) ABBOTT-SMITH — "A Manual Greek Lexicon of the New Testament" (1922)
   Obra em DOMÍNIO PÚBLICO. Versões digitalizadas em TEI/texto existem em
   projetos de humanidades digitais (p.ex. translations of the Bible /
   biblicalhumanities). Ajuste o parser conforme o formato do arquivo obtido.

----------------------------------------------------------------------------
COMO USAR
----------------------------------------------------------------------------
  # 1. Baixe os XML do LSJ (exemplo):
  git clone --depth 1 https://github.com/PerseusDL/lexica.git

  # 2. Rode a ingestão apontando para a pasta dos XML:
  python3 ingestao_lsj.py \
      --lsj-dir lexica/CTS_XML_TEI/perseus/pdllex/grc/lsj \
      --saida dados_completo.js \
      [--abbott abbott_smith.xml] \
      [--limite 0]

  # 3. No index.html, troque a linha:
  #      <script src="dados.js"></script>
  #    por:
  #      <script src="dados_completo.js"></script>

----------------------------------------------------------------------------
SOBRE A TRADUÇÃO PARA O PORTUGUÊS
----------------------------------------------------------------------------
As glosas do LSJ/Abbott-Smith estão em inglês. Este script preserva o texto
original e marca cada verbete com `"idioma":"en"`. A tradução de ~116 mil
verbetes é um trabalho à parte: faça-a de forma INCREMENTAL e REVISADA (não
confie em tradução automática para terminologia técnica). O app funciona
perfeitamente com glosas em inglês enquanto a tradução avança; o núcleo
curado em `dados.js` já está 100% em português.
============================================================================
"""

import argparse, glob, json, os, re, sys, unicodedata
import xml.etree.ElementTree as ET

TEI = "{http://www.tei-c.org/ns/1.0}"

# ---------------------------------------------------------------------------
# Transliteração e chaves de busca
# ---------------------------------------------------------------------------
MAPA = {"α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"e","θ":"th","ι":"i",
        "κ":"k","λ":"l","μ":"m","ν":"n","ξ":"x","ο":"o","π":"p","ρ":"r","σ":"s",
        "ς":"s","τ":"t","υ":"u","φ":"ph","χ":"ch","ψ":"ps","ω":"o"}

def sem_diacriticos(s):
    return "".join(c for c in unicodedata.normalize("NFD", s or "")
                    if unicodedata.category(c) != "Mn")

def translitera(lema):
    base = sem_diacriticos(lema).lower()
    return "".join(MAPA.get(c, c) for c in base)

def primeira_letra(lema):
    b = sem_diacriticos(lema).lower()
    return b[0] if b else ""

# ---------------------------------------------------------------------------
# Limpeza de texto dos nós TEI
# ---------------------------------------------------------------------------
def texto_limpo(elem):
    """Extrai o texto de um elemento TEI, preservando o grego e juntando espaços."""
    partes = []
    for no in elem.iter():
        if no.text:
            partes.append(no.text)
        if no.tail:
            partes.append(no.tail)
    txt = " ".join(partes)
    txt = re.sub(r"\s+", " ", txt).strip()
    return txt

def detecta_classe(entrada_elem):
    """Tenta inferir a classe gramatical a partir de <gramGrp>/<pos>."""
    for tag in ("pos", "gramGrp", "itype"):
        el = entrada_elem.find(f".//{TEI}{tag}")
        if el is not None:
            t = texto_limpo(el).lower()
            if not t:
                continue
            if any(k in t for k in ("verb", "v.")):       return "verbo"
            if any(k in t for k in ("subst", "noun", "ὁ", "ἡ", "τό")): return "substantivo"
            if any(k in t for k in ("adj", "adjective")): return "adjetivo"
            if "adv" in t:  return "advérbio"
            if "prep" in t: return "preposição"
            return t
    return ""

# ---------------------------------------------------------------------------
# Parser do LSJ (Perseus TEI)
# ---------------------------------------------------------------------------
def processa_lsj(diretorio, limite=0):
    arquivos = sorted(glob.glob(os.path.join(diretorio, "*.xml")))
    if not arquivos:
        sys.exit(f"[ERRO] Nenhum .xml encontrado em: {diretorio}")
    verbetes = {}
    total = 0
    for arq in arquivos:
        print(f"  · lendo {os.path.basename(arq)} …")
        try:
            tree = ET.parse(arq)
        except ET.ParseError as e:
            print(f"    [aviso] falha ao ler {arq}: {e}")
            continue
        for entrada in tree.iter(f"{TEI}entry"):
            lema = entrada.get("key") or ""
            cab = entrada.find(f"{TEI}form/{TEI}orth")
            if cab is not None and texto_limpo(cab):
                lema = texto_limpo(cab)
            lema = re.sub(r"\d+$", "", lema).strip()   # remove índices homógrafos (λόγος1 → λόγος)
            if not lema:
                continue
            corpo = texto_limpo(entrada)
            # remove a repetição do lema no início do corpo
            corpo = re.sub(r"^" + re.escape(lema) + r"[,\s]*", "", corpo).strip()
            if not corpo:
                continue
            classe = detecta_classe(entrada)
            if lema in verbetes:
                # homógrafo: acumula como acepção adicional
                verbetes[lema]["lsj"] += " ‖ " + corpo
            else:
                verbetes[lema] = {
                    "lema": lema,
                    "translit": "",          # LSJ não traz transliteração fonética; deixamos vazio
                    "beta": translitera(lema),
                    "classe": classe,
                    "morf": "",
                    "raiz": "—",
                    "lsj": corpo,
                    "abbott": "",
                    "nt": "",
                    "cognatos": [],
                    "verTambem": [],
                    "idioma": "en"
                }
            total += 1
            if limite and len(verbetes) >= limite:
                print(f"  · limite de {limite} verbetes atingido.")
                return verbetes
    print(f"  · LSJ: {len(verbetes)} verbetes únicos ({total} entradas lidas).")
    return verbetes

# ---------------------------------------------------------------------------
# Parser do Abbott-Smith (genérico; ajuste conforme o XML obtido)
# ---------------------------------------------------------------------------
def processa_abbott(caminho, verbetes):
    if not caminho or not os.path.exists(caminho):
        return verbetes
    print(f"  · mesclando Abbott-Smith de {caminho} …")
    try:
        tree = ET.parse(caminho)
    except ET.ParseError as e:
        print(f"    [aviso] não foi possível ler o Abbott-Smith: {e}")
        return verbetes
    novos = 0
    for entrada in tree.iter(f"{TEI}entry"):
        cab = entrada.find(f".//{TEI}orth")
        lema = texto_limpo(cab) if cab is not None else (entrada.get("key") or "")
        lema = re.sub(r"\d+$", "", lema or "").strip()
        if not lema:
            continue
        corpo = texto_limpo(entrada)
        corpo = re.sub(r"^" + re.escape(lema) + r"[,\s]*", "", corpo).strip()
        if lema in verbetes:
            verbetes[lema]["abbott"] = corpo
        else:
            verbetes[lema] = {
                "lema": lema, "translit": "", "beta": translitera(lema),
                "classe": detecta_classe(entrada), "morf": "", "raiz": "—",
                "lsj": "", "abbott": corpo, "nt": "", "cognatos": [],
                "verTambem": [], "idioma": "en"
            }
            novos += 1
    print(f"  · Abbott-Smith: {novos} verbetes novos mesclados.")
    return verbetes

# ---------------------------------------------------------------------------
# Saída no formato dados.js
# ---------------------------------------------------------------------------
def escreve_dados_js(verbetes, saida):
    lista = sorted(verbetes.values(), key=lambda e: e["lema"])
    corpo = json.dumps(lista, ensure_ascii=False, indent=1)
    cabecalho = (
        "/* Gerado por ingestao_lsj.py — dados de domínio público (LSJ/Perseus + Abbott-Smith).\n"
        "   Glosas em inglês marcadas com \"idioma\":\"en\"; traduza de forma incremental e revisada.\n"
        f"   Total de verbetes: {len(lista)}. */\n"
        "window.LEXICON_DATA = "
    )
    with open(saida, "w", encoding="utf-8") as f:
        f.write(cabecalho + corpo + ";\n")
    print(f"\n[OK] {len(lista)} verbetes gravados em: {saida}")
    print("     No index.html, aponte <script src=\"...\"> para este arquivo.")

# ---------------------------------------------------------------------------
def main():
    ap = argparse.ArgumentParser(description="Ingestão LSJ/Abbott-Smith → dados.js (Léxikon)")
    ap.add_argument("--lsj-dir", required=True, help="Pasta com os XML do LSJ (Perseus TEI)")
    ap.add_argument("--abbott", default="", help="(opcional) XML do Abbott-Smith")
    ap.add_argument("--saida", default="dados_completo.js", help="Arquivo de saída")
    ap.add_argument("--limite", type=int, default=0, help="Limite de verbetes (0 = todos; útil para teste)")
    args = ap.parse_args()

    print("Iniciando ingestão…")
    verbetes = processa_lsj(args.lsj_dir, args.limite)
    verbetes = processa_abbott(args.abbott, verbetes)
    escreve_dados_js(verbetes, args.saida)

if __name__ == "__main__":
    main()
