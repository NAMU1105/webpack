import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEn from "../src/lang/translation.en.json";
import translationKo from "../src/lang/translation.ko.json";

const languages = ["en", "ko"]; // (*)

const resource = {
  en: {
    translation: translationEn,
  },
  ko: {
    translation: translationKo,
  },
};

i18n
  .use(XHR)
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // detection: options,
    detection: { order: ["path", "navigator"] },
    fallbackLng: "en",
    resources: resource,
    whitelist: languages,
    //lng: "ko",
    // ns: ['translation'],
    // defaultNS: "translation",
    debug: true,

    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
