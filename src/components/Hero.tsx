import { motion } from "motion/react";
import type { ReactEventHandler } from "react";
import { useEffect, useState } from "react";
import {
  GITHUB_AVATAR_URL,
  GITHUB_URL,
  HERO_COPY,
  HERO_FEATURE,
  PROJECTS_PAGE_PATH,
} from "../data/content";
import type { SignalStep } from "../data/content";
import { getContributions } from "../lib/contributions";
import { EASE, entrance, PRESS_DURATION } from "../lib/motion";
import { Tip } from "./ui";

const hideOnError: ReactEventHandler<HTMLImageElement> = (event) => {
  event.currentTarget.style.display = "none";
};

/** Hero signal-flow steps — the featured build’s response chain. */
const HERO_SIGNAL: SignalStep[] = [
  { strong: "Sense", text: { label: "Laser + IR sensor", tip: "Detects a hand near the hinge" } },
  { strong: "Process", text: { label: "ESP32", tip: "Wi-Fi + Bluetooth microcontroller" } },
  { strong: "Actuate", text: { label: "Servo + Solenoid" } },
];

function HeroSignal() {
  return (
    <div className="hero-feature">
      <motion.ol
        className="signal-flow signal-flow-hero"
        aria-label={HERO_FEATURE.ariaLabel}
        {...entrance(4)}
      >
        {HERO_SIGNAL.map((step, i) => (
          <motion.li
            className="signal-flow-step"
            key={step.text.label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: EASE, delay: 0.35 + i * 0.08 }}
          >
            {step.strong ? <span className="signal-flow-label">{step.strong}</span> : null}
            <span className="signal-flow-value">
              <Tip label={step.text.label} tip={step.text.tip} />
            </span>
          </motion.li>
        ))}
      </motion.ol>
      <motion.p className="hero-feature-caption" {...entrance(5)}>
        <strong>{HERO_FEATURE.name}</strong>
        <span>{HERO_FEATURE.result}</span>
      </motion.p>
    </div>
  );
}

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
      <div className="container container-wide hero-inner">
        <div className="hero-main">
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
          <motion.h1 {...entrance(1)}>{HERO_COPY.name}</motion.h1>
          <motion.p className="hero-meta" {...entrance(2)}>
            <span>{HERO_COPY.place}</span>
            <span>{HERO_COPY.school}</span>
          </motion.p>
          <motion.p className="hero-role" {...entrance(3)}>
            {HERO_COPY.role}
          </motion.p>
        </div>

        <HeroSignal />

        <div className="hero-tail">
          <motion.p className="hero-desc" {...entrance(6)}>
            {HERO_COPY.description}
          </motion.p>
          <motion.div className="hero-actions" {...entrance(7)}>
            <motion.a
              className="btn btn-primary"
              href={PROJECTS_PAGE_PATH}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: PRESS_DURATION, ease: EASE }}
            >
              {HERO_COPY.projectsLink}
            </motion.a>
            <motion.a
              className="btn btn-secondary"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener"
              whileTap={{ scale: 0.98 }}
              transition={{ duration: PRESS_DURATION, ease: EASE }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              {HERO_COPY.githubLink}
            </motion.a>
          </motion.div>
          <motion.p
            className={`hero-teaser${contributionTotal === null ? " hero-teaser-pending" : ""}`}
            {...entrance(8)}
          >
            {contributionTotal !== null ? (
              <a href="#contributions">
                <span className="hero-teaser-count">
                  {contributionTotal.toLocaleString()}
                </span>{" "}
                public contributions in the past year
              </a>
            ) : (
              <a href={GITHUB_URL} target="_blank" rel="noopener">
                Public activity on GitHub
              </a>
            )}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
