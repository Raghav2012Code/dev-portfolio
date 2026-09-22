import { motion } from "motion/react";
import { STACK_ROWS } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function Skills() {
  return (
    <section className="section" id="technologies">
      <div className="container">
        <SectionHead eyebrow="03 · Stack" title="Technologies I build with" />
        <motion.div {...reveal(2)} className="stack-list">
          {STACK_ROWS.map((row) => (
            <div className="stack-row" key={row.label}>
              <p className="stack-label">{row.label}</p>
              <p>{row.items}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
