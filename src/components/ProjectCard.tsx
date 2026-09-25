import { motion } from "motion/react";
import type { Project, SignalStep, TechMention } from "../data/content";
import { UI_COPY } from "../data/content";
import { EASE, HOVER_LIFT_PX, INTERACTION_DURATION } from "../lib/motion";
import { buildAnchorId } from "../lib/site";
import { Badge, MetaLine, Tip } from "./ui";

/**
 * One step language for every build. `full` is the featured winning build's
 * bold three-cell strip; every other applicable build gets the same labelled
 * steps in the quiet, monochrome variant. Labels and plain-language tips are
 * optional per step and always come from the project's structured data.
 */
function Chain({ steps, label, full }: { steps: SignalStep[]; label: string; full: boolean }) {
  return (
    <ol className={full ? "chain chain-full" : "chain chain-quiet"} aria-label={label}>
      {steps.map((step, i) => (
        <li className="chain-step" key={`${step.text.label}-${i}`}>
          {step.strong ? <span className="chain-label">{step.strong}</span> : null}
          <span className="chain-value">
            <Tip label={step.text.label} tip={step.text.tip} />
          </span>
        </li>
      ))}
    </ol>
  );
}

function TechLine({ items }: { items: TechMention[] }) {
  return (
    <p className="techline">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`}>
          <Tip label={item.label} tip={item.tip} />
          {i < items.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

interface ProjectCardProps {
  project: Project;
  detailed?: boolean;
}

/**
 * Editorial project block. Static by design: the featured build's hover lift
 * is the only motion here (transform-only feedback), and it comes from the
 * shared motion language.
 */
export function ProjectCard({ project, detailed = true }: ProjectCardProps) {
  return (
    <motion.article
      id={buildAnchorId(project.name)}
      className={project.featured ? "featured" : "project"}
      whileHover={project.featured ? { y: -HOVER_LIFT_PX } : undefined}
      transition={{ duration: INTERACTION_DURATION, ease: EASE }}
    >
      <Badge accent={project.badgeAccent}>{project.badge}</Badge>
      <h3>{project.name}</h3>
      {project.meta ? <MetaLine facts={project.meta} className="project-meta" /> : null}
      {project.result ? (
        <p className={project.resultMuted ? "project-result muted" : "project-result"}>
          {project.result}
        </p>
      ) : null}
      <p className="project-desc">{project.description}</p>
      {detailed && project.details
        ? project.details.map((paragraph) => (
            <p key={paragraph} className="project-details">
              {paragraph}
            </p>
          ))
        : null}
      {project.media ? (
        <figure className="project-media">
          <img src={project.media.src} alt={project.media.alt} loading="lazy" decoding="async" />
          <figcaption>{project.media.caption}</figcaption>
        </figure>
      ) : null}
      {project.sysline ? (
        <Chain
          steps={project.sysline}
          label={`${project.name} response sequence`}
          full={Boolean(project.featured)}
        />
      ) : null}
      {project.contrib ? (
        <p className="contrib">
          <span>{UI_COPY.contributionLabel}</span>: {project.contrib}
        </p>
      ) : null}
      {project.techline ? <TechLine items={project.techline} /> : null}
      {project.link ? (
        <a className="card-link" href={project.link.href} target="_blank" rel="noopener">
          {project.link.label}
        </a>
      ) : null}
      {project.demo ? (
        <a className="card-link" href={project.demo.href} target="_blank" rel="noopener">
          {project.demo.label}
        </a>
      ) : null}
    </motion.article>
  );
}
