import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage, languages } from '../../context/LanguageContext';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            p-3 rounded-full shadow-lg transition-all duration-300
            ${isOpen 
              ? 'bg-primary-600 text-white'
              : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
            }
          `}
          aria-label="Seleccionar idioma"
        >
          <Globe className="w-6 h-6" />
        </button>

        {isOpen && (
          <div className="absolute bottom-full mb-2 left-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2 min-w-[150px]">
            {Object.entries(languages).map(([code, name]) => (
              <button
                key={code}
                onClick={() => {
                  changeLanguage(code);
                  setIsOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2 transition-colors
                  ${currentLanguage === code
                    ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                  }
                `}
              >
                {name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;