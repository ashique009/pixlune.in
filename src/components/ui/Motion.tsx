import React, { useEffect, useRef, useState } from 'react';
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* ------------------------------------------------------------------ */
/* Reveal — soft scroll-in for any block                              */
/* ------------------------------------------------------------------ */
export const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
}> = ({ children, className, delay = 0, y = 26, once = true }) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-70px' }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* TiltCard — pointer-tracked 3D tilt with a gold light sweep         */
/* ------------------------------------------------------------------ */
export const TiltCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  lift?: boolean;
}> = ({ children, className = '', intensity = 8, glare = true, lift = true }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const smoothX = useSpring(x, { stiffness: 170, damping: 22, mass: 0.4 });
  const smoothY = useSpring(y, { stiffness: 170, damping: 22, mass: 0.4 });

  const rotateX = useTransform(smoothY, [0, 1], [intensity, -intensity]);
  const rotateY = useTransform(smoothX, [0, 1], [-intensity, intensity]);
  const glareX = useTransform(smoothX, [0, 1], [0, 100]);
  const glareY = useTransform(smoothY, [0, 1], [0, 100]);
  const glareBackground = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(212, 175, 55, 0.16), transparent 62%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === 'touch' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left) / rect.width);
    y.set((event.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    x.set(0.5);
    y.set(0.5);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onPointerEnter={(event) => {
        if (event.pointerType !== 'touch') setHovered(true);
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={reset}
      whileHover={reduceMotion || !lift ? undefined : { y: -6 }}
      transition={{ duration: 0.4, ease: EASE }}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className={`preserve-3d relative ${className}`}
    >
      {children}
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] transition-opacity duration-300"
          style={{ backgroundImage: glareBackground, opacity: hovered ? 1 : 0 }}
        />
      )}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* Magnetic — content leans toward the cursor                         */
/* ------------------------------------------------------------------ */
export const Magnetic: React.FC<{
  children: React.ReactNode;
  className?: string;
  strength?: number;
}> = ({ children, className = '', strength = 12 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 220, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 220, damping: 20 });

  const handleMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType === 'touch' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width - 0.5) * strength * 2);
    y.set(((event.clientY - rect.top) / rect.height - 0.5) * strength * 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={{ x: smoothX, y: smoothY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ------------------------------------------------------------------ */
/* Section heading                                                    */
/* ------------------------------------------------------------------ */
export const SectionHeading: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'center' | 'left';
  className?: string;
}> = ({ eyebrow, title, description, align = 'center', className = '' }) => (
  <div
    className={`${
      align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left'
    } ${className}`}
  >
    <Reveal>
      <span className="inline-flex items-center gap-2 rounded-full border border-pix-gold/25 bg-pix-gold/[0.07] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-pix-gold">
        <span className="h-1.5 w-1.5 rounded-full bg-pix-gold" />
        {eyebrow}
      </span>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
        {title}
      </h2>
    </Reveal>
    {description && (
      <Reveal delay={0.15}>
        <p className="mt-4 text-sm leading-relaxed text-pix-muted sm:text-base">
          {description}
        </p>
      </Reveal>
    )}
  </div>
);

/* ------------------------------------------------------------------ */
/* Counter — animated number when scrolled into view                  */
/* ------------------------------------------------------------------ */
export const Counter: React.FC<{
  to: number;
  suffix?: string;
  pad?: boolean;
  className?: string;
}> = ({ to, suffix = '', pad = false, className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduceMotion, to]);

  const display = pad ? String(value).padStart(2, '0') : String(value);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

/* ------------------------------------------------------------------ */
/* Marquee — seamless infinite strip                                  */
/* ------------------------------------------------------------------ */
export const Marquee: React.FC<{
  items: React.ReactNode[];
  className?: string;
  duration?: number;
  pauseOnHover?: boolean;
}> = ({ items, className = '', duration = 34, pauseOnHover = true }) => (
  <div className={`group relative overflow-hidden mask-fade-x ${className}`}>
    <div
      className={`flex w-max animate-marquee ${
        pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
      }`}
      style={{ animationDuration: `${duration}s` }}
    >
      {[0, 1].map((copy) => (
        <div
          key={copy}
          aria-hidden={copy === 1}
          className="flex shrink-0 items-center"
        >
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-7 px-7">
              {item}
              <span className="h-1 w-1 shrink-0 rounded-full bg-pix-gold/50" />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/* Scroll progress bar                                                */
/* ------------------------------------------------------------------ */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold-gradient"
    />
  );
};
