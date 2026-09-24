import type { MouseEvent } from "react";
import { CONTACT_EMAIL, FOOTER_COPY, GITHUB_URL, PROFILE_NAME } from "../data/content";

export function Footer() {
  const scrollToTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container container-wide footer-inner">
        <p className="footer-name">{PROFILE_NAME}</p>
        <p className="footer-meta">
          {FOOTER_COPY.tagline}{" "}
          <span className="footer-links">
            <a href={GITHUB_URL} target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
            <a className="footer-top" href="#top" onClick={scrollToTop}>
              {FOOTER_COPY.backToTop}
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
