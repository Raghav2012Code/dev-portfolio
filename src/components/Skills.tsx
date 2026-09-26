import { SECTION_COPY, STACK_ROWS } from "../data/content";
import { Section } from "./ui";

/**
 * `board` composition: the five tool categories as a multi-column materials
 * board — each a small category label over a wrapped list of real items, with
 * a hairline rule over the column. No form-like label/value alignment.
 */
export function Skills() {
  return (
    <Section id="technologies" title={SECTION_COPY.stack.title} variant="board">
      <div className="board">
        {STACK_ROWS.map((row) => (
          <div className="board-col" key={row.label}>
            <h3 className="board-label">{row.label}</h3>
            <ul className="board-list">
              {row.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
