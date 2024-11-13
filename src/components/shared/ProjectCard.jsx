import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import Card from './Card';

const ProjectCard = ({ 
  title, 
  description, 
  tags, 
  github, 
  demo, 
  icon: Icon 
}) => {
  return (
    <Card className="group h-full">
      <div className="relative h-48 -mx-6 -mt-6 mb-6 bg-gradient-to-r from-primary-600 to-primary-400 rounded-t-xl overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className="w-16 h-16 text-white opacity-90" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 text-sm bg-primary-50 dark:bg-primary-900/50 
                       text-primary-600 dark:text-primary-400 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {description}
      </p>

      <div className="flex gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 
                     hover:text-primary-600 dark:hover:text-primary-400"
          >
            <Github className="h-5 w-5" />
            Código
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 
                     hover:text-primary-600 dark:hover:text-primary-400"
          >
            <ExternalLink className="h-5 w-5" />
            Demo
          </a>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;