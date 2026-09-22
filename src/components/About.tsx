import { motion } from "motion/react";
import { ABOUT_FACTS } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function About() {
  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div>
          <SectionHead eyebrow="01 — About" title="I learn by building things." />
        </div>
        <motion.div {...reveal(2)} className="about-copy">
          <p>
            I’m Raghav, a 14-year-old student at Velammal Academy Nolambur who got interested in
            AI in 2022 and has been following the space ever since.
          </p>
          <p>
            I know the fundamentals of programming, but most of what I’ve learned has come from
            actually building things. I especially enjoy hardware projects — working with ESP32s,
            sensors and actuators, and figuring out how software can interact with the physical
            world.
          </p>
          <p>
            I also use AI coding tools like Claude Code and OpenAI Codex as part of my development
            workflow for prototyping, implementation, debugging, and exploring ideas.
          </p>
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
