import { MotionConfig } from "motion/react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Contributions } from "./components/Contributions";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { ProjectIndex } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <ProjectIndex />
        <Timeline />
        <About />
        <Contributions />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
