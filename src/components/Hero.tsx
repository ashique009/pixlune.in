import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-20 px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Lighting & Subtle Gold Gradients */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-pix-gold/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Subtle Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center space-y-8 z-10">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-pix-gold/25 bg-pix-surface/60 backdrop-blur-sm text-xs text-pix-gold-light tracking-wide shadow-gold-sm">
          <Sparkles className="w-3.5 h-3.5 text-pix-gold" />
          <span className="font-medium uppercase tracking-widest text-[11px]">Web Development Agency</span>
        </div>

        {/* Brand Name & Tagline */}
        <div className="space-y-4">
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white">
            <span className="text-gold-gradient block sm:inline">{siteConfig.brandName}</span>
          </h1>
          <p className="text-xl sm:text-2xl font-light tracking-wider text-pix-muted italic">
            "{siteConfig.tagline}"
          </p>
        </div>

        {/* Short Introduction */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-pix-muted/90 font-normal leading-relaxed">
          We craft modern websites, bespoke e-commerce platforms, and polished digital experiences for forward-thinking businesses. Focused on speed, clean typography, and timeless design.
        </p>

        {/* Call to Actions: "Explore Our Work" and "Contact Us" */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-pix-gold/30 hover:border-pix-gold text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-white/[0.04]"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 text-pix-gold" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold-gradient text-black text-sm font-semibold tracking-wide transition-transform hover:scale-[1.02] shadow-gold-md"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Subtle Feature Highlights */}
        <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl mx-auto border-t border-white/5 text-xs text-pix-dim">
          <div>
            <span className="block text-white font-semibold text-sm mb-0.5">High Performance</span>
            <span>Fast, clean codebases</span>
          </div>
          <div>
            <span className="block text-white font-semibold text-sm mb-0.5">Luxury Aesthetic</span>
            <span>Minimalist & refined</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="block text-white font-semibold text-sm mb-0.5">Tailored Solutions</span>
            <span>Built for growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};
