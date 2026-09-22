import { motion } from "motion/react";
import { CONTACT_EMAIL, GITHUB_URL } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container narrow">
        <SectionHead eyebrow="08 — Contact" title="Say hello." />
        <motion.p {...reveal(2)} className="section-lead">
          Always happy to talk robotics, hardware, or builds in progress.
        </motion.p>
        <motion.ul {...reveal(3)} className="contact-list">
          <li>
            <span className="contact-label">GitHub</span>
            <a href={GITHUB_URL} target="_blank" rel="noopener">
              github.com/Raghav2012Code →
            </a>
          </li>
          <li>
            <span className="contact-label">Email</span>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL} →</a>
          </li>
          <li>
            <span className="contact-label">School</span>
            <span>Velammal Academy Nolambur</span>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
