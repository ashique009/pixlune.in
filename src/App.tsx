import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-pix-dark text-pix-text flex flex-col font-sans selection:bg-pix-gold/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Our Services */}
        <Services />

        {/* 3. Our Work / Portfolio */}
        <Portfolio />

        {/* 4. About PIXLUNE */}
        <About />

        {/* 5. Contact Section */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />
    </div>
  );
};

export default App;
