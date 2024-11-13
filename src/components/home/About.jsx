import React from 'react';
import { Brain, Code2, Database, Globe } from 'lucide-react';
import Card from '../shared/Card';

const AboutCard = ({ icon: Icon, title, description }) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-2 bg-primary-100 dark:bg-primary-900/50 rounded-lg">
          <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </Card>
  );
};

const About = () => {
  const items = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Especializado en desarrollo de modelos de IA y sistemas de aprendizaje profundo."
    },
    {
      icon: Code2,
      title: "Desarrollo",
      description: "Experiencia en Python, C++, y desarrollo de sistemas distribuidos."
    },
    {
      icon: Database,
      title: "Sistemas Distribuidos",
      description: "Diseño e implementación de sistemas escalables y de alta disponibilidad."
    },
    {
      icon: Globe,
      title: "Matemáticas",
      description: "Sólida base en álgebra, cálculo y optimización matemática."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50" id="about">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Sobre Mí
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Desarrollador y matemático en formación, apasionado por la tecnología 
            y la resolución de problemas complejos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {items.map((item, index) => (
            <AboutCard key={index} {...item} />
          ))}
        </div>

        <Card className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Mi Enfoque
          </h3>
          <p className="text-gray-600 dark:text-gray-300 italic">
            "Mi pasión por la tecnología y las matemáticas me impulsa a buscar 
            soluciones innovadoras a problemas complejos. Me enfoco en el 
            aprendizaje continuo y la mejora constante."
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;