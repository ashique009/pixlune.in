import React, { useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Copy,
  Instagram,
  Mail,
  Send,
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Reveal } from './ui/Motion';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard access can be blocked; the address stays visible to copy manually.
    }
  };

  const handleMailtoSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject || 'Website Inquiry — PIXLUNE'
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-pix-dark py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-1/2 h-[380px] w-[760px] -translate-x-1/2 rounded-full bg-pix-gold/[0.07] blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left column */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-pix-gold/25 bg-pix-gold/[0.07] px-3.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-pix-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-pix-gold" />
                Start A Conversation
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.85rem]">
                Let's build something{' '}
                <span className="text-gold-gradient">worth remembering</span>
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-pix-muted sm:text-base">
                Have a project in mind? Tell us where you want to go — we'll map the
                fastest route to a polished, production-ready platform.
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              <Reveal delay={0.2}>
                <div className="luxury-card rounded-2xl p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pix-gold/30 bg-pix-surface text-pix-gold shadow-gold-sm">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9px] uppercase tracking-[0.2em] text-pix-dim">
                        Email the studio
                      </p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="mt-1 block truncate text-sm font-medium text-white transition-colors hover:text-pix-gold-light sm:text-[15px]"
                        aria-label={`Send email to ${siteConfig.contact.email}`}
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-pix-muted transition-colors hover:border-pix-gold/40 hover:text-pix-gold"
                    >
                      {copied ? (
                        <Check className="h-3.5 w-3.5 text-pix-gold" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.16em] text-pix-gold">
                      Address copied
                    </p>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.26}>
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-card group flex items-center gap-4 rounded-2xl p-5"
                  aria-label={`Visit Instagram profile: ${siteConfig.contact.instagramHandle}`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-pix-gold/30 bg-pix-surface text-pix-gold shadow-gold-sm">
                    <Instagram className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] uppercase tracking-[0.2em] text-pix-dim">
                      Behind the scenes
                    </p>
                    <p className="mt-1 truncate text-sm font-medium text-white transition-colors group-hover:text-pix-gold-light">
                      {siteConfig.contact.instagramHandle}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 shrink-0 text-pix-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-pix-gold" />
                </a>
              </Reveal>

              <Reveal delay={0.32}>
                <div className="flex items-center gap-2.5 px-1 pt-2 text-[10px] uppercase tracking-[0.2em] text-pix-dim">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pix-gold/70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-pix-gold" />
                  </span>
                  Open for select collaborations
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form */}
          <Reveal delay={0.12} className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#111116] to-[#0a0a0d] p-6 sm:p-8 lg:p-10">
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-pix-gold/50 to-transparent"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-pix-gold/[0.08] blur-[80px]"
              />

              <div className="relative">
                <h3 className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                  Send a quick inquiry
                </h3>
                <p className="mt-1 text-xs text-pix-muted">
                  Goes straight to{' '}
                  <span className="text-pix-gold-light">{siteConfig.contact.email}</span>
                </p>

                <form onSubmit={handleMailtoSubmit} className="mt-7 space-y-5">
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-pix-dim"
                    >
                      Project or subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      placeholder="Website development for a brand launch"
                      value={subject}
                      onChange={(event) => setSubject(event.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-pix-gold/60 focus:bg-black/60 focus:ring-4 focus:ring-pix-gold/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.16em] text-pix-dim"
                    >
                      Project requirements
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Briefly describe your timeline, features needed, or goals..."
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition-all duration-300 placeholder:text-white/25 focus:border-pix-gold/60 focus:bg-black/60 focus:ring-4 focus:ring-pix-gold/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gold-gradient py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-black shadow-gold-sm transition-shadow duration-300 hover:shadow-gold-md"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Compose Message
                      <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                    />
                  </button>

                  <p className="flex items-center justify-center gap-1.5 text-center text-[10px] text-pix-dim">
                    Opens your email app with the details pre-filled
                    <ArrowUpRight className="h-3 w-3 text-pix-gold/70" />
                  </p>
                </form>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
