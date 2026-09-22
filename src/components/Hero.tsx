import { motion } from "motion/react";
import type { ReactEventHandler } from "react";
import { GITHUB_AVATAR_URL, GITHUB_URL } from "../data/content";
import { EASE, RISE_PX } from "../lib/motion";

const hideOnError: ReactEventHandler<HTMLImageElement> = (event) => {
  event.currentTarget.style.display = "none";
};

export function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        {/* PROFILE PHOTO: swap src for assets/profile.jpg to use a real photograph. */}
        <motion.img
          initial={{ opacity: 0, y: RISE_PX }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.05 }}
          className="profile-img"
          src={GITHUB_AVATAR_URL}
          alt="Profile photo of Raghav Krishna"
          width={72}
          height={72}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={hideOnError}
        />
        <motion.p
          initial={{ opacity: 0, y: RISE_PX }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.12 }}
          className="eyebrow"
        >
          Chennai, India · Grade 9 · Velammal Academy Nolambur
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: RISE_PX }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.19 }}
        >
          Raghav Krishna
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: RISE_PX }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.26 }}
          className="hero-role"
        >
          Student · Developer · Robotics Builder
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: RISE_PX }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.33 }}
          className="hero-desc"
        >
          14-year-old builder exploring software, AI-assisted development, and hardware projects
          with ESP32, Arduino, sensors, and more.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: RISE_PX }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.4 }}
          className="hero-actions"
        >
          <motion.a
            className="btn btn-primary"
            href="#projects"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.12, ease: EASE }}
          >
            View Projects
          </motion.a>
          <motion.a
            className="btn btn-secondary"
            href={GITHUB_URL}
            target="_blank"
            rel="noopener"
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.12, ease: EASE }}
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
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
