import { SECTION_COPY, shortProjectName, TIMELINE } from "../data/content";
import { buildHref } from "../lib/site";
import { SectionHead } from "./ui";

export function Timeline() {
  const copy = SECTION_COPY.timeline;
  return (
    <section className="section" id="timeline">
      <div className="container narrow">
        <SectionHead title={copy.title} />
        <ol className="timeline">
          {TIMELINE.map((item, i) => (
            <li key={`${item.title}-${i}`} className={item.minor ? "tl-minor" : undefined}>
              <span className="tl-year">{item.year}</span>
              <div>
                <p className="tl-title">{item.title}</p>
                <p className="tl-venue">{item.venue}</p>
                {item.build ? (
                  <p className="tl-build">
                    <a href={buildHref(item.build)}>{shortProjectName(item.build)}</a>
                  </p>
                ) : null}
                {item.result ? (
                  <p className="tl-result">
                    <strong>{item.result}</strong>
                  </p>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
