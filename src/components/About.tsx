import React from 'react';
import { Code, Sparkles, Zap, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { Reveal, SectionHeading, TiltCard } from './ui/Motion';

const pillars = [
  {
    icon: Code,
    title: 'Modern Tech',
    description: 'Engineered with modern frameworks for lightweight, stable performance.',
  },
  {
    icon: Sparkles,
    title: 'Refined Aesthetics',
    description: 'Clean typography, minimal clutter, and a premium black & gold language.',
  },
  {
    icon: Zap,
    title: 'Speed & Agility',
    description: 'Fast load times, responsive breakpoints, and a reliable experience.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[360px] w-[360px] rounded-full bg-pix-gold/[0.05] blur-[110px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Brand emblem */}
          <Reveal className="lg:col-span-5" y={34}>
            <div className="mx-auto flex max-w-sm justify-center">
              <TiltCard className="w-full rounded-[1.75rem]" intensity={7}>
                <div className="relative overflow-hidden rounded-[1.75rem] border border-pix-gold/25 bg-gradient-to-b from-[#14141b] to-[#0a0a0e] p-8">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-1 rounded-[1.75rem] bg-gold-gradient opacity-15 blur-2xl"
                  />

                  {/* Orbital accents */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-dashed border-pix-gold/10"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-pix-gold/10"
                  />

                  <div className="relative space-y-6 text-center">
                    <div className="relative mx-auto h-24 w-24">
                      <div className="absolute inset-0 rounded-2xl bg-pix-gold/20 blur-xl" />
                      <div className="relative h-24 w-24 overflow-hidden rounded-2xl border border-pix-gold/40 bg-black p-1 shadow-gold-md">
                        <img
                          src="/pixlune-logo.jpg"
                          alt="PIXLUNE emblem"
                          className="h-full w-full rounded-xl object-cover"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-display text-2xl font-bold tracking-[0.18em] text-white">
                        {siteConfig.brandName}
                      </h3>
                      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-pix-gold">
                        {siteConfig.tagline}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-5 text-left">
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.16em] text-pix-dim">
                          Focus
                        </span>
                        <span className="mt-1 block text-xs font-medium text-white">
                          Digital Craft
                        </span>
                      </div>
                      <div>
                        <span className="block text-[10px] uppercase tracking-[0.16em] text-pix-dim">
                          Standard
                        </span>
                        <span className="mt-1 block text-xs font-medium text-white">
                          Bespoke Quality
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x divide-white/10 border-t border-white/5 pt-5">
                      <div>
                        <span className="font-display text-2xl font-bold text-white">
                          {String(projects.length).padStart(2, '0')}
                        </span>
                        <span className="mt-0.5 block text-[9px] uppercase tracking-[0.16em] text-pix-dim">
                          Builds shipped
                        </span>
                      </div>
                      <div>
                        <span className="font-display text-2xl font-bold text-white">
                          {String(services.length).padStart(2, '0')}
                        </span>
                        <span className="mt-0.5 block text-[9px] uppercase tracking-[0.16em] text-pix-dim">
                          Core services
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </Reveal>

          {/* Story */}
          <div className="lg:col-span-7">
            <SectionHeading
              align="left"
              eyebrow="About The Brand"
              title={
                <>
                  Engineered for clarity,{' '}
                  <span className="text-gold-gradient">built for impact</span>
                </>
              }
            />

            <Reveal delay={0.18}>
              <p className="mt-6 text-sm leading-relaxed text-pix-muted sm:text-base">
                PIXLUNE is a digital development brand dedicated to building useful,
                modern, and visually polished web experiences. We combine clean code
                architecture with refined visual design, ensuring that every project is
                fast, accessible, and intuitive to use.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-4 text-sm leading-relaxed text-pix-muted/80 sm:text-[15px]">
                From high-performing brand websites to scalable e-commerce
                infrastructure, our approach is centered around clarity and purpose:
                eliminating digital noise and transforming ideas into robust, tangible
                web solutions.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
              {pillars.map(({ icon: Icon, title, description }, index) => (
                <Reveal key={title} delay={0.28 + index * 0.06}>
                  <div className="group h-full rounded-xl border border-transparent p-1 transition-colors duration-300 hover:border-white/5">
                    <div className="flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-pix-gold transition-colors duration-300 group-hover:border-pix-gold/40 group-hover:bg-pix-gold/10">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span>{title}</span>
                    </div>
                    <p className="mt-2 text-[11px] leading-relaxed text-pix-dim">
                      {description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.44}>
              <a
                href="#work"
                className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-pix-gold transition-colors hover:text-pix-gold-light"
              >
                See the work
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
