// Watermelon UI primitives, ported natively (see styles.css header).
// Tiny typed wrappers so badges, tooltips and section headings stay consistent.
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { reveal } from "../lib/motion";

interface BadgeProps {
  children: ReactNode;
  accent?: boolean;
}

/** Plain label — the parent card/section owns the reveal animation. */
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
  eyebrow: string;
  title: string;
  base?: number;
}

export function SectionHead({ eyebrow, title, base = 0 }: SectionHeadProps) {
  return (
    <>
      <motion.p {...reveal(base)} className="section-eyebrow">
        {eyebrow}
      </motion.p>
      <motion.h2 {...reveal(base + 1)}>{title}</motion.h2>
    </>
  );
}
