import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import contributionHandler from "./api/github-contributions.ts";

const contributionApiDevPlugin: Plugin = {
  name: "github-contributions-dev-api",
  apply: "serve",
  configureServer(server) {
    // Vite never copies .env* values into process.env for plugins, so hand the
    // token (from .env.local or the shell) to the handler directly.
    const { envDir, mode, root } = server.config;
    const env = loadEnv(mode, envDir === false ? root : envDir, "GITHUB_CONTRIBUTIONS_");
    server.middlewares.use("/api/github-contributions", (request, response) => {
      const apiResponse = {
        setHeader: (name: string, value: string) => response.setHeader(name, value),
        status(code: number) {
          response.statusCode = code;
          return apiResponse;
        },
        json(body: unknown) {
          response.setHeader("Content-Type", "application/json; charset=utf-8");
          response.end(JSON.stringify(body));
        },
      };

      const method = "method" in request && typeof request.method === "string" ? request.method : undefined;
      void contributionHandler({ method }, apiResponse, env).catch(() => {
        apiResponse.status(502).json({ error: "Contribution data is unavailable." });
      });
    });
  },
};

export default defineConfig({
  plugins: [react(), contributionApiDevPlugin],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        project: "project.html",
      },
    },
  },
});
