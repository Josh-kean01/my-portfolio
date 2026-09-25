import React from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getBlogBySlug } from "../data/blogs";

const BlogDetail = () => {
    const { slug } = useParams();
    const article = getBlogBySlug(slug);

    if (!article) return <Navigate to="/blog" replace />;

    return (
        <article className="px-6 py-14 md:px-12 lg:px-16 xl:py-16 2xl:py-24 max-w-5xl mx-auto">
            <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-gray-500 hover:text-primary dark:hover:text-white mb-10 2xl:mb-16 transition-colors"
            >
                <ArrowLeft size={18} />
                <span className="text-xs 2xl:text-sm font-medium uppercase tracking-wide">
                    Back to Blog
                </span>
            </Link>

            <header className="max-w-4xl mb-12 2xl:mb-20">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10px] 2xl:text-xs font-mono uppercase tracking-wider text-gray-400 mb-5 2xl:mb-7">
                    <time>{article.date}</time>
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

                    <div className="mt-14 2xl:mt-20 pt-8 2xl:pt-10 border-t border-border-light dark:border-border-dark">
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-xs 2xl:text-sm font-bold uppercase tracking-wide text-primary dark:text-white hover:text-accent transition-colors"
                        >
                            <ArrowLeft size={16} />
                            More articles
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default BlogDetail;
