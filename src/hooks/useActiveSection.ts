import { useEffect, useState, type RefObject } from 'react'
import type { SectionId } from '../content/types'

const DESKTOP_QUERY = '(min-width: 901px)'

export function useActiveSection(
  sectionIds: SectionId[],
  contentWindowRef?: RefObject<HTMLElement | null>,
) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return
    }

    const mediaQuery = window.matchMedia(DESKTOP_QUERY)
    const visibleSections = new Map<SectionId, number>()
    let observer: IntersectionObserver | undefined

    const observeSections = () => {
      observer?.disconnect()
      visibleSections.clear()

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id as SectionId
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio)
            } else {
              visibleSections.delete(id)
            }
          })

          const mostVisible = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0]
          if (mostVisible) {
            setActiveSection(mostVisible[0])
          }
        },
        {
          root: mediaQuery.matches ? contentWindowRef?.current ?? null : null,
          rootMargin: mediaQuery.matches ? '-8% 0px -66% 0px' : '-20% 0px -55% 0px',
          threshold: [0.1, 0.25, 0.5, 0.75],
        },
      )

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)
        if (section) {
          observer?.observe(section)
        }
      })
    }

    observeSections()
    mediaQuery.addEventListener('change', observeSections)

    return () => {
      mediaQuery.removeEventListener('change', observeSections)
      observer?.disconnect()
    }
  }, [contentWindowRef, sectionIds])

  return activeSection
}
