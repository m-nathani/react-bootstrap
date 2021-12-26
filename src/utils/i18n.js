import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from '../locales';

// NOTE: no i18next-http-backend is used because for a library it does not work to load locales from public folder
i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    // Allows "en-US" and "en-UK" to be implicitly supported when "en" is supported
    nonExplicitSupportedLngs: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    debug: process.env.NODE_ENV === 'development',
    // TODO: add "supportedLngs" from venue api
  });

export default i18n;
