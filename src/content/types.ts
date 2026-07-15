export type SectionId = 'projects' | 'experience'

export type Project = {
  id: string
  title: string
  type: string
  statusLabel: string
  summary: string
  technologies: string[]
  previewLabel: string
  links: {
    demo?: string
    source?: string
  }
}

export type ExperienceEntry = {
  id: string
  title: string
  organization: string
  period: string
  description: string
}

export type SocialLink = {
  label: string
  href?: string
  note?: string
  external?: boolean
}

export type PortfolioContent = {
  language: 'pt-BR' | 'en'
  skipLink: string
  aria: {
    profile: string
    navigation: string
    controls: string
  }
  profile: {
    name: string
    role: string
    email: string
    emailLabel: string
    intro: string
    status: string
    photoSrc: string
    photoAlt: string
    stats: Array<{
      value: string
      label: string
    }>
  }
  nav: Array<{
    id: SectionId
    label: string
  }>
  actions: {
    resume: string
    resumePending: string
    language: string
    languageLabel: string
    theme: {
      label: string
      light: string
      dark: string
    }
  }
  sections: {
    projects: {
      eyebrow: string
      title: string
      intro: string
      linkLabels: {
        demo: string
        demoPending: string
        source: string
        sourcePending: string
      }
      technologiesLabel: string
      items: Project[]
    }
    experience: {
      eyebrow: string
      title: string
      intro: string
      items: ExperienceEntry[]
    }
    contact: {
      eyebrow: string
      title: string
      intro: string
      links: SocialLink[]
    }
  }
  footer: string
}
