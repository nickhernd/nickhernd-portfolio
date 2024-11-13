import React from 'react';
import { ArrowRight, Brain, Code2, Network } from 'lucide-react';

const ProjectPreviewCard = ({ title, description, icon: Icon, tags }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all p-6 group">
    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
      <Icon className="w-6 h-6 text-primary-600" />
    </div>
    
    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-600 transition-colors">
      {title}
    </h3>
    
    <p className="text-gray-600 mb-4">
      {description}
    </p>
    
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-primary-50 text-primary-600 text-sm rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

const ProjectsPreview = () => {
  const featuredProjects = [
    {
      title: "SignWave",
      description: "Sistema de traducción de lenguaje de señas en tiempo real usando IA",
      icon: Brain,
      tags: ["Python", "Deep Learning", "OpenCV"]
    },
    {
      title: "DiffEqSolver",
      description: "Resolución de ecuaciones diferenciales con computación cuántica",
      icon: Code2,
      tags: ["Python", "Quantum", "Math"]
    },
    {
      title: "GECS",
      description: "Sistema distribuido de cacheo y CDN global",
      icon: Network,
      tags: ["Go", "Redis", "Docker"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Una muestra de mis proyectos más relevantes en IA, computación cuántica 
            y sistemas distribuidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ProjectPreviewCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors group"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;