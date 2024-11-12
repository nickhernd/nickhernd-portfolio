 // src/components/Contact.jsx
import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { gsap } from 'gsap';

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    gsap.from(contactRef.current.children, {
      scrollTrigger: {
        trigger: contactRef.current,
        start: "top center",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    });
  }, []);

  return (
    <section id="contact" ref={contactRef} className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center space-y-12">
        <h2 className="text-3xl font-light">async function contact() {'{'}</h2>
        <div className="space-y-8">
          <div className="flex justify-center space-x-8">
            <a href="https://github.com/tu-usuario" className="hover:scale-110 transition-transform">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/tu-perfil" className="hover:scale-110 transition-transform">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:ramajahede@gmail.com" className="hover:scale-110 transition-transform">
              <Mail className="h-8 w-8" />
            </a>
          </div>
          <p className="font-mono">return "ramajahede@gmail.com";</p>
        </div>
        <h2 className="text-3xl font-light">{'}'}</h2>
      </div>
    </section>
  );
};

export default Contact;
