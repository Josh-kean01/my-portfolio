import { Link, useLocation } from "react-router-dom";

const SiteFooter = () => {
  const { pathname } = useLocation();

  return (
    <footer className="site-footer site-footer-mini">
      <Link className="site-footer-mini-brand" to="/" aria-label="Joshua Adekunle home">
        JA<span>.</span>
      </Link>
      <nav className="site-footer-mini-nav" aria-label="Footer links">
        <Link to="/projects">Projects</Link>
        {pathname !== "/guide" && <Link to="/guide">Website guide</Link>}
        {pathname !== "/contact" && <Link to="/contact">Contact</Link>}
      </nav>
      <span className="site-footer-mini-copy">© {new Date().getFullYear()} Joshua Adekunle</span>
    </footer>
  );
};

export default SiteFooter;
