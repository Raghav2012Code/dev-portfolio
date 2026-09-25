import { motion } from "motion/react";
import type { ComponentType } from "react";
import { CONTACT_ITEMS, SECTION_COPY } from "../data/content";
import type { ContactIconName } from "../data/content";
import { reveal } from "../lib/motion";
import { DiscordIcon, GitHubIcon, MailIcon } from "./icons";
import { SectionHead } from "./ui";

const CONTACT_ICONS: Record<ContactIconName, ComponentType> = {
  github: GitHubIcon,
  email: MailIcon,
  discord: DiscordIcon,
};

export function Contact() {
  const copy = SECTION_COPY.contact;
  return (
    <section className="section" id="contact">
      <div className="container narrow">
        <SectionHead title={copy.title} />
        <motion.p {...reveal(2)} className="section-lead">
          {copy.lead}
        </motion.p>
        <motion.ul {...reveal(3)} className="contact-list">
          {CONTACT_ITEMS.map((item) => {
            const Icon = CONTACT_ICONS[item.icon];
            return (
              <li key={item.label}>
                <span className="contact-label">
                  <Icon />
                  {item.label}
                </span>
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
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}
