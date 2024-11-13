import React from 'react';
import { Brain, Cpu, Network, Github, ExternalLink } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';

const ProjectCard = ({ title, description, icon: Icon, tags, github, demo }) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 
                  transition-all duration-300 group">
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-gray-700/50 rounded-xl">
          <Icon className="h-8 w-8 text-purple-400" />
        </div>
        <div className="flex space-x-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              <Github className="h-5 w-5 text-purple-400" />
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-700/50 hover:bg-gray-700 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-purple-400" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-300 mb-6 line-clamp-3 group-hover:line-clamp-none 
                  transition-all duration-300">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-gray-700/50 rounded-full text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "SignWave",
      description: "Sistema de detección y traducción de gestos en tiempo real usando redes neuronales para facilitar la comunicación entre personas sordas.",
      icon: Brain,
      tags: ["Python", "Deep Learning", "OpenCV", "Keras", "WebRTC"],
      github: "#",
      demo: "#"
    },
    {
      title: "DiffEqSolver",
      description: "Sistema de resolución de ecuaciones diferenciales mediante computación cuántica híbrida para mejorar la eficiencia temporal y espacial.",
      icon: Cpu,
      tags: ["Python", "Quantum", "Mathematics", "Qiskit"],
      github: "#"
    },
    {
      title: "GECS",
      description: "Sistema avanzado de cacheo y distribución de contenido en red global.",
      icon: Network,
      tags: ["Go", "Redis", "Docker", "Kubernetes"],
      github: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">
              Proyectos Destacados
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Una selección de mis proyectos más innovadores, combinando matemáticas,
              programación y machine learning para resolver problemas complejos.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection
              key={project.title}
              animation="fade-up"
              delay={index * 200}
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 
                       text-white rounded-xl hover:bg-purple-700 transition-all 
                       group hover:scale-105"
            >
              <Github className="h-5 w-5" />
              Explorar más proyectos
              <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 
                                    transition-transform" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;