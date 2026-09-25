import { motion } from "motion/react";
import { ACHIEVEMENTS, ACHIEVEMENTS_LABEL } from "../data/content";
import { itemVariants, listVariants, SCROLL_VIEWPORT } from "../lib/motion";

export function Achievements() {
  return (
    <section className="section achievements" aria-labelledby="achievements-label">
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
            <motion.li key={item.event} variants={itemVariants}>
              <div>
                <p className="achieve-outcome">{item.outcome}</p>
                <p className="achieve-event">{item.event}</p>
                {item.venue ? <p className="achieve-venue">{item.venue}</p> : null}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
