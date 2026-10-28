export interface SiteConfig {
  brandName: string;
  tagline: string;
  domain: string;
  contact: {
    email: string;
    instagram: string;
    instagramHandle: string;
    hasInstagramConfigured: boolean;
    whatsapp?: string;
    hasWhatsappConfigured?: boolean;
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
    email: 'pixlunedigital@gmail.com',
    instagram: 'https://www.instagram.com/pixlune.in/',
    instagramHandle: '@pixlune.in',
    hasInstagramConfigured: true,
    whatsapp: '',
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
