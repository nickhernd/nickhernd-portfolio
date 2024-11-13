import React from 'react';
import { Brain, Code2, Network, Function } from 'lucide-react';

const SkillCard = ({ title, icon: Icon, skills }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
          <Icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-500 rounded-full transition-all duration-1000"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      icon: Brain,
      title: "Machine Learning & IA",
      skills: [
        { name: "Deep Learning", level: 90 },
        { name: "Computer Vision", level: 85 },
        { name: "Neural Networks", level: 85 }
      ]
    },
    {
      icon: Code2,
      title: "Desarrollo",
      skills: [
        { name: "Python", level: 95 },
        { name: "C++", level: 85 },
        { name: "Rust", level: 80 }
      ]
    },
    {
      icon: Network,
      title: "Sistemas Distribuidos",
      skills: [
        { name: "Docker/K8s", level: 85 },
        { name: "MPI", level: 90 },
        { name: "OpenMP", level: 85 }
      ]
    },
    {
      icon: Function,
      title: "Matemáticas",
      skills: [
        { name: "Algoritmos", level: 95 },
        { name: "Álgebra", level: 90 },
        { name: "Optimización", level: 85 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Habilidades
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Combinación de conocimientos en matemáticas, programación y machine learning,
            con enfoque en algoritmos y sistemas distribuidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.title}
              {...category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;