export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  technologies: string[];
  link?: string;
  image?: string;
  statusBadge?: string;
  featured?: boolean;
  isUpcoming?: boolean;
  accentColor: string;
  browserUrl?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'zentroo',
    title: 'ZENTROO',
    category: 'E-commerce Platform',
    tagline: 'Modern Lifestyle & Direct Commerce',
    description:
      'An online shopping platform with product discovery and customer shopping functionality.',
    features: [
      'Interactive Product Catalog & Filtering',
      'Dynamic Customer Cart & Quick Checkout Flow',
      'Dark & Light Mode Responsive Interface',
      'Engineered for Scale & Fast Product Discovery',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    link: 'https://zentroo-frontend.onrender.com/',
    image: '/projects/zentroo.png',
    featured: true,
    statusBadge: 'Preview Build',
    accentColor: '#D4AF37',
    browserUrl: 'zentroo-frontend.onrender.com',
  },
  {
    id: 'kifa-foodco',
    title: 'KIFA FoodCo Management System',
    category: 'Business Management',
    tagline: 'Enterprise Operations & Supply Chain',
    description:
      'A management platform covering inventory, stock, purchasing, suppliers, sales, invoices, payments, shops, and delivery operations.',
    features: [
      'Multi-Shop Warehouse & Stock Tracking',
      'Supplier Purchasing & Invoicing Ledger',
      'Comprehensive Sales & Payment Processing',
      'Delivery Fleet & Dispatch Workflow',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL'],
    link: 'https://kifa-foodco-management.pages.dev/',
    image: '/projects/kifa.png',
    accentColor: '#38BDF8',
    browserUrl: 'kifa-foodco-management.pages.dev',
  },
  {
    id: 'lynqo',
    title: 'Lynqo',
    category: 'Messaging & Social Connections',
    tagline: 'Connect Beyond Chats',
    description:
      'A platform for user profiles, friendship and relationship connections, connection requests, and messaging.',
    features: [
      'User Profiles & Relationship Discovery',
      'Connection Request & Approval System',
      'Real-Time Direct Messaging Hub',
      'Vite & Django Modern Architecture',
    ],
    technologies: ['Django', 'PostgreSQL', 'React', 'Vite'],
    link: 'https://www.lynqoweb.website/',
    image: '/projects/lynqo.png',
    accentColor: '#A855F7',
    browserUrl: 'www.lynqoweb.website',
  },
  {
    id: 'ami-ai',
    title: 'Ami AI',
    category: 'AI Application',
    tagline: 'Personal AI Companion',
    description:
      'A personal AI companion with a conversational interface supporting text and voice messaging, audio playback, and customizable check-in preferences.',
    features: [
      'Conversational AI Chat Interface',
      'Integrated Voice Note Audio Messaging',
      'Bilingual English & Manglish Support',
      'Customizable Frequency Check-in Reminders',
    ],
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Web Audio API', 'AI'],
    link: 'https://ai-chatbot-rho-six-36.vercel.app/',
    image: '/projects/ami.png',
    accentColor: '#C084FC',
    browserUrl: 'ai-chatbot-rho-six-36.vercel.app',
  },
  {
    id: 'velora',
    title: 'Velora',
    category: 'Timetable & Productivity',
    tagline: 'Focus & Schedule Management',
    description:
      'A productivity application for organizing tasks and managing daily focus.',
    features: [
      'Focus Session & Deep Work Timer',
      'Daily Schedule & Timetable Planning',
      'Task Priority & Completion Status',
      'Clean Dark Studio Productivity UI',
    ],
    technologies: ['Django', 'Python', 'PostgreSQL', 'JavaScript', 'CSS3'],
    link: 'https://velora-4ycn.onrender.com/',
    image: '/projects/velora.png',
    accentColor: '#A78BFA',
    browserUrl: 'velora-4ycn.onrender.com',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'Personal Developer Portfolio',
    tagline: 'Technical Showcase & Case Studies',
    description:
      'A personal portfolio showcasing development skills, experience, and projects.',
    features: [
      'Full Stack Technical Architecture Showcase',
      'Skill Hierarchy & Practical Project Case Studies',
      'Clean Editorial Responsive Interface',
      'Production Deployment on Vercel',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Responsive Design', 'Vercel'],
    link: 'https://new-portfolio-coral-tau-37.vercel.app/',
    image: '/projects/portfolio.png',
    accentColor: '#F59E0B',
    browserUrl: 'new-portfolio-coral-tau-37.vercel.app',
  },
  {
    id: 'upcoming-ecommerce',
    title: 'Upcoming E-commerce Project',
    category: 'Coming Soon',
    tagline: 'Next-Generation Commerce Architecture',
    description:
      'A second e-commerce project currently in development.',
    features: [
      'High-Performance Headless Storefront',
      'Modular Multi-Vendor & Order Pipeline',
      'Bespoke Luxury Design Language',
      'Active Engineering & Design Phase',
    ],
    technologies: ['E-Commerce', 'Full Stack Architecture'],
    isUpcoming: true,
    statusBadge: 'In Development',
    accentColor: '#D4AF37',
  },
];
