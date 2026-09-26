// Shared motion language (motion/react v13).
// One orchestrated moment: the hero settles in on load (name, statement,
// actions, title block). Nothing else animates on its own; sections are
// static so content is readable the instant it scrolls into view.
// Interaction motion (menu, button press) answers the user's action.
// Transform/opacity only. Reduced motion is handled globally via
// MotionConfig reducedMotion="user" in App.
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

/** Spread onto a motion element for the hero entrance (plays on mount). */
export function entrance(index = 0, baseDelay = 0.05): EntranceMotionProps {
  return {
    initial: { opacity: 0, y: RISE_PX },
    animate: { opacity: 1, y: 0 },
    transition: revealTransition(index, baseDelay),
  };
}
