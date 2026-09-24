import { PROJECTS, PROJECTS_PAGE_PATH, SECTION_COPY } from "../data/content";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./ui";

/** Home page: every project as one index row linking to its full entry. */
export function ProjectIndex() {
  const copy = SECTION_COPY.projects;
  return (
    <Section id="projects" title={copy.title} lead={copy.lead}>
      <ul className="project-index">
        {PROJECTS.map((project) => (
          <li key={project.slug}>
            <a href={`${PROJECTS_PAGE_PATH}#${project.slug}`}>
              <span className="index-name">{project.name}</span>
              <span className="index-event">{project.event}</span>
              <span className={`index-result tone-${project.resultTone}`}>{project.result}</span>
            </a>
          </li>
        ))}
      </ul>
      <a className="text-link" href={PROJECTS_PAGE_PATH}>
        {copy.viewAll}
      </a>
    </Section>
  );
}

/** Projects page: page title, then every project as a datasheet entry. */
export function ProjectList() {
  const copy = SECTION_COPY.projectsPage;
  return (
    <section className="page" id="projects" aria-labelledby="projects-title">
      <div className="container">
        <header className="page-head">
          <h1 id="projects-title">{copy.title}</h1>
          <p className="page-lead">{copy.lead}</p>
        </header>
        {PROJECTS.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
