import { ROBOTICS_ITEMS, SECTION_COPY } from "../data/content";
import { Section } from "./ui";

export function Robotics() {
  const copy = SECTION_COPY.robotics;
  return (
    <Section id="robotics" title={copy.title} lead={copy.lead}>
      <dl className="spec">
        {ROBOTICS_ITEMS.map((item) => (
          <div className="spec-row" key={item.title}>
            <dt>{item.title}</dt>
            <dd>{item.text}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
