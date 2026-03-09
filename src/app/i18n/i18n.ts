import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { texts } from './texts';

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: texts,
    },
  },
  lng: 'ru', // фиксированный язык
  fallbackLng: 'ru',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
