import { PROJECTS, PROJECTS_PAGE_PATH, SECTION_COPY, TIMELINE } from "../data/content";
import { Section } from "./ui";

/** Column labels. Structural table headers, paired with `<th scope="col">`. */
const COLUMN = {
  year: "Year",
  event: "Event",
  venue: "Venue",
  result: "Result",
} as const;

// TIMELINE names a build in its short form ("CRASH"), while a project name may
// carry a parenthetical aside ("CRASH (Chennai Road Accident Safety Hub)").
// Match on the short form so a year's build links to its project-page entry.
const BUILD_SLUGS = new Map(
  PROJECTS.map((project) => [project.name.split(" (")[0], project.slug] as const),
);

/**
 * The record. A real `<table>`: year, event, venue, result. The year is set at
 * display scale and tabular; participated-only rows still read "Participated"
 * in text, so colour is never the only signal.
 *
 * Below 40rem the four columns cannot all be read at once, so the rows stack
 * instead of scrolling sideways. The explicit ARIA roles are load-bearing:
 * changing `display` on table elements drops their implicit roles, so the
 * semantics have to be restated.
 */
export function Timeline() {
  const copy = SECTION_COPY.timeline;
  return (
    <Section id="timeline" title={copy.title} variant="record">
      <div className="record-scroll">
        <table className="record-table" role="table">
          <caption className="visually-hidden">
            Competition record by year, with event, venue and result.
          </caption>
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader" className="record-col-year">
                {COLUMN.year}
              </th>
              <th scope="col" role="columnheader">
                {COLUMN.event}
              </th>
              <th scope="col" role="columnheader">
                {COLUMN.venue}
              </th>
              <th scope="col" role="columnheader" className="record-col-result">
                {COLUMN.result}
              </th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {TIMELINE.map((item, index) => {
              const slug = item.project ? BUILD_SLUGS.get(item.project) : undefined;
              return (
                <tr key={`${item.year}-${item.title}-${index}`} role="row">
                  <td role="cell" className="record-year">
                    {item.year}
                  </td>
                  <td role="cell" className="record-event">
                    <span className="record-event-title">{item.title}</span>
                    {item.project ? (
                      slug ? (
                        <a className="record-build" href={`${PROJECTS_PAGE_PATH}#${slug}`}>
                          {item.project}
                        </a>
                      ) : (
                        <span className="record-build">{item.project}</span>
                      )
                    ) : null}
                  </td>
                  <td role="cell" className="record-venue">
                    {item.place}
                  </td>
                  <td
                    role="cell"
                    className={`record-result${item.minor ? "" : " record-result-earned"}`}
                  >
                    {item.result}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
