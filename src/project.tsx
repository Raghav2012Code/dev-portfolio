import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProjectPage } from "./pages/ProjectPage";
import "./index.css";
import "./styles/sections.css";

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root element");

createRoot(root).render(
  <StrictMode>
    <ProjectPage />
  </StrictMode>,
);
