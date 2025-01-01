import React, { useState, useEffect } from 'react';
import { 
  Book, Trophy, Code2, Brain, Star, Award, Rocket, 
  Terminal, Github, Cpu, Network, Shield, Laptop
} from 'lucide-react';

const TimelineItem = ({ date, title, description, icon: Icon, isLeft, isVisible, extraInfo, detailedInfo }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className={`flex items-center group ${isLeft ? 'md:flex-row-reverse' : ''}`}>
      {/* Línea conectora vertical */}
      <div className="hidden md:block w-px h-full bg-blue-200 dark:bg-blue-800 absolute 
                    left-1/2 transform -translate-x-1/2">
        <div className={`h-full bg-blue-500 transition-all duration-1000 
                      ${isVisible ? 'scale-y-100' : 'scale-y-0'}`} 
             style={{ transformOrigin: isLeft ? 'bottom' : 'top' }} />
      </div>

      {/* Punto conector */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2
                    w-4 h-4 rounded-full bg-blue-500 z-10
                    group-hover:scale-150 transition-transform duration-300">
        <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-75" />
      </div>

      <div className={`w-full md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8'} 
                    transform transition-all duration-500
                    ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-xl 
                      transition-all duration-300 group border border-gray-100 dark:border-gray-700 
                      relative overflow-hidden">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-transparent" />
          </div>

          {/* Contenido */}
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-xl 
                           group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
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
                          className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 
                                  rounded-full text-blue-600 dark:text-blue-400 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                {extraInfo.achievements && (
                  <div className="mt-3 space-y-2">
                    {extraInfo.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm 
                                              text-gray-600 dark:text-gray-400">
                        <Star className="h-4 w-4 text-blue-500" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Información detallada */}
            {detailedInfo && (
              <div className="mt-4">
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-blue-600 dark:text-blue-400 text-sm hover:underline focus:outline-none"
                >
                  {showDetails ? "Ver menos" : "Ver más detalles"}
                </button>
                
                {showDetails && (
                  <div className="mt-4 space-y-4">
                    {detailedInfo.map((info, index) => (
                      <div key={index} className="text-gray-600 dark:text-gray-300">
                        <h4 className="font-semibold mb-2">{info.title}</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm">
                          {info.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
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
};

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
          "Participación en proyectos de investigación",
          "Colaboración en el departamento de Ciencias de la Computación"
        ]
      },
      detailedInfo: [
        {
          title: "Proyectos Académicos Destacados",
          points: [
            "Desarrollo de sistema de reconocimiento facial con técnicas de deep learning",
            "Implementación de algoritmos de optimización para problemas NP-completos",
            "Diseño de arquitecturas de microservicios para aplicaciones distribuidas"
          ]
        },
        {
          title: "Investigación y Desarrollo",
          points: [
            "Participación en grupo de investigación de IA",
            "Estudio de nuevas arquitecturas de redes neuronales",
            "Colaboración en papers sobre computación cuántica"
          ]
        }
      ]
    },
    {
      date: "2023",
      title: "SignWave Project",
      description: "Sistema de traducción de lenguaje de señas en tiempo real usando redes neuronales.",
      icon: Brain,
      extraInfo: {
        tags: ["Deep Learning", "Computer Vision", "Python"],
        achievements: [
          "95% de precisión en traducción",
          "Implementación en tiempo real",
          "Premio a la innovación tecnológica"
        ]
      },
      detailedInfo: [
        {
          title: "Desarrollo Técnico",
          points: [
            "Arquitectura basada en YOLO para detección de manos",
            "Implementación de transfer learning con modelos pre-entrenados",
            "Optimización para ejecución en dispositivos móviles"
          ]
        },
        {
          title: "Impacto Social",
          points: [
            "Colaboración con asociaciones de personas sordas",
            "Implementación piloto en centros educativos",
            "Presentación en conferencias de accesibilidad"
          ]
        }
      ]
    },
    {
      date: "2024",
      title: "Hackathon INCIBE",
      description: "CheckFake: Sistema de verificación de noticias usando blockchain e IA.",
      icon: Shield,
      extraInfo: {
        tags: ["Blockchain", "IA", "Seguridad"],
        achievements: [
          "Primer puesto en innovación",
          "Mención especial por impacto social",
          "Implementación piloto en medios locales"
        ]
      },
      detailedInfo: [
        {
          title: "Innovación Tecnológica",
          points: [
            "Smart contracts para trazabilidad de fuentes",
            "Análisis semántico con transformers",
            "Sistema de reputación descentralizado"
          ]
        },
        {
          title: "Reconocimientos",
          points: [
            "Premio a la mejor solución técnica",
            "Invitación a programa de incubación",
            "Presentación en congreso de ciberseguridad"
          ]
        }
      ]
    },
    {
      date: "2024",
      title: "NASA Space Apps Challenge",
      description: "Visualización de datos del James Webb Space Telescope.",
      icon: Rocket,
      extraInfo: {
        tags: ["Data Visualization", "Astronomía", "Python"],
        achievements: [
          "Segundo lugar global",
          "Reconocimiento por innovación técnica",
          "Mención en blog oficial de NASA"
        ]
      },
      detailedInfo: [
        {
          title: "Desarrollo Técnico",
          points: [
            "Procesamiento de imágenes multiespectrales",
            "Visualización 3D de datos astronómicos",
            "Implementación de algoritmos de reducción dimensional"
          ]
        },
        {
          title: "Impacto y Reconocimientos",
          points: [
            "Uso educativo en planetarios",
            "Colaboración con astrónomos profesionales",
            "Publicación en revista de astronomía"
          ]
        }
      ]
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
            Un viaje continuo de aprendizaje y desarrollo, combinando educación formal
            con proyectos innovadores y participación en competencias tecnológicas.
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