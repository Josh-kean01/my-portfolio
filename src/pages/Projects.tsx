// src/pages/Projects.tsx
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, Search } from "lucide-react";
import { projectsData, Project } from "../data/projects";

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_MORE_COUNT = 6;

const Projects = () => {
  const [filter, setFilter] = useState("All Work");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);

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

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMoreProjects = visibleCount < filteredProjects.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_MORE_COUNT);
  };

  return (
    <div className="px-6 py-16 md:px-12 lg:px-16 xl:py-16 2xl:py-24 max-w-7xl mx-auto">
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

      {/* Filter & Search */}
      <div className="mb-10 xl:mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-5 border-b border-border-light dark:border-border-dark pb-6 2xl:pb-8">
        <div className="flex flex-wrap gap-2">
          {["All Work", "Web", "Mobile", "UI Design"].map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 2xl:px-5 py-1.5 2xl:py-2 text-xs 2xl:text-sm font-medium transition-all rounded-sm
                ${filter === cat
                  ? "bg-primary text-white dark:bg-white dark:text-primary"
                  : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative w-full md:w-64 group">
          <input
            type="text"
            placeholder=" Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 pl-0 pr-8 text-xs 2xl:text-sm focus:ring-0 focus:border-primary dark:focus:border-white transition-colors placeholder-gray-400 text-primary dark:text-white rounded-md"
          />
          <Search
            size={16}
            className="absolute right-0 top-1/2 -translate-y-1/2 pe-1 text-gray-400 2xl:hidden"
          />
          <Search
            size={18}
            className="absolute right-0 top-1/2 -translate-y-1/2 pe-1 text-gray-400 hidden 2xl:block"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 xl:gap-x-7 2xl:gap-x-8 gap-y-10 xl:gap-y-12 2xl:gap-y-16">
        {visibleProjects.map((project) => (
          <article key={project.id} className="group">
            <Link to={`/projects/${project.id}`} className="block">
              <div className="relative overflow-hidden mb-4 2xl:mb-5 bg-gray-200 dark:bg-gray-800 aspect-[4/3] border border-border-light dark:border-border-dark">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-9 h-9 2xl:w-10 2xl:h-10 bg-white dark:bg-black flex items-center justify-center text-primary dark:text-white shadow-lg border border-border-light dark:border-gray-700">
                    <ExternalLink size={16} className="2xl:hidden" />
                    <ExternalLink size={18} className="hidden 2xl:block" />
                  </div>
                </div>
              </div>
            </Link>

            <div className="flex justify-between items-start mb-2">
              <Link to={`/projects/${project.id}`}>
                <h3 className="text-base md:text-lg xl:text-lg 2xl:text-xl font-bold font-display text-primary dark:text-white group-hover:underline decoration-1 underline-offset-4 decoration-gray-400">
                  {project.title}
                </h3>
              </Link>

              <span className="text-[10px] 2xl:text-xs font-mono uppercase tracking-wider text-gray-400 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-sm">
                {project.year}
              </span>
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-xs 2xl:text-sm mb-3 2xl:mb-4 line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] 2xl:text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="mt-14 2xl:mt-24 text-center">
          <p className="text-sm 2xl:text-base text-gray-500 dark:text-gray-400">
            No projects found for this filter or search.
          </p>
        </div>
      )}

      {/* Load More */}
      {filteredProjects.length > 0 && hasMoreProjects && (
        <div className="mt-14 2xl:mt-24 text-center">
          <button
            type="button"
            onClick={handleLoadMore}
            className="relative inline-block bg-primary dark:bg-white text-white dark:text-primary font-medium px-8 2xl:px-10 py-3.5 2xl:py-4 transition-transform active:translate-y-1 text-xs 2xl:text-sm"
          >
            Load More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;