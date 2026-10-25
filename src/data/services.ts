export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Clean, performant websites crafted with modern architectures, optimal responsiveness, and search engine excellence.',
    icon: 'Code2',
    features: ['Modern Frameworks', 'Responsive Layouts', 'Speed Optimization'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Websites',
    description: 'Tailored digital storefronts designed for smooth shopping journeys, secure transactions, and effortless inventory management.',
    icon: 'ShoppingBag',
    features: ['Custom Storefronts', 'Payment Integration', 'Scalable Architecture'],
  },
  {
    id: 'web-apps',
    title: 'Web Applications',
    description: 'Bespoke web applications built with scalable codebases to automate business workflows and provide dynamic user experiences.',
    icon: 'Layers',
    features: ['Custom Logic', 'Interactive Interfaces', 'API Integrations'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Minimalist, luxury-inspired digital interfaces focused on intuitive clarity, visual balance, and memorable brand presence.',
    icon: 'Palette',
    features: ['Design Systems', 'User-Centric Flows', 'High-Fidelity Wireframes'],
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-impact, conversion-focused promotional pages engineered to present your products and services with maximum clarity.',
    icon: 'Sparkles',
    features: ['Focused Messaging', 'High Conversion', 'Fast Load Times'],
  },
  {
    id: 'maintenance',
    title: 'Website Maintenance',
    description: 'Continuous performance optimization, security monitoring, regular updates, and technical support to keep your site seamless.',
    icon: 'Wrench',
    features: ['Health Monitoring', 'Security & Updates', 'Technical Support'],
  },
];
