import { CURRENTLY, SECTION_COPY } from "../data/content";
import { Section } from "./ui";

/**
 * `prose` composition: no margin heading. A small head sits directly above the
 * prose, and both sit in one narrow column pushed into the right two-thirds —
 * the first paragraph as a lede, the second at body size, then "Right now" as
 * three hairline-separated single lines. The section should read as a pause.
 */
export function About() {
  const copy = SECTION_COPY.about;
  const now = SECTION_COPY.currently;
  return (
    <Section id="about" title={copy.title} variant="prose">
      <div className="prose about-prose">
        {copy.paragraphs.map((paragraph, index) => (
          <p className={index === 0 ? "about-lede" : undefined} key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
      <h3 className="about-now-title">{now.title}</h3>
      <ul className="about-now">
        {CURRENTLY.map((item) => (
          <li className="about-now-item" key={item.title}>
            <span className="about-now-name">{item.title}</span>
            <span className="about-now-sub">{item.sub}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
