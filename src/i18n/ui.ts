export const languages = {
  sk: "Slovensky",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "sk";

export const ui = {
  sk: {
    "nav.home": "Domov",
    "site.title": "AMP Systems",
    "hero.title": "Vitajte v AMP Systems",
    "hero.subtitle":
      "Statická webová stránka postavená na Astro s podporou viacerých jazykov.",
    "lang.switch": "Jazyk",
    "nav.contact": "Kontakt",
    "contact.title": "Kontakt",
    "contact.intro": "Napíšte nám na nasledujúcu e-mailovú adresu:",
    "contact.email": "kontakt@amp-systems.sk",
  },
  en: {
    "nav.home": "Home",
    "site.title": "AMP Systems",
    "hero.title": "Welcome to AMP Systems",
    "hero.subtitle":
      "A static website built with Astro and multi-language support.",
    "lang.switch": "Language",
    "nav.contact": "Contact",
    "contact.title": "Contact",
    "contact.intro": "Reach us at the following email address:",
    "contact.email": "contact@amp-systems.sk",
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
