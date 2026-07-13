import type { PortfolioContent } from '../content/types'
import { Navigation } from './Navigation'
import { WorkspaceVignette } from './WorkspaceVignette'

type ProfilePanelProps = {
  content: PortfolioContent
}

export function ProfilePanel({ content }: ProfilePanelProps) {
  const { profile, actions, nav } = content
  const resumeHref = `${import.meta.env.BASE_URL}resume/resume-pt.pdf`

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

      <Navigation items={nav} />

      <div className="profile-actions" aria-label="Portfolio controls">
        <a className="button primary" href={resumeHref}>
          {actions.resume}
        </a>
        <button className="button" type="button" disabled>
          {actions.language}
        </button>
        <button className="button" type="button" disabled>
          {actions.theme}
        </button>
      </div>

      <WorkspaceVignette />
    </aside>
  )
}
