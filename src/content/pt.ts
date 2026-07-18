import type { PortfolioContent } from './types'

export const ptContent: PortfolioContent = {
  language: 'pt-BR',
  skipLink: 'Pular para o conteúdo principal',
  aria: {
    profile: 'Resumo do perfil',
    navigation: 'Seções do portfólio',
    controls: 'Controles do portfólio',
  },
  profile: {
    name: 'Pedro Lambert',
    role: 'Engenheiro de software na Infoblox',
    email: 'pedronll@outlook.com',
    emailLabel: 'Enviar email para Pedro Lambert',
    intro:
      'Profissional full-stack com experiência em .NET, React, Java, TypeScript, Spring Boot e Python.',
    status: '',
    photoSrc: 'profile/pedro-lambert.jpg',
    photoAlt: 'Foto profissional de Pedro Lambert',
    stats: [
      { value: '2024', label: 'início profissional' },
      { value: '3', label: 'experiências selecionadas' },
    ],
  },
  nav: [
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiência' },
    { id: 'academic', label: 'Experiência acadêmica', shortLabel: 'Acadêmica' },
  ],
  actions: {
    resume: 'Currículo',
    resumePending: 'PDF em português',
    language: 'English',
    languageLabel: 'Alternar idioma para inglês',
    theme: {
      label: 'Alternar tema',
      light: 'Claro',
      dark: 'Escuro',
    },
  },
  sections: {
    projects: {
      eyebrow: '',
      title: 'Projetos',
      intro: '',
      linkLabels: {
        demo: 'Demo',
        demoPending: 'Demo pendente',
        source: 'Código',
        sourcePending: 'Código pendente',
      },
      technologiesLabel: 'Tecnologias',
      items: [
        {
          id: 'grade-inteligente',
          title: 'Grade Inteligente',
          type: 'Projeto voluntário full-stack',
          statusLabel: 'Projeto real',
          summary:
            'Sistema de gestão de matriz curricular para o Instituto de Ciências Exatas e Informática da PUC Minas, com cerca de 5 mil acessos na faculdade.',
          technologies: ['Spring Framework', 'Desenvolvimento full-stack', 'Java'],
          previewLabel: 'Prévia conceitual do projeto Grade Inteligente',
          links: {
            demo: 'https://icei.pucminas.br/gradeinteligente/',
          },
        },
        {
          id: 'automation-hub',
          title: 'Workflow Automation Hub',
          type: 'Amostra de automação',
          statusLabel: 'Projeto conceitual',
          summary:
            'Ferramenta que recebe eventos, aplica regras configuráveis e sincroniza informações entre serviços.',
          technologies: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'PostgreSQL'],
          previewLabel: 'Prévia de histórico de automações',
          links: {},
        },
        {
          id: 'document-analyzer',
          title: 'AI Document Analyzer',
          type: 'Amostra com IA',
          statusLabel: 'Projeto conceitual',
          summary:
            'Interface focada para extrair, resumir e organizar informações de documentos enviados.',
          technologies: ['React', 'TypeScript', 'API integration', 'Java placeholder'],
          previewLabel: 'Prévia de análise de documentos',
          links: {},
        },
      ],
    },
    experience: {
      eyebrow: '',
      title: 'Experiência',
      intro:
        'Entradas selecionadas com foco em desenvolvimento de software aplicado e experiência próxima a projetos reais.',
      items: [
        {
          id: 'infoblox',
          title: 'Estagiário de engenharia de software',
          organization: 'Infoblox',
          period: 'abril de 2026 - atual',
          description:
            'Experiência profissional no desenvolvimento de microsserviços escaláveis em uma arquitetura distribuída na Infoblox, empresa do Vale do Silício.',
        },
        {
          id: 'dti-digital',
          title: 'Estagiário de desenvolvimento web full-stack',
          organization: 'dti digital',
          period: 'setembro de 2024 - agosto de 2025',
          description:
            'Experiência profissional em desenvolvimento web full-stack em Belo Horizonte.',
        },
        {
          id: 'agencia-experimental',
          title: 'Desenvolvedor de software voluntário',
          organization: 'Agência Experimental de Software - PUC Minas',
          period: 'agosto de 2023 - dezembro de 2024',
          description:
            'Participação nos primeiros projetos e na estruturação da agência, incluindo o Grade Inteligente para a comunidade acadêmica.',
        },
      ],
    },
    academic: {
      eyebrow: '',
      title: 'Experiência acadêmica',
      intro:
        'Pesquisa, reconhecimentos e programas acadêmicos ligados à prática de engenharia de software.',
      items: [
        {
          id: 'sbes-paper',
          title: 'Artigo publicado no SBES 2024',
          organization: 'Simpósio Brasileiro de Engenharia de Software',
          period: '2024',
          description:
            'Publicação do artigo "On the Identification of Self-Admitted Technical Debt with Large Language Models", resultado de iniciação científica na PUC Minas sobre dívida técnica auto-admitida.',
        },
        {
          id: 'academic-excellence',
          title: 'Destaque Acadêmico',
          organization: 'PUC Minas',
          period: 'Reconhecimento acadêmico',
          description:
            'Reconhecimento da PUC Minas por excelência acadêmica durante o curso de Engenharia de Software.',
        },
        {
          id: 'empirical-software-engineering-school',
          title: 'Primeira Escola de Estudos em Engenharia de Software Empírica',
          organization: 'Programa acadêmico patrocinado pela ACM',
          period: 'Programa acadêmico',
          description:
            'Participação em um programa acadêmico focado em engenharia de software empírica, patrocinado pela ACM.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar',
      intro:
        'Use os links confirmados abaixo para ver código, acompanhar a trajetória profissional ou entrar em contato.',
      links: [
        { label: 'GitHub', href: 'https://github.com/Pedro-nll', external: true },
        {
          label: 'LinkedIn',
          href: 'https://www.linkedin.com/in/pedro-nllambert/',
          external: true,
        },
        { label: 'Email', href: 'mailto:pedronll@outlook.com' },
      ],
    },
  },
  footer: 'Pedro Lambert',
}
