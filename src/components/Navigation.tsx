import type { PortfolioContent } from '../content/types'

type NavigationProps = {
  items: PortfolioContent['nav']
  activeSection: PortfolioContent['nav'][number]['id']
}

export function Navigation({ items, activeSection }: NavigationProps) {
  return (
    <nav className="site-nav" aria-label="Portfolio sections">
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          aria-current={activeSection === item.id ? 'true' : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}
