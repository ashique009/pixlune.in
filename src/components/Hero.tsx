import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Studio lighting parallax based on cursor
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const lightX = useTransform(springX, [-0.5, 0.5], ['35%', '65%']);
  const lightY = useTransform(springY, [-0.5, 0.5], ['20%', '40%']);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] pt-28 pb-16 px-6 lg:px-8 flex flex-col justify-center items-center overflow-hidden bg-[#050507]"
    >
      {/* Cinematic Studio Lighting Environment */}
      <motion.div
        className="absolute w-[600px] sm:w-[850px] h-[400px] sm:h-[550px] rounded-full blur-[140px] pointer-events-none -z-10"
        style={{
          left: lightX,
          top: lightY,
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.03) 60%, transparent 80%)',
        }}
      />

      {/* Atmospheric Studio Floor Grid */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
        }}
      />

      <div className="max-w-5xl mx-auto w-full text-center space-y-8 z-10">
        {/* Subtle Brand Tag Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-pix-gold/30 bg-pix-surface/80 backdrop-blur-md shadow-gold-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-pix-gold" />
          <span className="text-[11px] font-semibold tracking-widest uppercase text-pix-gold-light">
            Creative Digital Agency &bull; Production Architecture
          </span>
        </motion.div>

        {/* Brand Headline & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Cinematic Engineering for <br className="hidden sm:inline" />
            <span className="text-gold-gradient">Ambitious Digital Brands</span>
          </h1>
          <p className="font-display text-lg sm:text-2xl font-light text-pix-muted italic tracking-wide">
            "{siteConfig.tagline}"
          </p>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-pix-muted/90 font-normal leading-relaxed pt-2">
            We architect bespoke web platforms, high-velocity e-commerce storefronts, and full-stack software systems where refined aesthetics meet surgical engineering.
          </p>
        </motion.div>

        {/* Primary Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
        >
          <a
            href="#work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-gold-gradient text-black text-xs font-bold tracking-wider uppercase hover:opacity-95 transition-all shadow-gold-md group"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border border-pix-gold/30 hover:border-pix-gold bg-pix-surface/60 backdrop-blur-md text-white text-xs font-semibold tracking-wider uppercase hover:bg-white/5 transition-all"
          >
            <span>Start A Conversation</span>
            <ArrowRight className="w-4 h-4 text-pix-gold" />
          </a>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="pt-12 sm:pt-16 flex flex-col items-center gap-2 text-pix-dim">
        <span className="text-[10px] font-mono uppercase tracking-widest text-pix-dim">
          Scroll to Explore
        </span>
        <div className="w-5 h-8 rounded-full border border-white/15 p-1 flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className="w-1 h-2 rounded-full bg-pix-gold"
          />
        </div>
      </div>
    </section>
  );
};
