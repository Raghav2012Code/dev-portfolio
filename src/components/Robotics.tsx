import { ROBOTICS_ITEMS, SECTION_COPY } from "../data/content";
import { SectionHead } from "./ui";

export function Robotics() {
  const copy = SECTION_COPY.robotics;
  return (
    <section className="section" id="robotics">
      <div className="container robotics-grid">
        <div>
          <SectionHead title={copy.title} />
          <p className="section-lead">{copy.lead}</p>
        </div>
        <ul className="robo-list">
          {ROBOTICS_ITEMS.map((item) => (
            <li key={item.title}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
