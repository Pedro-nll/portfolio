import type { PortfolioContent } from '../content/types'

type ExperienceTimelineProps = {
  content: PortfolioContent['sections']['experience']
  sectionId?: 'experience' | 'academic'
}

export function ExperienceTimeline({ content, sectionId = 'experience' }: ExperienceTimelineProps) {
  const titleId = `${sectionId}-title`

  return (
    <section className="section" id={sectionId} aria-labelledby={titleId}>
      {content.eyebrow ? <p className="eyebrow">{content.eyebrow}</p> : null}
      <div className="section-heading">
        <h2 id={titleId}>{content.title}</h2>
        <p>{content.intro}</p>
      </div>

      <ol className="timeline">
        {content.items.map((item) => (
          <li key={item.id}>
            <article>
              <p className="timeline-period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="timeline-organization">{item.organization}</p>
              <p>{item.description}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
