export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  technologies: string[];
  link?: string;
  isReadyForPublicShowcase: boolean; // Set to true once public launch is complete
  statusBadge?: string;
}

export const projects: ProjectItem[] = [
  {
    id: 'zentroo',
    title: 'ZENTROO',
    category: 'E-Commerce Platform',
    tagline: 'Modern Lifestyle & Direct Commerce',
    description:
      'A full-stack online shopping platform and reselling engine engineered with a modern customer storefront, secure checkout flows, and automated inventory sync.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    link: '#',
    // Kept marked internally as awaiting launch as required:
    isReadyForPublicShowcase: false,
    statusBadge: 'Awaiting Public Launch',
  },
];
