import { motion } from "motion/react";
import { ACHIEVEMENTS } from "../data/content";
import { reveal } from "../lib/motion";

export function Achievements() {
  return (
    <section className="achievements" aria-label="Featured achievements">
      <div className="container">
        <ul className="achieve-list">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.li key={item.title} {...reveal(i)}>
              <span className="achieve-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="achieve-title">{item.title}</p>
                <p className="achieve-sub">{item.sub}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
