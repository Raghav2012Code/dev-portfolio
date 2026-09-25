// Cross-page anchor resolution. Section hashes live on the home page;
// from any other page they need a root-relative prefix, while on home the
// bare hash preserves smooth scrolling and the nav scroll-spy.
//
// Coupling note: the bare `#top` hash used by the footer/brand back-to-top
// links works on both pages because both `Navbar` instances carry `id="top"`
// on the sticky header. Keep those in sync if the header id ever changes.

import { PROJECTS_PAGE_PATH } from "../data/content";

export function isHomePage(): boolean {
  const path = window.location.pathname;
  return path === "/" || path.endsWith("index.html");
}

/** Resolve a `#section` hash for the current page. */
export function resolveHref(hash: string): string {
  return isHomePage() ? hash : `/${hash}`;
}

/**
 * Stable slug for a build, derived from its name (no extra content field).
 * Parenthetical asides are dropped so `CRASH (Chennai Road Accident Safety
 * Hub)` anchors as `crash`, keeping URLs short and predictable.
 */
export function slugify(value: string): string {
  return value
    .replace(/\([^)]*\)/g, " ")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Anchor id for a build block on the projects page. */
export function buildAnchorId(name: string): string {
  return `build-${slugify(name)}`;
}

/**
 * Projects-page URL for a single build. Used by the home preview and the
 * timeline so both share one anchor convention.
 */
export function buildHref(name: string): string {
  return `${PROJECTS_PAGE_PATH}#${buildAnchorId(name)}`;
}
