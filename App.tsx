import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, Link, BrowserRouter } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./hooks/useTheme";

import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import ShareMenuFab from "./components/ShareMenuFab";
import Blog from "./pages/Blog";

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
      className="p-3 rounded-full bg-white dark:bg-surface-dark shadow-lg hover:scale-105 transition-transform border border-border-light dark:border-border-dark text-primary dark:text-white"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
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

  // Pick ONE naming: Blog OR Writing.
  // Option A: keep "Writing" page but show "Blog" label.
  const links = [
    { name: "About", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" }, // ✅ match your Routes below
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 left-0 w-full z-40 p-6 flex justify-between items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-light dark:border-border-dark">
        <span className="font-display font-bold text-xl tracking-tight">JA.</span>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-primary dark:text-white"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-background-light dark:bg-background-dark pt-24 px-6 h-full">
          <nav className="flex flex-col gap-8 text-2xl font-display font-bold">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors text-sm ${location.pathname === link.path
                  ? "text-primary dark:text-white"
                  : "text-gray-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Theme toggle INSIDE menu only on mobile */}
            <div className="mt-auto pt-6 border-t border-border-light dark:border-border-dark">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Theme
                </span>
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-24 flex-col justify-between items-center py-6 border-r border-border-light dark:border-border-dark z-40 bg-background-light dark:bg-background-dark">
        <div className="xl:h-24 h-32 w-px bg-primary dark:bg-white/20 my-2"></div>

        <nav className="flex flex-col-reverse gap-9 items-center flex-grow justify-center">
          {links
            .slice()
            .reverse()
            .map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== "/" && location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`vertical-text text-[0.7rem] font-bold tracking-[0.1em] uppercase transition-all duration-300 relative group
                    ${isActive
                      ? "text-primary dark:text-white"
                      : "text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
                    }
                  `}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-primary dark:bg-white rounded-full"></span>
                  )}
                </Link>
              );
            })}
        </nav>

        <div className="xl:h-24 h-32 w-px bg-primary dark:bg-white/20 my-2"></div>
      </aside>
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const AppShell = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <Sidebar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Desktop Theme Toggle only (hide on mobile) */}
      <div className="hidden lg:fixed lg:top-6 lg:right-6 lg:z-50 lg:block">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>

      <ShareMenuFab />

      <main className="flex-1 lg:ml-24 w-full lg:w-[calc(100%-6rem)]">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
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
    </BrowserRouter>
  );
}
