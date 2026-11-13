// src/pages/Projects.tsx
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Search } from "lucide-react";
import ActionButton from "../components/ActionButton";
import ProjectPreview from "../components/ProjectPreview";
import { projectsData, Project } from "../data/projects";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Projects = () => {
  const [filter, setFilter] = useState("All Work");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project: Project) => {
      const matchesFilter = filter === "All Work" || project.category === filter;
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));

      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [filter, search]);

  const currentProjects = filteredProjects.filter((project) => project.status === "In Development");
  const completedProjects = filteredProjects.filter((project) => project.status !== "In Development");
  const visibleCompletedProjects = completedProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < completedProjects.length;
  const hasActiveFilters = filter !== "All Work" || search.trim().length > 0;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  const clearFilters = () => {
    setFilter("All Work");
    setSearch("");
  };

  const renderProjectCard = (project: Project, current = false) => {
    const shouldUseLivePreview =
      Boolean(project.liveUrl) && (!project.image || brokenImages[project.id]);
    const hasProjectImage = Boolean(project.image) && !brokenImages[project.id];

    return (
      <article key={project.id} className={`group ${current ? "projects-current-card" : ""}`}>
        <Link to={`/projects/${project.id}`} className="block">
          <div
            className={`relative mb-4 overflow-hidden border border-border-light bg-gray-200 dark:border-border-dark dark:bg-gray-800 ${
              current ? "aspect-[16/10]" : "aspect-[4/3]"
            }`}
          >
            {shouldUseLivePreview && project.liveUrl ? (
              <ProjectPreview url={project.liveUrl} title={project.title} />
            ) : hasProjectImage ? (
              <img
                src={project.image}
                alt={`${project.title} project preview`}
                onError={() => setBrokenImages((prev) => ({ ...prev, [project.id]: true }))}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-100 to-gray-300 px-5 text-center dark:from-gray-800 dark:to-gray-950">
                <span className="font-display text-lg font-bold text-gray-700 dark:text-gray-200">
                  {project.title}
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Preview coming soon
                </span>
              </div>
            )}
            <div className="absolute bottom-4 right-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <div className="flex h-9 w-9 items-center justify-center border border-border-light bg-white text-primary shadow-lg dark:border-gray-700 dark:bg-black dark:text-white">
                <ExternalLink size={16} aria-hidden="true" />
              </div>
            </div>
          </div>
        </Link>

        <div className="mb-2 flex items-start justify-between">
          <Link to={`/projects/${project.id}`}>
            <h3 className="font-display text-base font-bold text-primary decoration-1 underline-offset-4 group-hover:underline dark:text-white md:text-lg">
              {project.title}
            </h3>
          </Link>
          <span className="rounded-sm border border-gray-200 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-gray-400 dark:border-gray-800">
            {project.year}
          </span>
        </div>

        <p className="mb-3 line-clamp-2 text-xs text-gray-500 dark:text-gray-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-gray-100 px-2 py-1 text-[10px] font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {current && project.liveUrl && (
          <a
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary underline decoration-border-light underline-offset-4 hover:opacity-70 dark:text-white"
            href={project.liveUrl}
            rel="noreferrer"
            target="_blank"
          >
            Open live site <ExternalLink size={13} aria-hidden="true" />
          </a>
        )}
      </article>
    );
  };

  return (
    <div className="px-6 py-16 md:px-12 lg:px-16 xl:py-16 2xl:py-24">
      <header className="mb-10 xl:mb-12 2xl:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-display font-bold mb-4 2xl:mb-6 tracking-tight text-primary dark:text-white">
          Selected Projects
        </h1>

        <p className="text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          A curated selection of my work in{" "}
          <strong className="text-primary dark:text-gray-200 font-semibold">
            web development
          </strong>{" "}
          and{" "}
          <strong className="text-primary dark:text-gray-200 font-semibold">
            UI design
          </strong>
          . Building digital products that focus on functionality and aesthetics.
        </p>
      </header>

      <div className="projects-toolbar mb-10 xl:mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-5 border-b border-border-light dark:border-border-dark">
        <div className="flex flex-wrap gap-2">
          {["All Work", "Web", "Mobile", "UI Design"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-4 2xl:px-5 py-1.5 2xl:py-2 text-xs 2xl:text-sm font-medium transition-all rounded-sm
                ${filter === cat
                  ? "bg-primary text-white dark:bg-white dark:text-black"
                  : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="projects-search relative w-full md:w-64 group">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-0 bg-transparent py-1.5 pl-0 pr-8 text-xs text-primary transition-colors placeholder-gray-400 focus:outline-none focus:ring-0 dark:text-white 2xl:py-2 2xl:text-sm"
          />
          <Search
            size={16}
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 pe-1 text-gray-400 2xl:hidden"
          />
          <Search
            size={18}
            aria-hidden="true"
            className="absolute right-0 top-1/2 -translate-y-1/2 pe-1 text-gray-400 hidden 2xl:block"
          />
        </div>
      </div>

      <p className="mb-6 text-xs text-gray-500 dark:text-gray-400" aria-live="polite">
        Showing {currentProjects.length + visibleCompletedProjects.length} of {filteredProjects.length} projects
      </p>

      {currentProjects.length > 0 && (
        <section className="mb-14" aria-labelledby="current-projects-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2
              className="font-display text-2xl font-semibold tracking-tight text-primary dark:text-white md:text-3xl"
              id="current-projects-heading"
            >
              Currently working on
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 xl:gap-x-8">
            {currentProjects.map((project) => renderProjectCard(project, true))}
          </div>
        </section>
      )}

      {visibleCompletedProjects.length > 0 && (
        <section aria-labelledby="project-grid-heading">
          <div className="mb-6 flex items-end justify-between gap-4">
            <h2
              className="font-display text-xl font-semibold tracking-tight text-primary dark:text-white md:text-2xl"
              id="project-grid-heading"
            >
              {currentProjects.length > 0 ? "More selected work" : "Selected work"}
            </h2>
            {completedProjects.length > 0 && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {completedProjects.length} {completedProjects.length === 1 ? "project" : "projects"}
              </span>
            )}
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 xl:gap-x-7 2xl:gap-x-8 gap-y-10 xl:gap-y-12 2xl:gap-y-16">
            {visibleCompletedProjects.map((project) => renderProjectCard(project))}
          </div>
        </section>
      )}

      {filteredProjects.length === 0 && (
        <div className="mt-14 text-center">
          <p className="text-sm 2xl:text-base text-gray-500 dark:text-gray-400">
            No projects found for this filter or search.
          </p>
          {hasActiveFilters && (
            <button
              className="mt-4 text-xs font-semibold text-primary underline underline-offset-4 dark:text-white"
              onClick={clearFilters}
              type="button"
            >
              Clear filters and search
            </button>
          )}
        </div>
      )}

      {filteredProjects.length > 0 && hasMoreProjects && (
        <div className="mt-14 2xl:mt-24 text-center">
          <ActionButton type="button" onClick={handleLoadMore}>
            Load More Projects
          </ActionButton>
        </div>
      )}
    </div>
  );
};

export default Projects;