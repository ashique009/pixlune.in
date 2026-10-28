import React from 'react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Portfolio: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 lg:px-8 border-t border-white/5 relative bg-pix-dark/40">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-pix-gold">
            Selected Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Our Portfolio
          </h2>
          <p className="text-base text-pix-muted leading-relaxed">
            A curated showcase of our technical craftsmanship, production web systems, and client platforms.
          </p>
        </div>

        {/* Polished Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
