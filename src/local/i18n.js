import i18n, { init, use } from "i18next";
import { initReactI18next } from "react-i18next";
import languagedetector from "i18next-browser-languagedetector";
import EN from "./translationTexts/EN";
import RU from "./translationTexts/RU";

i18n
    .use(languagedetector)
    .use(initReactI18next)
    .init({
        debug: false,
        fallbackLng: "en",
        fallbackNS:"translation",
        resources: {
            en: EN,
            ru: RU
        }

    })

export default i18n