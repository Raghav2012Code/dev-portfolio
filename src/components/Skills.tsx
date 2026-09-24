import { SECTION_COPY, STACK_ROWS } from "../data/content";
import { SectionHead } from "./ui";

export function Skills() {
  const copy = SECTION_COPY.stack;
  return (
    <section className="section" id="technologies">
      <div className="container container-wide">
        <SectionHead title={copy.title} />
        <p className="section-lead">{copy.lead}</p>
        <div className="stack-list">
          {STACK_ROWS.map((row) => (
            <div className="stack-row" key={row.label}>
              <p className="stack-label">{row.label}</p>
              <p>{row.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
