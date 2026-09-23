import { FOOTER_COPY, PROFILE_NAME } from "../data/content";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-name">{PROFILE_NAME}</p>
        <p className="footer-meta">
          {FOOTER_COPY.tagline}{" "}
          <a className="footer-top" href="#top">
            {FOOTER_COPY.backToTop}
          </a>
        </p>
      </div>
    </footer>
  );
}
