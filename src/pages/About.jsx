import React from 'react';
import SectionTransition from '../components/shared/SectionTransition';
import { Book, Brain, Globe, Dumbbell, Code2 } from 'lucide-react';

const AboutPage = () => {
  const experiences = [
    {
      period: "2022 - Presente",
      title: "Universidad de Alicante",
      description: "Grado en Ingeniería Informática y Matemáticas",
      details: [
        "Voluntariado en la Unidad de Diversidad",
        "Especialización en Machine Learning y Sistemas Distribuidos"
      ]
    },
    {
      period: "2023 - Presente",
      title: "UNED",
      description: "Grado en Matemáticas",
      details: [
        "Profundización en álgebra y análisis matemático",
        "Combinación de estudios con proyectos prácticos"
      ]
    }
  ];

  const skills = [
    {
      icon: Brain,
      title: "Machine Learning & IA",
      items: ["Deep Learning", "Neural Networks", "Computer Vision"]
    },
    {
      icon: Code2,
      title: "Desarrollo",
      items: ["Python", "C++", "Rust", "Go"]
    },
    {
      icon: Globe,
      title: "Idiomas",
      items: ["Español (Nativo)", "Inglés (C1)", "Catalán (C1)", "Alemán (A2)"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary-50 dark:bg-gray-900 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTransition>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Mí</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Desarrollador y matemático en formación, impulsado por la curiosidad
              y la pasión por resolver problemas complejos a través de la tecnología.
            </p>
          </SectionTransition>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Background */}
        <SectionTransition>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Mi Historia</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300">
                Desde pequeño, mi curiosidad me llevó a explorar cómo funcionaban las cosas, 
                especialmente en el campo de la tecnología. Comencé desarmando dispositivos 
                electrónicos y juguetes, lo que eventualmente me llevó a interesarme por 
                la programación y las matemáticas.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                Mi pasión por la tecnología y las matemáticas me ha llevado a desarrollar 
                proyectos que combinan ambas disciplinas, especialmente en áreas como 
                machine learning, sistemas distribuidos y computación cuántica.
              </p>
            </div>
          </div>
        </SectionTransition>

        {/* Experience Timeline */}
        <SectionTransition>
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Experiencia Académica</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-primary-500 rounded-full" />
                  <div className="text-sm text-primary-600 dark:text-primary-400 mb-1">
                    {exp.period}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {exp.description}
                  </p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionTransition>

        {/* Skills */}
        <SectionTransition>
          <div>
            <h2 className="text-2xl font-bold mb-6">Habilidades</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                >
                  <skill.icon className="w-8 h-8 text-primary-500 mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </SectionTransition>
      </div>
    </div>
  );
};

export default AboutPage;