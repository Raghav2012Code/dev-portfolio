import { motion } from "motion/react";
import { SECTION_COPY } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function About() {
  const copy = SECTION_COPY.about;
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <SectionHead title={copy.title} base={0} />
        </div>
        <motion.div {...reveal(2)} className="about-copy">
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </motion.div>
      </div>
    </section>
  );
}
