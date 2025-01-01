import React from 'react';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary-600 dark:text-primary-400 flex items-center gap-2">
              <Terminal className="h-5 w-5" />
              Jaime Hernández
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Desarrollador y Matemático en formación,
              especializado en Machine Learning y Sistemas Distribuidos.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#about"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Sobre Mí
                </a>
              </li>
              <li>
                <a 
                  href="#projects"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a 
                  href="#skills"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Habilidades
                </a>
              </li>
              <li>
                <a 
                  href="#contact"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Contacto
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:ramajahede@gmail.com"
                className="flex items-center gap-2 text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="h-4 w-4" />
                ramajahede@gmail.com
              </a>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Jaime Hernández. Todos los derechos reservados.
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm mt-2 md:mt-0">
              Hecho con 💜 y mucho código
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;