import React, { useState } from 'react';
import { Mail, Instagram, Copy, Check, Send, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject || 'Website Inquiry — PIXLUNE'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-24 px-6 lg:px-8 border-t border-white/5 relative bg-pix-dark">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-pix-gold/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Section Header with "Let's Work Together" */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-pix-gold">
            Start A Conversation
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Let's Work Together
          </h2>
          <p className="text-base text-pix-muted leading-relaxed">
            Have a project in mind? Let's build something meaningful together.
          </p>
        </div>

        {/* Two Elegant Contact Options: Email & Instagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 1. Primary Business Email Channel */}
          <div className="luxury-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pix-surface border border-pix-gold/30 flex items-center justify-center shadow-gold-sm">
                <Mail className="w-6 h-6 text-pix-gold" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold text-white">Email Us</h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-pix-gold bg-pix-gold/10 px-2 py-0.5 rounded-full border border-pix-gold/20">
                    Primary
                  </span>
                </div>
                <p className="text-xs text-pix-dim mt-0.5">Direct business & project inquiries</p>
              </div>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="block text-sm sm:text-base font-medium text-pix-gold-light hover:underline break-all transition-colors"
                aria-label={`Send email to ${siteConfig.contact.email}`}
              >
                {siteConfig.contact.email}
              </a>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 text-xs font-medium text-pix-muted hover:text-white px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/5"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-pix-gold" />
                    <span className="text-white">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="inline-flex items-center justify-center gap-2 text-xs font-medium text-white px-4 py-2.5 rounded-lg bg-pix-gold/10 hover:bg-pix-gold/20 text-pix-gold-light border border-pix-gold/30 transition-colors"
              >
                <span>Open Mail Client</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 2. Official Instagram Channel */}
          <div className="luxury-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-pix-surface border border-pix-gold/30 flex items-center justify-center shadow-gold-sm">
                <Instagram className="w-6 h-6 text-pix-gold" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Instagram</h3>
                <p className="text-xs text-pix-dim mt-0.5">Agency updates & behind the scenes</p>
              </div>
              <p className="text-sm sm:text-base font-medium text-white font-mono">
                {siteConfig.contact.instagramHandle}
              </p>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-medium text-white px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 hover:text-pix-gold border border-white/5 hover:border-pix-gold/30 transition-colors w-full sm:w-auto"
                aria-label={`Visit official Instagram profile: ${siteConfig.contact.instagramHandle}`}
              >
                <span>Visit Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Inquiry Form */}
        <div className="luxury-card rounded-2xl p-8 sm:p-10 border-gold-subtle max-w-2xl mx-auto space-y-6">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">
              Send a Quick Inquiry
            </h3>
            <p className="text-xs text-pix-muted">
              Sends directly to {siteConfig.contact.email}
            </p>
          </div>

          <form onSubmit={handleMailtoSubmit} className="space-y-4">
            <div>
              <label htmlFor="subject" className="block text-xs font-medium text-pix-dim mb-1.5">
                Project or Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="e.g. Website development for brand launch"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-pix-surface border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-pix-dim focus:outline-none focus:border-pix-gold transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-medium text-pix-dim mb-1.5">
                Tell us about your project requirements
              </label>
              <textarea
                id="message"
                rows={4}
                required
                placeholder="Briefly describe your timeline, features needed, or goals..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-pix-surface border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder-pix-dim focus:outline-none focus:border-pix-gold transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-gold-gradient text-black text-xs font-semibold tracking-wider uppercase hover:opacity-95 transition-opacity shadow-gold-sm"
            >
              <span>Compose Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
