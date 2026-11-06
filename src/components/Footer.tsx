import React from 'react';
import { ArrowUp, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#070709] pt-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pix-gold/30 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="space-y-4 md:col-span-5">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-pix-gold/30 bg-black p-0.5">
                <img
                  src="/pixlune-logo.jpg"
                  alt="PIXLUNE logo"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-[0.16em] text-white">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-sm font-light italic text-pix-gold-light/90">
              “{siteConfig.tagline}”
            </p>

            <p className="max-w-sm text-xs leading-relaxed text-pix-dim">
              A modern digital agency engineering clean websites, e-commerce platforms,
              and tailored web applications for growing brands.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3 md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="group inline-flex items-center gap-1.5 py-0.5 text-pix-muted transition-colors hover:text-pix-gold"
                  >
                    <span className="h-px w-0 bg-pix-gold transition-all duration-300 group-hover:w-3" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-3 md:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.22em] text-white">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center gap-2 text-pix-muted transition-colors hover:text-white"
              >
                <Mail className="h-3.5 w-3.5 text-pix-gold" />
                <span className="break-all">{siteConfig.contact.email}</span>
              </a>

              <div>
                {siteConfig.contact.hasInstagramConfigured ? (
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-pix-muted transition-colors hover:text-white"
                  >
                    <Instagram className="h-3.5 w-3.5 text-pix-gold" />
                    <span>{siteConfig.contact.instagramHandle}</span>
                    <ArrowUpRight className="h-3 w-3 text-pix-dim" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-pix-dim">
                    <Instagram className="h-3.5 w-3.5 text-pix-gold/60" />
                    <span>{siteConfig.contact.instagramHandle}</span>
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 pt-2 text-xs text-pix-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-pix-gold/70" />
                <span>Official brand domain:</span>
                <span className="font-medium text-white">{siteConfig.domain}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div aria-hidden className="pointer-events-none select-none pt-12 sm:pt-16">
          <div className="bg-gradient-to-b from-white/[0.09] to-transparent bg-clip-text text-center font-display text-[clamp(3.5rem,15vw,11rem)] font-bold leading-[0.8] tracking-tighter text-transparent">
            {siteConfig.brandName}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/5 py-7 text-[11px] text-pix-dim sm:flex-row">
          <p>
            © {currentYear} {siteConfig.brandName}. All rights reserved. Built with
            precision.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 text-pix-gold transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
