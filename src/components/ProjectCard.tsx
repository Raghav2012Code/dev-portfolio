import type { Project, SignalStep, TechMention } from "../data/content";
import { UI_COPY } from "../data/content";
import { Badge, Tip } from "./ui";

function SignalLine({
  steps,
  small = false,
  animateSteps = false,
}: {
  steps: SignalStep[];
  small?: boolean;
  animateSteps?: boolean;
}) {
  if (animateSteps) {
    return (
      <ol className="signal-flow" aria-label="Door Hinge Safety System response sequence">
        {steps.map((step, i) => (
          <li className="signal-flow-step" key={`${step.text.label}-${i}`}>
            {step.strong ? <span className="signal-flow-label">{step.strong}</span> : null}
            <span className="signal-flow-value">
              <Tip label={step.text.label} tip={step.text.tip} />
            </span>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <p className={small ? "sysline sysline-small" : "sysline"}>
      {steps.map((step, i) => {
        const key = `${step.text.label}-${i}`;
        const content = (
          <>
            {step.strong ? <strong>{step.strong}</strong> : null}
            {step.strong ? ": " : null}
            <Tip label={step.text.label} tip={step.text.tip} />
            {i < steps.length - 1 ? (
              <span className="sys-arrow" aria-hidden="true">
                {" → "}
              </span>
            ) : null}
          </>
        );
        return <span key={key}>{content}</span>;
      })}
    </p>
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
 * Editorial project block. Visible by default — no scroll-gated opacity,
 * no hover lift. Badges, borders, links and tooltips stay in CSS.
 */
export function ProjectCard({ project, detailed = true }: ProjectCardProps) {
  return (
    <article className={project.featured ? "featured" : "project"}>
      <Badge accent={project.badgeAccent}>{project.badge}</Badge>
      <h3>{project.name}</h3>
      {project.meta ? <p className="project-meta">{project.meta}</p> : null}
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
        <SignalLine
          steps={project.sysline}
          small={project.syslineSmall}
          animateSteps={project.featured}
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
    </article>
  );
}
