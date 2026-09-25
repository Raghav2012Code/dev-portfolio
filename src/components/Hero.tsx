import { motion } from "motion/react";
import type { ReactEventHandler } from "react";
import { useEffect, useState } from "react";
import {
  CONTRIBUTION_TEASER,
  FEATURED_PROJECT,
  GITHUB_AVATAR_URL,
  GITHUB_URL,
  HERO_COPY,
} from "../data/content";
import { getContributions } from "../lib/contributions";
import { EASE, entrance, PRESS_DURATION } from "../lib/motion";
import { buildHref } from "../lib/site";
import { GitHubIcon } from "./icons";

const hideOnError: ReactEventHandler<HTMLImageElement> = (event) => {
  event.currentTarget.style.display = "none";
};

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
    <section className="hero">
      <div className="container hero-inner">
        {/* PROFILE PHOTO: swap src for assets/profile.jpg to use a real photograph. */}
        <motion.img
          {...entrance(0)}
          className="profile-img"
          src={GITHUB_AVATAR_URL}
          alt={HERO_COPY.avatarAlt}
          width={72}
          height={72}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={hideOnError}
        />
        <motion.p
          {...entrance(1)}
          className="eyebrow"
        >
          {HERO_COPY.eyebrow}
        </motion.p>
        <motion.h1
          {...entrance(2)}
        >
          {HERO_COPY.name}
        </motion.h1>
        <motion.p
          {...entrance(3)}
          className="hero-role"
        >
          {HERO_COPY.role}
        </motion.p>
        <motion.p
          {...entrance(4)}
          className="hero-desc"
        >
          {HERO_COPY.description}
        </motion.p>
        <motion.div
          {...entrance(5)}
          className="hero-actions"
        >
          <motion.a
            className="btn btn-primary"
            href={buildHref(FEATURED_PROJECT.name)}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: PRESS_DURATION, ease: EASE }}
          >
            {HERO_COPY.buildLink}
          </motion.a>
          <motion.a
            className="btn btn-secondary"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: PRESS_DURATION, ease: EASE }}
          >
            <GitHubIcon size={16} />
            {HERO_COPY.githubLink}
          </motion.a>
        </motion.div>
        {contributionTotal !== null ? (
          <motion.p {...entrance(6)} className="hero-teaser">
            <a href="#contributions">
              <span className="hero-teaser-count">{contributionTotal.toLocaleString()}</span>{" "}
              {CONTRIBUTION_TEASER.lead}
            </a>
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}
