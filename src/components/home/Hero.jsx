import React, { useState, useEffect } from 'react';
import { Brain, Code2 } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const roles = ['Desarrollador', 'Matemático', 'Problem Solver', 'ML Engineer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-gray-100">Hola, soy </span>
            <span className="text-primary-600 dark:text-primary-400">Jaime</span>
          </h1>
          
          <div className="h-12 md:h-16 mb-6">
            <p className="text-2xl md:text-4xl text-gray-600 dark:text-gray-300">
              {roles[currentRole]}
            </p>
          </div>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Apasionado por la innovación tecnológica y la resolución de problemas complejos.
            Especializado en Machine Learning, sistemas distribuidos y algoritmos avanzados.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            <button className="group bg-primary-600 dark:bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-700 dark:hover:bg-primary-600 transition-all duration-300 flex items-center gap-3">
              <Brain className="h-5 w-5" />
              Ver Proyectos
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            
            <button className="group bg-gray-900 dark:bg-gray-700 text-white px-8 py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 flex items-center gap-3">
              <Code2 className="h-5 w-5" />
              Contactar
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;