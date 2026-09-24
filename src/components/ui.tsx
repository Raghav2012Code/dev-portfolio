// Typed wrappers so badges, tooltips and section headings stay consistent.
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  accent?: boolean;
}

/** Plain label. Not animated — content is visible by default. */
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
  title: string;
}

/** Section title only — no eyebrow label above content. */
export function SectionHead({ title }: SectionHeadProps) {
  return <h2>{title}</h2>;
}
