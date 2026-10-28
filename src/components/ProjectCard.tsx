import React from 'react';
import { ExternalLink, Sparkles, Clock, Star } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      className={`luxury-card rounded-2xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300 ${
        project.featured ? 'border-pix-gold/30 bg-gradient-to-b from-pix-surface to-pix-card' : ''
      }`}
    >
      {/* Top subtle ambient gold glow on hover */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-pix-gold/5 group-hover:bg-pix-gold/10 blur-3xl rounded-full pointer-events-none transition-colors duration-500" />

      <div>
        {/* Visual Preview Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black/60 border-b border-white/5">
          {project.image ? (
            <div className="w-full h-full relative overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle gradient vignette to blend image cleanly with dark card */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-black/20 pointer-events-none" />
            </div>
          ) : (
            /* Upcoming Project Preview Placeholder (No invented screenshots or stock images) */
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#121217] via-[#16161d] to-[#0a0a0d] relative overflow-hidden">
              {/* Geometric Grid Accent */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="w-12 h-12 rounded-xl bg-pix-surface/90 border border-pix-gold/30 flex items-center justify-center mb-3 shadow-gold-sm group-hover:border-pix-gold transition-colors">
                <Sparkles className="w-5 h-5 text-pix-gold animate-pulse" />
              </div>
              <span className="text-xs uppercase font-semibold tracking-widest text-pix-gold">
                In Development
              </span>
              <p className="text-[11px] text-pix-dim mt-1 max-w-[200px]">
                Active architecture & engineering pipeline
              </p>
            </div>
          )}

          {/* Badges Overlay on Top of Visual Preview */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10">
            <span className="text-[11px] font-semibold tracking-wider uppercase text-pix-gold bg-black/75 backdrop-blur-md px-3 py-1 rounded-full border border-pix-gold/30 shadow-sm">
              {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold tracking-wide text-amber-200 bg-amber-950/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-500/30">
                <Star className="w-3 h-3 text-pix-gold fill-pix-gold" />
                <span>Featured</span>
              </span>
            )}

            {!project.featured && project.statusBadge && (
              <span className="inline-flex items-center gap-1 text-[11px] font-medium text-pix-muted bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                <Clock className="w-3 h-3 text-pix-gold" />
                <span>{project.statusBadge}</span>
              </span>
            )}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 space-y-3 relative z-10">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-gold-gradient transition-colors">
              {project.title}
            </h3>
            {project.tagline && (
              <p className="text-xs text-pix-gold-light/75 font-medium tracking-wide mt-1">
                {project.tagline}
              </p>
            )}
          </div>

          <p className="text-sm text-pix-muted leading-relaxed font-normal">
            {project.description}
          </p>
        </div>
      </div>

      {/* Tech Stack & Working View Project Link */}
      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2 space-y-4 relative z-10 border-t border-white/5 mt-auto">
        {/* Technologies Badges */}
        <div className="flex flex-wrap gap-1.5 pt-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-pix-dim px-2.5 py-0.5 rounded-md bg-white/[0.03] border border-white/5 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-2">
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View project: ${project.title}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-pix-gold transition-colors duration-200 group/link"
            >
              <span>View Project</span>
              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-pix-dim cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-pix-gold/60" />
              <span>Details available upon launch</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
};
