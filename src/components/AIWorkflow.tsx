import { motion } from "motion/react";
import { reveal } from "../lib/motion";
import { SectionHead } from "./ui";

export function AIWorkflow() {
  return (
    <section className="section" id="workflow">
      <div className="container narrow">
        <SectionHead eyebrow="04 — Workflow" title="AI-assisted development" />
        <motion.div {...reveal(2)}>
          <p>
            AI coding tools are a major part of how I build. I use Claude Code and OpenAI Codex to
            prototype ideas, generate and modify implementations, debug problems, explore unfamiliar
            technologies, and move from an idea to a working project quickly.
          </p>
          <p className="note">
            <strong>But the tools don’t replace understanding.</strong> I still integrate, test,
            understand, and adapt the resulting software to fit the project.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
