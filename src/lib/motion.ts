// Shared motion language (motion/react v13).
// One orchestrated moment: the hero text settles, then the build-loop
// figure draws itself once (blocks, traces, a single signal pulse, the
// actuator responding). Nothing else animates on its own; sections are
// static so content is readable the instant it scrolls into view.
// Interaction motion (menu, button press) answers the user's action.
// Transform/opacity only. Reduced motion is handled globally via
// MotionConfig reducedMotion="user" in App, plus useReducedMotion in the
// figure, which renders its final state with no sequence at all.
import type { Transition } from "motion/react";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const RISE_PX = 8;
export const REVEAL_DURATION = 0.4;
export const STAGGER_STEP = 0.05;
export const INTERACTION_DURATION = 0.25;
export const PRESS_DURATION = 0.12;

/** Build-loop figure timeline (seconds from mount). */
export const LOOP_START = 0.35;
export const LOOP_BLOCK_STEP = 0.18;
export const LOOP_TRACE_DURATION = 0.35;
export const LOOP_PULSE_DURATION = 0.45;

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

/** Delay for block `i` of the build-loop figure. */
export function loopBlockDelay(i: number): number {
  return LOOP_START + i * (LOOP_BLOCK_STEP + LOOP_TRACE_DURATION);
}

/** Delay for the trace leaving block `i`. */
export function loopTraceDelay(i: number): number {
  return loopBlockDelay(i) + LOOP_BLOCK_STEP;
}

/** The pulse sets off once every block and trace is in place. */
export function loopPulseDelay(stageCount: number, i: number): number {
  return loopBlockDelay(stageCount - 1) + REVEAL_DURATION + i * LOOP_PULSE_DURATION;
}
