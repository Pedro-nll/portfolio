import { useEffect, useState } from 'react'

export type ThemePreference = 'light' | 'dark'

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(): ThemePreference {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') {
    return stored
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemePreference>(getInitialTheme)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, theme)
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return { theme, setTheme, toggleTheme }
}
