import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../data/content";
import { itemVariants, listVariants, SCROLL_VIEWPORT } from "../lib/motion";

export function Achievements() {
  return (
    <section className="achievements" aria-label="Featured achievements">
      <div className="container">
        <motion.ul
          className="achieve-list"
          variants={listVariants}
          initial="hidden"
          whileInView="shown"
          viewport={SCROLL_VIEWPORT}
        >
          {ACHIEVEMENTS.map((item, i) => (
            <motion.li key={item.title} variants={itemVariants}>
              <span className="achieve-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="achieve-title">{item.title}</p>
                <p className="achieve-sub">{item.sub}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
