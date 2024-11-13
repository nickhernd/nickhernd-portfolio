import React from 'react';
import { Brain, Code2, Network } from 'lucide-react';
import ProjectCard from '../shared/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "SignWave",
      description: "Sistema de detección y traducción de gestos en tiempo real usando redes neuronales para facilitar la comunicación entre personas sordas.",
      tags: ["Python", "Deep Learning", "OpenCV", "Keras"],
      icon: Brain,
      github: "#",
      demo: "#"
    },
    {
      title: "DiffEqSolver",
      description: "Sistema de resolución de ecuaciones diferenciales mediante computación cuántica híbrida para mejorar la eficiencia temporal y espacial.",
      tags: ["Python", "Quantum", "Mathematics"],
      icon: Code2,
      github: "#"
    },
    {
      title: "GECS",
      description: "Sistema avanzado de cacheo y distribución de contenido en red global usando tecnologías distribuidas.",
      tags: ["Go", "Redis", "Docker", "Kubernetes"],
      icon: Network,
      github: "#"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Una selección de mis proyectos más innovadores, combinando matemáticas, 
            programación y machine learning para resolver problemas complejos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 
                     dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 
                     dark:hover:bg-primary-600 transition-colors"
          >
            <Code2 className="h-5 w-5" />
            Ver más proyectos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;