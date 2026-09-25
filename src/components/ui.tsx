// Watermelon UI primitives, ported natively (see src/index.css header).
// Tiny typed wrappers so badges, tooltips and section headings stay consistent.
// Static by design: only the hero entrance is non-triggered motion, so headings
// and section chrome render as settled content.
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  accent?: boolean;
}

/** Plain label. */
export function Badge({ children, accent = false }: BadgeProps) {
  return <p className={accent ? "badge badge-accent" : "badge"}>{children}</p>;
}

interface TipProps {
  label: string;
  tip?: string;
}

export function Tip({ label, tip }: TipProps) {
  if (!tip) return <>{label}</>;
  return (
    <span className="tip" tabIndex={0} data-tip={tip}>
      {label}
    </span>
  );
}

interface SectionHeadProps {
  /** Optional kicker. Omit it where the title already says the job. */
  eyebrow?: string;
  title: string;
}

export function SectionHead({ eyebrow, title }: SectionHeadProps) {
  return (
    <>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
    </>
  );
}

interface MetaLineProps {
  facts: readonly string[];
  className?: string;
}

/**
 * Structured fact line: hairline-separated segments instead of a dot-string.
 * Each segment keeps a real text separator inside it so the accessibility tree
 * and copy-paste retain the boundary the hairline only implies visually.
 */
export function MetaLine({ facts, className }: MetaLineProps) {
  return (
    <p className={className ? `meta-line ${className}` : "meta-line"}>
      {facts.map((fact, i) => (
        <span key={fact}>
          {i > 0 ? <span className="meta-sep" aria-hidden="true">{"·"}</span> : null}
          {fact}
        </span>
      ))}
    </p>
  );
}
