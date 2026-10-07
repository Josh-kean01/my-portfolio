import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { vitePrerenderPlugin } from "vite-prerender-plugin";
import { getPrerenderedRoutes } from "./src/seo/metadata";
import { seoFilesPlugin } from "./scripts/seoFilesPlugin";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePrerenderPlugin({
      renderTarget: "#root",
      prerenderScript: path.resolve(__dirname, "scripts/prerender.tsx"),
      additionalPrerenderRoutes: getPrerenderedRoutes(),
    }),
    seoFilesPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
