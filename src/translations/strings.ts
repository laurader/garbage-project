import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { it } from "./it/it";
// import { en } from './en/en';

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
const resources = {
  it: it,
  // en: en,
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    returnNull: false,
    fallbackLng: "it",
    supportedLngs: ["it"],
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
