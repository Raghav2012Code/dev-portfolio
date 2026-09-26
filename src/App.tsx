import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Contributions } from "./components/Contributions";
import { Hero } from "./components/Hero";
import { ProjectIndex } from "./components/Projects";
import { SiteShell } from "./components/SiteShell";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";

export function App() {
  return (
    <SiteShell>
      <Hero />
      <ProjectIndex />
      <Timeline />
      <About />
      <Contributions />
      <Skills />
      <Contact />
    </SiteShell>
  );
}
