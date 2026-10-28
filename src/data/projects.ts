export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline?: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  statusBadge?: string;
  featured?: boolean;
  isUpcoming?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 'zentroo',
    title: 'ZENTROO',
    category: 'E-commerce',
    tagline: 'Modern Lifestyle & Direct Commerce',
    description:
      'An online shopping platform with product discovery and customer shopping functionality.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    link: 'https://zentroo-frontend.onrender.com/',
    image: '/projects/zentroo.png',
    featured: true,
    statusBadge: 'Preview Build',
  },
  {
    id: 'kifa-foodco',
    title: 'KIFA FoodCo Management System',
    category: 'Business Management',
    tagline: 'Enterprise Operations & Supply Chain',
    description:
      'A management platform covering inventory, stock, purchasing, suppliers, sales, invoices, payments, shops, and delivery operations.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://kifa-foodco-management.pages.dev/',
    image: '/projects/kifa.png',
  },
  {
    id: 'lynqo',
    title: 'Lynqo',
    category: 'Messaging & Social Connections',
    tagline: 'Real-time Social Connections',
    description:
      'A platform for user profiles, friendship and relationship connections, connection requests, and messaging.',
    technologies: ['Django', 'PostgreSQL', 'React', 'Vite'],
    link: 'https://www.lynqoweb.website/',
    image: '/projects/lynqo.png',
  },
  {
    id: 'ami-ai',
    title: 'Ami AI',
    category: 'AI Application',
    tagline: 'Personal AI Companion',
    description:
      'A personal AI companion with a conversational interface.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Web Audio API', 'AI'],
    link: 'https://ai-chatbot-rho-six-36.vercel.app/',
    image: '/projects/ami.png',
  },
  {
    id: 'velora',
    title: 'Velora',
    category: 'Timetable & Productivity',
    tagline: 'Focus & Schedule Management',
    description:
      'A productivity application for organizing tasks and managing daily focus.',
    technologies: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'CSS3'],
    link: 'https://velora-4ycn.onrender.com/',
    image: '/projects/velora.png',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'Personal Developer Portfolio',
    tagline: 'Technical Showcase & Case Studies',
    description:
      'A personal portfolio showcasing development skills, experience, and projects.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Vercel'],
    link: 'https://new-portfolio-coral-tau-37.vercel.app/',
    image: '/projects/portfolio.png',
  },
  {
    id: 'upcoming-ecommerce',
    title: 'Upcoming E-commerce Project',
    category: 'Coming Soon',
    tagline: 'Next-Generation Commerce',
    description:
      'A second e-commerce project currently in development.',
    technologies: ['E-Commerce', 'Full Stack Architecture'],
    isUpcoming: true,
    statusBadge: 'In Development',
  },
];
