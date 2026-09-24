import { motion } from "motion/react";
import { ACHIEVEMENTS, ACHIEVEMENTS_LABEL } from "../data/content";
import { itemVariants, listVariants, SCROLL_VIEWPORT } from "../lib/motion";

export function Achievements() {
  return (
    <section className="achievements" aria-labelledby="achievements-label">
      <div className="container">
        <p className="achieve-label" id="achievements-label">
          {ACHIEVEMENTS_LABEL}
        </p>
        <motion.ul
          className="achieve-list"
          variants={listVariants}
          initial="hidden"
          whileInView="shown"
          viewport={SCROLL_VIEWPORT}
        >
          {ACHIEVEMENTS.map((item) => (
            <motion.li key={item.title} variants={itemVariants}>
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
