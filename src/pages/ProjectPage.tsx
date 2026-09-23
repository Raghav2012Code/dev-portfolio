import { MotionConfig } from "motion/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";
import { PROJECTS_PAGE_COPY } from "../data/content";

export function ProjectPage() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <div className="container page-back">
          <a className="card-link" href="/">
            {PROJECTS_PAGE_COPY.backHome}
          </a>
        </div>
        <Projects />
      </main>
      <Footer />
    </MotionConfig>
  );
}
