import { motion } from "motion/react";
import { SECTION_COPY, STACK_ROWS } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function Skills() {
  const copy = SECTION_COPY.stack;
  return (
    <section className="section" id="technologies">
      <div className="container">
        <SectionHead title={copy.title} />
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
