import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enLng from "./locales/en/translation.json"
import uzLng from "./locales/uz/translation.json"
import ruLng from "./locales/ru/translation.json"

const resources = {
  en: {
    translation: enLng,
  },
  uz: {
    translation: uzLng,
  },
  ru: {
    translation: ruLng,
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "uz",
  lng: "uz",
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
