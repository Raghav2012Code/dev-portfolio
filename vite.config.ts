import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import contributionHandler from "./api/github-contributions.ts";

const contributionApiDevPlugin: Plugin = {
  name: "github-contributions-dev-api",
  apply: "serve",
  configureServer(server) {
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
      void contributionHandler({ method }, apiResponse).catch(() => {
        response.statusCode = 502;
        response.end(JSON.stringify({ error: "Contribution data is unavailable." }));
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
