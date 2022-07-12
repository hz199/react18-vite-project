import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import translationEn from '../assets/locales/en.json'
import translationZh from '../assets/locales/zh.json'

const resources = {
  en: {
    translation: translationEn
  },
  zh: {
    translation: translationZh
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
