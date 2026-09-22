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
            GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
