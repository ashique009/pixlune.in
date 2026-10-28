import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Star, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { LaptopMockup } from './LaptopMockup';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('zentroo');

  return (
    <section id="work" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative bg-[#060608]">
      {/* Ambient Lighting Layers */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pix-gold/5 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-20 sm:space-y-28">
        {/* ============================================================ */}
        {/* SECTION HEADER                                               */}
        {/* ============================================================ */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-pix-gold bg-pix-gold/10 px-3.5 py-1 rounded-full border border-pix-gold/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Portfolio</span>
          </motion.div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Selected Works &amp; <span className="text-gold-gradient">Live Platforms</span>
          </h2>
          <p className="text-sm sm:text-base text-pix-muted max-w-2xl mx-auto leading-relaxed">
            Experience our digital creations inside realistic 3D environments. Each project is engineered with custom aesthetics, layered depth, and scalable technical foundations.
          </p>

          {/* Quick Jump Navigation Pill Bar */}
          <div className="pt-6 flex flex-wrap justify-center gap-2">
            {projects.map((proj, idx) => (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveTab(proj.id);
                  const el = document.getElementById(`project-${proj.id}`);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all duration-300 font-medium ${
                  activeTab === proj.id
                    ? 'bg-gold-gradient text-black font-semibold border-transparent shadow-gold-sm'
                    : 'bg-white/[0.03] text-pix-muted border-white/10 hover:border-pix-gold/40 hover:text-white'
                }`}
              >
                <span>{`0${idx + 1}. ${proj.title}`}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/* SCROLL-DRIVEN SEQUENCE OF CINEMATIC PROJECT SHOWCASES        */}
        {/* ============================================================ */}
        <div className="space-y-32 sm:space-y-40">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="scroll-mt-28 relative"
              >
                {/* Visual Project Number Watermark */}
                <div className="absolute -top-12 sm:-top-16 left-0 right-0 flex justify-between items-center opacity-15 pointer-events-none select-none z-0">
                  <span className="font-display text-6xl sm:text-8xl font-black text-white/20 tracking-tighter">
                    {`0${index + 1}`}
                  </span>
                  <span className="text-xs font-mono tracking-widest text-pix-gold uppercase hidden sm:block">
                    {project.category}
                  </span>
                </div>

                {/* Main Card Container */}
                <div
                  className={`relative rounded-3xl p-6 sm:p-10 lg:p-12 border transition-all duration-500 ${
                    isFeatured
                      ? 'bg-gradient-to-b from-[#13131b] via-[#0f0f15] to-[#0a0a0e] border-pix-gold/40 shadow-[0_0_50px_-15px_rgba(212,175,55,0.15)]'
                      : 'bg-[#0e0e13]/80 border-white/10 hover:border-pix-gold/30'
                  }`}
                >
                  {/* Subtle Corner Glow Accent */}
                  <div
                    className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 -z-10"
                    style={{ backgroundColor: project.accentColor || '#d4af37' }}
                  />

                  {/* Grid Layout: Specification Dossier & 3D Laptop */}
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Column A: Project Overview & Features */}
                    <div
                      className={`lg:col-span-5 space-y-6 ${
                        isEven ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      {/* Meta Pill Row */}
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-xs font-semibold tracking-wider uppercase text-pix-gold bg-pix-gold/10 px-3 py-1 rounded-full border border-pix-gold/25">
                          {project.category}
                        </span>

                        {project.featured && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-200 bg-amber-950/60 px-3 py-1 rounded-full border border-amber-500/30">
                            <Star className="w-3.5 h-3.5 text-pix-gold fill-pix-gold" />
                            <span>Featured Platform</span>
                          </span>
                        )}

                        {project.statusBadge && (
                          <span className="text-xs font-medium text-pix-muted bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            {project.statusBadge}
                          </span>
                        )}
                      </div>

                      {/* Title & Tagline */}
                      <div>
                        <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                          {project.title}
                        </h3>
                        {project.tagline && (
                          <p className="text-sm text-pix-gold-light/80 font-medium tracking-wide mt-1.5">
                            {project.tagline}
                          </p>
                        )}
                      </div>

                      {/* Concise Description */}
                      <p className="text-sm sm:text-base text-pix-muted leading-relaxed font-normal">
                        {project.description}
                      </p>

                      {/* Key Verified Features */}
                      {project.features && project.features.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-white/10">
                          <span className="text-xs font-bold uppercase tracking-widest text-white/90 block mb-2">
                            Engineered Capabilities
                          </span>
                          <div className="space-y-2">
                            {project.features.map((feature, fIdx) => (
                              <div
                                key={fIdx}
                                className="flex items-start gap-2.5 text-xs text-pix-muted leading-snug"
                              >
                                <Check className="w-4 h-4 text-pix-gold shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <span className="text-xs font-bold uppercase tracking-widest text-white/90 block mb-2">
                          Technology Stack
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono text-pix-dim px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button: Live Demo / View Project */}
                      <div className="pt-4 flex items-center gap-4">
                        {project.link ? (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open Live Demo for ${project.title}`}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-black font-bold text-xs tracking-wider uppercase hover:opacity-95 transition-all shadow-gold-sm group"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] text-pix-dim border border-white/5 text-xs font-medium">
                            <span className="w-2 h-2 rounded-full bg-pix-gold/50" />
                            <span>Confidential Showcase &bull; Launching Soon</span>
                          </div>
                        )}

                        {project.browserUrl && (
                          <span className="text-xs font-mono text-pix-dim truncate max-w-[200px] hidden sm:inline-block">
                            {project.browserUrl}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Column B: Realistic 3D Laptop with Layered Pop-Out Elements */}
                    <div
                      className={`lg:col-span-7 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <LaptopMockup project={project} priority={index < 2} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
