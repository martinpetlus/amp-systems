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
    "site.description":
      "Priemyselná automatizácia, opravy výrobných liniek, spracovanie dát a AI riešenia pre výrobné firmy.",
    "hero.title": "Vitajte v AMP Systems",
    "hero.subtitle":
      "Udržiavame vaše výrobné linky v chode a meníme ich dáta na prehľadné informácie a AI riešenia.",
    "lang.switch": "Jazyk",
    "nav.contact": "Kontakt",
    "nav.services": "Služby",
    "nav.about": "O nás",
    "nav.menu": "Menu",
    "contact.title": "Kontakt",
    "contact.intro":
      "Radi vám pomôžeme. Ozvite sa nám e-mailom alebo telefonicky.",
    "contact.emailLabel": "E-mail",
    "contact.email": "kontakt@amp-systems.sk",
    "contact.phoneLabel": "Telefón",
    "contact.phone": "+421 915 425 052",
    "services.home.cta": "Zobraziť všetky služby",
  },
  en: {
    "nav.home": "Home",
    "site.title": "AMP Systems",
    "site.description":
      "Industrial automation, production line repairs, data processing and AI solutions for manufacturing companies.",
    "hero.title": "Welcome to AMP Systems",
    "hero.subtitle":
      "We keep your production lines running and turn their data into clear insights and AI solutions.",
    "lang.switch": "Language",
    "nav.contact": "Contact",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.menu": "Menu",
    "contact.title": "Contact",
    "contact.intro": "We'd love to hear from you — reach us by email or phone.",
    "contact.emailLabel": "Email",
    "contact.email": "contact@amp-systems.sk",
    "contact.phoneLabel": "Phone",
    "contact.phone": "+421 915 425 052",
    "services.home.cta": "View all services",
  },
} as const;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}
