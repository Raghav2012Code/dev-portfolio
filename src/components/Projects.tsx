import { PROJECTS, PROJECTS_PAGE_COPY, PROJECTS_PAGE_PATH, SECTION_COPY } from "../data/content";
import { buildHref } from "../lib/site";
import { ProjectCard } from "./ProjectCard";
import { SectionHead } from "./ui";

export function Projects({ preview = false }: { preview?: boolean }) {
  const [featured, ...rest] = PROJECTS;
  const copy = SECTION_COPY.projects;
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead title={copy.title} />
        <p className="section-lead">{copy.lead}</p>

        {preview ? (
          <>
            <ul className="project-gist-list">
              {[featured, ...rest.slice(0, 2)].map((project) =>
                project ? (
                  <li key={project.name}>
                    <a className="project-gist-title" href={buildHref(project.name)}>
                      {project.name}
                    </a>
                    {project.gist ? <p className="project-gist-sub">{project.gist}</p> : null}
                  </li>
                ) : null,
              )}
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
