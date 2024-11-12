import React, { useState, useEffect } from 'react';
import { Github, Mail, User, Code } from 'lucide-react';

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState('home');
  
  const sections = ['home', 'about', 'education', 'projects', 'contact'];
  
  const Background = () => (
    <div className="fixed inset-0 z-0 opacity-10">
      <svg className="w-full h-full">
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );

  const Navigation = () => (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-8 py-4">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => setCurrentSection(section)}
              className={`px-4 py-2 rounded-lg transition-colors capitalize ${
                currentSection === section 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const Home = () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold tracking-tighter">
          Jaime Hernández
        </h1>
        <div className="flex items-center justify-center gap-2 text-2xl text-gray-600">
          <span className="font-mono">{'{'}</span>
          <span>Informática</span>
          <span className="font-mono">∩</span>
          <span>Matemáticas</span>
          <span className="font-mono">{'}'}</span>
        </div>
      </div>
    </div>
  );

  const About = () => (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-8">
        <h2 className="text-4xl font-bold mb-8">Sobre mí</h2>
        <p className="text-xl leading-relaxed">
          Estudiante de doble grado en Ingeniería Informática y Matemáticas,
          apasionado por la intersección entre la programación y el pensamiento matemático.
        </p>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Lenguajes</h3>
            <div className="space-y-2">
              {["C/C++", "Python", "SQL", "React", "Scala"].map(lang => (
                <div key={lang} className="flex items-center gap-2">
                  <Code size={16} className="text-blue-500" />
                  <span className="font-mono">{lang}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Idiomas</h3>
            <div className="space-y-2">
              {["Español (Nativo)", "Inglés (C1)", "Catalán (C1)"].map(lang => (
                <div key={lang} className="flex items-center gap-2">
                  <span>○</span>
                  <span>{lang}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Education = () => (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl font-bold mb-12">Formación</h2>
        <div className="space-y-12">
          <div className="relative pl-8 border-l-2 border-blue-500">
            <h3 className="text-2xl font-bold">Universidad de Alicante</h3>
            <p className="text-gray-600">2022 - Presente</p>
            <p className="mt-2">Grado en Ingeniería Informática</p>
          </div>
          <div className="relative pl-8 border-l-2 border-blue-500">
            <h3 className="text-2xl font-bold">UNED</h3>
            <p className="text-gray-600">2023 - Presente</p>
            <p className="mt-2">Grado en Matemáticas</p>
          </div>
        </div>
      </div>
    </div>
  );

  const Projects = () => (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl font-bold mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">CheckFake</h3>
            <p className="text-gray-600 mb-4">
              Verificación de noticias mediante blockchain e IA
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Blockchain
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                AI
              </span>
            </div>
          </div>
          <div className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">NASA Space Apps</h3>
            <p className="text-gray-600 mb-4">
              Visualización de datos del James Webb Telescope
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Data Viz
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Algorithm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const Contact = () => (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-4xl font-bold text-center">Contacto</h2>
        <div className="flex justify-center gap-6">
          <a href="https://github.com" className="p-3 rounded-full hover:bg-gray-100 transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:ramajahede@gmail.com" className="p-3 rounded-full hover:bg-gray-100 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <form className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <textarea
            placeholder="Mensaje"
            rows={4}
            className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          <button
            type="submit"
            className="w-full py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <div className="bg-white text-gray-900">
      <Background />
      <Navigation />
      
      <main className="relative z-10">
        {currentSection === 'home' && <Home />}
        {currentSection === 'about' && <About />}
        {currentSection === 'education' && <Education />}
        {currentSection === 'projects' && <Projects />}
        {currentSection === 'contact' && <Contact />}
      </main>
    </div>
  );
};

export default Portfolio;