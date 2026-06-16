import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import cs from './locales/cs.json';
import en from './locales/en.json';

// Detect user's browser language
const getInitialLanguage = (): string => {
  // Try to get stored preference first
  const stored = localStorage.getItem('language');
  if (stored && (stored === 'cs' || stored === 'en')) {
    return stored;
  }

  // Detect from browser
  const browserLang = navigator.language.split('-')[0];
  if (browserLang === 'en') {
    return 'en';
  }

  // Default to Czech
  return 'cs';
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    cs: { translation: cs },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'cs',
  interpolation: {
    escapeValue: false,
  },
  ns: ['translation'],
  defaultNS: 'translation',
});

// Save language preference to localStorage on change
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;
