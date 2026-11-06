import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Clock,
  Lock,
  Plus,
  Sparkles,
  Star,
} from 'lucide-react';
import { projects } from '../data/projects';
import { LaptopMockup } from './LaptopMockup';
import { ProjectCard } from './ProjectCard';
import { EASE, Reveal, SectionHeading } from './ui/Motion';

const pad = (value: number) => String(value).padStart(2, '0');

export const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const stageRef = useRef<HTMLDivElement>(null);
  const total = projects.length;
  const active = projects[activeIndex];

  const selectProject = (nextIndex: number, scrollToStage = false) => {
    const wrapped = ((nextIndex % total) + total) % total;
    const forward = (wrapped - activeIndex + total) % total;

    if (forward !== 0) {
      setDirection(forward <= total / 2 ? 1 : -1);
      setActiveIndex(wrapped);
    }

    if (scrollToStage) {
      stageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-white/5 bg-[#060608] py-20 sm:py-28"
    >
      {/* Ambient lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-32 -z-0 h-[420px] w-[860px] -translate-x-1/2 rounded-full opacity-60 blur-[150px]"
        style={{
          background:
            'radial-gradient(circle, rgba(212,175,55,0.10) 0%, rgba(212,175,55,0.02) 55%, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 60% 55% at 50% 30%, black, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 60% 55% at 50% 30%, black, transparent 80%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title={
            <>
              Work arranged in <span className="text-gold-gradient">another dimension</span>
            </>
          }
          description="Step through our live platforms in a 3D studio. Rotate each build, inspect the craft, then open it in the real world."
        />

        {/* ============================================================ */}
        {/* 3D SHOWCASE STAGE                                            */}
        {/* ============================================================ */}
        <div ref={stageRef} className="mt-12 scroll-mt-24 sm:mt-16">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
            {/* Active project dossier */}
            <div className="order-2 lg:order-1 lg:col-span-5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.38, ease: EASE }}
                  className="space-y-6 lg:min-h-[430px]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="font-mono text-[11px] font-medium tracking-[0.24em]"
                      style={{ color: active.accentColor }}
                    >
                      {pad(activeIndex + 1)} / {pad(total)}
                    </span>
                    <span className="h-3 w-px bg-white/15" />
                    <span className="rounded-full border border-pix-gold/25 bg-pix-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-pix-gold">
                      {active.category}
                    </span>
                    {active.featured ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-amber-200">
                        <Star className="h-3 w-3 fill-pix-gold text-pix-gold" />
                        Featured
                      </span>
                    ) : (
                      active.statusBadge && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-pix-muted">
                          {active.isPrivate ? (
                            <Lock className="h-3 w-3 text-pix-gold" />
                          ) : (
                            <Clock className="h-3 w-3 text-pix-gold" />
                          )}
                          {active.statusBadge}
                        </span>
                      )
                    )}
                  </div>

                  <div>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {active.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium tracking-wide text-pix-gold-light/85">
                      {active.tagline}
                    </p>
                  </div>

                  <p className="text-sm leading-relaxed text-pix-muted sm:text-[15px]">
                    {active.description}
                  </p>

                  <div className="space-y-2.5 border-t border-white/10 pt-5">
                    {active.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-2.5 text-[13px] leading-snug text-pix-muted"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-pix-gold/25 bg-pix-gold/10">
                          <Check className="h-2.5 w-2.5 text-pix-gold" />
                        </span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-5">
                    {active.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/5 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] text-pix-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="pt-1">
                    {active.isPrivate ? (
                      <a
                        href="#contact"
                        className="group/locked inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[11px] font-medium text-pix-dim transition-colors duration-300 hover:border-pix-gold/40 hover:text-white"
                      >
                        <Lock className="h-3.5 w-3.5 text-pix-gold" />
                        <span>Private build — request a walkthrough</span>
                      </a>
                    ) : active.link ? (
                      <a
                        href={active.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/live inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-black shadow-gold-sm transition-transform duration-300 hover:-translate-y-0.5"
                      >
                        <span>Launch Live Site</span>
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[11px] font-medium text-pix-dim">
                        <span className="h-1.5 w-1.5 rounded-full bg-pix-gold/60" />
                        Confidential build — launching soon
                      </span>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 3D stage */}
            <div className="order-1 lg:order-2 lg:col-span-7">
              <div
                tabIndex={0}
                role="group"
                aria-roledescription="carousel"
                aria-label="Project showcase. Use the left and right arrow keys to navigate."
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    selectProject(activeIndex + 1);
                  }
                  if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    selectProject(activeIndex - 1);
                  }
                }}
                className="relative rounded-[2rem] outline-none"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-10 top-1/2 -z-0 h-2/3 -translate-y-1/2 rounded-full opacity-70 blur-[100px]"
                  style={{
                    background: `radial-gradient(circle, ${active.accentColor}26 0%, transparent 70%)`,
                  }}
                />

                <div className="perspective-2000 relative">
                  <AnimatePresence mode="wait" initial={false} custom={direction}>
                    <motion.div
                      key={active.id}
                      custom={direction}
                      variants={{
                        enter: (dir: number) => ({
                          opacity: 0,
                          x: dir * 90,
                          rotateY: dir * 16,
                          scale: 0.94,
                        }),
                        center: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
                        exit: (dir: number) => ({
                          opacity: 0,
                          x: dir * -70,
                          rotateY: dir * -12,
                          scale: 0.95,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.55, ease: EASE }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.06}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -80) selectProject(activeIndex + 1);
                        else if (info.offset.x > 80) selectProject(activeIndex - 1);
                      }}
                      className="preserve-3d cursor-grab active:cursor-grabbing"
                    >
                      <LaptopMockup project={active} priority />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <p className="mt-2 flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.22em] text-pix-dim/70">
                <Sparkles className="h-3 w-3 text-pix-gold/60" />
                Drag, swipe or use arrow keys
              </p>
            </div>
          </div>

          {/* Carousel controls */}
          <div className="mt-8 flex items-center gap-4 sm:mt-10 sm:gap-6">
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => selectProject(activeIndex - 1)}
                aria-label="Previous project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-pix-muted transition-all duration-300 hover:border-pix-gold/50 hover:bg-pix-gold/10 hover:text-pix-gold"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => selectProject(activeIndex + 1)}
                aria-label="Next project"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-pix-muted transition-all duration-300 hover:border-pix-gold/50 hover:bg-pix-gold/10 hover:text-pix-gold"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <div className="relative hidden h-px flex-1 overflow-hidden bg-white/10 sm:block">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gold-gradient"
                animate={{ width: `${((activeIndex + 1) / total) * 100}%` }}
                transition={{ duration: 0.5, ease: EASE }}
              />
            </div>

            <span className="ml-auto font-mono text-xs tracking-[0.18em] text-pix-dim sm:ml-0">
              <span className="text-white">{pad(activeIndex + 1)}</span> / {pad(total)}
            </span>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3D ARCHIVE GRID                                              */}
        {/* ============================================================ */}
        <div className="mt-16 sm:mt-20">
          <div className="mb-5 flex items-end justify-between gap-4 border-t border-white/10 pt-8">
            <div>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.22em] text-white/85">
                Browse the archive
              </h3>
              <p className="mt-1 text-xs text-pix-dim">
                One tap moves any build onto the 3D stage.
              </p>
            </div>
            <span className="hidden font-mono text-[11px] tracking-[0.16em] text-pix-dim sm:block">
              {pad(total)} / {pad(total)} PROJECTS
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
            {projects.map((project, index) => (
              <Reveal key={project.id} delay={index * 0.04}>
                <ProjectCard
                  project={project}
                  index={index}
                  active={project.id === active.id}
                  onSelect={() => selectProject(index, true)}
                />
              </Reveal>
            ))}

            <Reveal delay={projects.length * 0.04}>
              <a
                href="#contact"
                className="group relative flex aspect-[16/10] w-full flex-col justify-between overflow-hidden rounded-2xl border border-dashed border-pix-gold/30 bg-pix-gold/[0.03] p-3.5 transition-colors duration-300 hover:border-pix-gold/60 hover:bg-pix-gold/[0.07] sm:p-4"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full border border-pix-gold/30 bg-pix-gold/10 text-pix-gold transition-transform duration-300 group-hover:rotate-90">
                  <Plus className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-[13px] font-semibold leading-snug text-white sm:text-sm">
                    Your brand next
                  </p>
                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-pix-muted sm:text-[10px]">
                    Start a project
                  </p>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
