import { ArrowUpRight, Code2, Palette, Smartphone, Terminal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import ActionButton from "../components/ActionButton";

type Skill = {
  name: string;
  icon?: string;
};

type SkillCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  skills: Skill[];
  featured?: boolean;
};

const SkillCard = ({ icon: Icon, title, description, skills, featured = false }: SkillCardProps) => (
  <section className={`skills-category${featured ? " skills-category-featured" : ""}`}>
    <div className="skills-category-heading">
      <Icon aria-hidden="true" size={24} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
    <ul className="skills-chip-list">
      {skills.map((skill) => (
        <li className="skills-chip" key={skill.name}>
          {skill.icon && (
            <img src={skill.icon} alt="" aria-hidden="true" />
          )}
          <span>{skill.name}</span>
        </li>
      ))}
    </ul>
  </section>
);

const projectEvidence = [
  {
    id: "john-abodunrin",
    tabLabel: "John",
    category: "Frontend · UI/UX",
    title: "John Abodunrin",
    summary: "A responsive creator portfolio with editorial storytelling and a custom visual system.",
    role: "Frontend Developer & UI Designer",
    skillGroups: [
      {
        category: "Frontend development",
        skills: ["React", "TypeScript", "Tailwind CSS", "React Router", "Framer Motion", "Lenis", "Responsive design"],
      },
      {
        category: "Design & UI/UX",
        skills: ["Figma", "Design systems", "Interaction design", "Editorial UI"],
      },
      {
        category: "Tooling",
        skills: ["Git & GitHub", "VS Code", "Vite", "Vercel"],
      },
    ],
  },
  {
    id: "j-pope-fashion-store",
    tabLabel: "J-Pope",
    category: "Frontend · E-commerce",
    title: "J-Pope Fashion Store",
    summary: "A brand-led storefront with product discovery, cart, wishlist, and mobile shopping flows.",
    role: "Frontend Developer & UI Engineer",
    skillGroups: [
      {
        category: "Frontend development",
        skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite", "Responsive UI"],
      },
      {
        category: "Design & UI/UX",
        skills: ["Visual design", "E-commerce UX", "Product discovery", "Mobile shopping flows"],
      },
      {
        category: "Tooling",
        skills: ["Git & GitHub", "VS Code"],
      },
    ],
  },
  {
    id: "crumb-and-chop",
    tabLabel: "Catering",
    category: "Next.js · Full-stack",
    title: "Catering & Bakery Platform",
    summary: "Online ordering, event estimates, and booking tools connected to a staff dashboard.",
    role: "Full-Stack Developer & UI Designer",
    skillGroups: [
      {
        category: "Frontend development",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP"],
      },
      {
        category: "Design & UI/UX",
        skills: ["UI/UX design", "Responsive design", "Ordering flows", "Booking experience", "Dashboard UX"],
      },
      {
        category: "Tooling",
        skills: ["Git & GitHub", "VS Code"],
      },
      {
        category: "Backend & data",
        skills: ["PostgreSQL", "Drizzle ORM"],
      },
    ],
  },
];

const Skills = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const projectTabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeProject = projectEvidence[activeProjectIndex];

  const handleProjectTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    let nextIndex = activeProjectIndex;
    if (event.key === "ArrowRight") nextIndex = (activeProjectIndex + 1) % projectEvidence.length;
    else if (event.key === "ArrowLeft") {
      nextIndex = (activeProjectIndex - 1 + projectEvidence.length) % projectEvidence.length;
    } else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = projectEvidence.length - 1;
    else return;

    event.preventDefault();
    setActiveProjectIndex(nextIndex);
    projectTabRefs.current[nextIndex]?.focus();
  };

  return (
  <div className="px-6 py-24 md:px-12 lg:px-16">
    <header className="mb-20">
      <h1 className="mb-6 font-display text-4xl font-light text-gray-400 md:text-6xl">
        Expertise &amp; <br />
        <span className="font-bold text-primary dark:text-white">Capabilities</span>
      </h1>
      <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
        I have cultivated a diverse set of skills through years of hands-on experience and
        continuous learning. My focus is on creating performant, accessible, and visually
        stunning digital experiences.
      </p>
    </header>

    <div className="skills-category-grid">
      <SkillCard
        icon={Code2}
        title="Frontend Development"
        description="The core of my work: building thoughtful, responsive interfaces."
        featured
        skills={[
          { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
          { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
          { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
          { name: "Vue.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
          { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
          { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        ]}
      />

      <SkillCard
        icon={Palette}
        title="Design & UI/UX"
        description="Turning layouts and product requirements into usable interfaces."
        skills={[
          { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
          { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" },
          { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" },
          { name: "Prototyping" },
          { name: "Wireframing" },
          { name: "Design Systems" },
        ]}
      />

      <SkillCard
        icon={Terminal}
        title="Tooling"
        description="The everyday tools I use to build, test, and ship."
        skills={[
          { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
          { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
          { name: "Webpack", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" },
          { name: "Jest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
          { name: "Command Line" },
          { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
        ]}
      />

      <SkillCard
        icon={Smartphone}
        title="Mobile & Backend"
        description="Additional tools I use when a product needs more than the interface."
        skills={[
          { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
          { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
          { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
          { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
          { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
        ]}
      />
    </div>

    <section className="skills-evidence" aria-labelledby="skills-evidence-title">
      <div className="skills-evidence-heading">
        <div>
          <p>Selected work</p>
          <h2 id="skills-evidence-title">Skills in practice.</h2>
        </div>
        <Link to="/projects">
          Browse all projects <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>
      <div className="skills-project-switcher">
        <div className="skills-project-tabs" role="tablist" aria-label="Selected projects">
          {projectEvidence.map((project, index) => (
            <button
              aria-controls={`project-panel-${project.id}`}
              aria-selected={activeProjectIndex === index}
              className="skills-project-tab"
              id={`project-tab-${project.id}`}
              key={project.id}
              onClick={() => setActiveProjectIndex(index)}
              onKeyDown={handleProjectTabKeyDown}
              ref={(element) => { projectTabRefs.current[index] = element; }}
              role="tab"
              tabIndex={activeProjectIndex === index ? 0 : -1}
              type="button"
            >
              {project.tabLabel}
            </button>
          ))}
        </div>
        <div
          aria-labelledby={`project-tab-${activeProject.id}`}
          className="skills-project-panel"
          id={`project-panel-${activeProject.id}`}
          role="tabpanel"
          tabIndex={0}
        >
          <div className="skills-project-overview">
            <span>{activeProject.category}</span>
            <h3>{activeProject.title}</h3>
            <p>{activeProject.summary}</p>
            <span className="skills-project-role">{activeProject.role}</span>
            <Link className="skills-project-link" to={`/projects/${activeProject.id}`}>
              View case study <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="skills-project-skill-groups">
            {activeProject.skillGroups.map((group) => (
              <div className="skills-project-skill-group" key={group.category}>
                <h4>{group.category}</h4>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <div className="skills-resume">
      <p>Want the full overview?</p>
      <ActionButton as="a" href="/assets/adekunle-joshua-resume.pdf" download>
        Download Full Resumé
      </ActionButton>
    </div>
  </div>
  );
};

export default Skills;
