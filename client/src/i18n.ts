import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend) // Load translations from files
  .use(LanguageDetector) // Detect language from browser settings
  .use(initReactI18next) // Connect i18n with React
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debugging
    ns: ['common'], // Define namespaces
    defaultNS: 'common', // Set default namespace
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Adjust path to match `common.json`
    },
  });

export default i18n;
