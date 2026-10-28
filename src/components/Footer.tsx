import React from 'react';
import { ArrowUp, Instagram, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pix-dark border-t border-white/5 pt-16 pb-12 px-6 lg:px-8 text-pix-muted">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-pix-gold/30 bg-black flex items-center justify-center p-0.5">
                <img
                  src="/pixlune-logo.jpg"
                  alt="PIXLUNE Logo"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wider">
                {siteConfig.brandName}
              </span>
            </div>

            <p className="text-sm text-pix-gold-light/90 italic font-light">
              "{siteConfig.tagline}"
            </p>

            <p className="text-xs text-pix-dim max-w-sm leading-relaxed">
              PIXLUNE is a modern digital agency engineering clean websites, e-commerce platforms, and tailored web applications for growing brands.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-pix-gold transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              Connect
            </h4>
            <div className="space-y-2.5 text-xs">
              <div>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-pix-gold" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

              <div>
                {siteConfig.contact.hasInstagramConfigured ? (
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pix-gold" />
                    <span>{siteConfig.contact.instagramHandle}</span>
                    <ArrowUpRight className="w-3 h-3 text-pix-dim" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-pix-dim">
                    <Instagram className="w-3.5 h-3.5 text-pix-gold/60" />
                    <span>{siteConfig.contact.instagramHandle}</span>
                  </span>
                )}
              </div>

              <div className="pt-2 text-xs text-pix-dim">
                <span>Official brand domain: </span>
                <span className="text-white font-medium">{siteConfig.domain}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Copyright Notice */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pix-dim">
          <p>
            © {currentYear} {siteConfig.brandName}. All rights reserved. Built with precision.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-pix-gold" />
          </button>
        </div>
      </div>
    </footer>
  );
};
