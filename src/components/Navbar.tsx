import { motion, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { GITHUB_URL, NAV_LINKS } from "../data/content";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
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
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open ]);

  return (
    <header className="nav" id="top">
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Raghav Krishna home">
          <span className="brand-text">Raghav Krishna</span>
        </a>
        <nav className="nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeHref === link.href ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <a className="nav-github" href={GITHUB_URL} target="_blank" rel="noopener">
            GitHub ↗
          </a>
          <button
            className="nav-toggle"
            id="navToggle"
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
      <nav className={open ? "mobile-menu open" : "mobile-menu"} id="mobileMenu" aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
      <div className="scroll-progress" aria-hidden="true">
        <motion.span id="scrollProgress" style={{ scaleX: scrollYProgress }} />
      </div>
    </header>
  );
}
