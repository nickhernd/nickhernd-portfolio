import React, { useState } from 'react';
import { Brain, Code2, Network, Search } from 'lucide-react';
import SectionTransition from '../components/shared/SectionTransition';
import Card from '../components/shared/Card';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "SignWave",
      description: "Sistema de detección y traducción de gestos en tiempo real para facilitar la comunicación entre personas sordas.",
      technologies: ["Python", "Deep Learning", "OpenCV", "Keras"],
      category: "AI",
      featured: true,
      image: "/api/placeholder/600/400",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "DiffEqSolver",
      description: "Sistema de resolución de ecuaciones diferenciales mediante computación cuántica híbrida.",
      technologies: ["Python", "Quantum Computing", "Mathematics"],
      category: "Scientific",
      featured: true,
      image: "/api/placeholder/600/400",
      github: "#"
    },
    {
      id: 3,
      title: "GECS",
      description: "Sistema avanzado de cacheo y distribución de contenido en red global.",
      technologies: ["Go", "Redis", "Docker", "Kubernetes"],
      category: "Systems",
      featured: true,
      image: "/api/placeholder/600/400",
      github: "#"
    }
  ];

  const categories = [
    { id: 'all', label: 'Todos', icon: Code2 },
    { id: 'AI', label: 'IA & ML', icon: Brain },
    { id: 'Scientific', label: 'Científico', icon: Code2 },
    { id: 'Systems', label: 'Sistemas', icon: Network }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(filter.toLowerCase()) ||
                         project.description.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-primary-50 dark:bg-gray-900 pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4">
          <SectionTransition>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Proyectos</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
              Una colección de proyectos que demuestran mi experiencia en IA, 
              sistemas distribuidos y matemáticas aplicadas.
            </p>
          </SectionTransition>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <category.icon className="h-4 w-4" />
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <SectionTransition key={project.id}>
              <Card>
                <div className="aspect-video w-full bg-gray-100 rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 text-primary-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-primary-600 hover:text-primary-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-primary-600 hover:text-primary-700"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver demo
                    </a>
                  )}
                </div>
              </Card>
            </SectionTransition>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;