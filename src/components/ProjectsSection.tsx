import type { PortfolioContent } from '../content/types'
import { ProjectCard } from './ProjectCard'

type ProjectsSectionProps = {
  content: PortfolioContent['sections']['projects']
}

export function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section className="section projects-section" id="projects" aria-labelledby="projects-title">
      <p className="eyebrow">{content.eyebrow}</p>
      <div className="section-heading">
        <h2 id="projects-title">{content.title}</h2>
        <p>{content.intro}</p>
      </div>

      <div className="projects-grid">
        {content.items.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            linkLabels={content.linkLabels}
          />
        ))}
      </div>
    </section>
  )
}
