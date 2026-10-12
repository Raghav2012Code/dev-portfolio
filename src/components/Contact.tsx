import { CONTACT_ITEMS, SECTION_COPY } from "../data/content";
import { LinkIcon, Section } from "./ui";

/**
 * The end of the page: a small plate of the three addresses. Each row names
 * the channel in the display face and links the address in reading type.
 * Email stays a real mailto:; external links open in a new tab.
 */
export function Contact() {
  const copy = SECTION_COPY.contact;
  return (
    <Section id="contact" title={copy.title} lead={copy.lead} variant="contact">
      <ul className="contact-list">
        {CONTACT_ITEMS.map((item) => (
          <li className="contact-row" key={item.label}>
            <span className="contact-icon">
              <LinkIcon label={item.label} size={20} />
            </span>
            <span className="contact-label">{item.label}</span>
            <a
              className="contact-value"
              href={item.href}
              aria-label={`${item.label}: ${item.value}`}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener" : undefined}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
