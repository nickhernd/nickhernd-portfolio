import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Projects from './components/home/Projects';
import ThemeToggle from './components/shared/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ThemeToggle />
    </div>
  );
}

export default App;