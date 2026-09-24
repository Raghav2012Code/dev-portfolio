import { ACHIEVEMENTS, SECTION_COPY } from "../data/content";
import { Section } from "./ui";

/** Awarded and qualifying results. Participation lives in the timeline only. */
export function Achievements() {
  return (
    <Section id="results" title={SECTION_COPY.record.title} className="section-record">
      <ul className="record-list">
        {ACHIEVEMENTS.map((item) => (
          <li key={item.event}>
            <p className="record-result">{item.result}</p>
            <p className="record-event">{item.event}</p>
            <p className="record-detail">{item.detail}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
