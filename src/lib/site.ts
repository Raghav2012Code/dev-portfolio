// Cross-page anchor resolution. Section hashes live on the home page;
// from any other page they need a root-relative prefix, while on home the
// bare hash preserves smooth scrolling and the nav scroll-spy.

export function isHomePage(): boolean {
  const path = window.location.pathname;
  return path === "/" || path.endsWith("index.html");
}

/** Resolve a `#section` hash for the current page. */
export function resolveHref(hash: string): string {
  return isHomePage() ? hash : `/${hash}`;
}
