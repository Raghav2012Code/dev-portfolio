import { CURRENTLY, SECTION_COPY } from "../data/content";
import { Section } from "./ui";

export function Currently() {
  return (
    <Section id="currently" title={SECTION_COPY.currently.title}>
      <ul className="currently-list">
        {CURRENTLY.map((item) => (
          <li key={item.title}>
            <p className="currently-title">{item.title}</p>
            <p className="currently-sub">{item.sub}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
