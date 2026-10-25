export interface SiteConfig {
  brandName: string;
  tagline: string;
  domain: string;
  contact: {
    email: string;
    emailPlaceholderNote?: string;
    instagram: string;
    instagramHandle: string;
    whatsapp: string; // configured or placeholder
    hasWhatsappConfigured: boolean;
  };
  navigation: {
    label: string;
    href: string;
  }[];
}

export const siteConfig: SiteConfig = {
  brandName: 'PIXLUNE',
  tagline: 'Where ideas become real',
  domain: 'pixlune.in',
  contact: {
    email: 'contact@pixlune.in', // Official domain email placeholder
    instagram: 'https://instagram.com/pixlune', // Instagram placeholder link
    instagramHandle: '@pixlune',
    whatsapp: '', // Left unconfigured as per prompt; placeholder available
    hasWhatsappConfigured: false,
  },
  navigation: [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
};
