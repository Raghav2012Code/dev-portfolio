import { motion } from "motion/react";
import { CURRENTLY, SECTION_COPY } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function Currently() {
  const copy = SECTION_COPY.currently;
  return (
    <section className="section" id="currently">
      <div className="container narrow">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} />
        <motion.ul {...reveal(2)} className="currently-list">
          {CURRENTLY.map((item, i) => (
            <li key={item.title}>
              <span className="currently-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="currently-title">{item.title}</p>
                <p className="currently-sub">{item.sub}</p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
