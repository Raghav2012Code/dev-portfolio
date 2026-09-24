import { SECTION_COPY } from "../data/content";
import { SectionHead } from "./ui";

export function About() {
  const copy = SECTION_COPY.about;
  return (
    <section className="section" id="about">
      <div className="container container-wide">
        <SectionHead title={copy.title} />
        <div className="about-copy">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
