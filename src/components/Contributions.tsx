import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { SECTION_COPY } from "../data/content";
import type { ContributionCalendar } from "../lib/contributions";
import { getContributions } from "../lib/contributions";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}

export function Contributions() {
  const copy = SECTION_COPY.contributions;
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [compact, setCompact] = useState(
    () => window.matchMedia("(max-width: 640px)").matches,
  );

  useEffect(() => {
    let active = true;

    void getContributions().then((result) => {
      if (active) setCalendar(result);
    });
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    const onChange = (event: MediaQueryListEvent) => setCompact(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  if (!calendar) return null;

  // Small screens show the most recent ~6 months so the chart fits
  // without horizontal scrolling; larger screens show the full year.
  const visibleWeeks = compact ? calendar.weeks.slice(-26) : calendar.weeks;
  const rangeLabel = compact ? "recent months" : "the past year";

  const cellSize = 10;
  const gap = 2;
  const step = cellSize + gap;
  const labelWidth = 24;
  const labelHeight = 16;
  const chartWidth = labelWidth + Math.max(visibleWeeks.length * step - gap, 1);
  const chartHeight = labelHeight + 7 * step - gap;
  const monthLabels = visibleWeeks.flatMap((week, weekIndex) => {
    const firstOfMonth = week.find((day) => new Date(`${day.date}T00:00:00Z`).getUTCDate() === 1);
    return firstOfMonth
      ? [{
          weekIndex,
          label: new Intl.DateTimeFormat("en", {
            month: "short",
            timeZone: "UTC",
          }).format(new Date(`${firstOfMonth.date}T00:00:00Z`)),
        }]
      : [];
  });

  return (
    <section className="section contributions" id="contributions">
      <div className="container">
        <SectionHead eyebrow={copy.eyebrow} title={copy.title} base={0} />
        <motion.div {...reveal(2)} className="contribution-content">
          <p className="contribution-summary">
            {calendar.totalContributions.toLocaleString()} public contributions in the past year.
          </p>
          <figure className="contribution-figure">
            <div
              className="contribution-chart-scroll"
              role="region"
              aria-label={compact ? "Public contribution calendar" : "Scrollable public contribution calendar"}
              tabIndex={0}
            >
              <svg
                className="contribution-chart"
                style={{ width: chartWidth }}
                viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                role="img"
                aria-label={`GitHub public contribution calendar for ${rangeLabel}. ${calendar.totalContributions.toLocaleString()} contributions in the past year.`}
              >
                <title>Public GitHub contributions by day over {rangeLabel}</title>
                <desc>
                  Each square represents one day. Darker gold squares indicate more public
                  contributions. Open the GitHub profile for the full contribution calendar.
                </desc>
                {monthLabels.map((month) => (
                  <text
                    key={`${month.label}-${month.weekIndex}`}
                    className="contribution-axis-label"
                    x={labelWidth + month.weekIndex * step}
                    y="10"
                  >
                    {month.label}
                  </text>
                ))}
                {[1, 3, 5].map((weekday) => (
                  <text
                    key={weekday}
                    className="contribution-axis-label"
                    x="0"
                    y={labelHeight + weekday * step + cellSize - 1}
                  >
                    {weekday === 1 ? "Mon" : weekday === 3 ? "Wed" : "Fri"}
                  </text>
                ))}
                {visibleWeeks.flatMap((week, weekIndex) =>
                  week.map((day) => {
                    const weekday = new Date(`${day.date}T00:00:00Z`).getUTCDay();
                    return (
                      <rect
                        key={day.date}
                        className={`contribution-cell contribution-level-${day.level}`}
                        x={labelWidth + weekIndex * step}
                        y={labelHeight + weekday * step}
                        width={cellSize}
                        height={cellSize}
                        rx="2"
                      >
                        <title>
                          {day.count} public contributions on {formatDate(day.date)}
                        </title>
                      </rect>
                    );
                  }),
                )}
              </svg>
            </div>
            {compact ? null : (
              <p className="contribution-scroll-hint">{copy.scrollHint}</p>
            )}
            <figcaption className="contribution-legend">
              <span>{copy.less}</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span
                  key={level}
                  className={`contribution-cell contribution-level-${level}`}
                  aria-hidden="true"
                />
              ))}
              <span>{copy.more}</span>
            </figcaption>
          </figure>
        </motion.div>
      </div>
    </section>
  );
}
