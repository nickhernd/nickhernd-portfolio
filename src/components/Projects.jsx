 // src/components/Projects.jsx
import React from 'react';
import { Brain, Code, Cpu, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ML DSS Drowsiness",
      description: "Sistema de reconocimiento facial en tiempo real para detectar somnolencia",
      tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: 2,
      title: "SignWasve",
      description: "Reconocimiento de lenguaje de señas con ML",
      tech: ["Python", "TensorFlow", "MediaPipe", "NLTK"],
      icon: <Code className="w-8 h-8" />
    },
    {
      id: 3,
      title: "QuantumChowCrypt",
      description: "Librería de encriptación cuántica con ML",
      tech: ["C++", "Qiskit", "TensorFlow", "QuTiP"],
      icon: <Cpu className="w-8 h-8" />
    },
    {
      id: 4,
      title: "QuantumDESolver",
      description: "Resolución de ecuaciones diferenciales",
      tech: ["Python", "QuTiP", "TensorFlow", "NumPy"],
      icon: <Database className="w-8 h-8" />
    }
  ];

  return (
    <section id="projects" className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-light text-center mb-16">
          ∀ projects ∈ Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className="group relative p-6 rounded-lg border border-opacity-20 hover:border-opacity-100 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                {project.icon}
                <h3 className="text-xl">{project.title}</h3>
              </div>
              <p className="opacity-70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 text-sm rounded-full border border-current opacity-50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
