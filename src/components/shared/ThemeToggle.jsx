import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        fixed bottom-6 right-6 p-3 rounded-full shadow-lg
        transition-all duration-300 hover:scale-110
        ${isDark 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-white text-gray-900 hover:bg-gray-100'
        }
      `}
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6" />
      ) : (
        <Moon className="w-6 h-6" />
      )}
    </button>
  );
};

export default ThemeToggle;