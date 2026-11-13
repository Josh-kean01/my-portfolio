import React, { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Routes, Route, useLocation, Link, BrowserRouter } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Contact from "@/pages/Contact";
import ShareMenuFab from "@/components/ShareMenuFab";
import Blog from "@/pages/Blog";
import BlogDetail from "@/pages/BlogDetail";
import Noise from "@/components/Noise";
import { getPageMetadata, SITE_URL } from "@/seo/metadata";

const setMetaContent = (attribute: "name" | "property", key: string, content: string) => {
  let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attribute, key);
    document.head.appendChild(meta);
  }

  meta.content = content;
};

const RouteMetadata = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getPageMetadata(pathname);
    document.title = metadata.title;
    setMetaContent("name", "description", metadata.description);
    setMetaContent("name", "robots", metadata.robots);
    setMetaContent("property", "og:type", metadata.openGraphType);
    setMetaContent("property", "og:url", metadata.canonicalUrl);
    setMetaContent("property", "og:title", metadata.title);
    setMetaContent("property", "og:description", metadata.description);
    setMetaContent("property", "og:site_name", "JoshTheFrontendGuy");
    setMetaContent("property", "og:image", `${SITE_URL}/og-image.png`);
    setMetaContent(
      "property",
      "og:image:alt",
      "JoshTheFrontendGuy — Joshua Adekunle, frontend developer",
    );
    setMetaContent("name", "twitter:card", metadata.twitterCard);
    setMetaContent("name", "twitter:url", metadata.canonicalUrl);
    setMetaContent("name", "twitter:title", metadata.title);
    setMetaContent("name", "twitter:description", metadata.description);
    setMetaContent("name", "twitter:image", `${SITE_URL}/og-image.png`);
    setMetaContent(
      "name",
      "twitter:image:alt",
      "JoshTheFrontendGuy — Joshua Adekunle, frontend developer",
    );

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = metadata.canonicalUrl;
  }, [pathname]);

  return null;
};

const NotFound = () => (
  <section className="flex min-h-[60vh] flex-col items-start justify-center px-6 py-16 md:px-12 lg:px-16">
    <span className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
      404 · Page not found
    </span>
    <h1 className="mb-4 font-display text-3xl font-bold text-primary dark:text-white md:text-5xl">
      This page doesn&apos;t exist.
    </h1>
    <p className="mb-7 max-w-lg text-sm leading-relaxed text-gray-500 dark:text-gray-400">
      The link may be outdated, or the page may have moved. Head back to explore Joshua&apos;s
      projects and frontend development work.
    </p>
    <Link
      to="/"
      className="border-b border-current pb-1 text-sm font-semibold text-primary dark:text-white"
    >
      Back to the homepage
    </Link>
  </section>
);

const ThemeToggle = ({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 xl:p-2.5 2xl:p-3 rounded-full bg-white dark:bg-surface-dark shadow-lg hover:scale-105 transition-transform border border-border-light dark:border-border-dark text-primary dark:text-white"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={18} className="2xl:hidden" /> : <Moon size={18} className="2xl:hidden" />}
      {isDark ? <Sun size={20} className="hidden 2xl:block" /> : <Moon size={20} className="hidden 2xl:block" />}
    </button>
  );
};

type SidebarProps = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (v: boolean) => void;
  isDark: boolean;
  toggleTheme: () => void;
};

const Sidebar = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  isDark,
  toggleTheme,
}: SidebarProps) => {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  const isCurrentPage = (path: string) =>
    location.pathname === path || (path !== "/" && location.pathname.startsWith(`${path}/`));

  return (
    <>
      {/* Mobile Header */}
      <div className="mobile-sticky-header md:hidden sticky top-0 left-0 w-full z-40 px-5 py-4 flex justify-between items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-light dark:border-border-dark">
        <Noise />
        <Link to="/" aria-label="Home" className="font-display font-bold text-lg tracking-tight">
          JA.
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-primary dark:text-white"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-background-light dark:bg-background-dark pt-20 px-5 h-full">
          <Noise />
          <nav className="flex flex-col gap-6 font-display py-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isCurrentPage(link.path) ? "page" : undefined}
                className={`mobile-nav-link transition-colors text-xl ${
                  isCurrentPage(link.path)
                    ? "mobile-nav-link-active font-bold text-primary dark:text-white"
                    : "font-medium text-gray-400 hover:text-primary dark:hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme toggle INSIDE menu only on mobile */}
            <div className="mt-auto pt-5 border-t border-border-light dark:border-border-dark">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Theme
                </span>
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[var(--sidebar-width)] flex-col justify-between items-center py-4 xl:py-5 2xl:py-6 border-r border-border-light dark:border-border-dark z-40 bg-background-light dark:bg-background-dark">
        <div className="absolute inset-0 z-0">
          <Noise />
        </div>
        <div className="h-20 xl:h-24 2xl:h-32 w-px bg-primary dark:bg-white/20 my-2"></div>

        <nav className="flex flex-col-reverse gap-6 xl:gap-7 2xl:gap-9 items-center flex-grow justify-center">
          {links
            .slice()
            .reverse()
            .map((link) => {
              const isActive = isCurrentPage(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  aria-label={link.name}
                  aria-current={isActive ? "page" : undefined}
                  className={`vertical-text sidebar-link font-display text-[0.62rem] xl:text-[0.64rem] 2xl:text-[0.7rem] tracking-[0.03em] transition-all duration-300 relative group ${
                    isActive
                      ? "sidebar-link-active font-bold"
                      : "font-semibold text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
        </nav>

        <div className="h-20 xl:h-24 2xl:h-32 w-px bg-primary dark:bg-white/20 my-2"></div>
      </aside>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppShell = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="app-shell min-h-screen flex flex-col md:flex-row">
      {/* Global Noise background: fixed to viewport */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Noise
          patternSize={50}
          patternScaleX={1.2}
          patternScaleY={2}
          patternRefreshInterval={2}
          patternAlpha={12}
        />
      </div>

      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Desktop Theme Toggle only (hide on mobile) */}
      <div className="hidden md:fixed md:top-6 md:right-6 md:z-50 md:block">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>

      <ShareMenuFab />
      <RouteMetadata />

      <a className="skip-to-content" href="#main-content">
        Skip to content
      </a>
      <main id="main-content" tabIndex={-1} className="app-main flex-1 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppShell />
      <Analytics />
    </BrowserRouter>
  );
}