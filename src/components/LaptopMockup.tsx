import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Lock, ExternalLink, Sparkles, ShoppingBag, ArrowUpRight, CheckCircle2, MessageSquare, Mic, Clock, ShieldCheck, Database } from 'lucide-react';
import { ProjectItem } from '../data/projects';

interface LaptopMockupProps {
  project: ProjectItem;
  priority?: boolean;
}

export const LaptopMockup: React.FC<LaptopMockupProps> = ({ project, priority = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics for 3D realism
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const rotateX = useTransform(smoothMouseY, [-0.5, 0.5], [10, -10]);

  // Exaggerated parallax for pop-out 3D layers
  const popoutX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const popoutY = useTransform(smoothMouseY, [-0.5, 0.5], [-18, 18]);
  const secondaryPopoutX = useTransform(smoothMouseX, [-0.5, 0.5], [18, -18]);
  const secondaryPopoutY = useTransform(smoothMouseY, [-0.5, 0.5], [14, -14]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl mx-auto py-8 sm:py-12 px-2 sm:px-6 perspective-1600 select-none"
    >
      {/* Dynamic Ambient Underglow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[60%] blur-[100px] rounded-full pointer-events-none transition-colors duration-700 -z-10"
        style={{
          backgroundColor: project.featured
            ? 'rgba(212, 175, 55, 0.12)'
            : 'rgba(212, 175, 55, 0.08)',
        }}
      />

      {/* Main 3D Laptop Body */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full preserve-3d"
      >
        {/* ============================================================ */}
        {/* 1. LAPTOP SCREEN (LID)                                        */}
        {/* ============================================================ */}
        <div className="relative mx-auto w-full aspect-[16/10] sm:aspect-[16/9.8] max-h-[520px] rounded-t-2xl sm:rounded-t-[22px] bg-[#0c0c10] p-2.5 sm:p-3.5 border border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] preserve-3d">
          {/* Aluminum Frame Chamfer Edge */}
          <div className="absolute inset-0 rounded-t-2xl sm:rounded-t-[22px] border border-white/10 pointer-events-none" />

          {/* Top Camera Dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
            <span className="w-1.5 h-1.5 rounded-full bg-black border border-white/20 relative">
              <span className="absolute inset-0.5 rounded-full bg-blue-950/80" />
            </span>
          </div>

          {/* Display Bezel Inner Container */}
          <div className="relative w-full h-full rounded-lg sm:rounded-xl overflow-hidden bg-[#070709] border border-white/10 flex flex-col preserve-3d">
            {/* macOS Browser Header Bar */}
            <div className="h-7 sm:h-9 bg-[#111116] border-b border-white/10 flex items-center justify-between px-3 sm:px-4 shrink-0 z-20">
              {/* Traffic Light Dots */}
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] border border-[#e0443e]/50 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] border border-[#d89e24]/50 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] border border-[#1aab29]/50 inline-block" />
              </div>

              {/* Browser URL Pill */}
              <div className="flex items-center gap-2 bg-[#08080a] border border-white/10 px-3 py-1 rounded-md text-[11px] text-pix-dim max-w-[280px] sm:max-w-xs w-full justify-center">
                <Lock className="w-3 h-3 text-pix-gold shrink-0" />
                <span className="truncate text-pix-muted font-mono font-medium">
                  {project.browserUrl || 'pixlune.in/showcase'}
                </span>
              </div>

              {/* External Link Action in Header */}
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pix-dim hover:text-pix-gold transition-colors p-1"
                  aria-label={`Open ${project.title}`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="w-4 h-4" />
              )}
            </div>

            {/* Inner Display Screen Content */}
            <div className="relative flex-1 w-full overflow-hidden bg-black group/screen">
              {project.image ? (
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} live interface preview`}
                    className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover/screen:scale-[1.03]"
                    loading={priority ? 'eager' : 'lazy'}
                  />
                  {/* Subtle glossy reflection on glass */}
                  <div className="absolute inset-0 screen-glare pointer-events-none" />
                  {/* Subtle bottom vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                </div>
              ) : (
                /* Upcoming Project Elegant Screen Mockup */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#111118] via-[#09090c] to-[#040406] relative">
                  <div
                    className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="w-14 h-14 rounded-2xl bg-pix-surface border border-pix-gold/40 flex items-center justify-center mb-3 shadow-gold-md animate-pulse-slow">
                    <Sparkles className="w-7 h-7 text-pix-gold" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white tracking-wider uppercase">
                    Upcoming E-Commerce Architecture
                  </h4>
                  <p className="text-xs text-pix-dim max-w-sm mt-1">
                    Bespoke headless commerce pipeline currently undergoing system engineering.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-pix-gold bg-pix-gold/10 px-3 py-1 rounded-full border border-pix-gold/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-pix-gold animate-ping" />
                    <span>In Active Development</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 2. LAPTOP HINGE & BOTTOM BASE DECK                           */}
        {/* ============================================================ */}
        <div className="relative mx-auto w-[102%] -left-[1%] h-4 sm:h-5 bg-gradient-to-b from-[#1a1a22] to-[#0d0d12] rounded-b-xl border-t border-white/20 border-x border-b border-black shadow-[0_20px_40px_rgba(0,0,0,0.9)]">
          {/* Screen Opening Thumb Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-1.5 bg-[#08080a] rounded-b-md border-x border-b border-white/10" />

          {/* Front Aluminum Bevel Highlight */}
          <div className="absolute inset-x-2 bottom-0.5 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Studio Floor Contact Shadow */}
        <div className="mx-auto w-[94%] h-5 bg-black/80 blur-xl -mt-1 rounded-full pointer-events-none" />

        {/* ============================================================ */}
        {/* 3. CINEMATIC POP-OUT 3D LAYERS (EMERGING FROM SCREEN)        */}
        {/* ============================================================ */}

        {/* Project 1: ZENTROO (E-commerce) POP-OUT */}
        {project.id === 'zentroo' && (
          <>
            {/* Main Featured Product Card - Pops forward dramatically in 3D */}
            <motion.div
              style={{
                x: popoutX,
                y: popoutY,
                transform: 'translateZ(90px)',
              }}
              className="absolute right-1 sm:-right-4 md:-right-8 top-10 sm:top-16 md:top-20 z-30 w-44 sm:w-56 md:w-64 bg-[#121218]/95 backdrop-blur-xl border border-pix-gold/50 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(212,175,55,0.2)] pointer-events-auto"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-pix-gold bg-pix-gold/15 px-2 py-0.5 rounded-full border border-pix-gold/30">
                  Featured Product
                </span>
                <span className="text-[10px] sm:text-[11px] font-mono text-pix-gold-light font-semibold">
                  $149.00
                </span>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-[#1a1a24] to-[#0a0a0e] border border-white/10 flex items-center justify-center p-2 sm:p-3 mb-2.5">
                <ShoppingBag className="w-8 h-8 sm:w-10 sm:h-10 text-pix-gold animate-bounce" />
                <span className="absolute bottom-1.5 left-1.5 text-[9px] text-white/90 font-medium bg-black/60 px-1.5 py-0.5 rounded backdrop-blur-sm">
                  Limited Edition
                </span>
              </div>
              <div className="space-y-0.5">
                <h5 className="text-[11px] sm:text-xs font-bold text-white tracking-tight">
                  Direct Commerce Storefront
                </h5>
                <p className="text-[9px] sm:text-[10px] text-pix-muted leading-tight">
                  Instant cart sync & multi-currency checkout pipeline.
                </p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2.5 sm:mt-3 w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-gold-gradient text-black font-semibold text-[10px] sm:text-[11px] tracking-wide hover:opacity-95 transition-opacity shadow-gold-sm"
                >
                  <span>Experience Store</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </motion.div>

            {/* Top-Left Order Notification Pill */}
            <motion.div
              style={{
                x: secondaryPopoutX,
                y: secondaryPopoutY,
                transform: 'translateZ(65px)',
              }}
              className="absolute left-1 sm:-left-3 md:-left-6 top-6 sm:top-10 md:top-14 z-30 bg-[#0f0f15]/95 backdrop-blur-lg border border-white/15 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-2 shadow-2xl"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-white">Live Discovery Active</p>
                <p className="text-[8px] sm:text-[9px] text-pix-dim">Product catalog synced</p>
              </div>
            </motion.div>
          </>
        )}

        {/* Project 2: KIFA FoodCo Management POP-OUT */}
        {project.id === 'kifa-foodco' && (
          <>
            <motion.div
              style={{
                x: popoutX,
                y: popoutY,
                transform: 'translateZ(85px)',
              }}
              className="absolute right-1 sm:-right-4 md:-right-8 top-10 sm:top-16 md:top-24 z-30 w-44 sm:w-56 md:w-60 bg-[#0e1726]/95 backdrop-blur-xl border border-sky-500/40 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(56,189,248,0.18)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-sky-400 bg-sky-500/15 px-2 py-0.5 rounded-full border border-sky-500/30">
                  Operations Live
                </span>
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
              </div>
              <div className="space-y-1.5 sm:space-y-2 pt-1">
                <div className="bg-white/5 rounded-lg p-1.5 sm:p-2 border border-white/5">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 block">Warehouse Inventory</span>
                  <span className="text-xs sm:text-sm font-bold text-white font-mono">14,892 Units</span>
                </div>
                <div className="bg-white/5 rounded-lg p-1.5 sm:p-2 border border-white/5">
                  <span className="text-[9px] sm:text-[10px] text-slate-400 block">Dispatch Fleet</span>
                  <span className="text-[10px] sm:text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>All Routes On Schedule</span>
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={{
                x: secondaryPopoutX,
                y: secondaryPopoutY,
                transform: 'translateZ(60px)',
              }}
              className="absolute left-1 sm:-left-3 md:-left-6 top-6 sm:top-10 md:top-14 z-30 bg-[#0c1220]/95 backdrop-blur-lg border border-sky-500/30 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-2 shadow-2xl"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-white">PostgreSQL Ledger</p>
                <p className="text-[8px] sm:text-[9px] text-slate-400">Invoices & settlement</p>
              </div>
            </motion.div>
          </>
        )}

        {/* Project 3: Lynqo POP-OUT */}
        {project.id === 'lynqo' && (
          <>
            <motion.div
              style={{
                x: popoutX,
                y: popoutY,
                transform: 'translateZ(85px)',
              }}
              className="absolute right-1 sm:-right-4 md:-right-8 top-10 sm:top-16 md:top-20 z-30 w-44 sm:w-56 md:w-60 bg-[#160f24]/95 backdrop-blur-xl border border-purple-500/40 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(168,85,247,0.2)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-white font-bold text-xs shadow-md shrink-0">
                  LQ
                </div>
                <div>
                  <h5 className="text-[11px] sm:text-xs font-semibold text-white">Connection Verified</h5>
                  <p className="text-[8px] sm:text-[9px] text-purple-300">Just connected</p>
                </div>
              </div>
              <div className="bg-purple-950/40 border border-purple-500/30 rounded-xl p-2 sm:p-2.5 text-[10px] sm:text-[11px] text-purple-100 leading-snug">
                "Hey! Let's connect on Lynqo and build something meaningful."
              </div>
              <span className="text-[8px] sm:text-[9px] text-purple-400/80 block mt-2 text-right">
                Real-Time Messaging
              </span>
            </motion.div>

            <motion.div
              style={{
                x: secondaryPopoutX,
                y: secondaryPopoutY,
                transform: 'translateZ(60px)',
              }}
              className="absolute left-1 sm:-left-3 md:-left-6 top-6 sm:top-10 md:top-14 z-30 bg-[#140b20]/95 backdrop-blur-lg border border-purple-500/30 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-2 shadow-2xl"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-white">Social Connections</p>
                <p className="text-[8px] sm:text-[9px] text-purple-300">Django + React + Vite</p>
              </div>
            </motion.div>
          </>
        )}

        {/* Project 4: Ami AI POP-OUT */}
        {project.id === 'ami-ai' && (
          <>
            <motion.div
              style={{
                x: popoutX,
                y: popoutY,
                transform: 'translateZ(85px)',
              }}
              className="absolute right-1 sm:-right-4 md:-right-8 top-10 sm:top-16 md:top-20 z-30 w-44 sm:w-56 md:w-60 bg-[#150f1c]/95 backdrop-blur-xl border border-pink-500/40 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(244,114,182,0.2)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-pink-400 bg-pink-500/15 px-2 py-0.5 rounded-full border border-pink-500/30">
                  Voice Note Playing
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-pink-300">0:18</span>
              </div>
              <div className="flex items-center justify-center gap-1 py-1.5 sm:py-2 bg-pink-950/30 rounded-lg border border-pink-500/20">
                {[12, 24, 16, 28, 8, 22, 14, 26, 18, 10].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-pink-400 rounded-full animate-pulse"
                    style={{ height: `${h}px`, animationDelay: `${i * 120}ms` }}
                  />
                ))}
              </div>
              <p className="text-[9px] sm:text-[10px] text-pink-200/90 mt-2 italic">
                "Transcript: Your companion is ready. Chat in English or Manglish."
              </p>
            </motion.div>

            <motion.div
              style={{
                x: secondaryPopoutX,
                y: secondaryPopoutY,
                transform: 'translateZ(60px)',
              }}
              className="absolute left-1 sm:-left-3 md:-left-6 top-6 sm:top-10 md:top-14 z-30 bg-[#180a1c]/95 backdrop-blur-lg border border-pink-500/30 rounded-xl px-2.5 sm:px-3 py-1.5 sm:py-2 flex items-center gap-2 shadow-2xl"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-pink-500/15 border border-pink-500/30 flex items-center justify-center text-pink-400 shrink-0">
                <Mic className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-white">AI Companion</p>
                <p className="text-[8px] sm:text-[9px] text-pink-300">Web Audio API Active</p>
              </div>
            </motion.div>
          </>
        )}

        {/* Project 5: Velora POP-OUT */}
        {project.id === 'velora' && (
          <>
            <motion.div
              style={{
                x: popoutX,
                y: popoutY,
                transform: 'translateZ(85px)',
              }}
              className="absolute right-1 sm:-right-4 md:-right-8 top-10 sm:top-16 md:top-20 z-30 w-44 sm:w-56 md:w-60 bg-[#120a22]/95 backdrop-blur-xl border border-violet-500/40 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(139,92,246,0.2)]"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-violet-400 bg-violet-500/15 px-2 py-0.5 rounded-full border border-violet-500/30">
                  Focus Session
                </span>
                <Clock className="w-3.5 h-3.5 text-violet-400 animate-spin" />
              </div>
              <div className="text-center py-1.5 sm:py-2 bg-violet-950/40 rounded-xl border border-violet-500/25">
                <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-wider">
                  25:00
                </span>
                <span className="text-[8px] sm:text-[9px] text-violet-300 block">Deep Work Session</span>
              </div>
              <p className="text-[9px] sm:text-[10px] text-violet-200 mt-2 font-medium">
                Organizing timetable & tasks with precision.
              </p>
            </motion.div>
          </>
        )}

        {/* Project 6: Personal Portfolio POP-OUT */}
        {project.id === 'personal-portfolio' && (
          <>
            <motion.div
              style={{
                x: popoutX,
                y: popoutY,
                transform: 'translateZ(80px)',
              }}
              className="absolute right-1 sm:-right-4 md:-right-8 top-10 sm:top-16 md:top-20 z-30 w-44 sm:w-56 md:w-60 bg-[#16120b]/95 backdrop-blur-xl border border-amber-500/40 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_25px_rgba(245,158,11,0.18)]"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-amber-300">
                  Developer Stack
                </span>
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] text-slate-300 space-y-1 bg-black/60 p-2 sm:p-2.5 rounded-xl border border-white/5">
                <p className="text-amber-400 font-semibold">&gt; Python Full Stack</p>
                <p>&gt; Django &amp; PostgreSQL</p>
                <p>&gt; React &amp; Modern UI</p>
              </div>
            </motion.div>
          </>
        )}

        {/* Project 7: Upcoming Project POP-OUT */}
        {project.isUpcoming && (
          <motion.div
            style={{
              x: popoutX,
              y: popoutY,
              transform: 'translateZ(90px)',
            }}
            className="absolute right-1 sm:-right-4 md:-right-8 top-10 sm:top-16 md:top-20 z-30 w-44 sm:w-56 md:w-64 bg-[#14120c]/95 backdrop-blur-xl border border-pix-gold/50 rounded-2xl p-3 sm:p-4 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(212,175,55,0.25)]"
          >
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-pix-gold" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-pix-gold">
                Architecture Reveal
              </span>
            </div>
            <div className="p-2.5 sm:p-3 bg-pix-gold/5 border border-pix-gold/20 rounded-xl space-y-1">
              <p className="text-[11px] sm:text-xs font-semibold text-white">Next-Gen E-Commerce</p>
              <p className="text-[9px] sm:text-[10px] text-pix-muted">
                Engineered with modern distributed microservices and luxury aesthetics.
              </p>
            </div>
            <div className="mt-2 text-[8px] sm:text-[9px] text-pix-dim text-center">
              Stealth Pipeline &bull; Confidential
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};
