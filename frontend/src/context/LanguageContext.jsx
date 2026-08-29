import React, { createContext, useContext, useState, useEffect } from 'react';
import { LANGUAGES, translations } from '../i18n/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('tripnex_lang');
      if (saved && translations[saved]) {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'en';
  });

  const setLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguageState(langCode);
      try {
        localStorage.setItem('tripnex_lang', langCode);
      } catch (e) {
        console.warn('Could not save language to localStorage', e);
      }
    }
  };

  /**
   * Helper translation function
   * @param {string} key - Dictionary key
   * @param {string} [fallback] - Fallback string if key not found
   */
  const t = (key, fallback = '') => {
    const currentDict = translations[language] || translations.en;
    if (currentDict && currentDict[key] !== undefined) {
      return currentDict[key];
    }
    // Fallback to English dictionary
    if (translations.en && translations.en[key] !== undefined) {
      return translations.en[key];
    }
    return fallback || key;
  };

  const currentLangObj = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      languages: LANGUAGES,
      currentLangObj
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
