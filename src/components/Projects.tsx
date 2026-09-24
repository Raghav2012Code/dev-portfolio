import { PROJECTS, PROJECTS_PAGE_COPY, PROJECTS_PAGE_PATH, SECTION_COPY } from "../data/content";
import { ProjectCard } from "./ProjectCard";
import { SectionHead } from "./ui";

export function Projects({ preview = false }: { preview?: boolean }) {
  const [featured, ...rest] = PROJECTS;
  const copy = SECTION_COPY.projects;
  return (
    <section className="section" id="projects">
      <div className="container container-wide">
        <SectionHead title={copy.title} />
        <p className="section-lead">{copy.lead}</p>

        {preview ? (
          <>
            {featured ? <ProjectCard project={featured} detailed /> : null}
            <ul className="project-gist-list">
              {rest.map((project) => (
                <li key={project.name}>
                  <a className="project-gist-title" href={PROJECTS_PAGE_PATH}>
                    {project.name}
                  </a>
                  {project.result ?? project.meta ? (
                    <p className="project-gist-sub">{project.result ?? project.meta}</p>
                  ) : null}
                </li>
              ))}
            </ul>
            <a className="card-link" href={PROJECTS_PAGE_PATH}>
              {PROJECTS_PAGE_COPY.viewAll}
            </a>
          </>
        ) : (
          <>
            {featured ? <ProjectCard project={featured} detailed /> : null}
            <div className="project-grid">
              {rest.map((project) => (
                <ProjectCard key={project.name} project={project} detailed />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
