// Cross-page anchor resolution and page-level scroll helpers. Section hashes
// live on the home page; from any other page they need a root-relative
// prefix, while on home the bare hash preserves smooth scrolling and the nav
// scroll-spy.
import type { MouseEvent } from "react";
import { useEffect } from "react";

export function isHomePage(): boolean {
  const path = window.location.pathname;
  return path === "/" || path.endsWith("index.html");
}

/** Resolve a `#section` hash for the current page. */
export function resolveHref(hash: string): string {
  return isHomePage() ? hash : `/${hash}`;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * `#top` sits on the sticky header, so the native jump does nothing. Scroll in
 * JS (CSS `scroll-behavior` doesn't cover `scrollTo`), then move keyboard
 * focus to the brand link so the next Tab starts from the top of the page.
 */
export function scrollToTop(event: MouseEvent<HTMLAnchorElement>) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
  document.querySelector<HTMLElement>(".brand")?.focus({ preventScroll: true });
}

/**
 * The page renders after load, so the browser's own jump to a `#fragment`
 * finds nothing and stays at the top. Repeat it once the content is mounted.
 */
export function useInitialHashScroll() {
  useEffect(() => {
    let id = "";
    try {
      id = decodeURIComponent(window.location.hash.slice(1));
    } catch {
      return;
    }
    // "instant" overrides the CSS smooth scroll: a deep link should land, not glide.
    if (id) document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" });
  }, []);
}
