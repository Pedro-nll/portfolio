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
        {project.imageSrc ? (
          <img src={project.imageSrc} alt="" aria-hidden="true" />
        ) : (
          <>
            <span />
            <span />
            <span />
          </>
        )}
      </div>

      <div className="project-body">
        {project.type ? (
          <div className="project-meta">
            <span>{project.type}</span>
          </div>
        ) : null}
        <h3>{project.title}</h3>
        <p>{project.summary}</p>

        <ul className="tag-list" aria-label={technologiesLabel}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>

        {(project.links.demo || project.links.source || project.showPendingLinks) && (
          <div className="project-links">
            {project.links.demo ? (
              <a href={project.links.demo}>{project.linkText?.demo ?? linkLabels.demo}</a>
            ) : project.showPendingLinks ? (
              <span>{linkLabels.demoPending}</span>
            ) : null}
            {project.links.source ? (
              <a href={project.links.source}>{project.linkText?.source ?? linkLabels.source}</a>
            ) : project.showPendingLinks ? (
              <span>{linkLabels.sourcePending}</span>
            ) : null}
          </div>
        )}
      </div>
    </article>
  )
}
