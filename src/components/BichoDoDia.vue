<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { Animal, MatchState } from "../data/game/types";
import { PLAYABLE } from "../data/game/animals";
import { TRAITS, FREE_HINT_KEY } from "../data/game/traits";
import {
  buildShare,
  evaluateGuess,
  localDateString,
  lockedReveals,
  pickDaily,
  revealValue,
} from "../data/game/engine";

// --- i18n mínimo para o "chrome" do jogo (os termos biológicos ficam em PT) ---
type Locale = "en" | "pt-br";
const locale = ref<Locale>("pt-br");

const T = {
  "pt-br": {
    title: "Bicho do Dia",
    subtitle: "Um Wordle para veterinários e biólogos",
    howTitle: "Como jogar",
    how: [
      "Todo dia há um organismo-alvo (animal, protozoário, fungo ou bactéria).",
      "Chute espécies: a cada chute, as características que batem com o alvo acendem.",
      "🟩 bate · 🟨 parcial (mesmo ramo / seta ↑↓) · ⬛ não bate · ⬜ não se aplica.",
      "Sem limite de chutes — vença com o menor número possível.",
    ],
    hintLabel: "dica",
    placeholder: "Digite o nome de uma espécie…",
    guessBtn: "Chutar",
    guesses: "chutes",
    board: "Perfil do alvo",
    yourGuesses: "Seus chutes",
    won: "Acertou! 🎉",
    wonIn: (n: number) => `Você descobriu em ${n} ${n === 1 ? "chute" : "chutes"}.`,
    share: "Compartilhar",
    copied: "Copiado!",
    hidden: "?",
    already: "Você já chutou essa espécie.",
    notFound: "Espécie não encontrada na lista.",
  },
  en: {
    title: "Animal of the Day",
    subtitle: "A Wordle for vets and biologists",
    howTitle: "How to play",
    how: [
      "Each day there is a target organism (animal, protozoan, fungus or bacterium).",
      "Guess species: on each guess, traits that match the target are revealed.",
      "🟩 match · 🟨 partial (same branch / arrow ↑↓) · ⬛ no match · ⬜ not applicable.",
      "No guess limit — win in as few guesses as possible.",
    ],
    hintLabel: "hint",
    placeholder: "Type a species name…",
    guessBtn: "Guess",
    guesses: "guesses",
    board: "Target profile",
    yourGuesses: "Your guesses",
    won: "You got it! 🎉",
    wonIn: (n: number) => `You found it in ${n} ${n === 1 ? "guess" : "guesses"}.`,
    share: "Share",
    copied: "Copied!",
    hidden: "?",
    already: "You already guessed that species.",
    notFound: "Species not found in the list.",
  },
} as const;

const t = computed(() => T[locale.value]);
const traitLabel = (def: (typeof TRAITS)[number]) =>
  locale.value === "pt-br" ? def.labelPt : def.labelEn;

// --- Estado do jogo ---
const pool = PLAYABLE;
const dateStr = localDateString();
const target = pickDaily(pool, dateStr);
const storageKey = `bicho-do-dia:${dateStr}`;

const guessIds = ref<string[]>([]);
const query = ref("");
const highlight = ref(0);
const showSuggestions = ref(false);
const message = ref("");
const copied = ref(false);

const guesses = computed<Animal[]>(() =>
  guessIds.value.map((id) => pool.find((a) => a.id === id)!).filter(Boolean),
);
const results = computed(() => guesses.value.map((g) => evaluateGuess(g, target)));
const solved = computed(() => results.value.some((r) => r.correct));
const locked = computed(() => lockedReveals(results.value, target));

// A dica grátis (Reino) já vem revelada.
const revealedBoard = computed<Record<string, string>>(() => {
  const map: Record<string, string> = { ...locked.value };
  const hintDef = TRAITS.find((d) => d.key === FREE_HINT_KEY);
  if (hintDef) map[FREE_HINT_KEY] = revealValue(hintDef, target);
  return map;
});

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();

const suggestions = computed<Animal[]>(() => {
  const q = normalize(query.value);
  if (!q) return [];
  return pool
    .filter((a) => !guessIds.value.includes(a.id))
    .filter(
      (a) =>
        normalize(a.nomeComum).includes(q) ||
        normalize(a.nomeCientifico).includes(q),
    )
    .slice(0, 8);
});

// --- Persistência (localStorage, por data) ---
function save() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(guessIds.value));
  } catch {
    /* ignore */
  }
}
function load() {
  try {
    const raw = localStorage.getItem(storageKey);
    if (raw) guessIds.value = JSON.parse(raw);
  } catch {
    /* ignore */
  }
}

// --- Ações ---
function submitGuess(animal?: Animal) {
  message.value = "";
  const picked =
    animal ??
    suggestions.value[highlight.value] ??
    pool.find((a) => normalize(a.nomeComum) === normalize(query.value)) ??
    pool.find((a) => normalize(a.nomeCientifico) === normalize(query.value));

  if (!picked) {
    message.value = t.value.notFound;
    return;
  }
  if (guessIds.value.includes(picked.id)) {
    message.value = t.value.already;
    return;
  }
  guessIds.value = [...guessIds.value, picked.id];
  query.value = "";
  highlight.value = 0;
  showSuggestions.value = false;
  save();
}

function onKeydown(e: KeyboardEvent) {
  if (!suggestions.value.length) return;
  if (e.key === "ArrowDown") {
    e.preventDefault();
    highlight.value = (highlight.value + 1) % suggestions.value.length;
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    highlight.value =
      (highlight.value - 1 + suggestions.value.length) % suggestions.value.length;
  } else if (e.key === "Escape") {
    showSuggestions.value = false;
  }
}

async function share() {
  const text = buildShare(results.value, dateStr);
  try {
    await navigator.clipboard.writeText(text);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    /* ignore */
  }
}

// --- Estilos por estado ---
function chipClass(state: MatchState): string {
  switch (state) {
    case "exact":
      return "bg-secondary-light text-primary-darkest border-transparent";
    case "partial":
      return "bg-yellow-400 text-primary-darkest border-transparent";
    case "na":
      return "bg-white text-primary-darkest border-transparent";
    default:
      return "bg-transparent text-white/45 border-white/15";
  }
}
const arrowChar = (a: "up" | "down" | null) => (a === "up" ? " ↑" : a === "down" ? " ↓" : "");

onMounted(() => {
  const stored = localStorage?.getItem("lang");
  locale.value = stored === "pt-br" ? "pt-br" : "en";
  window.addEventListener("locale-change", (e: Event) => {
    const detail = (e as CustomEvent<{ locale: Locale }>).detail;
    if (detail?.locale) locale.value = detail.locale;
  });
  load();
});
</script>

<template>
  <div class="w-full max-w-250 mx-auto px-4 pb-16">
    <!-- Cabeçalho -->
    <header class="text-center mt-4 mb-6">
      <h1 class="text-4xl font-semibold text-primary-light">{{ t.title }}</h1>
      <p class="text-white/70 mt-1">{{ t.subtitle }}</p>
    </header>

    <!-- Como jogar -->
    <details class="border border-primary-light/40 rounded-md p-3 mb-6 text-sm">
      <summary class="cursor-pointer text-primary-light">{{ t.howTitle }}</summary>
      <ul class="list-disc pl-5 mt-2 space-y-1 text-white/80">
        <li v-for="(line, i) in t.how" :key="i">{{ line }}</li>
      </ul>
    </details>

    <!-- Vitória -->
    <div
      v-if="solved"
      class="border-2 border-secondary-light rounded-md p-4 mb-6 text-center bg-secondary-light/10"
    >
      <p class="text-2xl font-semibold text-secondary-light">{{ t.won }}</p>
      <p class="mt-1">
        {{ target.emoji }} <strong>{{ target.nomeComum }}</strong>
        <em class="text-white/70">({{ target.nomeCientifico }})</em>
      </p>
      <p class="text-white/80">{{ t.wonIn(results.length) }}</p>
      <button
        class="mt-3 px-4 py-2 rounded-md bg-secondary-light text-primary-darkest font-semibold cursor-pointer hover:opacity-90"
        @click="share"
      >
        {{ copied ? t.copied : t.share }}
      </button>
    </div>

    <!-- Input -->
    <div v-if="!solved" class="relative mb-2">
      <div class="flex gap-2">
        <input
          v-model="query"
          type="text"
          :placeholder="t.placeholder"
          class="flex-1 bg-primary-darkest border-2 border-primary-light rounded-md px-3 py-2 outline-none focus:border-primary-light"
          @focus="showSuggestions = true"
          @input="showSuggestions = true; highlight = 0"
          @keydown="onKeydown"
          @keydown.enter.prevent="submitGuess()"
        />
        <button
          class="px-4 py-2 rounded-md bg-primary-light text-primary-darkest font-semibold cursor-pointer hover:opacity-90"
          @click="submitGuess()"
        >
          {{ t.guessBtn }}
        </button>
      </div>

      <!-- Autocomplete -->
      <ul
        v-if="showSuggestions && suggestions.length"
        class="absolute z-40 mt-1 w-full bg-primary-darkest border-2 border-primary-light rounded-md overflow-hidden max-h-72 overflow-y-auto"
      >
        <li
          v-for="(s, i) in suggestions"
          :key="s.id"
          class="px-3 py-2 cursor-pointer flex items-center gap-2"
          :class="i === highlight ? 'bg-primary-light/20' : 'hover:bg-primary-light/10'"
          @mouseenter="highlight = i"
          @mousedown.prevent="submitGuess(s)"
        >
          <span class="text-lg">{{ s.emoji }}</span>
          <span>{{ s.nomeComum }}</span>
          <em class="text-white/50 text-sm">{{ s.nomeCientifico }}</em>
        </li>
      </ul>
      <p v-if="message" class="text-yellow-400 text-sm mt-1">{{ message }}</p>
    </div>

    <p class="text-white/60 text-sm mb-6">
      {{ guesses.length }} {{ t.guesses }}
    </p>

    <!-- Tabuleiro: perfil do alvo -->
    <section class="mb-8">
      <h2 class="text-lg text-primary-light mb-3">{{ t.board }}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-2">
        <div
          v-for="def in TRAITS"
          :key="def.key"
          class="border rounded-md p-2 min-h-16 flex flex-col justify-between"
          :class="
            revealedBoard[def.key]
              ? 'border-secondary-light/60 bg-secondary-light/5'
              : 'border-white/15'
          "
        >
          <div class="flex items-center justify-between gap-1">
            <span class="text-[0.7rem] uppercase tracking-wide text-white/50">{{
              traitLabel(def)
            }}</span>
            <span
              v-if="def.key === FREE_HINT_KEY"
              class="text-[0.6rem] px-1 rounded bg-primary-light/30 text-primary-light"
              >{{ t.hintLabel }}</span
            >
          </div>
          <span
            class="text-sm font-medium mt-1"
            :class="revealedBoard[def.key] ? 'text-secondary-light' : 'text-white/30'"
          >
            {{ revealedBoard[def.key] ?? t.hidden }}
          </span>
        </div>
      </div>
    </section>

    <!-- Chutes -->
    <section v-if="results.length">
      <h2 class="text-lg text-primary-light mb-3">{{ t.yourGuesses }}</h2>
      <div class="space-y-3">
        <div
          v-for="r in [...results].reverse()"
          :key="r.animal.id"
          class="border rounded-md p-3"
          :class="r.correct ? 'border-secondary-light' : 'border-white/15'"
        >
          <div class="flex items-center gap-2 mb-2">
            <span class="text-xl">{{ r.animal.emoji }}</span>
            <strong>{{ r.animal.nomeComum }}</strong>
            <em class="text-white/50 text-sm">{{ r.animal.nomeCientifico }}</em>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            <div
              v-for="def in TRAITS"
              :key="def.key"
              class="border rounded px-2 py-1 text-xs"
              :class="chipClass(r.traits[def.key].state)"
            >
              <div class="opacity-70 text-[0.62rem] uppercase tracking-wide">
                {{ traitLabel(def) }}
              </div>
              <div class="font-medium leading-tight">
                {{ r.traits[def.key].display }}{{ arrowChar(r.traits[def.key].arrow) }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
