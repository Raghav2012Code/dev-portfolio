import { CONTACT_ITEMS, SECTION_COPY } from "../data/content";
import { LinkIcon, Section } from "./ui";

export function Contact() {
  const copy = SECTION_COPY.contact;
  return (
    <Section id="contact" title={copy.title} lead={copy.lead}>
      <ul className="contact-list">
        {CONTACT_ITEMS.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener" : undefined}
            >
              <span className="contact-label">
                <LinkIcon label={item.label} />
                {item.label}
              </span>
              <span className="contact-value">{item.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
