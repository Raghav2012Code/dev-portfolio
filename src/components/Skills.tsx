import { SECTION_COPY, STACK_ROWS } from "../data/content";
import { StackIcon } from "./StackIcon";
import { Section } from "./ui";

/**
 * `board` composition: each tool category is a labelled drawer, and each tool
 * in it is a badge (brand mark or drawn glyph, then the name).
 */
export function Skills() {
  return (
    <Section id="technologies" title={SECTION_COPY.stack.title} variant="board">
      <div className="kit">
        {STACK_ROWS.map((row) => (
          <div className="kit-group" key={row.label}>
            <div className="kit-head">
              <h3 className="kit-name">{row.label}</h3>
            </div>
            <ul className="kit-list">
              {row.items.map((item) => (
                <li key={item}>
                  <StackIcon label={item} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
