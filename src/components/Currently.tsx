import { CURRENTLY, SECTION_COPY } from "../data/content";
import { SectionHead } from "./ui";

export function Currently() {
  const copy = SECTION_COPY.currently;
  return (
    <section className="section" id="currently">
      <div className="container narrow">
        <SectionHead title={copy.title} />
        <ul className="currently-list">
          {CURRENTLY.map((item) => (
            <li key={item.title}>
              <span className="currently-index" aria-hidden="true" />
              <div>
                <p className="currently-title">{item.title}</p>
                <p className="currently-sub">{item.sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
