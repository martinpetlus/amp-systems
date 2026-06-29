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
    "nav.menu": "Menu",
    "contact.title": "Kontakt",
    "contact.intro":
      "Radi vám pomôžeme. Ozvite sa nám e-mailom alebo telefonicky.",
    "contact.emailLabel": "E-mail",
    "contact.email": "kontakt@amp-systems.sk",
    "contact.phoneLabel": "Telefón",
    "contact.phone": "+421 915 425 052",
  },
  en: {
    "nav.home": "Home",
    "site.title": "AMP Systems",
    "hero.title": "Welcome to AMP Systems",
    "hero.subtitle":
      "A static website built with Astro and multi-language support.",
    "lang.switch": "Language",
    "nav.contact": "Contact",
    "nav.menu": "Menu",
    "contact.title": "Contact",
    "contact.intro": "We'd love to hear from you — reach us by email or phone.",
    "contact.emailLabel": "Email",
    "contact.email": "contact@amp-systems.sk",
    "contact.phoneLabel": "Phone",
    "contact.phone": "+421 915 425 052",
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
