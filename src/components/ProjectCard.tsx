import React from 'react';
import { ExternalLink, Clock } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="luxury-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between group relative overflow-hidden">
      {/* Top subtle decorative ambient glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-pix-gold/5 blur-2xl rounded-full pointer-events-none" />

      <div className="space-y-4 relative z-10">
        {/* Category & Status Badge */}
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <span className="text-xs font-semibold tracking-wider uppercase text-pix-gold bg-pix-gold/10 px-3 py-1 rounded-full border border-pix-gold/20">
            {project.category}
          </span>
          {project.statusBadge && (
            <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-pix-muted bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              <Clock className="w-3 h-3 text-pix-gold" />
              {project.statusBadge}
            </span>
          )}
        </div>

        {/* Project Title & Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-gold-gradient transition-colors">
            {project.title}
          </h3>
          {project.tagline && (
            <p className="text-xs text-pix-gold-light/80 font-medium tracking-wide mt-1">
              {project.tagline}
            </p>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-pix-muted leading-relaxed font-normal">
          {project.description}
        </p>
      </div>

      {/* Tech Stack & External Link */}
      <div className="pt-6 mt-6 border-t border-white/5 space-y-4 relative z-10">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs text-pix-dim px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.isReadyForPublicShowcase && project.link && project.link !== '#' && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-pix-gold transition-colors pt-1"
          >
            <span>Visit Project</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
};
