import { motion } from "motion/react";
import { ROBOTICS_ITEMS, SECTION_COPY } from "../data/content";
import { itemVariants, listVariants, reveal, SCROLL_VIEWPORT } from "../lib/motion";
import { SectionHead } from "./ui";

export function Robotics() {
  const copy = SECTION_COPY.robotics;
  return (
    <section className="section" id="robotics">
      <div className="container robotics-grid">
        <div>
          <SectionHead title={copy.title} />
          <motion.p {...reveal(2)} className="section-lead">
            {copy.lead}
          </motion.p>
        </div>
        <motion.ul
          className="robo-list"
          variants={listVariants}
          initial="hidden"
          whileInView="shown"
          viewport={SCROLL_VIEWPORT}
        >
          {ROBOTICS_ITEMS.map((item) => (
            <motion.li key={item.title} variants={itemVariants}>
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
