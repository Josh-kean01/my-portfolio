import React from "react";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Link, Navigate, useParams, useSearchParams } from "react-router-dom";
import { blogs, getBlogBySlug } from "../data/blogs";
import { getProjectById } from "../data/projects";
import { SITE_URL } from "../seo/metadata";

const BlogDetail = () => {
    const { slug } = useParams();
    const [searchParams] = useSearchParams();
    const article = getBlogBySlug(slug);

    if (!article) return <Navigate to="/blog" replace />;

    const sortedBlogs = [...blogs].sort((a, b) =>
        b.publishedAt.localeCompare(a.publishedAt),
    );
    const articleIndex = sortedBlogs.findIndex(
        (blogArticle) => blogArticle.slug === article.slug,
    );
    const previousArticle = sortedBlogs[articleIndex - 1];
    const nextArticle = sortedBlogs[articleIndex + 1];
    const requestedBlogPage = Number(searchParams.get("page"));
    const blogPage =
        Number.isInteger(requestedBlogPage) && requestedBlogPage > 1
            ? requestedBlogPage
            : 1;
    const blogIndexHref =
        blogPage === 1 ? "/blog" : `/blog?page=${blogPage}`;
    const articleHref = (slug: string) =>
        blogPage === 1 ? `/blog/${slug}` : `/blog/${slug}?page=${blogPage}`;

    const articleUrl = new URL(`/blog/${article.slug}`, SITE_URL).href;
    const structuredData = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.excerpt,
        image: (() => {
            const relatedProject = article.relatedProjectIds
                .map((projectId) => getProjectById(projectId))
                .find((project) => project?.image);
            return relatedProject ? new URL(relatedProject.image, SITE_URL).href : `${SITE_URL}/og-image.png`;
        })(),
        datePublished: article.publishedAt,
        author: {
            "@type": "Person",
            name: article.author,
            url: SITE_URL,
        },
        mainEntityOfPage: articleUrl,
        publisher: {
            "@type": "Person",
            name: "Joshua Adekunle",
            alternateName: "JoshTheFrontendGuy",
            url: SITE_URL,
        },
    }).replace(/</g, "\\u003c");

    return (
        <article className="px-6 py-14 md:px-12 lg:px-16 xl:py-16 2xl:py-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: structuredData }}
            />
            <Link
                to={blogIndexHref}
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary dark:hover:text-white mb-10 2xl:mb-16 transition-colors"
            >
                <ArrowLeft size={18} />
                <span className="text-xs 2xl:text-sm font-medium uppercase tracking-wide">
                    Back to Blog
                </span>
            </Link>

            <header className="max-w-4xl mb-12 2xl:mb-20">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] 2xl:text-xs font-mono uppercase tracking-wider text-gray-400 mb-5 2xl:mb-7">
                    <time dateTime={article.publishedAt}>{article.date}</time>
                    <span className="font-sans normal-case tracking-normal">
                        By {article.author}
                    </span>
                    <span className="inline-flex items-center gap-2">
                        <Clock size={13} />
                        {article.readTime}
                    </span>
                </div>

                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold leading-tight text-primary dark:text-white mb-6 2xl:mb-8">
                    {article.title}
                </h1>

                <p className="text-base md:text-lg 2xl:text-2xl leading-relaxed text-gray-500 dark:text-gray-400 font-light max-w-3xl">
                    {article.excerpt}
                </p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 2xl:gap-16 border-t border-border-light dark:border-border-dark pt-10 2xl:pt-14">
                <div className="lg:col-span-8 lg:col-start-2">
                    <p className="text-lg md:text-xl 2xl:text-2xl leading-relaxed text-primary dark:text-white font-medium mb-12 2xl:mb-16">
                        {article.intro}
                    </p>

                    <div className="space-y-12 2xl:space-y-16">
                        {article.sections.map((section) => (
                            <section key={section.heading}>
                                <h2 className="font-display text-xl md:text-2xl 2xl:text-3xl font-bold text-primary dark:text-white mb-5 2xl:mb-7">
                                    {section.heading}
                                </h2>
                                <div className="space-y-5 2xl:space-y-6">
                                    {section.paragraphs.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="text-sm md:text-base 2xl:text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-light"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {article.relatedProjectIds.length > 0 && (
                        <section
                            aria-labelledby="related-work-heading"
                            className="mt-14 border-t border-border-light pt-8 dark:border-border-dark 2xl:mt-20 2xl:pt-10"
                        >
                            <h2
                                id="related-work-heading"
                                className="mb-4 font-display text-lg font-bold text-primary dark:text-white"
                            >
                                Related work
                            </h2>
                            <ul className="flex flex-wrap gap-3">
                                {article.relatedProjectIds.map((projectId) => {
                                    const project = getProjectById(projectId);
                                    if (!project) return null;

                                    return (
                                        <li key={project.id}>
                                            <Link
                                                to={`/projects/${project.id}`}
                                                className="inline-flex items-center gap-2 border border-border-light px-3 py-2 text-sm text-primary transition-colors hover:border-primary dark:border-border-dark dark:text-gray-200 dark:hover:border-white"
                                            >
                                                {project.title}
                                                <ArrowLeft
                                                    size={14}
                                                    aria-hidden="true"
                                                    className="rotate-180"
                                                />
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    )}

                    {(previousArticle || nextArticle) && (
                        <nav
                            aria-label="Article navigation"
                            className="blog-article-navigation mt-14 border-t border-border-light pt-8 dark:border-border-dark 2xl:mt-20 2xl:pt-10"
                        >
                            {previousArticle ? (
                                <Link
                                    to={articleHref(previousArticle.slug)}
                                    className="blog-article-nav-link blog-article-nav-previous"
                                >
                                    <ArrowLeft size={16} aria-hidden="true" />
                                    <span>
                                        <span className="blog-article-nav-label">
                                            Previous article
                                        </span>
                                        <span className="blog-article-nav-title">
                                            {previousArticle.title}
                                        </span>
                                    </span>
                                </Link>
                            ) : (
                                <span aria-hidden="true" />
                            )}
                            {nextArticle && (
                                <Link
                                    to={articleHref(nextArticle.slug)}
                                    className="blog-article-nav-link blog-article-nav-next"
                                >
                                    <span>
                                        <span className="blog-article-nav-label">
                                            Next article
                                        </span>
                                        <span className="blog-article-nav-title">
                                            {nextArticle.title}
                                        </span>
                                    </span>
                                    <ArrowRight size={16} aria-hidden="true" />
                                </Link>
                            )}
                        </nav>
                    )}

                </div>
            </div>
        </article>
    );
};

export default BlogDetail;
