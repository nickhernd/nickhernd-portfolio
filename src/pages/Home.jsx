import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import ProjectsPreview from '../components/home/ProjectsPreview';
import Timeline from '../components/home/Timeline';
import Contact from '../components/home/Contact';
import SectionTransition from '../components/shared/SectionTransition';

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <SectionTransition>
        <Hero />
      </SectionTransition>

      <SectionTransition>
        <About />
      </SectionTransition>

      <SectionTransition>
        <Skills />
      </SectionTransition>

      <SectionTransition>
        <ProjectsPreview />
      </SectionTransition>

      <SectionTransition>
        <Timeline />
      </SectionTransition>

      <SectionTransition>
        <Contact />
      </SectionTransition>
    </div>
  );
};

export default HomePage;