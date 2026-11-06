import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { EASE } from './ui/Motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = siteConfig.navigation
      .map((item) => document.getElementById(item.href.replace('#', '')))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHref(`#${visible.target.id}`);
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.2, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };

    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${
        scrolled || mobileMenuOpen
          ? 'border-white/10 bg-pix-dark/90'
          : 'border-transparent bg-pix-dark/40'
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-6 lg:px-8 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-pix-gold/30 bg-black/60 p-0.5 transition-colors duration-300 group-hover:border-pix-gold sm:h-10 sm:w-10">
            <img
              src="/pixlune-logo.jpg"
              alt="PIXLUNE logo"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-base font-bold tracking-[0.16em] text-white sm:text-lg">
              {siteConfig.brandName}
            </span>
            <span className="hidden text-[9px] uppercase tracking-[0.18em] text-pix-muted sm:block">
              {siteConfig.tagline}
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {siteConfig.navigation.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative py-2 text-[13px] font-medium transition-colors duration-200 ${
                  isActive ? 'text-white' : 'text-pix-muted hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-gold-gradient"
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-black shadow-gold-sm transition-all duration-300 hover:shadow-gold-md"
          >
            Let's Talk
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-pix-muted transition-colors hover:bg-white/5 hover:text-white md:hidden"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileMenuOpen ? 'close' : 'open'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden border-t border-white/10 bg-pix-dark/95 backdrop-blur-xl md:hidden"
          >
            <div className="space-y-1 px-5 py-5">
              {siteConfig.navigation.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + index * 0.045, duration: 0.3 }}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm transition-colors ${
                    activeHref === item.href
                      ? 'bg-pix-gold/[0.07] text-white'
                      : 'text-pix-muted hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="h-4 w-4 text-pix-gold/60" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.3 }}
                className="pt-3"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-black"
                >
                  Contact Us
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
