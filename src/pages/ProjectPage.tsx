import { MotionConfig } from "motion/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { Projects } from "../components/Projects";

export function ProjectPage() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Projects />
      </main>
      <Footer />
    </MotionConfig>
  );
}
