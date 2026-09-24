import { SECTION_COPY, TIMELINE } from "../data/content";
import { SectionHead } from "./ui";

export function Timeline() {
  const copy = SECTION_COPY.timeline;
  return (
    <section className="section" id="timeline">
      <div className="container container-wide">
        <SectionHead title={copy.title} />
        <ol className="timeline">
          {TIMELINE.map((item, i) => (
            <li
              key={`${item.title}-${i}`}
              className={item.minor ? "tl-minor" : undefined}
            >
              <span className="tl-year">{item.year}</span>
              <div>
                <p className="tl-title">{item.title}</p>
                <p className="tl-sub">
                  {item.sub}
                  {item.result ? (
                    <>
                      {" · "}
                      <strong>{item.result}</strong>
                    </>
                  ) : null}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
