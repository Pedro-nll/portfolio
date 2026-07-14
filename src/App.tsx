import './App.css'
import { useMemo, useRef } from 'react'
import { AppShell } from './components/AppShell'
import { useActiveSection } from './hooks/useActiveSection'
import { useLanguage } from './hooks/useLanguage'
import { useTheme } from './hooks/useTheme'

function App() {
  const contentWindowRef = useRef<HTMLElement | null>(null)
  const { content, setLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const sectionIds = useMemo(() => content.nav.map((item) => item.id), [content.nav])
  const activeSection = useActiveSection(sectionIds, contentWindowRef)

  return (
    <AppShell
      contentWindowRef={contentWindowRef}
      content={content}
      activeSection={activeSection}
      theme={theme}
      onLanguageSelect={setLanguage}
      onThemeToggle={toggleTheme}
    />
  )
}

export default App
