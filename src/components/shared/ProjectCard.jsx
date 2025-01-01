import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-50 
                    dark:from-gray-800 dark:to-gray-700 transition-all duration-500
                    group-hover:from-primary-200 group-hover:to-primary-100
                    dark:group-hover:from-gray-700 dark:group-hover:to-gray-600">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Imagen del proyecto si existe */}
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

      {/* Contenido */}
      <div className="relative p-6 h-full flex flex-col z-10">
        {/* Iconos y Enlaces */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-white/20 rounded-xl">
            <project.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
          </div>
          <div className="flex space-x-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <Github className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-primary-600 dark:text-primary-400" />
              </a>
            )}
          </div>
        </div>

        {/* Título y Descripción */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 
                   group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-white/40 dark:bg-black/20 rounded-full
                       text-primary-700 dark:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Estadísticas */}
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

export default ProjectCard;