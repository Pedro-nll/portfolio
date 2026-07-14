import { useCallback, useEffect, useState, type RefObject } from 'react'
import type { PortfolioContent } from '../content/types'
import type { LanguageCode } from '../hooks/useLanguage'
import type { ThemePreference } from '../hooks/useTheme'
import { ContactLinks } from './ContactLinks'
import { ExperienceTimeline } from './ExperienceTimeline'
import { Navigation } from './Navigation'
import { ProfilePanel } from './ProfilePanel'
import { ProjectsSection } from './ProjectsSection'

type AppShellProps = {
  contentWindowRef: RefObject<HTMLElement | null>
  content: PortfolioContent
  activeSection: PortfolioContent['nav'][number]['id']
  theme: ThemePreference
  onLanguageSelect: (language: LanguageCode) => void
  onThemeToggle: () => void
}

export function AppShell({
  contentWindowRef,
  content,
  activeSection,
  theme,
  onLanguageSelect,
  onThemeToggle,
}: AppShellProps) {
  const year = new Date().getFullYear()
  const [isContentAtEnd, setIsContentAtEnd] = useState(false)
  const contactLabel = content.nav.find((item) => item.id === 'contact')?.label ?? 'Contact'
  const scrollCueLabel =
    content.language === 'en' ? `Go to ${contactLabel}` : `Ir para ${contactLabel.toLowerCase()}`

  const handleSectionNavigate = useCallback((id: PortfolioContent['nav'][number]['id'], smooth = true) => {
    if (!window.matchMedia('(min-width: 901px)').matches) {
      return
    }

    const section = document.getElementById(id)
    const contentWindow = contentWindowRef.current
    if (!section || !contentWindow) {
      return
    }

    const top =
      section.getBoundingClientRect().top -
      contentWindow.getBoundingClientRect().top +
      contentWindow.scrollTop
    contentWindow.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' })
    window.history.pushState(null, '', `#${id}`)
  }, [contentWindowRef])

  useEffect(() => {
    const id = window.location.hash.replace('#', '') as PortfolioContent['nav'][number]['id']
    if (content.nav.some((item) => item.id === id)) {
      window.requestAnimationFrame(() => handleSectionNavigate(id, false))
    }
  }, [content.nav, handleSectionNavigate])

  useEffect(() => {
    const contentWindow = contentWindowRef.current
    if (!contentWindow) {
      return
    }

    const updateScrollCue = () => {
      const remaining =
        contentWindow.scrollHeight - contentWindow.scrollTop - contentWindow.clientHeight
      setIsContentAtEnd(remaining < 24)
    }

    updateScrollCue()
    contentWindow.addEventListener('scroll', updateScrollCue, { passive: true })
    window.addEventListener('resize', updateScrollCue)

    return () => {
      contentWindow.removeEventListener('scroll', updateScrollCue)
      window.removeEventListener('resize', updateScrollCue)
    }
  }, [contentWindowRef])

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
          onLanguageSelect={onLanguageSelect}
          onThemeToggle={onThemeToggle}
          onSectionNavigate={handleSectionNavigate}
        />

        <div className="mobile-nav">
          <Navigation
            items={content.nav}
            activeSection={activeSection}
            label={content.aria.navigation}
            onNavigate={handleSectionNavigate}
          />
        </div>

        <main className="content-window" id="main-content" ref={contentWindowRef} tabIndex={-1}>
          <button
            className={`scroll-cue${isContentAtEnd ? ' is-hidden' : ''}`}
            type="button"
            aria-label={scrollCueLabel}
            aria-hidden={isContentAtEnd}
            tabIndex={isContentAtEnd ? -1 : 0}
            onClick={() => handleSectionNavigate('contact')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M11 4h2v11.2l4.2-4.2 1.4 1.4L12 19 5.4 12.4 6.8 11l4.2 4.2V4Z" />
            </svg>
          </button>
          <div className="content-column">
            <ProjectsSection content={content.sections.projects} />
            <ExperienceTimeline content={content.sections.experience} />
            <ContactLinks content={content.sections.contact} />

            <footer className="site-footer">
              <p>
                {content.footer} - {year}
              </p>
            </footer>
          </div>
        </main>
      </div>
    </>
  )
}
