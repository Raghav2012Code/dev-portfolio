import { motion } from "motion/react";
import type { Variants } from "motion/react";
import type { Project, SignalStep, TechMention } from "../data/content";
import { UI_COPY } from "../data/content";
import {
  EASE,
  INTERACTION_DURATION,
  REVEAL_DURATION,
  RISE_PX,
  SCROLL_VIEWPORT,
  STAGGER_STEP,
} from "../lib/motion";
import { Badge, Tip } from "./ui";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: RISE_PX },
  shown: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: REVEAL_DURATION, ease: EASE, delay: index * STAGGER_STEP },
  }),
  hover: { y: -3, transition: { duration: INTERACTION_DURATION, ease: EASE } },
};

function SignalLine({ steps, small = false }: { steps: SignalStep[]; small?: boolean }) {
  return (
    <p className={small ? "sysline sysline-small" : "sysline"}>
      {steps.map((step, i) => (
        <span key={`${step.text.label}-${i}`}>
          {step.strong ? <strong>{step.strong}</strong> : null}
          {step.strong ? ": " : null}
          <Tip label={step.text.label} tip={step.text.tip} />
          {i < steps.length - 1 ? (
            <span className="sys-arrow" aria-hidden="true">
              {" → "}
            </span>
          ) : null}
        </span>
      ))}
    </p>
  );
}

function TechLine({ items }: { items: TechMention[] }) {
  return (
    <p className="techline">
      {items.map((item, i) => (
        <span key={`${item.label}-${i}`}>
          <Tip label={item.label} tip={item.tip} />
          {i < items.length - 1 ? " · " : ""}
        </span>
      ))}
    </p>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * Editorial project block. Motion owns the entrance + hover lift
 * (transform only); badges, borders, links and tooltips stay in CSS.
 * `index` continues the section's reveal stagger.
 */
export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      className={project.featured ? "featured" : "project"}
      variants={cardVariants}
      initial="hidden"
      whileInView="shown"
      whileHover="hover"
      viewport={SCROLL_VIEWPORT}
      custom={index}
    >
      <Badge accent={project.badgeAccent}>{project.badge}</Badge>
      <h3>{project.name}</h3>
      {project.meta ? <p className="project-meta">{project.meta}</p> : null}
      {project.result ? (
        <p className={project.resultMuted ? "project-result muted" : "project-result"}>
          {project.result}
        </p>
      ) : null}
      <p className="project-desc">{project.description}</p>
      {project.sysline ? <SignalLine steps={project.sysline} small={project.syslineSmall} /> : null}
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
