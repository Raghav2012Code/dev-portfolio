import { motion } from "motion/react";
import { ABOUT_FACTS, SECTION_COPY } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function About() {
  const copy = SECTION_COPY.about;
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <SectionHead eyebrow={copy.eyebrow} title={copy.title} />
        </div>
        <motion.div {...reveal(2)} className="about-copy">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <dl className="about-facts">
            {ABOUT_FACTS.map((fact) => (
              <div key={fact.term}>
                <dt>{fact.term}</dt>
                <dd>{fact.detail}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
