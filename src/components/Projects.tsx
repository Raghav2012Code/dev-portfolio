import { motion } from "motion/react";
import { PROJECTS, PROJECTS_PAGE_COPY, PROJECTS_PAGE_PATH, SECTION_COPY } from "../data/content";
import { reveal } from "../lib/motion";
import { ProjectCard } from "./ProjectCard";
import { SectionHead } from "./ui";

export function Projects({ preview = false }: { preview?: boolean }) {
  const [featured, ...rest] = PROJECTS;
  const visible = preview ? rest.slice(0, 2) : rest;
  const copy = SECTION_COPY.projects;
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} />
        <motion.p {...reveal(2)} className="section-lead">
          {copy.lead}
        </motion.p>

        {featured ? <ProjectCard project={featured} index={3} detailed={!preview} /> : null}

        <div className="project-grid">
          {visible.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={4 + i} detailed={!preview} />
          ))}
        </div>

        {preview ? (
          <a className="card-link" href={PROJECTS_PAGE_PATH}>
            {PROJECTS_PAGE_COPY.viewAll}
          </a>
        ) : null}
      </div>
    </section>
  );
}
