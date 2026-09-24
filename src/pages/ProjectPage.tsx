import { MotionConfig } from "motion/react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProjectList } from "../components/Projects";

export function ProjectPage() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <ProjectList />
      </main>
      <Footer />
    </MotionConfig>
  );
}
