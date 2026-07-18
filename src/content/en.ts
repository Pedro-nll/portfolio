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
      { value: '4', label: 'selected projects' },
    ],
  },
  nav: [
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'academic', label: 'Academic Experience', shortLabel: 'Academic' },
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
          id: '180-engenharia-sustentavel',
          title: '180 Engenharia Sustentável',
          type: 'Partner project',
          summary:
            'Management platform for a sustainable landscaping organization, covering budgets, clients, plant inventory, materials, and purchase records.',
          technologies: ['React', 'TypeScript', 'Vite', 'Spring Boot', 'Java', 'PostgreSQL'],
          previewLabel:
            'Screenshot of the 180 Engenharia Sustentável plant inventory management screen',
          imageSrc: 'projects/180-engenharia-cover.webp',
          links: {},
        },
        {
          id: 'le-learn',
          title: 'le&learn',
          summary:
            'Flutter mobile application for studying through foreign-language documents, translations, flashcards, and collaborative document chats.',
          technologies: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'REST APIs', 'Firebase'],
          previewLabel:
            'Mobile screenshot of le&learn showing the document library screen',
          imageSrc: 'projects/le-learn-cover.webp',
          links: {},
        },
        {
          id: 'football-match-prediction-nn',
          title: 'Football Match Prediction with Neural Networks',
          summary:
            'Experimental machine-learning project for predicting home wins, draws, and away wins from historical match, team, FIFA, and betting data.',
          technologies: ['Python', 'TensorFlow', 'Keras', 'pandas', 'scikit-learn', 'Jupyter'],
          previewLabel:
            'Diagram of the football neural-network pipeline and benchmark comparison',
          imageSrc: 'projects/football-nn-results.svg',
          links: {
            source: 'https://github.com/Pedro-nll/finalProjectNeuralNetworksWiSe25',
          },
        },
        {
          id: 'grade-inteligente',
          title: 'Grade Inteligente',
          type: 'Volunteer full-stack project',
          summary:
            'Curriculum matrix management system for PUC Minas ICEI units, with about 5,000 accesses at the university.',
          technologies: ['Spring Framework', 'Full-stack development', 'Java'],
          previewLabel:
            'Screenshot of Grade Inteligente showing curriculum periods and subject cards',
          imageSrc: 'projects/grade-inteligente-curriculum.webp',
          links: {
            demo: 'https://icei.pucminas.br/gradeinteligente/',
          },
          linkText: {
            demo: 'Open deployed project',
          },
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
    academic: {
      eyebrow: '',
      title: 'Academic Experience',
      intro:
        'Research, recognition, and academic programs connected to software engineering practice.',
      items: [
        {
          id: 'sbes-paper',
          title: 'Published paper at SBES 2024',
          organization: 'Brazilian Symposium on Software Engineering',
          period: '2024',
          description:
            'Published "On the Identification of Self-Admitted Technical Debt with Large Language Models" from undergraduate research at PUC Minas on self-admitted technical debt.',
        },
        {
          id: 'academic-excellence',
          title: 'Academic Excellence Award',
          organization: 'PUC Minas',
          period: 'Academic honor',
          description:
            'Recognized by PUC Minas for academic excellence during the Software Engineering program.',
        },
        {
          id: 'empirical-software-engineering-school',
          title: 'First School of Studies in Empirical Software Engineering',
          organization: 'ACM-sponsored academic program',
          period: 'Academic program',
          description:
            'Participated in a focused academic program on empirical software engineering, sponsored by ACM.',
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
