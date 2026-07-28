import { translations, type Locale } from "./translations";

const STORAGE_KEY = "lang";
const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_CHANGE_EVENT = "locale-change";

function getByPath(source: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((acc, part) => {
    if (acc && typeof acc === "object" && part in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[part];
    }

    return undefined;
  }, source);
}

export function getCurrentLocale(): Locale {
  if (typeof localStorage === "undefined") {
    return DEFAULT_LOCALE;
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "pt-br" ? "pt-br" : DEFAULT_LOCALE;
}

export function applyTranslations(locale: Locale) {
  document.documentElement.lang = locale === "pt-br" ? "pt-BR" : "en";

  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;

    const value = getByPath(translations[locale], key);
    if (typeof value === "string") {
      el.innerHTML = value;
    }
  });

  document.querySelectorAll<HTMLElement>("[data-i18n-aria]").forEach((el) => {
    const key = el.dataset.i18nAria;
    if (!key) return;

    const value = getByPath(translations[locale], key);
    if (typeof value === "string") {
      el.setAttribute("aria-label", value);
    }
  });

  // Per-instance translations for content-collection entries (e.g. project
  // descriptions), which aren't part of the static translations dictionary.
  document.querySelectorAll<HTMLElement>("[data-i18n-en]").forEach((el) => {
    const value = locale === "pt-br" ? el.dataset.i18nPtBr : el.dataset.i18nEn;
    if (typeof value === "string") {
      el.innerHTML = value;
    }
  });
}

export function setLocale(locale: Locale) {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem(STORAGE_KEY, locale);
  }

  applyTranslations(locale);
  window.dispatchEvent(new CustomEvent<{ locale: Locale }>(LOCALE_CHANGE_EVENT, { detail: { locale } }));
}

export type { Locale };
