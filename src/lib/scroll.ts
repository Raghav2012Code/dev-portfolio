// In-page anchor enhancement for the back-to-top / brand links.
//
// The browser keeps full ownership of the navigation: the hash update, the
// history entry, the noscript fallback and middle-click all come from the
// native `href="#top"`. This helper must therefore never call preventDefault.
// It only guarantees keyboard focus lands on the anchor target, so the next
// Tab press continues from the top of the page instead of staying stranded in
// the footer. Smooth-vs-instant scrolling is decided entirely by the
// stylesheet (`html { scroll-behavior }` plus the reduced-motion override).
import { useEffect } from "react";

export function focusAnchorTarget(hash: string): void {
  const id = hash.startsWith("#") ? hash.slice(1) : hash;
  if (id === "") return;
  const target = document.getElementById(id);
  if (target) target.focus({ preventScroll: true });
}

/**
 * Resolve the incoming hash once after mount. A browser only auto-scrolls to a
 * fragment that exists at parse time, so on this client-rendered app a
 * cross-page deep link (`/project#build-x`, `/#projects`) lands before the
 * target is in the DOM. `scroll-padding-top` still applies to scrollIntoView,
 * and reduced motion gets an instant jump with no animation.
 */
export function useHashScrollOnMount(): void {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, []);
}
