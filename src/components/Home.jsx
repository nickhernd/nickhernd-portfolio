 // src/components/Home.jsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const titleRef = useRef(null);
  
  useEffect(() => {
    gsap.from(titleRef.current.children, {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });
  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center p-8">
      <div ref={titleRef} className="text-center space-y-8">
        <h1 className="text-7xl font-light">Jaime Hernández</h1>
        <div className="text-xl opacity-70 space-y-2">
          <p>Ingeniería Informática @ UA</p>
          <p>Matemáticas @ UNED</p>
          <p className="font-mono mt-4">console.log("Hello, World!");</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
