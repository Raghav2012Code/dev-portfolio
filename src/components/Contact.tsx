import { motion } from "motion/react";
import { CONTACT_ITEMS, SECTION_COPY } from "../data/content";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function Contact() {
  const copy = SECTION_COPY.contact;
  return (
    <section className="section" id="contact">
      <div className="container narrow">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} />
        <motion.p {...reveal(2)} className="section-lead">
          {copy.lead}
        </motion.p>
        <motion.ul {...reveal(3)} className="contact-list">
          {CONTACT_ITEMS.map((item) => (
            <li key={item.label}>
              <span className="contact-label">{item.label}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener" : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
