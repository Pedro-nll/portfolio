import type { PortfolioContent } from '../content/types'

type NavigationProps = {
  items: PortfolioContent['nav']
  activeSection: PortfolioContent['nav'][number]['id']
  label: string
  onNavigate?: (id: PortfolioContent['nav'][number]['id']) => void
}

export function Navigation({ items, activeSection, label, onNavigate }: NavigationProps) {
  return (
    <nav className="site-nav" aria-label={label}>
      {items.map((item) => (
        <a
          key={item.id}
          className={item.shortLabel ? 'has-short-label' : undefined}
          href={`#${item.id}`}
          aria-current={activeSection === item.id ? 'true' : undefined}
          onClick={(event) => {
            if (window.matchMedia('(min-width: 901px)').matches) {
              event.preventDefault()
            }
            onNavigate?.(item.id)
          }}
        >
          <span className="nav-label-full">{item.label}</span>
          {item.shortLabel ? <span className="nav-label-short">{item.shortLabel}</span> : null}
        </a>
      ))}
    </nav>
  )
}
