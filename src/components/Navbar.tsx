import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-pix-dark/85 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-lg overflow-hidden border border-pix-gold/30 bg-black/60 flex items-center justify-center p-0.5 group-hover:border-pix-gold transition-colors">
            <img
              src="/pixlune-logo.jpg"
              alt="PIXLUNE Logo"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-white group-hover:text-gold-gradient transition-colors">
              {siteConfig.brandName}
            </span>
            <span className="text-[10px] text-pix-muted tracking-widest uppercase hidden sm:block">
              {siteConfig.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-pix-muted hover:text-white transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-full bg-gold-gradient text-black hover:opacity-90 transition-opacity shadow-gold-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-pix-muted hover:text-white hover:bg-white/5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pix-charcoal/95 border-b border-pix-border px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-pix-muted hover:text-white py-1 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-white/5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase py-3 rounded-full bg-gold-gradient text-black shadow-gold-sm"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
