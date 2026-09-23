import type { MouseEvent } from "react";
import { FOOTER_COPY, PROFILE_NAME } from "../data/content";

export function Footer() {
  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">{PROFILE_NAME}</p>
        <p className="footer-meta">
          {FOOTER_COPY.tagline}{" "}
          <a className="footer-top" href="#top" onClick={scrollToTop}>
            {FOOTER_COPY.backToTop}
          </a>
        </p>
      </div>
    </footer>
  );
}
