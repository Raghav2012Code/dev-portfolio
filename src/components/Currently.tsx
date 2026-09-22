import { motion } from "motion/react";
import { CURRENTLY } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function Currently() {
  return (
    <section className="section" id="currently">
      <div className="container narrow">
        <SectionHead eyebrow="07 — Currently" title="Building / exploring now" />
        <motion.ul {...reveal(2)} className="currently-list">
          {CURRENTLY.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
