import type { PortfolioContent } from '../content/types'
import type { ThemePreference } from '../hooks/useTheme'
import { Navigation } from './Navigation'
import { WorkspaceVignette } from './WorkspaceVignette'

type ProfilePanelProps = {
  content: PortfolioContent
  activeSection: PortfolioContent['nav'][number]['id']
  theme: ThemePreference
  onLanguageToggle: () => void
  onThemeToggle: () => void
}

export function ProfilePanel({
  content,
  activeSection,
  theme,
  onLanguageToggle,
  onThemeToggle,
}: ProfilePanelProps) {
  const { profile, actions, nav } = content
  const resumeFile = content.language === 'en' ? 'resume-en.pdf' : 'resume-pt.pdf'
  const resumeHref = `${import.meta.env.BASE_URL}resume/${resumeFile}`
  const nextThemeLabel = theme === 'dark' ? actions.theme.light : actions.theme.dark

  return (
    <aside className="profile-panel" aria-label="Profile summary">
      <div className="profile-photo" role="img" aria-label={profile.photoAlt}>
        PL
      </div>

      <div className="profile-copy">
        <p className="eyebrow">{profile.status}</p>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <p className="intro">{profile.intro}</p>
      </div>

      <dl className="stats">
        {profile.stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </dl>

      <Navigation items={nav} activeSection={activeSection} />

      <div className="profile-actions" aria-label="Portfolio controls">
        <a className="button primary resume-button" href={resumeHref}>
          <span>{actions.resume}</span>
          <small>{actions.resumePending}</small>
        </a>
        <button
          className="button"
          type="button"
          aria-label={actions.languageLabel}
          onClick={onLanguageToggle}
        >
          {actions.language}
        </button>
        <button
          className="button"
          type="button"
          aria-label={`${actions.theme.label}: ${nextThemeLabel}`}
          onClick={onThemeToggle}
        >
          {nextThemeLabel}
        </button>
      </div>

      <WorkspaceVignette />
    </aside>
  )
}
