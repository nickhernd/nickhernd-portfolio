import React from 'react';
import { Book, Trophy, Code2, Brain } from 'lucide-react';

const TimelineItem = ({ date, title, description, icon: Icon, isLeft }) => (
  <div className={`flex items-center ${isLeft ? 'md:flex-row-reverse' : ''}`}>
    <div className={`w-full md:w-1/2 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
        <div className="flex items-center gap-4 mb-3">
          <div className="p-2 bg-primary-100 rounded-lg group-hover:bg-primary-200 transition-colors">
            <Icon className="h-5 w-5 text-primary-600" />
          </div>
          <span className="text-sm text-primary-600 font-semibold">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  const events = [
    {
      date: "2022 - Presente",
      title: "Universidad de Alicante",
      description: "Grado en Ingeniería Informática, profundizando en IA y sistemas distribuidos.",
      icon: Book
    },
    {
      date: "2023",
      title: "SignWave Project",
      description: "Desarrollo de sistema de traducción de lenguaje de señas usando redes neuronales.",
      icon: Brain
    },
    {
      date: "2024",
      title: "Hackathon INCIBE",
      description: "Desarrollo de CheckFake, sistema de verificación de noticias mediante blockchain e IA.",
      icon: Trophy
    },
    {
      date: "2024",
      title: "NASA Space Apps Challenge",
      description: "Segundo lugar con visualización de datos del James Webb Space Telescope.",
      icon: Code2
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mi Trayectoria</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Un viaje continuo de aprendizaje y desarrollo en el mundo de la tecnología
            y las matemáticas.
          </p>
        </div>

        <div className="space-y-12">
          {events.map((event, index) => (
            <TimelineItem
              key={index}
              {...event}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;