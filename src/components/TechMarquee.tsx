import React from 'react';
import { Marquee } from './ui/Motion';

const stack = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'Django',
  'Python',
  'Vite',
  'Express',
  'Web Audio API',
];

export const TechMarquee: React.FC = () => {
  return (
    <div className="relative border-y border-white/[0.06] bg-[#070709] py-5">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:gap-8 sm:px-6 lg:px-8">
        <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.28em] text-pix-dim">
          Built with
        </span>
        <Marquee
          className="flex-1"
          duration={38}
          items={stack.map((technology) => (
            <span
              key={technology}
              className="cursor-default font-display text-sm font-medium text-white/45 transition-colors duration-300 hover:text-pix-gold"
            >
              {technology}
            </span>
          ))}
        />
      </div>
    </div>
  );
};
