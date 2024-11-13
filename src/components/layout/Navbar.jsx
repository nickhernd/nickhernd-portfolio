import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80' 
        : 'bg-transparent'
      }
    `}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-primary-600 dark:text-primary-400">
            Jaime Hernández
          </span>
          
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Inicio
            </a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Sobre mí
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Proyectos
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
              Contacto
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;