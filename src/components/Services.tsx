import React from 'react';
import { Code2, ShoppingBag, Layers, Palette, Sparkles, Wrench, Check } from 'lucide-react';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-pix-gold" />,
  ShoppingBag: <ShoppingBag className="w-6 h-6 text-pix-gold" />,
  Layers: <Layers className="w-6 h-6 text-pix-gold" />,
  Palette: <Palette className="w-6 h-6 text-pix-gold" />,
  Sparkles: <Sparkles className="w-6 h-6 text-pix-gold" />,
  Wrench: <Wrench className="w-6 h-6 text-pix-gold" />,
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-pix-gold">
            Expertise & Capabilities
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Our Services
          </h2>
          <p className="text-base text-pix-muted leading-relaxed">
            Tailored digital solutions engineered with surgical attention to detail, performance, and aesthetic finesse.
          </p>
        </div>

        {/* Clean Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="luxury-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Icon Container with subtle gold accents */}
                <div className="w-12 h-12 rounded-xl bg-pix-surface border border-pix-border group-hover:border-pix-gold/40 flex items-center justify-center transition-colors shadow-sm">
                  {iconMap[service.icon] || <Sparkles className="w-6 h-6 text-pix-gold" />}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-gold-gradient transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-pix-muted leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Minimal feature list */}
              <div className="pt-6 mt-6 border-t border-white/5 space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-pix-dim">
                    <Check className="w-3.5 h-3.5 text-pix-gold/70 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
