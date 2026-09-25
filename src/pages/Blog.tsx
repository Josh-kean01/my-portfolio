import React from "react";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    date: "Oct 24, 2023",
    title: "Mastering Tailwind CSS Configuration",
    excerpt:
      "Tailwind CSS is more than just utility classes. Learn how to leverage the configuration file to build a robust, scalable design system for your projects.",
    readTime: "5 MIN READ",
  },
  {
    date: "Sep 12, 2023",
    title: "The Art of Minimalist Web Design",
    excerpt:
      "Minimalism isn't just about removing elements; it's about prioritizing content. Explore the principles that make simple interfaces powerful.",
    readTime: "8 MIN READ",
  },
  {
    date: "Aug 05, 2023",
    title: "Accessibility First Development",
    excerpt:
      "Why accessibility should never be an afterthought. Practical tips for ensuring your frontend code is inclusive for all users.",
    readTime: "6 MIN READ",
  },
  {
    date: "Jul 19, 2023",
    title: "Optimizing React Performance",
    excerpt:
      "A deep dive into memoization, lazy loading, and other techniques to keep your React applications running smoothly at scale.",
    readTime: "12 MIN READ",
  },
];

const Blog = () => {
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
        {articles.map((article, index) => (
          <article
            key={index}
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

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[11px] 2xl:text-sm font-bold uppercase tracking-wide text-primary dark:text-white group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight size={14} className="2xl:hidden" />
                    <ArrowRight size={16} className="hidden 2xl:block" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 2xl:mt-20 text-center">
        <button className="bg-primary dark:bg-white text-white dark:text-primary px-7 2xl:px-8 py-3 font-bold uppercase text-xs 2xl:text-sm tracking-wide hover:opacity-90 transition-opacity">
          Load More Posts
        </button>
      </div>

      <footer className="mt-14 2xl:mt-24 pt-9 2xl:pt-12 border-t border-border-light dark:border-border-dark text-center text-gray-400 text-xs 2xl:text-sm">
        © 2023 Joshua Adekunle. All rights reserved.
      </footer>
    </div>
  );
};

export default Blog;