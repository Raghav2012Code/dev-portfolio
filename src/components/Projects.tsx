import { motion } from "motion/react";
import { PROJECTS, PROJECTS_PAGE_COPY, PROJECTS_PAGE_PATH, SECTION_COPY } from "../data/content";
import { itemVariants, listVariants, reveal, SCROLL_VIEWPORT } from "../lib/motion";
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
            <motion.ul
              className="project-gist-list"
              variants={listVariants}
              initial="hidden"
              whileInView="shown"
              viewport={SCROLL_VIEWPORT}
            >
              {[featured, ...rest.slice(0, 2)].map((project) =>
                project ? (
                  <motion.li key={project.name} variants={itemVariants}>
                    <a className="project-gist-title" href={PROJECTS_PAGE_PATH}>
                      {project.name}
                    </a>
                    {project.result ?? project.meta ? (
                      <p className="project-gist-sub">{project.result ?? project.meta}</p>
                    ) : null}
                  </motion.li>
                ) : null,
              )}
            </motion.ul>
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
