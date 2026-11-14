import { blogs, getBlogBySlug } from "../data/blogs";
import { getProjectById, projectsData } from "../data/projects";

export const SITE_URL = "https://thejosh.vercel.app";

export type PageMetadata = {
  title: string;
  description: string;
  canonicalUrl: string;
  robots: "index,follow" | "noindex,follow";
  openGraphType: "website" | "article";
  twitterCard: "summary_large_image";
  image: string;
  imageAlt: string;
};

const BRAND = "JoshTheFrontendGuy";
const DEFAULT_TITLE = `Joshua Adekunle | Frontend Developer | ${BRAND}`;
const DEFAULT_DESCRIPTION =
  "Joshua Adekunle (JoshTheFrontendGuy) is a frontend developer in Lagos, Nigeria, building React and Next.js websites and web apps.";

const ABOUT_TITLE = `About Joshua Adekunle | ${BRAND}`;
const ABOUT_DESCRIPTION =
  "Meet Joshua Adekunle, a frontend developer in Lagos, Nigeria. Explore his React and Next.js projects, development process, and availability for roles and freelance work.";

const BLOG_TITLE = `Web Development Blog | ${BRAND}`;
const BLOG_DESCRIPTION =
  "Practical web development articles by Joshua Adekunle on React, Next.js, frontend engineering, accessibility, performance, and interface design.";

const PROJECTS_TITLE = `Web Development Projects | ${BRAND}`;
const PROJECTS_DESCRIPTION =
  "Explore websites and web applications built by Joshua Adekunle, including React portfolios, Next.js products, e-commerce, and booking platforms.";

const SKILLS_TITLE = `Frontend Development Skills | ${BRAND}`;
const SKILLS_DESCRIPTION =
  "Explore Joshua Adekunle's frontend development skills in React, Next.js, TypeScript, responsive web design, accessibility, and UI implementation.";

const CONTACT_TITLE = `Contact Joshua Adekunle | ${BRAND}`;
const CONTACT_DESCRIPTION =
  "Contact Joshua Adekunle in Lagos, Nigeria about frontend developer roles, React or Next.js projects, and freelance web development.";

const truncateDescription = (description: string, limit = 160) => {
  const normalized = description.replace(/\s+/g, " ").trim();
  if (normalized.length <= limit) return normalized;

  const shortened = normalized.slice(0, limit - 1);
  const lastSpace = shortened.lastIndexOf(" ");
  return `${shortened.slice(0, lastSpace > 0 ? lastSpace : limit - 1).replace(/[,.!?;:]$/, "")}…`;
};

const getSegments = (pathname: string) =>
  pathname
    .split("/")
    .filter(Boolean)
    .map((segment) => {
      try {
        return decodeURIComponent(segment);
      } catch {
        return segment;
      }
    });

export const getPageMetadata = (pathname: string): PageMetadata => {
  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const isKnownRoute = getPrerenderedRoutes().includes(canonicalPath);
  const segments = getSegments(pathname);
  const metadata: PageMetadata = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonicalUrl: new URL(canonicalPath, SITE_URL).href,
    robots: isKnownRoute ? "index,follow" : "noindex,follow",
    openGraphType: "website",
    twitterCard: "summary_large_image",
    image: `${SITE_URL}/og-image.png`,
    imageAlt: "JoshTheFrontendGuy — Joshua Adekunle, frontend developer",
  };

  if (!isKnownRoute) {
    metadata.title = `Page not found | ${BRAND}`;
    metadata.description = "This page could not be found. Return to JoshTheFrontendGuy to explore Joshua Adekunle's work.";
  } else if (segments.length === 0) {
    metadata.title = DEFAULT_TITLE;
    metadata.description = DEFAULT_DESCRIPTION;
  }

  if (segments[0] === "about") {
    metadata.title = ABOUT_TITLE;
    metadata.description = ABOUT_DESCRIPTION;
  }

  if (segments[0] === "blog") {
    metadata.title = BLOG_TITLE;
    metadata.description = BLOG_DESCRIPTION;

    const article = segments[1] ? getBlogBySlug(segments[1]) : undefined;
    if (article) {
      const relatedProject = article.relatedProjectIds
        .map((projectId) => getProjectById(projectId))
        .find((project) => project?.image);
      if (relatedProject) {
        metadata.image = new URL(relatedProject.image, SITE_URL).href;
        metadata.imageAlt = `${relatedProject.title} project preview`;
      }
      metadata.title = article.title;
      metadata.description = truncateDescription(article.excerpt);
      metadata.openGraphType = "article";
    }
  }

  if (segments[0] === "projects") {
    metadata.title = PROJECTS_TITLE;
    metadata.description = PROJECTS_DESCRIPTION;

    const project = segments[1] ? getProjectById(segments[1]) : undefined;
    if (project) {
      metadata.image = new URL(project.image, SITE_URL).href;
      metadata.imageAlt = `${project.title} project preview`;
      metadata.title = `${project.title} | ${BRAND}`;
      metadata.description = truncateDescription(project.featuredSummary ?? project.description);
      metadata.openGraphType = "article";
    }
  }

  if (segments[0] === "skills") {
    metadata.title = SKILLS_TITLE;
    metadata.description = SKILLS_DESCRIPTION;
  }

  if (segments[0] === "contact") {
    metadata.title = CONTACT_TITLE;
    metadata.description = CONTACT_DESCRIPTION;
  }

  metadata.description = truncateDescription(metadata.description);
  return metadata;
};

export const getPrerenderedRoutes = () => [
  "/",
  "/about",
  "/skills",
  "/contact",
  "/blog",
  ...blogs.map((article) => `/blog/${article.slug}`),
  "/projects",
  ...projectsData.map((project) => `/projects/${project.id}`),
];
