import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Bio from './components/Bio';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AISection from './components/AISection';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'bio', 'skills', 'experience', 'projects', 'ai', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-slate-950 text-gray-100 min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-purple-950/30 pointer-events-none" />
      <div className="neon-grid fixed inset-0 pointer-events-none opacity-10" />

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="relative z-10">
        <section id="hero">
          <Hero />
        </section>

        <section id="bio">
          <Bio />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="ai">
          <AISection />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
