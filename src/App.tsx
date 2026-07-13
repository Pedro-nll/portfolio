import './App.css'
import { useMemo } from 'react'
import { AppShell } from './components/AppShell'
import { useActiveSection } from './hooks/useActiveSection'
import { useLanguage } from './hooks/useLanguage'
import { useTheme } from './hooks/useTheme'

function App() {
  const { content, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const sectionIds = useMemo(() => content.nav.map((item) => item.id), [content.nav])
  const activeSection = useActiveSection(sectionIds)

  return (
    <AppShell
      content={content}
      activeSection={activeSection}
      theme={theme}
      onLanguageToggle={toggleLanguage}
      onThemeToggle={toggleTheme}
    />
  )
}

export default App
