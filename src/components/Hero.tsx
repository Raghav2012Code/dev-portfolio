import { motion } from "motion/react";
import type { ReactEventHandler } from "react";
import { useEffect, useState } from "react";
import {
  CONTRIBUTION_TEASER,
  GITHUB_AVATAR_URL,
  GITHUB_URL,
  HERO_COPY,
  PROJECTS_PAGE_PATH,
} from "../data/content";
import { getContributions } from "../lib/contributions";
import { EASE, entrance, PRESS_DURATION } from "../lib/motion";
import { BuildLoop } from "./BuildLoop";
import { LinkIcon } from "./ui";

const hideOnError: ReactEventHandler<HTMLImageElement> = (event) => {
  event.currentTarget.style.display = "none";
};

const press = { whileTap: { scale: 0.98 }, transition: { duration: PRESS_DURATION, ease: EASE } };

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
    <section className="hero" aria-labelledby="hero-name">
      <div className="container hero-grid">
        <motion.div {...entrance(0)} className="hero-id">
          {/* PROFILE PHOTO: swap src for assets/profile.jpg to use a real photograph. */}
          <img
            className="profile-img"
            src={GITHUB_AVATAR_URL}
            alt={HERO_COPY.avatarAlt}
            width={48}
            height={48}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onError={hideOnError}
          />
          <p className="hero-facts">{HERO_COPY.facts}</p>
        </motion.div>
        <motion.h1 {...entrance(1)} className="hero-name" id="hero-name">
          {HERO_COPY.name}
        </motion.h1>
        <div className="hero-copy">
          <motion.p {...entrance(2)} className="hero-role">
            {HERO_COPY.role}
          </motion.p>
          <motion.p {...entrance(3)} className="hero-desc">
            {HERO_COPY.description}
          </motion.p>
          <motion.div {...entrance(4)} className="hero-actions">
            <motion.a className="btn btn-primary" href={PROJECTS_PAGE_PATH} {...press}>
              {HERO_COPY.projectsLink}
            </motion.a>
            <motion.a
              className="btn btn-secondary"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener"
              {...press}
            >
              <LinkIcon label="GitHub" />
              {HERO_COPY.githubLink}
            </motion.a>
          </motion.div>
          {contributionTotal !== null ? (
            <p className="hero-teaser">
              <a href="#contributions">
                <span className="hero-teaser-count">{contributionTotal.toLocaleString()}</span>{" "}
                {CONTRIBUTION_TEASER.lead}
              </a>
            </p>
          ) : null}
        </div>
        <div className="hero-figure">
          <BuildLoop />
        </div>
      </div>
    </section>
  );
}
