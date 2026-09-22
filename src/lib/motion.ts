// Shared motion language (motion/react v13).
// One calm ease-out, one 8px rise, 70ms staggers — transform/opacity only.
// Reduced motion is handled globally via MotionConfig reducedMotion="user"
// in App, plus the CSS media query that hides ambient UI like the progress bar.
import type { Transition, Variants, ViewportOptions } from "motion/react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const RISE_PX = 8;
export const REVEAL_DURATION = 0.55;
export const STAGGER_STEP = 0.07;

export const SCROLL_VIEWPORT: ViewportOptions = { once: true, amount: 0.15 };

/**
 * Parent variant for row-lists (achievements, robotics, timeline).
 * Children using `itemVariants` cascade with one shared stagger —
 * no per-item delay math in components.
 */
export const listVariants: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: STAGGER_STEP, delayChildren: 0.05 } },
};

/** Child variant for `listVariants` parents. Inherits list animate state. */
export const itemVariants: Variants = {
  hidden: { opacity: 0, y: RISE_PX },
  shown: { opacity: 1, y: 0, transition: { duration: REVEAL_DURATION, ease: EASE } },
};

export function revealTransition(index = 0, baseDelay = 0): Transition {
  return {
    duration: REVEAL_DURATION,
    ease: EASE,
    delay: baseDelay + index * STAGGER_STEP,
  };
}

export interface RevealMotionProps {
  initial: { opacity: number; y: number };
  whileInView: { opacity: number; y: number };
  viewport: ViewportOptions;
  transition: Transition;
}

/** Spread onto a motion element for the site-wide scroll-reveal pattern. */
export function reveal(index = 0, baseDelay = 0): RevealMotionProps {
  return {
    initial: { opacity: 0, y: RISE_PX },
    whileInView: { opacity: 1, y: 0 },
    viewport: SCROLL_VIEWPORT,
    transition: revealTransition(index, baseDelay),
  };
}

export interface EntranceMotionProps {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: Transition;
}

/** Spread onto a motion element for the hero entrance (plays on mount). */
export function entrance(index = 0, baseDelay = 0.05): EntranceMotionProps {
  return {
    initial: { opacity: 0, y: RISE_PX },
    animate: { opacity: 1, y: 0 },
    transition: revealTransition(index, baseDelay),
  };
}
