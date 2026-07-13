import type { PortfolioContent } from './types'

export const enContent: PortfolioContent = {
  language: 'en',
  skipLink: 'Skip to main content',
  profile: {
    name: 'Pedro Lambert',
    role: '[Replace] Java Backend Developer',
    intro:
      '[Replace] Short sentence about the software, products, and problems Pedro works on.',
    status: '[Replace] Professional availability to confirm',
    photoAlt: 'Professional photo of Pedro Lambert pending',
    stats: [
      { value: '[--]', label: 'years of experience' },
      { value: '3', label: 'concept projects' },
    ],
  },
  nav: [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ],
  actions: {
    resume: 'Resume',
    language: 'Portugues',
    theme: 'Theme',
  },
  sections: {
    projects: {
      eyebrow: 'Selected work',
      title: 'Projects',
      intro:
        'Three concept projects structure the portfolio while real work samples are prepared.',
      linkLabels: {
        demo: 'Demo',
        demoPending: 'Demo pending',
        source: 'Source',
        sourcePending: 'Source pending',
      },
      items: [
        {
          id: 'operations-dashboard',
          title: 'Business Operations Dashboard',
          type: 'Full-stack sample',
          statusLabel: 'Concept project',
          summary:
            'A dashboard for monitoring orders, revenue, operational alerts, and recent activity.',
          technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
          previewLabel: 'Operational dashboard preview',
          links: {},
        },
        {
          id: 'automation-hub',
          title: 'Workflow Automation Hub',
          type: 'Automation sample',
          statusLabel: 'Concept project',
          summary:
            'A tool that receives events, applies configurable rules, and synchronizes information across services.',
          technologies: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'PostgreSQL'],
          previewLabel: 'Automation history preview',
          links: {},
        },
        {
          id: 'document-analyzer',
          title: 'AI Document Analyzer',
          type: 'AI-powered sample',
          statusLabel: 'Concept project',
          summary:
            'A focused interface that extracts, summarizes, and organizes information from uploaded documents.',
          technologies: ['React', 'TypeScript', 'API integration', 'Java placeholder'],
          previewLabel: 'Document analysis preview',
          links: {},
        },
      ],
    },
    experience: {
      eyebrow: 'Background',
      title: 'Experience',
      intro:
        'Real entries still need to be supplied. This area currently shows only the intended structure.',
      items: [
        {
          id: 'experience-placeholder',
          title: '[Replace] Role or professional focus',
          organization: '[Replace] Organization',
          period: '[Replace] Period',
          description:
            '[Replace] Objective description of responsibilities, technologies, and confirmed impact.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us talk',
      intro:
        'Use the confirmed links below. Email and LinkedIn remain pending until Pedro supplies them.',
      links: [
        { label: 'GitHub', href: 'https://github.com/Pedro-nll' },
        { label: 'LinkedIn', note: '[Replace] URL pending' },
        { label: 'Email', note: '[Replace] public email pending' },
      ],
    },
  },
  footer: 'Pedro Lambert',
}
