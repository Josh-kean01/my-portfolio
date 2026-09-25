// src/pages/ProjectDetail.tsx
import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getProjectById } from "../data/projects";
import ActionButton from "../components/ActionButton";
import ProjectImageSlider from "@/components/ProjectImageSlider";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  // If someone hits a bad URL, send them back to Projects (or render a 404).
  if (!project) return <Navigate to="/projects" replace />;

  return (
    <div className="px-6 py-16 md:px-12 lg:px-16 xl:py-16 2xl:py-24 max-w-7xl mx-auto">
      <Link
        to="/projects"
        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary dark:hover:text-white mb-8 2xl:mb-12 transition-colors"
      >
        <ArrowLeft size={18} className="2xl:hidden" />
        <ArrowLeft size={20} className="hidden 2xl:block" />
        <span className="text-xs 2xl:text-sm font-medium uppercase tracking-wide">
          Back to Projects
        </span>
      </Link>

      <header className="mb-12 xl:mb-14 2xl:mb-20">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold mb-6 2xl:mb-8 leading-tight text-primary dark:text-white">
          {project.title}
        </h1>

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 xl:gap-10 2xl:gap-16 border-t border-border-light dark:border-border-dark pt-6 2xl:pt-8 mt-8 2xl:mt-12">
          <div>
            <span className="block text-[10px] 2xl:text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
              Role
            </span>
            <span className="font-display text-base xl:text-base 2xl:text-lg font-medium">
              {project.role}
            </span>
          </div>

          <div>
            <span className="block text-[10px] 2xl:text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
              Timeframe
            </span>
            <span className="font-display text-base xl:text-base 2xl:text-lg font-medium">
              {project.timeframe}
            </span>
          </div>

          <div>
            <span className="block text-[10px] 2xl:text-xs uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-1">
              Client
            </span>
            <span className="font-display text-base xl:text-base 2xl:text-lg font-medium">
              {project.client}
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 2xl:gap-16">
        <div className="lg:col-span-8 space-y-12 xl:space-y-14 2xl:space-y-20">
          <section>
            <h2 className="font-display text-lg xl:text-xl 2xl:text-2xl font-bold mb-4 2xl:mb-6 text-primary dark:text-white flex items-center gap-3">
              <span className="w-7 2xl:w-8 h-px bg-primary dark:bg-white"></span> Overview
            </h2>
            <p className="text-sm md:text-base xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              {project.overview}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg xl:text-xl 2xl:text-2xl font-bold mb-4 2xl:mb-6 text-primary dark:text-white flex items-center gap-3">
              <span className="w-7 2xl:w-8 h-px bg-primary dark:bg-white"></span> The Problem
            </h2>
            <p className="text-sm md:text-base xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              {project.problem}
            </p>
          </section>

          <section>
            <h2 className="font-display text-lg xl:text-xl 2xl:text-2xl font-bold mb-4 2xl:mb-6 text-primary dark:text-white flex items-center gap-3">
              <span className="w-7 2xl:w-8 h-px bg-primary dark:bg-white"></span> The Solution
            </h2>
            <p className="text-sm md:text-base xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              {project.solution}
            </p>
          </section>
        </div>

        <div className="lg:col-span-4 lg:border-l lg:border-border-light lg:dark:border-border-dark lg:pl-10 2xl:lg:pl-12">
          <div className="sticky top-24">
            <h3 className="font-display text-xs font-bold uppercase tracking-widest mb-6 2xl:mb-8 text-primary dark:text-white">
              Tech Stack
            </h3>

            <div className="flex flex-wrap gap-2 2xl:gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 2xl:px-4 py-1.5 2xl:py-2 border border-gray-300 dark:border-gray-800 rounded-full text-xs 2xl:text-sm font-medium text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-dark transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-10 2xl:mt-12 inline-flex items-center gap-2 text-primary dark:text-white border-b border-primary dark:border-white pb-1 font-bold hover:opacity-70 transition-opacity text-xs 2xl:text-sm"
              >
                Visit Live Site <ExternalLink size={14} className="2xl:hidden" />
                <ExternalLink size={16} className="hidden 2xl:block" />
              </a>
            )}
          </div>
        </div>
      </div>

      <section className="mt-16 2xl:mt-24 mb-16 2xl:mb-24">
        <div className="flex items-end justify-between mb-6 2xl:mb-8">
          <h2 className="font-display text-lg xl:text-xl 2xl:text-2xl font-bold text-primary dark:text-white">
            Project Gallery
          </h2>
          <span className="text-xs 2xl:text-sm text-gray-400 font-mono hidden sm:inline-block">
            01 — {String(project.images.length).padStart(2, "0")}
          </span>
        </div>

        <ProjectImageSlider
          images={project.images}
          title={project.title}
          autoScroll={true}
          autoScrollInterval={4000}
          mode="contain"
        />
      </section>

      <section className="flex flex-col items-start pt-12 2xl:pt-16 border-t border-border-light dark:border-border-dark">
        <h3 className="font-display text-2xl xl:text-2xl 2xl:text-3xl font-bold mb-6 2xl:mb-8 text-primary dark:text-white">
          Interested in something similar?
        </h3>

        <ActionButton as={Link} to="/contact">
          Start a Conversation
        </ActionButton>
      </section>
    </div>
  );
};

export default ProjectDetail;