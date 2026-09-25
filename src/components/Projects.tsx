import { motion } from "motion/react";
import { PROJECTS, PROJECTS_PAGE_COPY, PROJECTS_PAGE_PATH, SECTION_COPY } from "../data/content";
import { reveal } from "../lib/motion";
import { buildHref } from "../lib/site";
import { ProjectCard } from "./ProjectCard";
import { SectionHead } from "./ui";

export function Projects({ preview = false }: { preview?: boolean }) {
  const [featured, ...rest] = PROJECTS;
  const copy = SECTION_COPY.projects;
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} />
        <motion.p {...reveal(2)} className="section-lead">
          {copy.lead}
        </motion.p>

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
            {featured ? <ProjectCard project={featured} index={3} detailed /> : null}

            <div className="project-grid">
              {rest.map((project, i) => (
                <ProjectCard key={project.name} project={project} index={4 + i} detailed />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
