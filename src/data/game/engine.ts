import type {
  Animal,
  Arrow,
  GuessResult,
  MatchState,
  TraitComparison,
  TraitDef,
} from "./types";
import { TRAITS } from "./traits";

// -----------------------------------------------------------------------------
// Seleção diária determinística (sem backend).
// -----------------------------------------------------------------------------

/** Data local (America/Sao_Paulo) no formato YYYY-MM-DD, para a virada do dia. */
export function localDateString(date: Date = new Date(), timeZone = "America/Sao_Paulo"): string {
  // en-CA formata como YYYY-MM-DD.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

/** Hash de string estável e determinístico (FNV-1a, 32 bits). */
export function hashString(input: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}

/** Escolhe o alvo do dia a partir da data. Todos veem o mesmo bicho no mesmo dia. */
export function pickDaily(pool: Animal[], dateStr: string = localDateString()): Animal {
  const idx = hashString(dateStr) % pool.length;
  return pool[idx];
}

// -----------------------------------------------------------------------------
// Comparação de características.
// -----------------------------------------------------------------------------

function bothNull(a: unknown, b: unknown): boolean {
  return a == null && b == null;
}

/** Compara a taxonomia contando quantos postos iniciais coincidem. */
function compareTaxonomy(guess: Animal, target: Animal): TraitComparison {
  const g = guess.taxonomia;
  const t = target.taxonomia;
  let shared = 0;
  const n = Math.min(g.length, t.length);
  for (let i = 0; i < n; i++) {
    if (g[i].name === t[i].name) shared++;
    else break;
  }

  const fullyEqual = shared === g.length && shared === t.length;
  // Exibe o caminho do chute até o ponto compartilhado (ou o mais profundo).
  const deepest = g[Math.max(0, Math.min(g.length, shared) - 1)];
  const display = g.map((r) => r.name).join(" › ");

  let state: MatchState;
  if (fullyEqual) state = "exact";
  else if (shared > 0) state = "partial";
  else state = "mismatch";

  const compared: TraitComparison = { state, display, arrow: null };
  if (state === "partial") {
    // Anota até onde bate: "mesmo <posto>: <nome>".
    compared.display = `${display}  ·  ✓ até ${deepest.rank}`;
  }
  return compared;
}

function compareCategorical(g: unknown, t: unknown): TraitComparison {
  if (bothNull(g, t)) return { state: "na", display: "N/A", arrow: null };
  if (g == null || t == null) {
    return { state: "mismatch", display: g == null ? "N/A" : String(g), arrow: null };
  }
  return { state: g === t ? "exact" : "mismatch", display: String(g), arrow: null };
}

function compareOrdinal(def: TraitDef, g: unknown, t: unknown): TraitComparison {
  if (bothNull(g, t)) return { state: "na", display: "N/A", arrow: null };
  if (g == null || t == null) {
    return { state: "mismatch", display: g == null ? "N/A" : String(g), arrow: null };
  }
  const scale = def.scale ?? [];
  const gi = scale.indexOf(String(g));
  const ti = scale.indexOf(String(t));
  if (gi === -1 || ti === -1) return compareCategorical(g, t);
  if (gi === ti) return { state: "exact", display: String(g), arrow: null };
  const arrow: Arrow = ti > gi ? "up" : "down"; // ↑ = alvo mais ameaçado
  return { state: "partial", display: String(g), arrow };
}

function compareNumeric(g: unknown, t: unknown): TraitComparison {
  if (bothNull(g, t)) return { state: "na", display: "N/A", arrow: null };
  if (g == null || t == null) {
    return { state: "mismatch", display: g == null ? "N/A" : String(g), arrow: null };
  }
  const gn = Number(g);
  const tn = Number(t);
  const ratio = gn / tn;
  if (ratio >= 0.85 && ratio <= 1.15) {
    return { state: "exact", display: String(gn), arrow: null };
  }
  const arrow: Arrow = tn > gn ? "up" : "down"; // ↑ = alvo mais pesado
  return { state: "partial", display: String(gn), arrow };
}

function compareTrait(def: TraitDef, guess: Animal, target: Animal): TraitComparison {
  if (def.key === "taxonomia") return compareTaxonomy(guess, target);
  const g = guess.campos[def.key];
  const t = target.campos[def.key];
  switch (def.kind) {
    case "ordinal":
      return compareOrdinal(def, g, t);
    case "numeric":
      return compareNumeric(g, t);
    default:
      return compareCategorical(g, t);
  }
}

/** Compara um chute inteiro contra o alvo. */
export function evaluateGuess(guess: Animal, target: Animal): GuessResult {
  const traits: Record<string, TraitComparison> = {};
  for (const def of TRAITS) {
    traits[def.key] = compareTrait(def, guess, target);
  }
  return { animal: guess, correct: guess.id === target.id, traits };
}

/**
 * A partir de todos os chutes, decide o que já está "travado" (revelado) no
 * card do alvo: uma característica trava quando algum chute bateu exato ou
 * revelou que ela é "não se aplica" (N/A em ambos).
 */
export function lockedReveals(
  results: GuessResult[],
  target: Animal,
): Record<string, string> {
  const locked: Record<string, string> = {};
  for (const def of TRAITS) {
    for (const r of results) {
      const c = r.traits[def.key];
      if (c.state === "exact" || c.state === "na") {
        locked[def.key] = revealValue(def, target);
        break;
      }
    }
  }
  return locked;
}

/** Valor "verdadeiro" do alvo para uma característica (para o card revelado). */
export function revealValue(def: TraitDef, target: Animal): string {
  if (def.key === "taxonomia") {
    return target.taxonomia.map((r) => r.name).join(" › ");
  }
  const v = target.campos[def.key];
  return v == null ? "N/A" : String(v);
}

// -----------------------------------------------------------------------------
// Compartilhar resultado (estilo Wordle, sem revelar o bicho).
// -----------------------------------------------------------------------------

const EMOJI: Record<MatchState, string> = {
  exact: "🟩",
  partial: "🟨",
  mismatch: "⬛",
  na: "⬜",
};

/** Gera o bloco de emojis para compartilhar. */
export function buildShare(
  results: GuessResult[],
  dateStr: string = localDateString(),
): string {
  const header = `Bicho do Dia — ${dateStr} — ${results.length} 🐾`;
  const rows = results.map((r) =>
    TRAITS.map((def) => EMOJI[r.traits[def.key].state]).join(""),
  );
  return [header, ...rows].join("\n");
}
