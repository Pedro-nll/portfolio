import type { PortfolioContent } from '../content/types'
import type { ThemePreference } from '../hooks/useTheme'
import { ContactLinks } from './ContactLinks'
import { ExperienceTimeline } from './ExperienceTimeline'
import { Navigation } from './Navigation'
import { ProfilePanel } from './ProfilePanel'
import { ProjectsSection } from './ProjectsSection'

type AppShellProps = {
  content: PortfolioContent
  activeSection: PortfolioContent['nav'][number]['id']
  theme: ThemePreference
  onLanguageToggle: () => void
  onThemeToggle: () => void
}

export function AppShell({
  content,
  activeSection,
  theme,
  onLanguageToggle,
  onThemeToggle,
}: AppShellProps) {
  const year = new Date().getFullYear()

  return (
    <>
      <a className="skip-link" href="#main-content">
        {content.skipLink}
      </a>

      <div className="app-shell">
        <ProfilePanel
          content={content}
          activeSection={activeSection}
          theme={theme}
          onLanguageToggle={onLanguageToggle}
          onThemeToggle={onThemeToggle}
        />

        <div className="mobile-nav">
          <Navigation
            items={content.nav}
            activeSection={activeSection}
            label={content.aria.navigation}
          />
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
