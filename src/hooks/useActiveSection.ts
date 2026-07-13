import { useEffect, useState } from 'react'
import type { SectionId } from '../content/types'

export function useActiveSection(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0])

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      return
    }

    const visibleSections = new Map<SectionId, number>()
    const observer = new IntersectionObserver(
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
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) {
        observer.observe(section)
      }
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
