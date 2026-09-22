import { motion } from "motion/react";
import { ROBOTICS_ITEMS } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function Robotics() {
  return (
    <section className="section" id="robotics">
      <div className="container robotics-grid">
        <div>
          <SectionHead eyebrow="05 — Robotics" title="Builds that touch the real world." />
          <motion.p {...reveal(2)} className="section-lead">
            Software is great — but my favourite moment is when code moves something physical: a
            servo turns, a sensor fires, a mechanism responds.
          </motion.p>
        </div>
        <ul className="robo-list">
          {ROBOTICS_ITEMS.map((item, i) => (
            <motion.li key={item.title} {...reveal(3 + i)}>
              <span className="robo-code" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
