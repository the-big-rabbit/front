import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translations from "./translations";

i18n
  .use(initReactI18next)
  .init({
    resources: translations,
    lng: "fr", // TODO: Detect the lang with data attribute

    keySeparator: false,

    interpolation: {
      escapeValue: false
    },
  });

export default i18n;