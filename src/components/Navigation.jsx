 // src/components/Navigation.jsx
import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const Navigation = () => {
  const [isDark, setIsDark] = useState(true);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full top-0 z-50 px-8 py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="font-mono">λ : JAIME → CODE</span>
        <div className="flex items-center space-x-8">
          <button onClick={() => scrollToSection('about')}>About</button>
          <button onClick={() => scrollToSection('education')}>Education</button>
          <button onClick={() => scrollToSection('projects')}>Projects</button>
          <button onClick={() => scrollToSection('contact')}>Contact</button>
          <button 
            onClick={() => setIsDark(!isDark)}
            className="ml-6 hover:rotate-90 transition-transform"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
