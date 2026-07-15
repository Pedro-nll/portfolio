import type { ReactNode } from 'react'
import type { PortfolioContent } from '../content/types'
import type { LanguageCode } from '../hooks/useLanguage'
import type { ThemePreference } from '../hooks/useTheme'
import { Navigation } from './Navigation'
import { WorkspaceVignette } from './WorkspaceVignette'

type ProfilePanelProps = {
  content: PortfolioContent
  activeSection: PortfolioContent['nav'][number]['id']
  theme: ThemePreference
  onLanguageSelect: (language: LanguageCode) => void
  onThemeToggle: () => void
  onSectionNavigate: (id: PortfolioContent['nav'][number]['id']) => void
}

export function ProfilePanel({
  content,
  activeSection,
  theme,
  onLanguageSelect,
  onThemeToggle,
  onSectionNavigate,
}: ProfilePanelProps) {
  const { profile, actions, nav } = content
  const resumeFile = content.language === 'en' ? 'resume-en.pdf' : 'resume-pt.pdf'
  const resumeHref = `${import.meta.env.BASE_URL}resume/${resumeFile}`
  const profilePhotoSrc = `${import.meta.env.BASE_URL}${profile.photoSrc}`
  const nextThemeLabel = theme === 'dark' ? actions.theme.light : actions.theme.dark
  const resumeLabel = `${actions.resume} - ${actions.resumePending}`
  const professionalLinks = content.sections.contact.links.filter(
    (link) => link.href && !link.href.startsWith('mailto:'),
  )

  return (
    <aside className="profile-panel" aria-label={content.aria.profile}>
      <div className="utility-controls" aria-label={content.aria.controls}>
        <IconButton
          as="button"
          label="Português"
          title="Português"
          pressed={content.language === 'pt-BR'}
          onClick={() => onLanguageSelect('pt-BR')}
        >
          <span className="flag-icon" aria-hidden="true">
            🇧🇷
          </span>
        </IconButton>
        <IconButton
          as="button"
          label="English"
          title="English"
          pressed={content.language === 'en'}
          onClick={() => onLanguageSelect('en')}
        >
          <span className="flag-icon" aria-hidden="true">
            🇺🇸
          </span>
        </IconButton>
        <IconButton
          as="button"
          label={`${actions.theme.label}: ${nextThemeLabel}`}
          title={nextThemeLabel}
          onClick={onThemeToggle}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
        </IconButton>
        <IconButton as="a" href={resumeHref} download label={resumeLabel} title={resumeLabel}>
          <Icon name="download" />
        </IconButton>
      </div>

      <div className="profile-identity">
        <img
          className="profile-photo"
          src={profilePhotoSrc}
          width="168"
          height="168"
          alt={profile.photoAlt}
        />
        <div className="profile-title">
          {profile.status ? <p className="eyebrow">{profile.status}</p> : null}
          <h1>{profile.name}</h1>
          <p className="role">{profile.role}</p>
          <a className="profile-email" href={`mailto:${profile.email}`} aria-label={profile.emailLabel}>
            {profile.email}
          </a>
          <div className="profile-socials" aria-label={content.sections.contact.eyebrow}>
            {professionalLinks.map((link) => (
              <IconButton
                key={link.label}
                as="a"
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
                label={link.label}
                title={link.label}
              >
                <Icon name={getSocialIcon(link.label)} />
              </IconButton>
            ))}
          </div>
        </div>
      </div>

      <div className="profile-copy">
        <p className="intro">{profile.intro}</p>
      </div>

      <Navigation
        items={nav}
        activeSection={activeSection}
        label={content.aria.navigation}
        onNavigate={onSectionNavigate}
      />

      <WorkspaceVignette />
    </aside>
  )
}

type IconButtonProps = {
  as: 'a' | 'button'
  label: string
  title: string
  pressed?: boolean
  href?: string
  download?: boolean
  target?: string
  rel?: string
  onClick?: () => void
  children: ReactNode
}

function IconButton({
  as,
  label,
  title,
  pressed,
  href,
  download,
  target,
  rel,
  onClick,
  children,
}: IconButtonProps) {
  const className = `icon-control${pressed ? ' is-selected' : ''}`

  if (as === 'a') {
    return (
      <a
        className={className}
        href={href}
        download={download}
        target={target}
        rel={rel}
        aria-label={label}
        title={title}
      >
        {children}
        <span className="control-tooltip" role="tooltip">
          {title}
        </span>
      </a>
    )
  }

  return (
    <button
      className={className}
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      title={title}
      onClick={onClick}
    >
      {children}
      <span className="control-tooltip" role="tooltip">
        {title}
      </span>
    </button>
  )
}

function getSocialIcon(label: string) {
  const normalized = label.toLowerCase()
  if (normalized.includes('github')) {
    return 'github'
  }
  if (normalized.includes('linkedin')) {
    return 'linkedin'
  }
  return 'mail'
}

function Icon({ name }: { name: string }) {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12 2.2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 2.9.8.1-.7.4-1.1.7-1.4-2.2-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.8 9c-.1-.3-.5-1.3.1-2.8 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.5.2 2.5.1 2.8a3.9 3.9 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.6 5 .4.3.7 1 .7 2v2.5c0 .3.2.6.7.5A10 10 0 0 0 12 2.2Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M5.2 8.6h3.2v10.2H5.2V8.6Zm1.6-5.1a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8Zm3.7 5.1h3v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5.5h-3.2v-4.9c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v5h-3.2V8.6Z" />
      </svg>
    )
  }

  if (name === 'mail') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M4 6.5h16v11H4v-11Zm1.8 1.6 6.2 4.6 6.2-4.6H5.8Zm12.7 7.8V10l-6.5 4.8L5.5 10v5.9h13Z" />
      </svg>
    )
  }

  if (name === 'download') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M11 4h2v9l3.2-3.2 1.4 1.4L12 16.8l-5.6-5.6 1.4-1.4L11 13V4Zm-5 14h12v2H6v-2Z" />
      </svg>
    )
  }

  if (name === 'sun') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M11 2h2v3h-2V2Zm0 17h2v3h-2v-3Zm8-8h3v2h-3v-2ZM2 11h3v2H2v-2Zm15.8-6.2 1.4 1.4-2.1 2.1-1.4-1.4 2.1-2.1ZM6.9 15.7l1.4 1.4-2.1 2.1-1.4-1.4 2.1-2.1Zm10.2 0 2.1 2.1-1.4 1.4-2.1-2.1 1.4-1.4ZM6.2 4.8l2.1 2.1-1.4 1.4-2.1-2.1 1.4-1.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M20.2 15.5A8.5 8.5 0 0 1 8.5 3.8 8.5 8.5 0 1 0 20.2 15.5Z" />
    </svg>
  )
}
