import type { PortfolioContent } from './types'

export const enContent: PortfolioContent = {
  language: 'en',
  skipLink: 'Skip to main content',
  aria: {
    profile: 'Profile summary',
    navigation: 'Portfolio sections',
    controls: 'Portfolio controls',
  },
  profile: {
    name: 'Pedro Lambert',
    role: 'Software Engineer at Infoblox',
    email: 'pedronll@outlook.com',
    emailLabel: 'Email Pedro Lambert',
    intro:
      'Full-stack professional with experience in .NET, React, Java, TypeScript, Spring Boot, and Python.',
    status: '',
    photoSrc: 'profile/pedro-lambert.jpg',
    photoAlt: 'Professional photo of Pedro Lambert',
    stats: [
      { value: '2024', label: 'professional start' },
      { value: '3', label: 'selected entries' },
    ],
  },
  nav: [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
  ],
  actions: {
    resume: 'Resume',
    resumePending: 'English PDF',
    language: 'Português',
    languageLabel: 'Switch language to Portuguese',
    theme: {
      label: 'Toggle theme',
      light: 'Light',
      dark: 'Dark',
    },
  },
  sections: {
    projects: {
      eyebrow: '',
      title: 'Projects',
      intro: '',
      linkLabels: {
        demo: 'Demo',
        demoPending: 'Demo pending',
        source: 'Source',
        sourcePending: 'Source pending',
      },
      technologiesLabel: 'Technologies',
      items: [
        {
          id: 'grade-inteligente',
          title: 'Grade Inteligente',
          type: 'Volunteer full-stack project',
          statusLabel: 'Real project',
          summary:
            'Curriculum matrix management system for PUC Minas ICEI units, with about 5,000 accesses at the university.',
          technologies: ['Spring Framework', 'Full-stack development', 'Java'],
          previewLabel: 'Conceptual preview of the Grade Inteligente project',
          links: {
            demo: 'https://icei.pucminas.br/gradeinteligente/',
          },
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
      eyebrow: '',
      title: 'Experience',
      intro:
        'Selected entries focused on applied software development and experience close to real project delivery.',
      items: [
        {
          id: 'infoblox',
          title: 'Software Engineering Intern',
          organization: 'Infoblox',
          period: 'April 2026 - Present',
          description:
            'Professional experience developing scalable microservices in a distributed architecture at Infoblox, a Silicon Valley company.',
        },
        {
          id: 'dti-digital',
          title: 'Full-Stack Web Development Intern',
          organization: 'dti digital',
          period: 'September 2024 - August 2025',
          description:
            'Professional full-stack web development experience in Belo Horizonte.',
        },
        {
          id: 'agencia-experimental',
          title: 'Volunteer Software Developer',
          organization: 'Agência Experimental de Software - PUC Minas',
          period: 'August 2023 - December 2024',
          description:
            'Helped with early projects and agency structure, including Grade Inteligente for the academic community.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let us talk',
      intro:
        'Use the confirmed links below to view code, follow the professional profile, or get in touch.',
      links: [
        { label: 'GitHub', href: 'https://github.com/Pedro-nll', external: true },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/pedro-nllambert/?locale=en-US',
          external: true,
        },
        { label: 'Email', href: 'mailto:pedronll@outlook.com' },
      ],
    },
  },
  footer: 'Pedro Lambert',
}
