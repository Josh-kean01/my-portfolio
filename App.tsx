import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation, Link, NavLink } from 'react-router-dom';
import { Menu, X, Moon, Sun, Share2, ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Writing from './pages/Writing';
import Contact from './pages/Contact';

// --- Shared Components ---

const SocialLinks = () => (
  <div className="flex gap-4">
    <a href="#" className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
      <Github size={18} />
    </a>
    <a href="#" className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
      <Linkedin size={18} />
    </a>
    <a href="#" className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:border-black dark:hover:border-white transition-colors">
      <Twitter size={18} />
    </a>
  </div>
);

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-surface-dark shadow-lg hover:scale-105 transition-transform border border-border-light dark:border-border-dark text-primary dark:text-white"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const ShareButton = () => (
  <button 
    className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-surface-dark shadow-lg hover:scale-105 transition-transform border border-border-light dark:border-border-dark text-primary dark:text-white"
    aria-label="Share"
  >
    <Share2 size={20} />
  </button>
);

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }: { mobileMenuOpen: boolean, setMobileMenuOpen: (v: boolean) => void }) => {
  const location = useLocation();

  const links = [
    { name: 'About', path: '/' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Writing', path: '/writing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 w-full z-40 p-6 flex justify-between items-center bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-md border-b border-border-light dark:border-border-dark">
        <span className="font-display font-bold text-xl tracking-tight">PE.</span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-primary dark:text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-30 bg-background-light dark:bg-background-dark pt-24 px-6">
          <nav className="flex flex-col gap-8 text-2xl font-display font-bold">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                onClick={() => setMobileMenuOpen(false)}
                className={`transition-colors ${location.pathname === link.path ? 'text-primary dark:text-white' : 'text-gray-400'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-24 flex-col-reverse justify-between items-center py-12 border-r border-border-light dark:border-border-dark z-40 bg-background-light dark:bg-background-dark">
        <div className="h-32 w-px bg-primary dark:bg-white/20"></div>
        <nav className="flex flex-col gap-12 items-center flex-grow justify-center">
          {links.slice().reverse().map((link) => {
             const isActive = location.pathname === link.path || (link.path !== '/' && location.pathname.startsWith(link.path));
             return (
              <Link 
                key={link.name}
                to={link.path}
                className={`vertical-text text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group
                  ${isActive ? 'text-primary dark:text-white' : 'text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'}
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
        <div className="h-32 w-px bg-primary dark:bg-white/20"></div>
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

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col lg:flex-row">
        <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <ThemeToggle />
        <ShareButton />
        
        <main className="flex-1 lg:ml-24 w-full">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
