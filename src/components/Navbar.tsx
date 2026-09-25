import { AnimatePresence, motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { GITHUB_URL, NAV_GITHUB_LABEL, NAV_LINKS, PROFILE_NAME, PROJECTS_PAGE_PATH } from "../data/content";
import { EASE, INTERACTION_DURATION, RISE_PX } from "../lib/motion";
import { focusAnchorTarget } from "../lib/scroll";
import { resolveHref, isHomePage } from "../lib/site";
import { GitHubIcon } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => el !== null,
    );
    if (sections.length === 0) return;
    const spy = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => spy.observe(section));
    return () => spy.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <header className="nav" id="top" tabIndex={-1}>
      <div className="nav-inner">
        {isHomePage() ? (
          <a
            className="brand"
            href="#top"
            aria-label={`${PROFILE_NAME} home`}
            onClick={() => focusAnchorTarget("#top")}
          >
            <span className="brand-text">{PROFILE_NAME}</span>
          </a>
        ) : (
          <a className="brand" href="/" aria-label={`${PROFILE_NAME} home`}>
            <span className="brand-text">{PROFILE_NAME}</span>
          </a>
        )}
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href === "#projects" ? PROJECTS_PAGE_PATH : resolveHref(link.href)}
              aria-current={activeHref === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="nav-github" href={GITHUB_URL} target="_blank" rel="noopener">
            <GitHubIcon className="nav-github-icon" />
            {NAV_GITHUB_LABEL}
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
            ref={toggleRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobileMenu"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.nav
            key="mobile-menu"
            className="mobile-menu"
            id="mobileMenu"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -RISE_PX }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -RISE_PX }}
            transition={{ duration: INTERACTION_DURATION, ease: EASE }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href === "#projects" ? PROJECTS_PAGE_PATH : resolveHref(link.href)}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
      <div className="scroll-progress" aria-hidden="true">
        <motion.span id="scrollProgress" style={{ scaleX: scrollYProgress }} />
      </div>
    </header>
  );
}
