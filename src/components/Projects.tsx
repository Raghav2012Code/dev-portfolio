import { motion } from "motion/react";
import { PROJECTS, SECTION_COPY } from "../data/content";
import { reveal } from "../lib/motion";
import { ProjectCard } from "./ProjectCard";
import { SectionHead } from "./ui";

export function Projects() {
  const [featured, ...rest] = PROJECTS;
  const copy = SECTION_COPY.projects;
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} />
        <motion.p {...reveal(2)} className="section-lead">
          {copy.lead}
        </motion.p>

        {featured ? <ProjectCard project={featured} index={3} /> : null}

        <div className="project-grid">
          {rest.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={4 + i} />
          ))}
        </div>
      </div>
    </section>
  );
}
