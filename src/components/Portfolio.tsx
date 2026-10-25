import React, { useState } from 'react';
import { Layers, Eye, EyeOff } from 'lucide-react';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';

export const Portfolio: React.FC = () => {
  // Flag to toggle preview of internally marked in-development projects for team review
  const [showInternalPreview, setShowInternalPreview] = useState(false);

  const publicProjects = projects.filter((p) => p.isReadyForPublicShowcase);
  const internalProjects = projects.filter((p) => !p.isReadyForPublicShowcase);

  const displayedProjects = showInternalPreview ? projects : publicProjects;

  return (
    <section id="work" className="py-24 px-6 lg:px-8 border-t border-white/5 relative bg-pix-dark/40">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-pix-gold">
            Selected Works
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Our Portfolio
          </h2>
          <p className="text-base text-pix-muted leading-relaxed">
            A curated look at our technical craftsmanship, design systems, and digital platforms.
          </p>
        </div>

        {/* Portfolio Content */}
        {displayedProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          /* When no projects are marked ready for public showcase yet */
          <div className="max-w-2xl mx-auto text-center luxury-card rounded-2xl p-10 sm:p-14 space-y-6 border-gold-subtle">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-pix-surface border border-pix-gold/30 flex items-center justify-center">
              <Layers className="w-7 h-7 text-pix-gold" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Upcoming Project Releases
              </h3>
              <p className="text-sm text-pix-muted leading-relaxed max-w-lg mx-auto">
                We are actively engineering high-performance platforms currently scheduled for launch. New case studies will be published here alongside our public releases.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-pix-dim">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pix-gold animate-pulse" />
                <span>Next Launch: ZENTROO Commerce Platform</span>
              </div>
            </div>
          </div>
        )}

        {/* Discreet Internal Preview Toggle for testing/reviewing reusable cards */}
        {internalProjects.length > 0 && (
          <div className="flex justify-center pt-2">
            <button
              onClick={() => setShowInternalPreview(!showInternalPreview)}
              className="inline-flex items-center gap-2 text-xs text-pix-dim hover:text-pix-muted transition-colors px-3 py-1.5 rounded-full border border-white/5 hover:border-white/10"
              title="Toggle preview of projects currently awaiting public launch"
            >
              {showInternalPreview ? (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-pix-gold" />
                  <span>Hide Internal Pipeline (Preview Active)</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5 text-pix-gold" />
                  <span>Preview Internal Pipeline ({internalProjects.length} Project Awaiting Launch)</span>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
