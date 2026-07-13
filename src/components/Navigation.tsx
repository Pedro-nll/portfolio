import type { PortfolioContent } from '../content/types'

type NavigationProps = {
  items: PortfolioContent['nav']
}

export function Navigation({ items }: NavigationProps) {
  return (
    <nav className="site-nav" aria-label="Portfolio sections">
      {items.map((item) => (
        <a key={item.id} href={`#${item.id}`}>
          {item.label}
        </a>
      ))}
    </nav>
  )
}
