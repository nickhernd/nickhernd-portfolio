import React, { useState } from 'react';
import { 
  Brain, Cpu, Network, Github, ExternalLink, Command, 
  Code2, Monitor, Shield, Terminal, ArrowRight 
} from 'lucide-react';

// ProjectCard componente para vistas individuales
const ProjectCard = ({ project, layout = 'default' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const layoutStyles = {
    default: 'col-span-1 row-span-1',
    large: 'col-span-2 row-span-2',
    wide: 'col-span-2 row-span-1'
  };

  return (
    <div
      className={`${layoutStyles[layout]} relative overflow-hidden rounded-2xl 
                group hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 
                    dark:from-gray-800 dark:to-gray-700 transition-all duration-500
                    group-hover:from-blue-200 group-hover:to-blue-100
                    dark:group-hover:from-gray-700 dark:group-hover:to-gray-600">
        <div className="absolute inset-0 opacity-10" />
      </div>

      {project.image && (
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-20 group-hover:opacity-30 
                     transition-opacity duration-500"
          />
        </div>
      )}

      <div className="relative p-6 h-full flex flex-col z-10">
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <project.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex space-x-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 
                   group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        {project.detailedDescription && isHovered && (
          <div className="mt-4 space-y-2">
            {project.detailedDescription.map((paragraph, i) => (
              <p key={i} className="text-gray-600 dark:text-gray-300 text-sm">
                {paragraph}
              </p>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-white/40 dark:bg-black/20 rounded-full
                       text-blue-700 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.stats && (
          <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t 
                        from-black/50 via-black/30 to-transparent p-6 transform 
                        ${isHovered ? 'translate-y-0' : 'translate-y-full'}
                        transition-transform duration-300`}>
            <div className="flex justify-around text-white">
              {Object.entries(project.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="font-bold">{value}</div>
                  <div className="text-sm opacity-80 capitalize">{key}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ProjectPreviewCard componente para la vista previa
const ProjectPreviewCard = ({ title, description, icon: Icon, tags }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all p-6 group">
    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4 
                    group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    </div>
   
    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white 
                   group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
   
    <p className="text-gray-600 dark:text-gray-300 mb-4">
      {description}
    </p>
   
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 
                     dark:text-blue-400 text-sm rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);

// Componente principal Projects
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos', icon: Code2 },
    { id: 'scientific', name: 'Científicos', icon: Brain },
    { id: 'security', name: 'Seguridad', icon: Shield },
    { id: 'tools', name: 'Herramientas', icon: Terminal },
    { id: 'games', name: 'Juegos', icon: Monitor }
  ];

  const projects = [
    {
      category: 'tools',
      title: "Mi Entorno de Desarrollo",
      description: "Configuración personalizada de Neovim con plugins específicos para desarrollo eficiente",
      detailedDescription: [
        "Mi entorno de desarrollo está construido alrededor de Neovim, personalizado para maximizar la productividad y eficiencia en el desarrollo.",
        "Utilizo una configuración en Lua que incluye LSP, completado inteligente, y navegación de código avanzada.",
        "La gestión de proyectos se realiza mediante una combinación de herramientas, incluyendo Notion para documentación, y metodologías ágiles con Trello."
      ],
      icon: Terminal,
      tags: ["Neovim", "Lua", "LSP", "Git", "Productivity"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/320"
    },
    {
      category: 'scientific',
      title: "SimuCore",
      description: "Plataforma integral de simulación científica para resolver problemas complejos en matemáticas, física y química.",
      icon: Brain,
      tags: ["Rust", "Python", "Julia", "Quantum", "BigData"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/320"
    },
    {
      category: 'security',
      title: "NetShield AI",
      description: "Sistema inteligente de seguridad y gestión de redes con ML y blockchain.",
      icon: Shield,
      tags: ["Go", "Python", "Kubernetes", "Blockchain", "ML"],
      github: "#",
      image: "/api/placeholder/400/320"
    },
    {
      category: 'games',
      title: "Tales of Etheria",
      description: "ORPG 2D con motor gráfico propio, sistemas multijugador y narrativa dinámica.",
      icon: Monitor,
      tags: ["C#", "C++", "OpenGL", "Gamedev", "Networking"],
      github: "#",
      demo: "#",
      image: "/api/placeholder/400/320"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Proyectos Destacados
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Una muestra de mi trabajo y pasión por la tecnología, desde herramientas
            de desarrollo hasta simulaciones científicas complejas.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all
                    ${selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 
                     text-white rounded-xl hover:bg-blue-700 transition-all 
                     group hover:scale-105"
          >
            <Github className="h-5 w-5" />
            Explorar más proyectos
            <ExternalLink className="h-4 w-4 transform group-hover:translate-x-1 
                                  transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Componente ProjectsPreview para la página de inicio
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
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
            Proyectos Destacados
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
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
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 
                      hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            Ver todos los proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export { ProjectCard, ProjectsPreview };
export default Projects;