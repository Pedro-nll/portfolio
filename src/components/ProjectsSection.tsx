import type { PortfolioContent } from '../content/types'
import { ProjectCard } from './ProjectCard'

type ProjectsSectionProps = {
  content: PortfolioContent['sections']['projects']
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      {content.eyebrow ? <p className="eyebrow">{content.eyebrow}</p> : null}
      <div className="section-heading">
        <h2 id="projects-title">{content.title}</h2>
        {content.intro ? <p>{content.intro}</p> : null}
      </div>

      <div className="projects-grid">
        {content.items.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            linkLabels={content.linkLabels}
            technologiesLabel={content.technologiesLabel}
          />
        ))}
      </div>
    </section>
  )
}
