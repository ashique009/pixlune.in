import React from 'react';
import {
  Code2,
  Layers,
  Palette,
  ShoppingBag,
  Sparkles,
  Wrench,
  ArrowUpRight,
} from 'lucide-react';
import { services } from '../data/services';
import { Reveal, SectionHeading, TiltCard } from './ui/Motion';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="h-5 w-5" />,
  ShoppingBag: <ShoppingBag className="h-5 w-5" />,
  Layers: <Layers className="h-5 w-5" />,
  Palette: <Palette className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />,
  Wrench: <Wrench className="h-5 w-5" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="relative overflow-hidden border-t border-white/5 py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 -z-0 h-[420px] w-[420px] rounded-full bg-pix-gold/[0.05] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertise & Capabilities"
          title={
            <>
              Everything your brand needs to <span className="text-gold-gradient">ship beautifully</span>
            </>
          }
          description="Tailored digital solutions engineered with surgical attention to detail, performance, and aesthetic finesse."
        />

        <div className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.06} className="h-full">
              <TiltCard className="group h-full rounded-2xl" intensity={5}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#111116] to-[#0a0a0e] p-6 transition-colors duration-500 group-hover:border-pix-gold/35 sm:p-7">
                  {/* Hover accent line */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold-gradient transition-transform duration-500 group-hover:scale-x-100"
                  />

                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-pix-gold transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-pix-gold/40 group-hover:bg-pix-gold/10">
                      {iconMap[service.icon] || <Sparkles className="h-5 w-5" />}
                    </div>
                    <span className="font-mono text-[11px] tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-pix-gold/60">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-pix-gold-light">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-pix-muted">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-2 border-t border-white/5 pt-5">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-[11px] text-pix-dim"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-pix-gold/70" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10 sm:mt-12">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 sm:flex-row">
            <p className="text-center text-sm text-pix-muted sm:text-left">
              Need something outside the list?{' '}
              <span className="text-white">We build custom systems end to end.</span>
            </p>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-pix-gold transition-colors hover:text-pix-gold-light"
            >
              Tell us your idea
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
