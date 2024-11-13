import React, { useState } from 'react';
import { Brain, Code2, Network, Database, Search, Terminal, Github, ExternalLink, Cpu } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';
import ProjectCard from '../shared/ProjectCard';
import ImageGallery from '../shared/ImageGallery';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Todos', icon: Code2 },
    { id: 'ai', label: 'IA & ML', icon: Brain },
    { id: 'systems', label: 'Sistemas', icon: Network },
    { id: 'quantum', label: 'Cuántica', icon: Cpu }
  ];

  const projects = [
    {
      title: "SignWave",
      description: `Sistema de detección y traducción de gestos en tiempo real usando redes neuronales 
                   para facilitar la comunicación entre personas sordas. Implementado usando TensorFlow 
                   y OpenCV para procesamiento de video en tiempo real.`,
      longDescription: `
        • Implementación de redes neuronales convolucionales para detección de gestos
        • Procesamiento de video en tiempo real con OpenCV
        • Sistema de traducción basado en transformer para interpretación de señas
        • Interfaz web en tiempo real con WebRTC
        • Precisión del 95% en conjunto de pruebas
      `,
      tags: ["Python", "Deep Learning", "OpenCV", "Keras", "WebRTC"],
      icon: Brain,
      github: "#",
      demo: "#",
      category: 'ai',
      images: [
        {
          url: "/api/placeholder/800/600",
          alt: "SignWave Interface",
          title: "Interfaz de Usuario"
        },
        {
          url: "/api/placeholder/800/600",
          alt: "SignWave Demo",
          title: "Demostración en Tiempo Real"
        }
      ],
      stats: {
        accuracy: "95%",
        latency: "<50ms",
        users: "100+"
      }
    },
    {
      title: "DiffEqSolver",
      description: `Sistema de resolución de ecuaciones diferenciales mediante computación cuántica 
                   híbrida. Mejora significativa en eficiencia temporal y espacial comparado con 
                   métodos clásicos.`,
      longDescription: `
        • Algoritmos cuánticos para resolución de EDPs
        • Integración con IBM Quantum Experience
        • Optimización híbrida clásica-cuántica
        • Visualización 3D de soluciones
        • Reducción del 60% en tiempo de cómputo
      `,
      tags: ["Python", "Quantum", "Mathematics", "Qiskit", "NumPy"],
      icon: Cpu,
      github: "#",
      category: 'quantum',
      images: [
        {
          url: "/api/placeholder/800/600",
          alt: "DiffEqSolver Visualization",
          title: "Visualización de Soluciones"
        }
      ],
      stats: {
        speedup: "60%",
        accuracy: "99.9%",
        equations: "1000+"
      }
    },
    {
      title: "GECS",
      description: `Sistema avanzado de cacheo y distribución de contenido en red global. 
                   Implementación completa de CDN con edge computing y optimización de rutas.`,
      longDescription: `
        • Sistema distribuido de alta disponibilidad
        • Cacheo inteligente con predicción de demanda
        • Load balancing adaptativo
        • Monitorización en tiempo real
        • Escalado automático basado en métricas
      `,
      tags: ["Go", "Redis", "Docker", "Kubernetes", "Prometheus"],
      icon: Network,
      github: "#",
      category: 'systems',
      images: [
        {
          url: "/api/placeholder/800/600",
          alt: "GECS Architecture",
          title: "Arquitectura del Sistema"
        }
      ],
      stats: {
        latency: "-40%",
        availability: "99.99%",
        nodes: "50+"
      }
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 
                      dark:from-gray-800 dark:to-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Proyectos Destacados
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Una selección de mis proyectos más innovadores, donde combino matemáticas,
              programación y machine learning para resolver problemas complejos.
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mb-12 space-y-4">
            <div className="relative max-w-xl mx-auto mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 
                               text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar proyectos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 
                         dark:border-gray-600 bg-white dark:bg-gray-700 
                         text-gray-900 dark:text-white focus:ring-2 
                         focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg transition-all
                    ${selectedCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <category.icon className="h-4 w-4" />
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={300 + index * 100}
            >
              <ProjectCard {...project} />
            </AnimatedSection>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Terminal className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              No se encontraron proyectos
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Intenta ajustar los filtros de búsqueda
            </p>
          </div>
        )}

        {/* GitHub Link */}
        <AnimatedSection animation="fade-up" delay={600}>
          <div className="text-center mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 
                       dark:bg-primary-500 text-white rounded-lg hover:bg-primary-700 
                       dark:hover:bg-primary-600 transition-all group"
            >
              <Github className="h-5 w-5" />
              Ver más proyectos
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