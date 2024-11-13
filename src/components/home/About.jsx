import React from 'react';
import { Brain, Code2, Book, Rocket, Heart, Terminal, Star, Coffee } from 'lucide-react';
import Card from '../shared/Card';
import AnimatedSection from '../shared/AnimatedSection';

const StorySection = ({ title, content, icon: Icon, align = 'left', delay = 0 }) => {
  return (
    <AnimatedSection 
      animation={align === 'left' ? 'fade-right' : 'fade-left'} 
      delay={delay}
    >
      <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300">
        <div className={`flex flex-col md:flex-row gap-6 ${
          align === 'right' ? 'md:flex-row-reverse' : ''
        }`}>
          <div className="md:w-1/4 flex justify-center">
            <div className="p-4 bg-primary-100 dark:bg-primary-900/50 rounded-full
                          group-hover:scale-110 transition-transform duration-500">
              <Icon className="w-12 h-12 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <div className="md:w-3/4">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              {title}
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              {content}
            </div>
          </div>
        </div>
      </Card>
    </AnimatedSection>
  );
};

const About = () => {
  const storyParts = [
    {
      icon: Star,
      title: "Los Inicios",
      content: (
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Desde pequeño, mi curiosidad me llevaba a explorar cómo funcionaban las cosas.
            Desarmaba juguetes y dispositivos electrónicos, fascinado por sus mecanismos internos.
            Esta curiosidad natural eventualmente me llevaría hacia el mundo de la tecnología
            y las matemáticas.
          </p>
          <p>
            Lo que comenzó como un hobby desmontando aparatos, se transformó en una
            pasión por entender los sistemas complejos y su funcionamiento.
          </p>
        </div>
      ),
      align: 'left'
    },
    {
      icon: Brain,
      title: "El Descubrimiento",
      content: (
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Al entrar en la universidad, descubrí mi verdadera pasión: la intersección
            entre las matemáticas y la computación. La elegancia de los algoritmos
            y la potencia del pensamiento matemático me cautivaron.
          </p>
          <p>
            Me especialicé en Machine Learning y sistemas distribuidos, encontrando
            en ellos la perfecta combinación de desafío intelectual y aplicación práctica.
          </p>
        </div>
      ),
      align: 'right'
    },
    {
      icon: Terminal,
      title: "El Viaje Técnico",
      content: (
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Mi camino me ha llevado a dominar diversas tecnologías y lenguajes:
            Python para machine learning, C++ para sistemas de alto rendimiento,
            y herramientas modernas como Docker y Kubernetes para sistemas distribuidos.
          </p>
          <p>
            Cada proyecto ha sido una oportunidad para aprender y crecer, desde
            aplicaciones de visión por computador hasta sistemas de procesamiento
            distribuido.
          </p>
        </div>
      ),
      align: 'left'
    },
    {
      icon: Heart,
      title: "Más Allá del Código",
      content: (
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Pero no todo es código y matemáticas. Mantengo un equilibrio vital
            practicando natación y ejercicio regular. La lectura, especialmente
            de ciencia ficción, alimenta mi imaginación y creatividad.
          </p>
          <p>
            El aprendizaje de idiomas (Español, Inglés, Catalán) me ha abierto
            puertas a diferentes culturas y formas de pensar.
          </p>
        </div>
      ),
      align: 'right'
    },
    {
      icon: Coffee,
      title: "El Presente",
      content: (
        <div className="space-y-4 text-gray-600 dark:text-gray-300">
          <p>
            Actualmente, combino mis estudios en Ingeniería Informática y Matemáticas
            con proyectos personales desafiantes. Mi enfoque está en el desarrollo
            de soluciones que combinen machine learning con sistemas distribuidos.
          </p>
          <p>
            Cada día es una oportunidad para aprender algo nuevo y enfrentar
            desafíos más complejos.
          </p>
        </div>
      ),
      align: 'left'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white 
                      dark:from-gray-900 dark:to-gray-800" id="about">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Mi Historia
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Un viaje de curiosidad, aprendizaje y pasión por la tecnología
              y las matemáticas.
            </p>
          </div>
        </AnimatedSection>

        {/* Story Sections */}
        <div className="space-y-8">
          {storyParts.map((part, index) => (
            <StorySection
              key={index}
              {...part}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Quote */}
        <AnimatedSection animation="fade-up" delay={1000}>
          <Card className="text-center mt-16 bg-primary-50 dark:bg-primary-900/20">
            <Rocket className="h-12 w-12 text-primary-500 mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-300 italic text-lg">
              "La verdadera pasión por la tecnología y las matemáticas no está solo
              en resolver problemas, sino en encontrar las preguntas correctas que hacer."
            </p>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;