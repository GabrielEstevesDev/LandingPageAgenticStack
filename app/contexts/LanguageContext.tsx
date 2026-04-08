"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { translations, Lang } from '../i18n/translations';

type T = typeof translations.fr;

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
  t: T;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'fr',
  toggleLang: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('fr');
  const toggleLang = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'));

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t: translations[lang] as T }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
