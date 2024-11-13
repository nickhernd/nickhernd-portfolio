import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export const useTranslations = () => {
  const { currentLanguage } = useLanguage();

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Missing translation: ${key} for language ${currentLanguage}`);
        return key;
      }
    }
    
    return value;
  };

  return { t };
};