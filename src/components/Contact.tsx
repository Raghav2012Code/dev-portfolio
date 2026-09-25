import type { ComponentType } from "react";
import { CONTACT_ITEMS, SECTION_COPY } from "../data/content";
import type { ContactIconName } from "../data/content";
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
        <p className="section-lead">{copy.lead}</p>
        <ul className="contact-list">
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
        </ul>
      </div>
    </section>
  );
}
