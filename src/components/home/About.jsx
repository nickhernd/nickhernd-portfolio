import React from 'react';
import { Brain, Code2, Book, Rocket, Heart, Terminal, Star, Coffee } from 'lucide-react';

const StorySection = ({ title, content, icon: Icon, align = 'left' }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className={`flex flex-col md:flex-row gap-6 p-6 ${
        align === 'right' ? 'md:flex-row-reverse' : ''
      }`}>
        <div className="md:w-1/4 flex justify-center">
          <div className="p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full
                        group-hover:scale-110 transition-transform duration-500">
            <Icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
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
    </div>
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
            pasión por entender los sistemas complejos y su funcionamiento. Recuerdo 
            especialmente mi primer ordenador, un viejo PC que mi padre trajo a casa,
            y cómo pasaba horas intentando mejorarlo y entender su funcionamiento.
          </p>
          <p>
            Esta etapa temprana de experimentación sentó las bases de lo que sería
            mi futura carrera en tecnología. Las tardes después del colegio las pasaba
            investigando sobre electrónica básica y creando pequeños proyectos con
            Arduino, lo que me enseñó la importancia de la persistencia y el aprendizaje
            continuo.
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
            y la potencia del pensamiento matemático me cautivaron desde el primer momento.
          </p>
          <p>
            Me especialicé en Machine Learning y sistemas distribuidos, encontrando
            en ellos la perfecta combinación de desafío intelectual y aplicación práctica.
            Las clases de álgebra lineal y cálculo cobraron un nuevo significado cuando
            las apliqué a problemas de inteligencia artificial.
          </p>
          <p>
            La participación en competiciones de programación y hackathons me ayudó
            a desarrollar no solo habilidades técnicas, sino también la capacidad
            de trabajar en equipo y resolver problemas bajo presión. Cada desafío
            se convirtió en una oportunidad para aprender y crecer.
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
            He trabajado en proyectos que van desde el desarrollo de algoritmos de
            visión por computador hasta la implementación de sistemas de procesamiento
            distribuido. La optimización de redes neuronales y el procesamiento
            de lenguaje natural son áreas que me apasionan especialmente.
          </p>
          <p>
            La contribución a proyectos de código abierto me ha enseñado la
            importancia de la colaboración en el desarrollo de software. He aprendido
            que las mejores soluciones surgen cuando combinamos diferentes perspectivas
            y experiencias en la resolución de problemas complejos.
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
            de ciencia ficción y ensayos científicos, alimenta mi imaginación y
            amplía mis horizontes.
          </p>
          <p>
            El aprendizaje de idiomas (Español, Inglés, Catalán) me ha abierto
            puertas a diferentes culturas y formas de pensar. Cada lengua aporta
            una nueva perspectiva sobre cómo estructurar y expresar ideas.
          </p>
          <p>
            La fotografía y el senderismo se han convertido en pasiones paralelas
            que me ayudan a mantener una perspectiva fresca y creativa. Estas
            actividades me recuerdan la importancia de observar el mundo desde
            diferentes ángulos, una habilidad crucial también en la programación.
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
            Colaboro en varios proyectos de investigación y desarrollo, explorando
            nuevas técnicas de deep learning y su aplicación en problemas del mundo
            real. La velocidad con la que evoluciona el campo me mantiene en constante
            aprendizaje.
          </p>
          <p>
            La mentoría de otros estudiantes se ha convertido en una parte importante
            de mi desarrollo profesional. Compartir conocimientos a través de workshops
            y presentaciones técnicas no solo ayuda a otros, sino que también refuerza
            mi propia comprensión y me mantiene actualizado con las últimas tendencias
            tecnológicas.
          </p>
        </div>
      ),
      align: 'left'
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Mi Historia
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Un viaje de curiosidad, aprendizaje y pasión por la tecnología
            y las matemáticas.
          </p>
        </div>

        {/* Story Sections */}
        <div className="space-y-8">
          {storyParts.map((part, index) => (
            <StorySection
              key={index}
              {...part}
            />
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mt-16 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
          <Rocket className="h-12 w-12 text-blue-500 mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-300 italic text-lg">
            "La verdadera pasión por la tecnología y las matemáticas no está solo
            en resolver problemas, sino en encontrar las preguntas correctas que hacer."
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;