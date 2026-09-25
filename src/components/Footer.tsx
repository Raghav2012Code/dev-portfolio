import { FOOTER_COPY, PROFILE_NAME } from "../data/content";
import { focusAnchorTarget } from "../lib/scroll";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">{PROFILE_NAME}</p>
        <p className="footer-meta">
          {FOOTER_COPY.tagline}{" "}
          <a className="footer-top" href="#top" onClick={() => focusAnchorTarget("#top")}>
            {FOOTER_COPY.backToTop}
          </a>
        </p>
      </div>
    </footer>
  );
}
