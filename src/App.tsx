import { MotionConfig } from "motion/react";
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { Contributions } from "./components/Contributions";
import { Currently } from "./components/Currently";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Robotics } from "./components/Robotics";
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
        <Achievements />
        <About />
        <Projects />
        <Contributions />
        <Skills />
        <Robotics />
        <Timeline />
        <Currently />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
