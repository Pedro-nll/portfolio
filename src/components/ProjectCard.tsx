import type { Project } from '../content/types'

type ProjectCardProps = {
  project: Project
  index: number
  linkLabels: {
    demo: string
    demoPending: string
    source: string
    sourcePending: string
  }
  technologiesLabel: string
}

export function ProjectCard({
  project,
  index,
  linkLabels,
  technologiesLabel,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div
        className={`project-preview project-preview-${index + 1}`}
        role="img"
        aria-label={project.previewLabel}
      >
        <span />
        <span />
        <span />
      </div>

      <div className="project-body">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.statusLabel}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <ul className="tag-list" aria-label={technologiesLabel}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        <div className="project-links">
          {project.links.demo ? (
            <a href={project.links.demo}>{linkLabels.demo}</a>
          ) : (
            <span>{linkLabels.demoPending}</span>
          )}
          {project.links.source ? (
            <a href={project.links.source}>{linkLabels.source}</a>
          ) : (
            <span>{linkLabels.sourcePending}</span>
          )}
        </div>
      </div>
    </article>
  )
}
