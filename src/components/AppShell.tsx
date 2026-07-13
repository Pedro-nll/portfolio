import type { PortfolioContent } from '../content/types'
import { ContactLinks } from './ContactLinks'
import { ExperienceTimeline } from './ExperienceTimeline'
import { Navigation } from './Navigation'
import { ProfilePanel } from './ProfilePanel'
import { ProjectsSection } from './ProjectsSection'

type AppShellProps = {
  content: PortfolioContent
}

export function AppShell({ content }: AppShellProps) {
  const year = new Date().getFullYear()

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.skipLink}
      </a>

      <div className="app-shell">
        <ProfilePanel content={content} />

        <div className="mobile-nav">
          <Navigation items={content.nav} />
        </div>

        <main className="content-column" id="main-content">
          <ProjectsSection content={content.sections.projects} />
          <ExperienceTimeline content={content.sections.experience} />
          <ContactLinks content={content.sections.contact} />

          <footer className="site-footer">
            <p>
              {content.footer} - {year}
            </p>
          </footer>
        </main>
      </div>
    </>
  )
}
