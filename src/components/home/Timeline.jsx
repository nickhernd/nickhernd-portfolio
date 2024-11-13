import React, { useState, useEffect } from 'react';
import { Book, Trophy, Code2, Brain, Star, Award, Rocket } from 'lucide-react';

const TimelineItem = ({ date, title, description, icon: Icon, isLeft, isVisible, extraInfo }) => (
  <div className={`flex items-center group ${isLeft ? 'md:flex-row-reverse' : ''}`}>
    {/* Línea conectora vertical */}
    <div className="hidden md:block w-px h-full bg-primary-200 dark:bg-primary-800 absolute 
                  left-1/2 transform -translate-x-1/2">
      <div className={`h-full bg-primary-500 transition-all duration-1000 
                    ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} 
           style={{ transformOrigin: isLeft ? 'bottom' : 'top' }} />
    </div>

    {/* Punto conector */}
    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2
                  w-4 h-4 rounded-full bg-primary-500 z-10
                  group-hover:scale-150 transition-transform duration-300">
      <div className="absolute inset-0 rounded-full bg-primary-500 animate-ping opacity-75" />
    </div>

    <div className={`w-full md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8'} 
                  transform transition-all duration-500
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-xl 
                    transition-all duration-300 group border border-gray-100 dark:border-gray-700 
                    relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-transparent" />
        </div>

        {/* Contenido */}
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-3">
            <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl 
                         group-hover:scale-110 transition-transform duration-300">
              <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
              {date}
            </span>
          </div>

          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
            {title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>

          {/* Información extra */}
          {extraInfo && (
            <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {extraInfo.tags?.map((tag, index) => (
                  <span key={index} 
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 
                                rounded-full text-primary-600 dark:text-primary-400 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              {extraInfo.achievements && (
                <div className="mt-3 space-y-2">
                  {extraInfo.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm 
                                            text-gray-600 dark:text-gray-400">
                      <Star className="h-4 w-4 text-primary-500" />
                      {achievement}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observers = new Map();

    events.forEach((event, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, index]));
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.3 }
      );

      const element = document.querySelector(`#timeline-item-${index}`);
      if (element) {
        observer.observe(element);
        observers.set(index, observer);
      }
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const events = [
    {
      date: "2022 - Presente",
      title: "Universidad de Alicante",
      description: "Grado en Ingeniería Informática, profundizando en IA y sistemas distribuidos.",
      icon: Book,
      extraInfo: {
        tags: ["IA", "Sistemas Distribuidos", "Matemáticas"],
        achievements: [
          "Mejor expediente en asignaturas de IA",
          "Participación en proyectos de investigación"
        ]
      }
    },
    {
      date: "2023",
      title: "SignWave Project",
      description: "Desarrollo de sistema de traducción de lenguaje de señas usando redes neuronales.",
      icon: Brain,
      extraInfo: {
        tags: ["Deep Learning", "Computer Vision", "Python"],
        achievements: [
          "95% de precisión en traducción",
          "Implementación en tiempo real"
        ]
      }
    },
    {
      date: "2024",
      title: "Hackathon INCIBE",
      description: "Desarrollo de CheckFake, sistema de verificación de noticias mediante blockchain e IA.",
      icon: Trophy,
      extraInfo: {
        tags: ["Blockchain", "IA", "Seguridad"],
        achievements: [
          "Primer puesto en la categoría de innovación",
          "Mención especial por impacto social"
        ]
      }
    },
    {
      date: "2024",
      title: "NASA Space Apps Challenge",
      description: "Segundo lugar con visualización de datos del James Webb Space Telescope.",
      icon: Rocket,
      extraInfo: {
        tags: ["Data Visualization", "Astronomía", "Python"],
        achievements: [
          "Segundo lugar global",
          "Reconocimiento por innovación técnica"
        ]
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="timeline">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Mi Trayectoria
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un viaje continuo de aprendizaje y desarrollo en el mundo de la tecnología
            y las matemáticas.
          </p>
        </div>

        <div className="relative space-y-12">
          {events.map((event, index) => (
            <div key={index} id={`timeline-item-${index}`}>
              <TimelineItem
                {...event}
                isLeft={index % 2 === 0}
                isVisible={visibleItems.has(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;