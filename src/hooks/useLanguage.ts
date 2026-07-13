import { useEffect, useMemo, useState } from 'react'
import { enContent } from '../content/en'
import { ptContent } from '../content/pt'

export type LanguageCode = 'pt-BR' | 'en'

const STORAGE_KEY = 'portfolio-language'

function getInitialLanguage(): LanguageCode {
  if (typeof window === 'undefined') {
    return 'pt-BR'
  }

  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt-BR' || stored === 'en') {
    return stored
  }

  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'pt-BR'
}

export function useLanguage() {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const content = useMemo(() => {
    return language === 'en' ? enContent : ptContent
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'pt-BR' : 'en'))
  }

  return { content, language, setLanguage, toggleLanguage }
}
