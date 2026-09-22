// Motion (motion.dev v12, pinned CDN) enhancement layer.
// Owns hero entrance, grouped scroll reveals, project hover lift and button
// press feedback via WAAPI (transform/opacity only — no layout thrash).
// If this module fails to load, the CSS/IO reveals in script.js remain the
// baseline: script.js runs its reveal pass unless window.__motionOK is set.
import { animate, inView, stagger } from "motion";

// One coherent motion language: calm ease-out, one 8px rise, short staggers.
var EASE = [0.22, 1, 0.36, 1];
var RISE = 8;
var DURATION = 0.55;

function toArray(list) {
  return Array.prototype.slice.call(list);
}

function commitVisible(els) {
  els.forEach(function (el) { el.classList.add("visible"); });
}

// Reveal a group with the single site-wide pattern. The timeout backstop
// guarantees content ends visible even if the animation is interrupted.
function playGroup(els, startDelay) {
  if (!els.length) return;
  var controls = animate(
    els,
    { opacity: [0, 1], transform: ["translateY(" + RISE + "px)", "translateY(0px)"] },
    { duration: DURATION, ease: EASE, delay: stagger(0.07, { startDelay: startDelay || 0 }) }
  );
  var done = function () { commitVisible(els); };
  if (controls && controls.finished && typeof controls.finished.then === "function") {
    controls.finished.then(done, done);
  }
  window.setTimeout(done, DURATION * 1000 + 0.07 * 1000 * els.length + 400);
}

try {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.__motionOK = false;
  } else {
    document.documentElement.classList.add("motion-on");

    // 1. Hero entrance — runs immediately, gentle top-down stagger.
    playGroup(toArray(document.querySelectorAll(".hero .reveal")), 0.05);

    // 2. Grouped scroll reveals — same pattern for every section.
    //    Children stay grouped: no per-word/per-letter animation anywhere.
    toArray(document.querySelectorAll("main > section:not(.hero)")).forEach(function (section) {
      var kids = toArray(section.querySelectorAll(".reveal"));
      if (!kids.length) return;
      var stop = inView(
        section,
        function () {
          if (typeof stop === "function") stop();
          playGroup(kids, 0);
        },
        { amount: 0.15 }
      );
    });

    // 3. Project hover lift — transform only; borders/links stay in CSS.
    if (window.matchMedia("(hover: hover)").matches) {
      toArray(document.querySelectorAll(".project, .featured")).forEach(function (card) {
        card.addEventListener("pointerenter", function () {
          animate(card, { transform: "translateY(-3px)" }, { duration: 0.25, ease: EASE });
        });
        card.addEventListener("pointerleave", function () {
          animate(card, { transform: "translateY(0px)" }, { duration: 0.3, ease: EASE });
        });
      });
    }

    // 4. Press feedback — replaces the CSS :active shift (off under .motion-on).
    toArray(document.querySelectorAll(".btn")).forEach(function (btn) {
      btn.addEventListener("pointerdown", function () {
        animate(btn, { transform: "scale(0.98)" }, { duration: 0.12, ease: EASE });
      });
      ["pointerup", "pointerleave", "pointercancel"].forEach(function (type) {
        btn.addEventListener(type, function () {
          animate(btn, { transform: "scale(1)" }, { duration: 0.18, ease: EASE });
        });
      });
    });

    window.__motionOK = true;
  }
} catch (err) {
  document.documentElement.classList.remove("motion-on");
  window.__motionOK = false;
}
