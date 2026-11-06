import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechMarquee } from './components/TechMarquee';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ui/Motion';

export const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-pix-dark font-sans text-pix-text selection:bg-pix-gold/30 selection:text-white">
      <ScrollProgress />

      {/* Fine film grain over the whole experience */}
      <div
        aria-hidden
        className="noise-overlay pointer-events-none fixed inset-0 z-[45] opacity-[0.035]"
      />

      <Navbar />

      <main className="flex-grow">
        <Hero />
        <TechMarquee />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
