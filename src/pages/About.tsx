import { ArrowDownRight, ArrowRight, CheckCircle, Code, Layout, Smartphone, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import PageClosingCta from "../components/PageClosingCta";

const process = [
  ["01", "Understand", "Start with the people, the problem, and what success should look like."],
  ["02", "Shape", "Map the key flows and make the interface feel clear before adding complexity."],
  ["03", "Build", "Develop responsive, accessible experiences and test the details that matter."],
  ["04", "Hand off", "Keep the work organized, explain decisions, and make the next step easy."],
];

const experience = [
  "Mentored aspiring frontend developers through bootcamps and practical workshops.",
  "Reviewed community projects and shared useful frontend and UI/UX feedback.",
  "Joined hackathons and collaborative teams to shape and build product ideas.",
  "Led hands-on sessions in React, Git, responsive design, and frontend fundamentals.",
  "Built e-commerce, dashboard, and creator-focused web experiences.",
  "Worked across the product journey, from interface planning to implementation and handoff.",
];

const certifications = [
  { org: "ValueMaxCoder'sHub", title: "Frontend Developer", date: "December 2025" },
  { org: "ValueMaxCoder'sHub", title: "UX/UI Design", date: "June 2025" },
  { org: "Google", title: "UX Design Professional", date: "October 2022" },
  { org: "Meta", title: "Front-End Developer", date: "January 2023" },
  { org: "HackerRank", title: "React (Basic)", date: "March 2023" },
  { org: "freeCodeCamp", title: "JavaScript Algorithms", date: "June 2022" },
];

const capabilities = [
  { icon: Code, label: "Frontend development" },
  { icon: Layout, label: "UI implementation" },
  { icon: Smartphone, label: "Responsive design" },
  { icon: Zap, label: "Performance & polish" },
  { icon: CheckCircle, label: "Accessible interfaces" },
  { icon: Layout, label: "Reusable components" },
  { icon: Code, label: "API integration" },
  { icon: Smartphone, label: "Cross-browser testing" },
];

const tools = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Vue.js",
  "HTML & CSS",
  "Figma",
  "Git & GitHub",
  "VS Code",
  "Vite",
  "Node.js",
  "Firebase",
];

const About = () => (
  <div className="about-page">
    <header className="about-hero">
      <div className="about-hero-copy">
        <h1>
          I&apos;m Joshua.
          <span>I build for the web.</span>
        </h1>
        <p className="about-intro">
          I&apos;m a web developer with a strong frontend focus. I design and build polished,
          responsive experiences, and use Next.js to take ideas from interface to full web
          applications.
        </p>
        <div className="about-hero-actions">
          <Link className="about-secondary-link" to="/contact">
            Let&apos;s talk <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="about-availability">
          <span><i aria-hidden="true" /> Open to team roles &amp; freelance work</span>
          <span>Lagos, Nigeria · GMT+1</span>
        </div>
      </div>

      <figure className="about-portrait">
        <img src="/joshua.jpeg" alt="Portrait of Joshua Adekunle" />
        <figcaption>
          <span>Joshua Adekunle</span>
          <span>Web developer · Lagos, Nigeria</span>
        </figcaption>
      </figure>
    </header>

    <section className="about-section about-process" aria-labelledby="about-process-title">
      <div className="about-section-heading">
        <h2 id="about-process-title">Good work starts with <em>good questions.</em></h2>
        <p>
          I like to understand the goal and the people behind it first. Then I shape the
          experience, build carefully, and leave things clearer than I found them.
        </p>
      </div>
      <ol className="about-process-list">
        {process.map(([number, title, description]) => (
          <li key={number}>
            <span className="about-list-number">{number}</span>
            <div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
            <ArrowDownRight size={17} aria-hidden="true" />
          </li>
        ))}
      </ol>
    </section>

    <section className="about-section about-community" aria-labelledby="about-community-title">
      <div className="about-section-heading">
        <h2 id="about-community-title">Learning, building, <em>sharing.</em></h2>
        <p>
          I enjoy growing alongside other developers, making useful things, and helping
          people feel more confident with the tools they use.
        </p>
      </div>
      <ul className="about-experience-list">
        {experience.map((item, index) => (
          <li key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>

    <section className="about-section about-practice" aria-labelledby="about-practice-title">
      <div className="about-story">
        <h2 id="about-practice-title">Thoughtful by nature.<br /><em>Practical by design.</em></h2>
        <p>
          I started with a curiosity about how the internet works and found my place in
          building interfaces. I care about the details, but also about keeping the
          experience useful, accessible, and easy to maintain.
        </p>
        <p>
          I&apos;m naturally camera-shy, so I prefer clear notes, working prototypes, and
          thoughtful details in the finished experience.
        </p>
      </div>
      <div className="about-capabilities">
        <div>
          <h3 className="about-subheading">What I bring</h3>
          <ul className="about-capability-list">
            {capabilities.map(({ icon: Icon, label }) => (
              <li key={label}><Icon size={17} aria-hidden="true" /><span>{label}</span></li>
            ))}
          </ul>
        </div>
        <div className="about-tools">
          <h3 className="about-subheading">Tools I use</h3>
          <ul>
            {tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="about-section about-certifications" aria-labelledby="about-certifications-title">
      <div className="about-section-heading about-certifications-heading">
        <div>
          <h2 id="about-certifications-title">A few milestones.</h2>
        </div>
        <p>Credentials I&apos;ve completed, alongside the practical work I continue to build.</p>
      </div>
      <ul className="about-certification-list">
        {certifications.map(({ org, title, date }) => (
          <li key={title}>
            <CheckCircle size={18} aria-hidden="true" />
            <div><h3>{title}</h3><p>{org}</p></div>
            <time>{date}</time>
          </li>
        ))}
      </ul>
    </section>

    <PageClosingCta
      heading="Want the full overview?"
      description="Download my résumé for a concise look at my experience and skills."
      label="Download résumé"
      href="/assets/adekunle-joshua-resume.pdf"
      download
    />

  </div>
);

export default About;
