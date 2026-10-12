// Shared motion language (motion/react v13).
// Two layers. On load, the hero settles in: name, statement, actions, the
// start box and the facts, one orchestrated moment via `entrance`.
// On scroll, each section arrives once -- the heading by opacity alone, the
// body with a small rise (`fade` / `reveal`) -- and so does each project entry.
// Interaction motion (menu, press, row hover, the arena robot following the
// scroll) answers the user's action.
// Measured boxes never move: `Track` measures [data-start], [data-finish] and
// [data-station] by rect, so their ancestors animate opacity only. `fade` is
// for anything inside a measured subtree; `reveal` (which translates) is for
// everything else.
// Transform/opacity only. Reduced motion is handled globally via
// MotionConfig reducedMotion="user" in SiteShell, which also wraps pages in
// LazyMotion: animate with `m.*` from "motion/react-m", never `motion.*`.
import type { Transition } from "motion/react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const RISE_PX = 10;
export const INTERACTION_DURATION = 0.25;
export const PRESS_DURATION = 0.12;
export const REVEAL_DURATION = 0.5;
/** The arena robot closes this share of the gap to the scroll position each frame. */
export const ROBOT_FOLLOW = 0.14;

/** Spread onto a motion element for the hero entrance (plays on mount). */
export function entrance(index = 0, baseDelay = 0.05) {
  return {
    initial: { opacity: 0, y: RISE_PX },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.4,
      ease: EASE,
      delay: baseDelay + index * 0.05,
    } satisfies Transition,
  };
}

/** A small pop for decorative boxes; scaling from the centre keeps their rect steady. */
export const popIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.45, ease: EASE, delay: 0.08 } satisfies Transition,
};

const VIEWPORT = { once: true, amount: 0.2 } as const;

/** Scroll reveal for a measured subtree: opacity only, never a transform. */
export function fade(index = 0) {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: VIEWPORT,
    transition: { duration: REVEAL_DURATION, ease: EASE, delay: index * 0.06 } satisfies Transition,
  };
}

/** Scroll reveal with a small rise, for content outside the measured flow. */
export function reveal(index = 0) {
  return {
    initial: { opacity: 0, y: RISE_PX },
    whileInView: { opacity: 1, y: 0 },
    viewport: VIEWPORT,
    transition: { duration: REVEAL_DURATION, ease: EASE, delay: index * 0.06 } satisfies Transition,
  };
}

/** Hover and press feedback for a full-width row link (the home project index). */
export const rowFeedback = {
  whileHover: { y: -4, transition: { type: "spring", stiffness: 380, damping: 30 } },
  whileTap: { scale: 0.995, transition: { duration: PRESS_DURATION, ease: EASE } },
} as const;
