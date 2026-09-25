import { motion } from "motion/react";
import { CURRENTLY, SECTION_COPY } from "../data/content";
import { itemVariants, listVariants, SCROLL_VIEWPORT } from "../lib/motion";
import { SectionHead } from "./ui";

export function Currently() {
  const copy = SECTION_COPY.currently;
  return (
    <section className="section" id="currently">
      <div className="container narrow">
        <SectionHead title={copy.title} />
        <motion.ul
          className="currently-list"
          variants={listVariants}
          initial="hidden"
          whileInView="shown"
          viewport={SCROLL_VIEWPORT}
        >
          {CURRENTLY.map((item) => (
            <motion.li key={item.title} variants={itemVariants}>
              <span className="currently-index" aria-hidden="true" />
              <div>
                <p className="currently-title">{item.title}</p>
                <p className="currently-sub">{item.sub}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
