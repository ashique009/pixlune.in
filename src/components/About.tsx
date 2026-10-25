import React from 'react';
import { Zap, Sparkles, Code } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Brand Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Gold Ambient Glow behind logo badge */}
              <div className="absolute -inset-1 bg-gold-gradient rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-500 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden border border-pix-gold/30 bg-pix-surface p-8 text-center space-y-6">
                <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border border-pix-gold/40 shadow-gold-md p-1 bg-black">
                  <img
                    src="/pixlune-logo.jpg"
                    alt="PIXLUNE Emblem"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-bold text-2xl tracking-wider text-white">
                    {siteConfig.brandName}
                  </h3>
                  <p className="text-xs text-pix-gold uppercase tracking-widest font-medium">
                    {siteConfig.tagline}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-left text-xs">
                  <div>
                    <span className="text-pix-dim block">Focus</span>
                    <span className="text-white font-medium">Digital Craft</span>
                  </div>
                  <div>
                    <span className="text-pix-dim block">Standard</span>
                    <span className="text-white font-medium">Bespoke Quality</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Values Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-pix-gold">
                About The Brand
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Engineered for Clarity, Built for Impact
              </h2>
            </div>

            <p className="text-base sm:text-lg text-pix-muted leading-relaxed font-normal">
              PIXLUNE is a digital development brand dedicated to building useful, modern, and visually polished web experiences. We combine clean code architecture with refined visual design, ensuring that every project is fast, accessible, and intuitive to use.
            </p>

            <p className="text-sm sm:text-base text-pix-muted/80 leading-relaxed font-normal">
              From high-performing brand websites to scalable e-commerce infrastructure, our approach is centered around clarity and purpose: eliminating digital noise and transforming ideas into robust, tangible web solutions.
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-white/5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Code className="w-4 h-4 text-pix-gold" />
                  <span>Modern Tech</span>
                </div>
                <p className="text-xs text-pix-dim leading-relaxed">
                  Engineered with modern frameworks for lightweight and stable performance.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-pix-gold" />
                  <span>Refined Aesthetics</span>
                </div>
                <p className="text-xs text-pix-dim leading-relaxed">
                  Clean typography, minimal clutter, and premium black & gold luxury styling.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <Zap className="w-4 h-4 text-pix-gold" />
                  <span>Speed & Agility</span>
                </div>
                <p className="text-xs text-pix-dim leading-relaxed">
                  Fast load times, responsive breakpoints, and reliable user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
