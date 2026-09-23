import { motion } from "motion/react";
import { SECTION_COPY, TIMELINE } from "../data/content";
import { itemVariants, listVariants, SCROLL_VIEWPORT } from "../lib/motion";
import { SectionHead } from "./ui";

export function Timeline() {
  const copy = SECTION_COPY.timeline;
  return (
    <section className="section" id="timeline">
      <div className="container narrow">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} />
        <motion.ol
          className="timeline"
          variants={listVariants}
          initial="hidden"
          whileInView="shown"
          viewport={SCROLL_VIEWPORT}
        >
          {TIMELINE.map((item, i) => (
            <motion.li
              key={`${item.title}-${i}`}
              variants={itemVariants}
              className={item.minor ? "tl-minor" : undefined}
            >
              <span className="tl-year">{item.year}</span>
              <div>
                <p className="tl-title">{item.title}</p>
                <p className="tl-sub">
                  {item.sub}
                  {item.result ? (
                    <>
                      {" · "}
                      <strong>{item.result}</strong>
                    </>
                  ) : null}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
