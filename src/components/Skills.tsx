import { SECTION_COPY, STACK_ROWS } from "../data/content";
import { Section } from "./ui";

export function Skills() {
  return (
    <Section id="technologies" title={SECTION_COPY.stack.title}>
      <dl className="spec">
        {STACK_ROWS.map((row) => (
          <div className="spec-row" key={row.label}>
            <dt>{row.label}</dt>
            <dd>{row.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
