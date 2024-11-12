 // src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Background from './components/Background';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Background />
        <Navigation />
        <main>
          <Home />
          <About />
          <Education />
          <Projects />
          <Contact />
        </main>
      </div>
    </Router>
  );
}

export default App;
