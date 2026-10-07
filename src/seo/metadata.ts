import { blogs, getBlogBySlug } from "../data/blogs";
import { getProjectById, projectsData } from "../data/projects";

export const SITE_URL = "https://thejosh.vercel.app";

export type PageMetadata = {
  title: string;
  description: string;
  canonicalUrl: string;
  image: string;
  openGraphType: "website" | "article";
  twitterCard: "summary" | "summary_large_image";
};

const DEFAULT_TITLE = "Joshua Adekunle | Website Developer Portfolio";
const DEFAULT_DESCRIPTION =
  "Website developer Joshua Adekunle builds responsive, user-friendly web experiences. Explore selected projects and get in touch.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const BLOG_TITLE = "Frontend Development Blog | Joshua Adekunle";
const BLOG_DESCRIPTION =
  "Insights from Joshua Adekunle on frontend development, design systems, accessibility, and creating user-friendly web experiences.";

const PROJECTS_TITLE = "Web Development & UI Design Projects | Joshua Adekunle";
const PROJECTS_DESCRIPTION =
  "Explore selected web development and UI design projects by Joshua Adekunle, including responsive digital products and user-focused interfaces.";

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

const getProjectImage = (projectId: string) => {
  const project = getProjectById(projectId);
  if (!project) return DEFAULT_IMAGE;

  const image = project.images.find((path) =>
    /\.(png|jpe?g|webp)$/i.test(path),
  );
  return new URL(image ?? project.image, SITE_URL).href;
};

export const getPageMetadata = (pathname: string): PageMetadata => {
  const segments = getSegments(pathname);
  const metadata: PageMetadata = {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    canonicalUrl: new URL(pathname, SITE_URL).href,
    image: DEFAULT_IMAGE,
    openGraphType: "website",
    twitterCard: "summary_large_image",
  };

  if (segments[0] === "blog") {
    metadata.title = BLOG_TITLE;
    metadata.description = BLOG_DESCRIPTION;

    const article = segments[1] ? getBlogBySlug(segments[1]) : undefined;
    if (article) {
      metadata.title = `${article.title} | Joshua Adekunle`;
      metadata.description = article.excerpt;
      metadata.openGraphType = "article";
    }
  }

  if (segments[0] === "projects") {
    metadata.title = PROJECTS_TITLE;
    metadata.description = PROJECTS_DESCRIPTION;

    const project = segments[1] ? getProjectById(segments[1]) : undefined;
    if (project) {
      metadata.title = `${project.title} | Project by Joshua Adekunle`;
      metadata.description = project.description;
      metadata.image = getProjectImage(project.id);
      metadata.openGraphType = "article";
      metadata.twitterCard = "summary_large_image";
    }
  }

  return metadata;
};

export const getPrerenderedRoutes = () => [
  "/",
  "/blog",
  ...blogs.map((article) => `/blog/${article.slug}`),
  "/projects",
  ...projectsData.map((project) => `/projects/${project.id}`),
];
