import { SECTION_COPY } from "../data/content";
import { Section } from "./ui";

export function About() {
  const copy = SECTION_COPY.about;
  return (
    <Section id="about" title={copy.title}>
      <div className="prose">
        {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
    </Section>
  );
}
