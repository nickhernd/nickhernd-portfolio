 // src/components/Education.jsx
import React from 'react';
import { GraduationCap, Code, Calculator } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Universidad de Alicante",
      degree: "Ingeniería Informática",
      period: "2022 - Presente",
      grade: "8.54/10",
      icon: <Code className="w-6 h-6" />
    },
    {
      institution: "UNED",
      degree: "Matemáticas",
      period: "2023 - Presente",
      grade: "9.05/10",
      icon: <Calculator className="w-6 h-6" />
    }
  ];

  return (
    <section id="education" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl space-y-12">
        <h2 className="text-3xl font-light text-center">
          const education = async () => {'{'}
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <div key={index} className="p-6 rounded-lg border border-opacity-20 hover:border-opacity-100 transition-all">
              <div className="flex items-center gap-4 mb-4">
                {edu.icon}
                <h3 className="text-xl">{edu.institution}</h3>
              </div>
              <p className="opacity-70">{edu.degree}</p>
              <p className="text-sm opacity-50">{edu.period}</p>
              <p className="font-mono mt-2">Grade: {edu.grade}</p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-light text-center">{'}'}</h2>
      </div>
    </section>
  );
};

export default Education;
