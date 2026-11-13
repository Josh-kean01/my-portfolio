import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";
import ProjectPreview from "../components/ProjectPreview";

const Lanyard = lazy(() => import("../components/Lanyard"));

const Home = () => {
  const selectedWork = projectsData.filter((project) => project.featured).slice(0, 3);
  const manifestoRef = useRef<HTMLElement>(null);
  const selectedWorkTrackRef = useRef<HTMLDivElement>(null);
  const [activeSelectedWorkIndex, setActiveSelectedWorkIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const mobileQuery = window.matchMedia("(max-width: 47.999rem)");
    const updateIsMobile = () => setIsMobile(mobileQuery.matches);

    updateIsMobile();
    mobileQuery.addEventListener("change", updateIsMobile);
    return () => mobileQuery.removeEventListener("change", updateIsMobile);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const updateIsDark = () => setIsDark(root.classList.contains("dark"));
    const observer = new MutationObserver(updateIsDark);

    updateIsDark();
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const proofItems = [
    {
      type: "Testimonial",
      project: "John Abodunrin · Creator portfolio",
      quote:
        "I wanted a site that felt like me and showed the different work I do. Joshua listened and made it easy for people to see what I offer.",
      attribution: "John Abodunrin",
    },
    {
      type: "Testimonial",
      project: "Crumb & Chop · Catering platform",
      quote:
        "I wanted customers to find our cakes, meals and catering in one place. Joshua brought it all together and made the site simple to use.",
      attribution: "Crumb & Chop",
    },
    {
      type: "Approved testimonial",
      project: "MagicFooty · BatcheeMashup",
      quote:
        "The platform gives our fans one place to preview mashups, vote on what they want to see next, and access the full videos. Joshua brought those pieces together in a smooth experience and made it easier for us to manage our content.",
      attribution: "John Abodunrin",
    },
  ];

  useEffect(() => {
    const section = manifestoRef.current;
    if (!section) return;

    const words = Array.from(section.querySelectorAll<HTMLElement>(".home-manifesto-word"));
    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const heading = section.querySelector(".home-manifesto-copy");
        if (!heading) return;

        const bounds = heading.getBoundingClientRect();
        const start = window.innerHeight * 0.82;
        const end = window.innerHeight * 0.22;
        const progress = Math.max(
          0,
          Math.min(1, (start - bounds.top) / (bounds.height + start - end)),
        );
        const softEdge = 3;

        words.forEach((word, index) => {
          const light = Math.max(
            0,
            Math.min(1, (progress * (words.length + softEdge) - index) / softEdge),
          );
          word.style.setProperty("--word-progress", `${Math.round(light * 100)}%`);
        });
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const track = selectedWorkTrackRef.current;
    if (!track) return;

    const updateActiveProject = () => {
      const cards = Array.from(track.querySelectorAll<HTMLElement>(".home-selected-project"));
      if (!cards.length) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
      setActiveSelectedWorkIndex(Math.round(progress * (cards.length - 1)));
    };

    track.addEventListener("scroll", updateActiveProject, { passive: true });
    updateActiveProject();
    return () => track.removeEventListener("scroll", updateActiveProject);
  }, []);

  const scrollToSelectedWork = (index: number) => {
    const track = selectedWorkTrackRef.current;
    if (!track) return;

    track.scrollTo({
      left:
        selectedWork.length > 1
          ? (track.scrollWidth - track.clientWidth) * (index / (selectedWork.length - 1))
          : 0,
      behavior: "smooth",
    });
  };

  const moveSelectedWork = (direction: -1 | 1) => {
    const nextIndex = Math.max(
      0,
      Math.min(selectedWork.length - 1, activeSelectedWorkIndex + direction),
    );
    scrollToSelectedWork(nextIndex);
  };

  const manifesto = [
    "Good digital work is more than a polished screen.",
    "It brings clear thinking, useful details, and careful engineering",
    "together to make the everyday feel effortless.",
  ].join(" ").split(/\s+/);

  return (
    <div className="home-page">
      <section aria-labelledby="home-hero-title" className="home-hero">
        <div className="home-hero-topline">
          <Link className="home-monogram" to="/" aria-label="Joshua Adekunle home">
            JA<span>.</span>
          </Link>
          <div className="home-hero-date">Independent developer<br />Available for select work</div>
          <div className="home-hero-location">
            <MapPin size={13} aria-hidden="true" />
            <span>Lagos, Nigeria · GMT+1</span>
          </div>
        </div>

        <div className="home-portrait-wrap">
          <Suspense fallback={<div className="home-lanyard-loading" aria-hidden="true" />}>
            <Lanyard
              className="home-lanyard"
              frontImage="/joshua.jpeg"
              backImage="/joshua.jpeg"
              cardColor="#17191e"
              finish="metallic"
              metal="graphite"
              size={0.64}
              strapLength={isMobile ? 0.9 : 0.58}
              strapColor={isDark ? "#e8e8e8" : "#121418"}
              strapWidth={0.72}
              gravity={0.85}
              damping={0.68}
              elasticity={0.42}
              breeze={0.18}
            />
          </Suspense>
        </div>

        <div className="home-hero-grid">
          <div className="home-hero-intro">
            <p className="home-hero-name">Joshua Adekunle</p>
            <h1 id="home-hero-title" className="home-hero-title">
              <span>WEB</span>
              <span>DEVELOPER</span>
            </h1>
            <p className="home-hero-about"><span aria-hidden="true">●</span> (ABOUT)</p>
            <p className="home-hero-description">
              I&apos;m Joshua Adekunle, a frontend developer building responsive websites and web
              apps with React and Next.js.
            </p>
            <div className="home-hero-action">
              <Link to="/contact" className="home-hero-cta">
                Book a call <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <aside className="home-hero-aside" aria-label="Areas of focus">
            <ul className="home-hero-capabilities">
              <li>Clear product interfaces</li>
              <li>Responsive websites</li>
              <li>React and Next.js builds</li>
            </ul>
          </aside>
        </div>

      </section>

      <section ref={manifestoRef} className="home-manifesto" aria-labelledby="home-manifesto-heading">
        <h2 id="home-manifesto-heading" className="home-manifesto-copy">
          {manifesto.map((word, index) => (
            <span className="home-manifesto-word" key={`${word}-${index}`}>
              {word}{" "}
            </span>
          ))}
        </h2>
        <p className="home-manifesto-subline">
          From first sketch to final interaction, I make the web work beautifully.
        </p>
      </section>

      <section
        id="selected-work"
        className="home-selected-work"
        aria-labelledby="home-selected-work-heading"
      >
        <div className="home-selected-work-heading">
          <div>
            <h2 id="home-selected-work-heading">A few things I&apos;ve built.</h2>
          </div>
          <Link to="/projects">
            View all projects <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="home-selected-work-carousel">
          <div
            className="home-selected-work-track"
            ref={selectedWorkTrackRef}
            role="region"
            aria-label="Selected projects"
            tabIndex={0}
          >
            {selectedWork.map((project) => (
              <article className="home-selected-project" key={project.id}>
                <Link
                  to={`/projects/${project.id}`}
                  className="home-selected-project-preview"
                  aria-label={`View ${project.title} case study`}
                >
                  {project.id === "john-abodunrin" ? (
                    <img
                      src="/assets/projects/john-abodunrin/home-l.png"
                      alt={`${project.title} portfolio website`}
                      loading="lazy"
                    />
                  ) : project.liveUrl ? (
                    <ProjectPreview url={project.liveUrl} title={project.title} />
                  ) : null}
                  <span aria-hidden="true"><ArrowUpRight size={17} /></span>
                </Link>
                <div className="home-selected-project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.featuredSummary ?? project.description}</p>
                  </div>
                  <div className="home-selected-project-footer">
                    <span>{project.role}</span>
                    <Link to={`/projects/${project.id}`}>
                      Case study <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="home-carousel-controls">
            <div className="home-carousel-arrows">
              <button
                type="button"
                onClick={() => moveSelectedWork(-1)}
                aria-label="Previous selected project"
                disabled={activeSelectedWorkIndex === 0}
              >
                <ArrowLeft size={17} />
              </button>
              <button
                type="button"
                onClick={() => moveSelectedWork(1)}
                aria-label="Next selected project"
                disabled={activeSelectedWorkIndex === selectedWork.length - 1}
              >
                <ArrowRight size={17} />
              </button>
            </div>
            <div className="home-carousel-pagination" aria-label="Choose a project">
              {selectedWork.map((project, index) => (
                <button
                  type="button"
                  key={project.id}
                  onClick={() => scrollToSelectedWork(index)}
                  aria-label={`Show project ${index + 1}: ${project.title}`}
                  aria-current={activeSelectedWorkIndex === index ? "true" : undefined}
                >
                  <span className={activeSelectedWorkIndex === index ? "is-active" : ""} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-proof" aria-labelledby="home-proof-heading">
        <div className="home-proof-heading">
          <div>
            <h2 id="home-proof-heading">Good work, built together<span>.</span></h2>
          </div>
          <p>
            Notes from clients about the work and what it helped them do.
          </p>
        </div>

        <div className="home-proof-grid">
          {proofItems.map((item, index) => (
            <article
              className="home-proof-card"
              key={item.project}
            >
              <div className="home-proof-card-top">
                <span className="home-proof-index">0{index + 1}</span>
                <span className="home-proof-status">
                  {item.type}
                </span>
              </div>
              <span className="home-proof-quote-mark" aria-hidden="true">“</span>
              <blockquote>{item.quote}</blockquote>
              <div className="home-proof-attribution">
                <strong>{item.attribution}</strong>
                <span>{item.project}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="home-contact-cta" aria-labelledby="home-contact-heading">
        <div className="home-contact-cta-copy">
          <h2 id="home-contact-heading">Let&apos;s talk.</h2>
        </div>
        <Link to="/contact" className="home-contact-button">
          Get in touch <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
};

export default Home;
