import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Lock, Sparkles, Star } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  active: boolean;
  onSelect: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  active,
  onSelect,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      aria-label={`Show project ${index + 1}: ${project.title}`}
      aria-pressed={active}
      whileHover={reduceMotion ? undefined : { y: -5 }}
      whileTap={reduceMotion ? undefined : { scale: 0.985 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex aspect-[16/10] w-full flex-col overflow-hidden rounded-2xl border text-left transition-colors duration-300 ${
        active
          ? 'border-pix-gold/60 shadow-[0_18px_45px_-20px_rgba(212,175,55,0.45)]'
          : 'border-white/10 hover:border-white/30'
      }`}
    >
      {/* Preview */}
      <div className="absolute inset-0 bg-[#0b0b10]">
        {project.image ? (
          <img
            src={project.image}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top opacity-85 transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] group-hover:opacity-100"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-[#16161e] via-[#101016] to-[#08080b]">
            <Sparkles className="h-5 w-5 text-pix-gold" />
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-pix-gold">
              In Development
            </span>
          </div>
        )}
      </div>

      {/* Legibility gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-[#070709]/45 to-transparent" />

      {/* Active ring */}
      {active && (
        <span className="pointer-events-none absolute inset-0 z-20 rounded-2xl ring-1 ring-inset ring-pix-gold/70" />
      )}

      {/* Content */}
      <div className="relative z-10 mt-auto w-full p-3.5 sm:p-4">
        <div className="mb-1 flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] tracking-[0.22em] text-pix-gold/90">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="flex items-center gap-1.5">
            {project.featured && (
              <Star className="h-3 w-3 fill-pix-gold text-pix-gold" />
            )}
            {project.isPrivate ? (
              <Lock
                className="h-3 w-3 text-pix-gold/80"
                aria-label="Private project"
              />
            ) : (
              <ArrowUpRight className="h-3.5 w-3.5 -translate-y-0.5 translate-x-0.5 text-white/50 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100" />
            )}
          </span>
        </div>
        <h4 className="line-clamp-2 text-[13px] font-semibold leading-snug text-white sm:text-sm">
          {project.title}
        </h4>
        <p className="mt-0.5 truncate text-[9px] uppercase tracking-[0.14em] text-pix-muted sm:text-[10px]">
          {project.isPrivate ? `${project.category} · Locked` : project.category}
        </p>
      </div>
    </motion.button>
  );
};
