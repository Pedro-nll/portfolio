import type { PortfolioContent } from './types'

export const ptContent: PortfolioContent = {
  language: 'pt-BR',
  skipLink: 'Pular para o conteudo principal',
  profile: {
    name: 'Pedro Lambert',
    role: '[Substituir] Desenvolvedor Java Backend',
    intro:
      '[Substituir] Frase curta sobre o tipo de software, produtos e problemas que Pedro resolve.',
    status: '[Substituir] Disponibilidade profissional a confirmar',
    photoAlt: 'Foto profissional de Pedro Lambert pendente',
    stats: [
      { value: '[--]', label: 'anos de experiencia' },
      { value: '3', label: 'projetos conceituais' },
    ],
  },
  nav: [
    { id: 'projects', label: 'Projetos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'contact', label: 'Contato' },
  ],
  actions: {
    resume: 'Curriculo',
    language: 'English',
    theme: 'Tema',
  },
  sections: {
    projects: {
      eyebrow: 'Trabalho selecionado',
      title: 'Projetos',
      intro:
        'Tres projetos conceituais estruturam o portfolio enquanto os trabalhos reais sao preparados.',
      linkLabels: {
        demo: 'Demo',
        demoPending: 'Demo pendente',
        source: 'Codigo',
        sourcePending: 'Codigo pendente',
      },
      items: [
        {
          id: 'operations-dashboard',
          title: 'Business Operations Dashboard',
          type: 'Amostra full-stack',
          statusLabel: 'Projeto conceitual',
          summary:
            'Dashboard para acompanhar pedidos, receita, alertas operacionais e atividade recente.',
          technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
          previewLabel: 'Previa de dashboard operacional',
          links: {},
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
        'Entradas reais ainda precisam ser fornecidas. Esta area mostra apenas a estrutura prevista.',
      items: [
        {
          id: 'experience-placeholder',
          title: '[Substituir] Cargo ou foco profissional',
          organization: '[Substituir] Organizacao',
          period: '[Substituir] Periodo',
          description:
            '[Substituir] Descricao objetiva de responsabilidades, tecnologias e impacto confirmado.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contato',
      title: 'Vamos conversar',
      intro:
        'Use os links confirmados abaixo. Email e LinkedIn permanecem pendentes ate Pedro fornecer os dados.',
      links: [
        { label: 'GitHub', href: 'https://github.com/Pedro-nll' },
        { label: 'LinkedIn', note: '[Substituir] URL pendente' },
        { label: 'Email', note: '[Substituir] email publico pendente' },
      ],
    },
  },
  footer: 'Pedro Lambert',
}
