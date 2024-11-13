import React, { useState, useEffect } from 'react';
import { Brain, Code2, Database, Network, Server, Function } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector(`#skill-${title}`);
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [title]);

  return (
    <div
      id={`skill-${title}`}
      className={`transform transition-all duration-700 delay-${delay} ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
        <Icon className="h-8 w-8 text-primary-600 mb-4" />
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{skill.name}</span>
                <span className="text-primary-600 font-semibold">
                  {skill.level}%
                </span>
              </div>
              <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary-500 rounded-full transition-all duration-1000"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
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
    <section className="py-20 bg-gray-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Habilidades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Combinación de conocimientos en matemáticas, programación y machine learning,
            con enfoque en algoritmos y sistemas distribuidos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.title}
              {...category}
              delay={(index + 1) * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;