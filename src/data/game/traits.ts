import type { TraitDef } from "./types";

/** Escala ordinal de conservação da IUCN, do menos ao mais ameaçado. */
export const CONSERVACAO_SCALE = ["LC", "NT", "VU", "EN", "CR", "EW"];

/**
 * Ordem das características no tabuleiro. Todos os slots são mostrados desde o
 * início; começam ocultos e vão acendendo conforme os chutes revelam.
 *
 * Grupos:
 *  - Universais: valem para qualquer reino.
 *  - "Animal-only": viram "não se aplica" fora de Animalia.
 *  - Ordinais/numéricos: dão dica de seta ↑/↓.
 */
export const TRAITS: TraitDef[] = [
  // --- Universais ---
  { key: "reino", labelPt: "Reino/Domínio", labelEn: "Kingdom/Domain", kind: "categorical" },
  {
    key: "taxonomia",
    labelPt: "Taxonomia",
    labelEn: "Taxonomy",
    kind: "hierarchical",
    hintPt: "amarelo = mesmo ramo",
    hintEn: "yellow = same branch",
  },
  { key: "grupo", labelPt: "Grupo", labelEn: "Group", kind: "categorical" },
  { key: "simetria", labelPt: "Simetria", labelEn: "Symmetry", kind: "categorical" },
  { key: "reproducao", labelPt: "Reprodução", labelEn: "Reproduction", kind: "categorical" },
  { key: "fecundacao", labelPt: "Fecundação", labelEn: "Fertilization", kind: "categorical" },
  { key: "desenvolvimento", labelPt: "Desenvolvimento", labelEn: "Development", kind: "categorical" },
  { key: "habitat", labelPt: "Habitat", labelEn: "Habitat", kind: "categorical" },
  { key: "dieta", labelPt: "Dieta", labelEn: "Diet", kind: "categorical" },
  { key: "zoonose", labelPt: "Zoonose?", labelEn: "Zoonosis?", kind: "categorical" },
  { key: "relevancia", labelPt: "Relevância", labelEn: "Relevance", kind: "categorical" },

  // --- Animal-only (N/A fora de Animalia) ---
  { key: "termorregulacao", labelPt: "Termorregulação", labelEn: "Thermoregulation", kind: "categorical" },
  { key: "revestimento", labelPt: "Revestimento", labelEn: "Body covering", kind: "categorical" },
  { key: "respiracao", labelPt: "Respiração", labelEn: "Respiration", kind: "categorical" },
  { key: "esqueleto", labelPt: "Esqueleto", labelEn: "Skeleton", kind: "categorical" },
  { key: "excrecao", labelPt: "Excreção N", labelEn: "N excretion", kind: "categorical" },

  // --- Ordinais / numéricos ---
  {
    key: "conservacao",
    labelPt: "Conservação (IUCN)",
    labelEn: "Conservation (IUCN)",
    kind: "ordinal",
    scale: CONSERVACAO_SCALE,
    hintPt: "seta = alvo mais/menos ameaçado",
    hintEn: "arrow = target more/less threatened",
  },
  {
    key: "massaKg",
    labelPt: "Massa corporal (kg)",
    labelEn: "Body mass (kg)",
    kind: "numeric",
    hintPt: "seta = alvo mais pesado/leve",
    hintEn: "arrow = target heavier/lighter",
  },
];

/** A característica revelada de graça no início da rodada (a "dica"). */
export const FREE_HINT_KEY = "reino";
