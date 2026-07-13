import type { PortfolioContent } from '../content/types'

type ContactLinksProps = {
  content: PortfolioContent['sections']['contact']
}

export function ContactLinks({ content }: ContactLinksProps) {
  return (
    <section className="section contact-section" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">{content.eyebrow}</p>
      <div className="section-heading">
        <h2 id="contact-title">{content.title}</h2>
        <p>{content.intro}</p>
      </div>

      <ul className="contact-list">
        {content.links.map((link) => (
          <li key={link.label}>
            {link.href ? (
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                {link.label}
              </a>
            ) : (
              <span>
                {link.label}
                <small>{link.note}</small>
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
