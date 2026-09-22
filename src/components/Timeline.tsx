import { motion } from "motion/react";
import { TIMELINE } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function Timeline() {
  return (
    <section className="section" id="timeline">
      <div className="container narrow">
        <SectionHead eyebrow="06 — Competitions" title="Competition timeline" />
        <ol className="timeline">
          {TIMELINE.map((item, i) => (
            <motion.li key={`${item.title}-${i}`} {...reveal(2 + i)} className={item.minor ? "tl-minor" : undefined}>
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
        </ol>
      </div>
    </section>
  );
}
