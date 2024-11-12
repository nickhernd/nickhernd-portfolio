 // src/components/About.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.from(aboutRef.current, {
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: 60,
      opacity: 0,
      duration: 1
    });
  }, []);

  return (
    <section id="about" ref={aboutRef} className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl space-y-8">
        <h2 className="text-3xl font-light text-center">
          class About extends Developer {'{'}
        </h2>
        <div className="space-y-6 text-lg">
          <p>
            Soy Jaime Hernández, un apasionado de la intersección entre la tecnología 
            y las matemáticas. Actualmente cursando Ingeniería Informática en la UA 
            y Matemáticas en la UNED.
          </p>
          {/* Más contenido del About */}
        </div>
        <h2 className="text-3xl font-light text-center">{'}'}</h2>
      </div>
    </section>
  );
};

export default About;
