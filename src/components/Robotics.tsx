import { motion } from "motion/react";
import { ROBOTICS_ITEMS } from "../data/content";
import { itemVariants, listVariants, reveal, SCROLL_VIEWPORT } from "../lib/motion";
import { SectionHead } from "./ui";

export function Robotics() {
  return (
    <section className="section" id="robotics">
      <div className="container robotics-grid">
        <div>
          <SectionHead eyebrow="04 — Robotics" title="Builds that touch the real world." />
          <motion.p {...reveal(2)} className="section-lead">
            Software is great — but my favourite moment is when code moves something physical: a
            servo turns, a sensor fires, a mechanism responds.
          </motion.p>
        </div>
        <motion.ul
          className="robo-list"
          variants={listVariants}
          initial="hidden"
          whileInView="shown"
          viewport={SCROLL_VIEWPORT}
        >
          {ROBOTICS_ITEMS.map((item, i) => (
            <motion.li key={item.title} variants={itemVariants}>
              <span className="robo-code" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
