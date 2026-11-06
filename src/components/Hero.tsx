import React, { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Palette,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { Counter, EASE, Magnetic } from './ui/Motion';

const stats = [
  { value: projects.length, pad: true, suffix: '', label: 'Live Platforms' },
  { value: services.length, pad: true, suffix: '', label: 'Core Services' },
  { value: 100, pad: false, suffix: '%', label: 'Bespoke Builds' },
];

const floatingChips = [
  {
    icon: Code2,
    label: 'Custom Web Apps',
    className: 'left-[4%] top-[31%]',
    delay: '0s',
  },
  {
    icon: ShoppingBag,
    label: 'E-Commerce',
    className: 'right-[4%] top-[42%]',
    delay: '1.6s',
  },
  {
    icon: Palette,
    label: 'UI / UX Design',
    className: 'bottom-[24%] left-[9%]',
    delay: '3.2s',
  },
];

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Cursor-driven studio lighting
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 90 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 90 });

  const lightX = useTransform(springX, [-0.5, 0.5], ['32%', '68%']);
  const lightY = useTransform(springY, [-0.5, 0.5], ['18%', '42%']);

  // Gentle scroll parallax on the hero copy
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-[#050507] px-5 pb-16 pt-24 sm:px-6 sm:pt-28 lg:px-8"
    >
      {/* Studio lighting follows the cursor */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -z-10 h-[520px] w-[860px] rounded-full blur-[150px]"
        style={{
          left: lightX,
          top: lightY,
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, rgba(212, 175, 55, 0.04) 55%, transparent 78%)',
        }}
      />

      {/* Fixed ambient wash + drifting orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 -z-10 h-72 w-72 animate-float-slow rounded-full bg-pix-gold/[0.06] blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 -z-10 h-80 w-80 animate-float-slow rounded-full bg-pix-gold/[0.05] blur-[100px]"
        style={{ animationDelay: '2.4s' }}
      />

      {/* Atmospheric floor grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '52px 52px',
          maskImage: 'radial-gradient(ellipse 65% 60% at 50% 45%, black 15%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 65% 60% at 50% 45%, black 15%, transparent 80%)',
        }}
      />

      {/* Floating capability chips (desktop only) */}
      {floatingChips.map(({ icon: Icon, label, className, delay }) => (
        <div
          key={label}
          aria-hidden
          className={`pointer-events-none absolute z-0 hidden animate-float items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[11px] font-medium tracking-wide text-pix-muted shadow-[0_10px_30px_-12px_rgba(0,0,0,0.8)] backdrop-blur-md xl:flex ${className}`}
          style={{ animationDelay: delay }}
        >
          <Icon className="h-3.5 w-3.5 text-pix-gold" />
          {label}
        </div>
      ))}

      <motion.div
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="inline-flex items-center gap-2.5 rounded-full border border-pix-gold/25 bg-pix-surface/70 px-4 py-1.5 shadow-gold-sm backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pix-gold/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pix-gold" />
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-pix-gold-light sm:text-[11px]">
            Creative Digital Agency
          </span>
          <span className="hidden h-3 w-px bg-white/15 sm:block" />
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-pix-muted sm:block">
            Web · Commerce · Systems
          </span>
        </motion.div>

        {/* Headline */}
        <h1
          aria-label="Cinematic Engineering for Ambitious Digital Brands"
          className="mt-7 font-display text-[2.55rem] font-bold leading-[1.06] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-[5.1rem]"
        >
          <span aria-hidden className="block">
            {['Cinematic', 'Engineering', 'for'].map((word, index) => (
              <span
                key={word}
                className="inline-block overflow-hidden pb-1 align-bottom"
              >
                <motion.span
                  className="inline-block"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, delay: 0.12 + index * 0.08, ease: EASE }}
                >
                  {word}
                  {index < 2 ? '\u00A0' : ''}
                </motion.span>
              </span>
            ))}
          </span>
          <span aria-hidden className="block overflow-hidden pb-1">
            <motion.span
              className="inline-block text-gold-shine"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
            >
              Ambitious Digital Brands
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.62, ease: EASE }}
          className="mt-5 font-display text-base font-light italic tracking-wide text-pix-gold-light/85 sm:text-xl"
        >
          “{siteConfig.tagline}”
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.72, ease: EASE }}
          className="mx-auto mt-4 max-w-2xl text-[13px] leading-relaxed text-pix-muted sm:text-[15px]"
        >
          We architect bespoke web platforms, high-velocity e-commerce storefronts,
          and full-stack software where refined aesthetics meet surgical engineering.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.82, ease: EASE }}
          className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row"
        >
          <Magnetic>
            <a
              href="#work"
              className="group relative inline-flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold-gradient px-8 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black shadow-gold-md transition-shadow duration-300 hover:shadow-[0_0_45px_-8px_rgba(212,175,55,0.5)] sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Explore Projects
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
              <span
                aria-hidden
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
            </a>
          </Magnetic>

          <Magnetic strength={8}>
            <a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-pix-gold/30 bg-pix-surface/50 px-8 py-3.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md transition-all duration-300 hover:border-pix-gold/70 hover:bg-white/[0.06] sm:w-auto"
            >
              Start A Conversation
              <ArrowRight className="h-4 w-4 text-pix-gold transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.95 }}
          className="mt-6 inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-pix-dim"
        >
          <Sparkles className="h-3 w-3 text-pix-gold/80" />
          Available for new projects
        </motion.div>

        {/* Credibility strip */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: EASE }}
          className="mx-auto mt-10 grid max-w-lg grid-cols-3 divide-x divide-white/10 border-y border-white/10 py-5"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-2">
              <div className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                <Counter to={stat.value} suffix={stat.suffix} pad={stat.pad} />
              </div>
              <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-pix-dim sm:text-[10px]">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[9px] font-mono uppercase tracking-[0.28em] text-pix-dim">
          Scroll to explore
        </span>
        <div className="flex h-8 w-5 justify-center rounded-full border border-white/15 p-1">
          <motion.div
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-pix-gold"
          />
        </div>
      </motion.div>
    </section>
  );
};
