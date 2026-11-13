import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { getProjectById } from "../data/projects";

const POSTS_PER_PAGE = 6;

const getPageNumbers = (currentPage: number, totalPages: number) => {
  const pages = Array.from(
    new Set([1, currentPage - 1, currentPage, currentPage + 1, totalPages]),
  )
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  return pages.flatMap((page, index) => {
    const previousPage = pages[index - 1];
    return [
      ...(previousPage && page - previousPage > 1
        ? [`ellipsis-${previousPage}-${page}`]
        : []),
      page,
    ];
  });
};

const Blog = () => {
  const [searchParams] = useSearchParams();
  const sortedBlogs = [...blogs].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
  const totalPages = Math.ceil(sortedBlogs.length / POSTS_PER_PAGE);
  const requestedPage = Math.floor(Number(searchParams.get("page"))) || 1;
  const currentPage = Math.min(Math.max(1, requestedPage), totalPages);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const visibleBlogs = sortedBlogs.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );
  const pageHref = (page: number) =>
    page === 1 ? "/blog" : `/blog?page=${page}`;
  const articleHref = (slug: string) =>
    currentPage === 1
      ? `/blog/${slug}`
      : `/blog/${slug}?page=${currentPage}`;
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <div className="px-6 py-14 md:px-12 lg:px-16 xl:py-14 2xl:py-24">
      <header className="mb-10 xl:mb-10 2xl:mb-20">
        <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 2xl:mb-4 block">
          Words & Thoughts
        </span>

        {/* tighter at xl (1366-ish), keep big at 2xl (1920) */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-7xl font-display font-bold text-primary dark:text-white mb-4 2xl:mb-6">
          Blog
        </h1>

        <p className="text-sm md:text-base lg:text-base xl:text-sm 2xl:text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl leading-relaxed">
          Notes from my work on websites, interfaces, and the practical decisions behind
          building useful digital experiences.
        </p>
      </header>

      <div className="space-y-8 xl:space-y-9 2xl:space-y-16">
        {visibleBlogs.map((article, index) => (
          <article
            key={article.slug}
            className={`group border-b border-border-light dark:border-border-dark pb-7 xl:pb-8 2xl:pb-12 last:border-0 ${
              startIndex + index === 0 ? "blog-lead-post" : ""
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8 xl:gap-8 2xl:gap-12 mb-3 2xl:mb-4">
              <div className="flex flex-col gap-1 text-[10px] md:text-xs 2xl:text-sm font-mono text-gray-400 min-w-[105px] 2xl:min-w-[120px]">
                <time dateTime={article.publishedAt}>{article.date}</time>
                <span>By {article.author}</span>
              </div>

              <div className="flex-1">
                {startIndex + index === 0 && (
                  <span className="blog-lead-label">
                    Latest article
                  </span>
                )}
                <Link to={articleHref(article.slug)} className="group/title">
                  <h2 className="text-lg md:text-xl lg:text-2xl xl:text-xl 2xl:text-3xl font-display font-bold text-primary dark:text-white mb-2 2xl:mb-4 transition-colors group-hover/title:text-accent">
                    {article.title}
                  </h2>
                </Link>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 2xl:mb-6 font-light text-sm md:text-base xl:text-sm 2xl:text-lg">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-400">
                    {article.readTime}
                  </span>

                  <Link
                    to={articleHref(article.slug)}
                    className="inline-flex items-center gap-2 text-[11px] 2xl:text-sm font-bold uppercase tracking-wide text-primary dark:text-white group-hover:translate-x-1 transition-transform"
                  >
                    Read Article <ArrowRight size={14} className="2xl:hidden" />
                    <ArrowRight size={16} className="hidden 2xl:block" />
                  </Link>
                </div>
                {article.relatedProjectIds.length > 0 && (
                  <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                    Related work:{" "}
                    {article.relatedProjectIds.map((projectId, index) => {
                      const project = getProjectById(projectId);
                      if (!project) return null;

                      return (
                        <span key={projectId}>
                          {index > 0 ? ", " : ""}
                          <Link
                            to={`/projects/${project.id}`}
                            className="font-medium text-primary underline decoration-gray-300 underline-offset-2 hover:text-accent dark:text-gray-200"
                          >
                            {project.title}
                          </Link>
                        </span>
                      );
                    })}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="blog-pagination mt-10 2xl:mt-16"
        >
          <p className="blog-pagination-summary">
            Showing {startIndex + 1}–{Math.min(startIndex + POSTS_PER_PAGE, sortedBlogs.length)} of{" "}
            {sortedBlogs.length} articles
          </p>
          <div className="blog-pagination-controls">
            <Link
              to={pageHref(Math.max(1, currentPage - 1))}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : undefined}
              className={`blog-pagination-step ${
                currentPage === 1 ? "is-disabled" : ""
              }`}
            >
              <ArrowLeft size={15} aria-hidden="true" />
              Previous
            </Link>

            <div className="blog-pagination-pages">
              {pageNumbers.map((page) =>
                typeof page === "number" ? (
                  <Link
                    key={page}
                    to={pageHref(page)}
                    aria-label={`Page ${page}`}
                    aria-current={page === currentPage ? "page" : undefined}
                    className="blog-pagination-page"
                  >
                    {page}
                  </Link>
                ) : (
                  <span key={page} className="blog-pagination-ellipsis" aria-hidden="true">
                    …
                  </span>
                ),
              )}
            </div>

            <Link
              to={pageHref(Math.min(totalPages, currentPage + 1))}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : undefined}
              className={`blog-pagination-step ${
                currentPage === totalPages ? "is-disabled" : ""
              }`}
            >
              Next
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </nav>
      )}

    </div>
  );
};

export default Blog;