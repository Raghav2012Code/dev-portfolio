import { useEffect, useState } from "react";
import { SECTION_COPY } from "../data/content";
import type { ContributionCalendar } from "../lib/contributions";
import { getContributions } from "../lib/contributions";
import { useMediaQuery } from "../lib/useMediaQuery";
import { Section } from "./ui";

// Built once: a formatter per render per cell (~370 cells) is wasted work.
const DAY_FORMAT = new Intl.DateTimeFormat("en", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});
const MONTH_FORMAT = new Intl.DateTimeFormat("en", { month: "short", timeZone: "UTC" });
const WEEKDAY_LABELS = [
  { weekday: 1, label: "Mon" },
  { weekday: 3, label: "Wed" },
  { weekday: 5, label: "Fri" },
];

const CELL = 10;
const GAP = 2;
const STEP = CELL + GAP;
const LABEL_WIDTH = 24;
const LABEL_HEIGHT = 16;

function utcDate(date: string): Date {
  return new Date(`${date}T00:00:00Z`);
}

export function Contributions() {
  const copy = SECTION_COPY.contributions;
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const compact = useMediaQuery("(max-width: 640px)");

  useEffect(() => {
    let active = true;
    void getContributions().then((result) => {
      if (active) setCalendar(result);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!calendar) return null;

  // Small screens show the most recent ~6 months so the cells stay legible;
  // larger screens show the full year. The SVG scales down to its column.
  const visibleWeeks = compact ? calendar.weeks.slice(-26) : calendar.weeks;
  const rangeLabel = compact ? "recent months" : "the past year";
  const total = calendar.totalContributions.toLocaleString();

  const chartWidth = LABEL_WIDTH + Math.max(visibleWeeks.length * STEP - GAP, 1);
  const chartHeight = LABEL_HEIGHT + 7 * STEP - GAP;
  // A label needs about three week columns; one starting later would be clipped.
  const lastLabelWeek = visibleWeeks.length - 3;
  const monthLabels = visibleWeeks.flatMap((week, weekIndex) => {
    const firstOfMonth = week.find((day) => utcDate(day.date).getUTCDate() === 1);
    return firstOfMonth && weekIndex <= lastLabelWeek
      ? [{ weekIndex, label: MONTH_FORMAT.format(utcDate(firstOfMonth.date)) }]
      : [];
  });

  return (
    <Section id="contributions" title={copy.title}>
      <p className="contribution-summary">{total} public contributions in the past year.</p>
      <figure className="contribution-figure">
        <svg
          className="contribution-chart"
          style={{ width: chartWidth }}
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          role="group"
          aria-label={`GitHub public contribution calendar for ${rangeLabel}: ${total} contributions in the past year. Darker squares mean more contributions that day.`}
        >
          {monthLabels.map((month) => (
            <text
              key={`${month.label}-${month.weekIndex}`}
              className="contribution-axis-label"
              aria-hidden="true"
              x={LABEL_WIDTH + month.weekIndex * STEP}
              y="10"
            >
              {month.label}
            </text>
          ))}
          {WEEKDAY_LABELS.map(({ weekday, label }) => (
            <text
              key={weekday}
              className="contribution-axis-label"
              aria-hidden="true"
              x="0"
              y={LABEL_HEIGHT + weekday * STEP + CELL - 1}
            >
              {label}
            </text>
          ))}
          {visibleWeeks.flatMap((week, weekIndex) =>
            week.map((day) => {
              const date = utcDate(day.date);
              return (
                <rect
                  key={day.date}
                  className={`contribution-cell contribution-level-${day.level}`}
                  x={LABEL_WIDTH + weekIndex * STEP}
                  y={LABEL_HEIGHT + date.getUTCDay() * STEP}
                  width={CELL}
                  height={CELL}
                  rx="2"
                >
                  {/* Names the day for hover and for screen readers (each cell is a graphic). */}
                  <title>
                    {day.count} public contributions on {DAY_FORMAT.format(date)}
                  </title>
                </rect>
              );
            }),
          )}
        </svg>
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
    </Section>
  );
}
