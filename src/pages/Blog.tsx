import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ActionButton from "../components/ActionButton";
import { blogs } from "../data/blogs";

const INITIAL_VISIBLE_COUNT = 3;
const LOAD_MORE_COUNT = 3;

const Blog = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const visibleBlogs = blogs.slice(0, visibleCount);
  const hasMoreBlogs = visibleCount < blogs.length;

  const handleLoadMore = () => {
    setVisibleCount((count) => count + LOAD_MORE_COUNT);
  };

  return (
    <div className="px-6 py-14 md:px-12 lg:px-16 xl:py-14 2xl:py-24 max-w-5xl mx-auto">
      <header className="mb-10 xl:mb-10 2xl:mb-20">
        <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 2xl:mb-4 block">
          Words & Thoughts
        </span>

        {/* tighter at xl (1366-ish), keep big at 2xl (1920) */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-7xl font-display font-bold text-primary dark:text-white mb-4 2xl:mb-6">
          Blog
        </h1>

        <p className="text-sm md:text-base lg:text-base xl:text-sm 2xl:text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl leading-relaxed">
          Insights on frontend development, design systems, and creating user-friendly web
          experiences.
        </p>
      </header>

      <div className="space-y-8 xl:space-y-9 2xl:space-y-16">
        {visibleBlogs.map((article) => (
          <article
            key={article.slug}
            className="group border-b border-border-light dark:border-border-dark pb-7 xl:pb-8 2xl:pb-12 last:border-0"
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 xl:gap-8 2xl:gap-12 mb-3 2xl:mb-4">
              <span className="text-[10px] md:text-xs 2xl:text-sm font-mono text-gray-400 min-w-[105px] 2xl:min-w-[120px]">
                {article.date}
              </span>

              <div className="flex-1">
                {/* tighter at xl */}
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-3xl font-display font-bold text-primary dark:text-white mb-2 2xl:mb-4 group-hover:text-accent transition-colors cursor-pointer">
                  {article.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 2xl:mb-6 font-light text-sm md:text-base xl:text-sm 2xl:text-lg">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-400">
                    {article.readTime}
                  </span>

                  <Link
                    to={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-2 text-[11px] 2xl:text-sm font-bold uppercase tracking-wide text-primary dark:text-white group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight size={14} className="2xl:hidden" />
                    <ArrowRight size={16} className="hidden 2xl:block" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {hasMoreBlogs && (
        <div className="mt-10 2xl:mt-20 text-center">
          <ActionButton type="button" onClick={handleLoadMore}>
            Load More Posts
          </ActionButton>
        </div>
      )}

      <footer className="mt-14 2xl:mt-24 pt-9 2xl:pt-12 border-t border-border-light dark:border-border-dark text-center text-gray-400 text-xs 2xl:text-sm">
        © 2023 Joshua Adekunle. All rights reserved.
      </footer>
    </div>
  );
};

export default Blog;