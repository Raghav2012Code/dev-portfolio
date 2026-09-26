import * as m from "motion/react-m";
import type { ReactEventHandler } from "react";
import { useEffect, useState } from "react";
import {
  CONTRIBUTION_TEASER,
  GITHUB_AVATAR_URL,
  HERO_COPY,
  PROJECTS_PAGE_PATH,
  TITLE_BLOCK,
} from "../data/content";
import { getContributions } from "../lib/contributions";
import { EASE, entrance, PRESS_DURATION } from "../lib/motion";

const hideOnError: ReactEventHandler<HTMLImageElement> = (event) => {
  event.currentTarget.style.display = "none";
};

const press = { whileTap: { scale: 0.98 }, transition: { duration: PRESS_DURATION, ease: EASE } };

/**
 * Type-only hero: the name as the sheet title, one plain statement, and a
 * drafting title block holding the facts, set in the corner like on a drawing.
 */
export function Hero() {
  const [contributionTotal, setContributionTotal] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    void getContributions().then((calendar) => {
      if (active && calendar) setContributionTotal(calendar.totalContributions);
    });
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="hero" id="intro" aria-labelledby="hero-name">
      <div className="container hero-grid">
        <m.h1 {...entrance(0)} className="hero-name" id="hero-name">
          {HERO_COPY.name}
        </m.h1>
        <div className="hero-copy">
          <m.p {...entrance(1)} className="hero-statement">
            {HERO_COPY.statement}
          </m.p>
          <m.div {...entrance(2)} className="hero-actions">
            <m.a className="btn btn-primary" href={PROJECTS_PAGE_PATH} {...press}>
              {HERO_COPY.projectsLink}
            </m.a>
            {contributionTotal !== null ? (
              <a className="hero-teaser" href="#contributions">
                <span className="hero-teaser-count">{contributionTotal.toLocaleString()}</span>{" "}
                {CONTRIBUTION_TEASER.lead}
              </a>
            ) : null}
          </m.div>
        </div>
        <m.div {...entrance(3)} className="title-block">
          {/* PROFILE PHOTO: swap src for assets/profile.jpg to use a real photograph. */}
          <img
            className="profile-img"
            src={GITHUB_AVATAR_URL}
            alt={HERO_COPY.avatarAlt}
            width={96}
            height={96}
            decoding="async"
            onError={hideOnError}
          />
          <dl className="title-block-facts">
            {TITLE_BLOCK.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </m.div>
      </div>
    </section>
  );
}
