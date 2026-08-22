// Tipos do jogo "Bicho do Dia" — um Wordle para veterinários e biólogos.
//
// A ideia: um alvo por dia, escolhido de forma determinística a partir da data.
// O jogador chuta espécies e, a cada chute, compara as características técnicas
// do chute com as do alvo. Não há limite de chutes; o objetivo é acertar com o
// menor número possível.

/** Como uma característica é comparada entre o chute e o alvo. */
export type TraitKind = "categorical" | "hierarchical" | "ordinal" | "numeric";

/**
 * Resultado da comparação de uma característica.
 * - exact:    o valor do chute bate com o do alvo (verde).
 * - partial:  parcialmente próximo — mesmo ramo taxonômico, ou seta ↑/↓ em
 *             escalas ordinais/numéricas (amarelo).
 * - mismatch: não bate (cinza/oculto).
 * - na:       a característica não se aplica ao grupo do alvo E também não se
 *             aplica ao chute — ou seja, ambos são "não se aplica" (informação!).
 */
export type MatchState = "exact" | "partial" | "mismatch" | "na";

/** Direção da dica em escalas ordinais/numéricas, do ponto de vista do alvo. */
export type Arrow = "up" | "down" | null;

/** Definição de uma característica exibida no tabuleiro. */
export interface TraitDef {
  /** Chave em `Animal.campos` (ou "taxonomia", tratada de forma especial). */
  key: string;
  labelPt: string;
  labelEn: string;
  kind: TraitKind;
  /** Para `ordinal`: a escala ordenada (do menor para o maior). */
  scale?: string[];
  /** Dica curta mostrada abaixo do rótulo (opcional). */
  hintPt?: string;
  hintEn?: string;
}

/** Um nível da classificação taxonômica (posto relativo a partir do reino). */
export interface TaxonRank {
  rank: string; // ex.: "Filo", "Classe", "Ordem", "Família"
  name: string; // ex.: "Chordata", "Mammalia", ...
}

/** Uma entrada da lista de animais/agentes. */
export interface Animal {
  id: string;
  nomeComum: string;
  nomeCientifico: string;
  emoji: string;
  /**
   * Só entradas revisadas entram no sorteio diário e no autocomplete.
   * Permite crescer a lista até 365 sem tocar no motor.
   */
  revisado: boolean;
  /** Classificação taxonômica abaixo do reino, do posto mais alto ao mais baixo. */
  taxonomia: TaxonRank[];
  /** Demais características, indexadas pela chave do `TraitDef`. `null` = não se aplica. */
  campos: Record<string, string | number | null>;
}

/** Comparação de uma característica de um chute contra o alvo. */
export interface TraitComparison {
  state: MatchState;
  /** Valor do chute a exibir no chip da linha. */
  display: string;
  /** Seta para escalas ordinais/numéricas (do ponto de vista do alvo). */
  arrow: Arrow;
}

/** Resultado completo da comparação de um chute. */
export interface GuessResult {
  animal: Animal;
  correct: boolean;
  traits: Record<string, TraitComparison>;
}
