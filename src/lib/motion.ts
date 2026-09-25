// Shared motion language (motion/react v13).
// Motion budget: exactly one non-triggered moment — the hero entrance. Every
// other surface is presented statically; motion is reserved for feedback that
// answers a visitor action (menu, tooltips, press, hover, scroll progress).
// Timing still comes from this module only: one calm ease-out.
// Reduced motion is handled globally via MotionConfig reducedMotion="user"
// in App, plus the CSS media query that hides ambient UI like the progress bar.
import type { Transition } from "motion/react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const RISE_PX = 8;
export const REVEAL_DURATION = 0.4;
export const STAGGER_STEP = 0.05;
export const INTERACTION_DURATION = 0.25;
export const PRESS_DURATION = 0.12;

export function revealTransition(index = 0, baseDelay = 0): Transition {
  return {
    duration: REVEAL_DURATION,
    ease: EASE,
    delay: baseDelay + index * STAGGER_STEP,
  };
}

export interface EntranceMotionProps {
  initial: { opacity: number; y: number };
  animate: { opacity: number; y: number };
  transition: Transition;
}

/**
 * The one granted non-triggered moment: the hero entrance (plays on mount).
 * Nothing else may use this; sections arrive on settled content.
 */
export function entrance(index = 0, baseDelay = 0.05): EntranceMotionProps {
  return {
    initial: { opacity: 0, y: RISE_PX },
    animate: { opacity: 1, y: 0 },
    transition: revealTransition(index, baseDelay),
  };
}
