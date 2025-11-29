import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./es.json";
import en from "./en.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { common: es },
    en: { common: en },
  },
  lng: localStorage.getItem("language") || "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
