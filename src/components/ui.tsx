// Watermelon UI primitives, ported natively (see src/index.css header).
// Tiny typed wrappers so badges, tooltips and section headings stay consistent.
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { reveal } from "../lib/motion";

interface BadgeProps {
  children: ReactNode;
  accent?: boolean;
}

/** Plain label. The parent card/section owns the reveal animation. */
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
  base?: number;
}

export function SectionHead({ eyebrow, title, base = 0 }: SectionHeadProps) {
  return (
    <>
      {eyebrow ? (
        <motion.p {...reveal(base)} className="section-eyebrow">
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2 {...reveal(eyebrow ? base + 1 : base)}>{title}</motion.h2>
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
