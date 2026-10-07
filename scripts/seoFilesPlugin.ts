import type { Plugin } from "vite";
import { SITE_URL, getPrerenderedRoutes } from "../src/seo/metadata";

const escapeXml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const createSitemap = () => {
  const urls = getPrerenderedRoutes()
    .map(
      (route) =>
        `  <url><loc>${escapeXml(new URL(route, SITE_URL).href)}</loc></url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
};

const createRobotsFile = () =>
  `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`;

export const seoFilesPlugin = (): Plugin => ({
  name: "portfolio-seo-files",
  apply: "build",
  generateBundle() {
    this.emitFile({
      type: "asset",
      fileName: "sitemap.xml",
      source: createSitemap(),
    });
    this.emitFile({
      type: "asset",
      fileName: "robots.txt",
      source: createRobotsFile(),
    });
  },
});
