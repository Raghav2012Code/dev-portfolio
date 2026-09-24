import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { BUILD_LOOP } from "../data/content";
import {
  EASE,
  LOOP_PULSE_DURATION,
  LOOP_TRACE_DURATION,
  REVEAL_DURATION,
  loopBlockDelay,
  loopPulseDelay,
  loopTraceDelay,
} from "../lib/motion";

/**
 * Hero figure: the sense, process, actuate chain drawn as component
 * blocks on a perfboard, joined by traces. Plays once on mount: blocks
 * land in order, traces draw between them, one pulse runs the chain and
 * the actuator lights up. Reduced motion renders the finished state.
 * Traces run across on wide screens and down on phones; the pulse reads
 * that orientation once, so a later resize never replays the sequence.
 */
export function BuildLoop() {
  const reduce = useReducedMotion() ?? false;
  const [vertical] = useState(() => window.matchMedia("(max-width: 640px)").matches);
  const { stages, caption } = BUILD_LOOP;
  const last = stages.length - 1;
  const liveDelay = loopPulseDelay(stages.length, last);

  return (
    <figure className="loop">
      <div className="loop-board">
        <ol className="loop-chain">
          {stages.map((item, i) => (
            <li className="loop-stage" key={item.stage}>
              <motion.div
                className="loop-block"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: REVEAL_DURATION, ease: EASE, delay: loopBlockDelay(i) }}
              >
                <span className="loop-stage-name">{item.stage}</span>
                <span className="loop-part">{item.part}</span>
                <span className="loop-examples">{item.examples}</span>
                {i === last ? (
                  <motion.span
                    className="loop-live"
                    aria-hidden="true"
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: REVEAL_DURATION, ease: EASE, delay: liveDelay }}
                  />
                ) : null}
              </motion.div>
              {i < last ? (
                <motion.span
                  className="loop-trace"
                  aria-hidden="true"
                  initial={reduce ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: LOOP_TRACE_DURATION, ease: EASE, delay: loopTraceDelay(i) }}
                >
                  {reduce ? null : (
                    <motion.span
                      className="loop-pulse-track"
                      initial={vertical ? { y: "0%", opacity: 0 } : { x: "0%", opacity: 0 }}
                      animate={
                        vertical
                          ? { y: "100%", opacity: [0, 1, 1, 0] }
                          : { x: "100%", opacity: [0, 1, 1, 0] }
                      }
                      transition={{
                        duration: LOOP_PULSE_DURATION,
                        ease: "linear",
                        delay: loopPulseDelay(stages.length, i),
                      }}
                    >
                      <span className="loop-pulse" />
                    </motion.span>
                  )}
                </motion.span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
      <figcaption className="loop-caption">{caption}</figcaption>
    </figure>
  );
}
