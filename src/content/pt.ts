import type { PortfolioContent } from './types'

export const ptContent: PortfolioContent = {
  language: 'pt-BR',
  skipLink: 'Pular para o conteudo principal',
  aria: {
    profile: 'Resumo do perfil',
    navigation: 'Secoes do portfolio',
    controls: 'Controles do portfolio',
  },
  profile: {
    name: 'Pedro Lambert',
    role: 'Engenharia de software na Infoblox',
    intro:
      'Profissional fullstack com experiencia em .NET, React, Java, TypeScript, Spring Boot e Python.',
    status: 'Estudante de Engenharia de Software na PUC Minas',
    photoSrc: 'profile/pedro-lambert.jpg',
    photoAlt: 'Foto profissional de Pedro Lambert',
    stats: [
      { value: '2024', label: 'inicio profissional' },
      { value: '3', label: 'experiencias selecionadas' },
    ],
  },
  nav: [
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'contact', label: 'Contato' },
  ],
  actions: {
    resume: 'Curriculo',
    resumePending: 'PDF em portugues',
    language: 'English',
    languageLabel: 'Alternar idioma para ingles',
    theme: {
      label: 'Alternar tema',
      light: 'Claro',
      dark: 'Escuro',
    },
  },
  sections: {
    projects: {
      eyebrow: 'Trabalho selecionado',
      title: 'Projetos',
      intro:
        'Projeto real e amostras conceituais mostram foco em desenvolvimento full-stack, automacao e interfaces praticas.',
      linkLabels: {
        demo: 'Demo',
        demoPending: 'Demo pendente',
        source: 'Codigo',
        sourcePending: 'Codigo pendente',
      },
      technologiesLabel: 'Tecnologias',
      items: [
        {
          id: 'grade-inteligente',
          title: 'Grade Inteligente',
          type: 'Projeto voluntario full-stack',
          statusLabel: 'Projeto real',
          summary:
            'Sistema de gestao de matriz curricular para o Instituto de Ciencias Exatas e Informatica da PUC Minas, com cerca de 5 mil acessos na faculdade.',
          technologies: ['Spring Framework', 'Desenvolvimento full-stack', 'Java'],
          previewLabel: 'Previa conceitual do projeto Grade Inteligente',
          links: {
            demo: 'https://icei.pucminas.br/gradeinteligente/',
          },
        },
        {
          id: 'automation-hub',
          title: 'Workflow Automation Hub',
          type: 'Amostra de automacao',
          statusLabel: 'Projeto conceitual',
          summary:
            'Ferramenta que recebe eventos, aplica regras configuraveis e sincroniza informacoes entre servicos.',
          technologies: ['Java', 'Spring Boot', 'REST APIs', 'Docker', 'PostgreSQL'],
          previewLabel: 'Previa de historico de automacoes',
          links: {},
        },
        {
          id: 'document-analyzer',
          title: 'AI Document Analyzer',
          type: 'Amostra com IA',
          statusLabel: 'Projeto conceitual',
          summary:
            'Interface focada para extrair, resumir e organizar informacoes de documentos enviados.',
          technologies: ['React', 'TypeScript', 'API integration', 'Java placeholder'],
          previewLabel: 'Previa de analise de documentos',
          links: {},
        },
      ],
    },
    experience: {
      eyebrow: 'Trajetoria',
      title: 'Experiencia',
      intro:
        'Entradas selecionadas com foco em desenvolvimento de software aplicado e experiencia proxima a projetos reais.',
      items: [
        {
          id: 'infoblox',
          title: 'Estagiario de engenharia de software',
          organization: 'Infoblox',
          period: 'abril de 2026 - atual',
          description:
            'Estagio atual em engenharia de software, listado no curriculo fornecido por Pedro.',
        },
        {
          id: 'dti-digital',
          title: 'Estagiario de desenvolvimento web fullstack',
          organization: 'dti digital',
          period: 'setembro de 2024 - agosto de 2025',
          description:
            'Experiencia profissional em desenvolvimento web full-stack em Belo Horizonte.',
        },
        {
          id: 'agencia-experimental',
          title: 'Desenvolvedor de software voluntario',
          organization: 'Agencia Experimental de Software - PUC Minas',
          period: 'agosto de 2023 - dezembro de 2024',
          description:
            'Participacao nos primeiros projetos e na estruturacao da agencia, incluindo o Grade Inteligente para a comunidade academica.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar',
      intro:
        'Use os links confirmados abaixo para ver codigo, acompanhar a trajetoria profissional ou entrar em contato.',
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
