import React from 'react';
import { ArrowRight, Share2 } from 'lucide-react';

const articles = [
  {
    date: 'Oct 24, 2023',
    title: 'Mastering Tailwind CSS Configuration',
    excerpt: 'Tailwind CSS is more than just utility classes. Learn how to leverage the configuration file to build a robust, scalable design system for your projects.',
    readTime: '5 MIN READ'
  },
  {
    date: 'Sep 12, 2023',
    title: 'The Art of Minimalist Web Design',
    excerpt: 'Minimalism isn\'t just about removing elements; it\'s about prioritizing content. Explore the principles that make simple interfaces powerful.',
    readTime: '8 MIN READ'
  },
  {
    date: 'Aug 05, 2023',
    title: 'Accessibility First Development',
    excerpt: 'Why accessibility should never be an afterthought. Practical tips for ensuring your frontend code is inclusive for all users.',
    readTime: '6 MIN READ'
  },
  {
    date: 'Jul 19, 2023',
    title: 'Optimizing React Performance',
    excerpt: 'A deep dive into memoization, lazy loading, and other techniques to keep your React applications running smoothly at scale.',
    readTime: '12 MIN READ'
  }
];

const Writing = () => {
  return (
    <div className="px-6 py-24 md:px-12 lg:px-20 max-w-5xl mx-auto animate-fade-in-up">
      <header className="mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">Words & Thoughts</span>
        <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary dark:text-white mb-6">
          Writing
        </h1>
        <p className="text-xl text-gray-500 dark:text-gray-400 font-light max-w-2xl">
          Insights on frontend development, design systems, and creating user-friendly web experiences.
        </p>
      </header>

      <div className="space-y-16">
        {articles.map((article, index) => (
          <article key={index} className="group border-b border-border-light dark:border-border-dark pb-12 last:border-0">
            <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 mb-4">
              <span className="text-sm font-mono text-gray-400 min-w-[120px]">{article.date}</span>
              <div className="flex-1">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary dark:text-white mb-4 group-hover:text-accent transition-colors cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-light">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{article.readTime}</span>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary dark:text-white group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 text-center">
        <button className="bg-primary dark:bg-white text-white dark:text-primary px-8 py-3 font-bold uppercase text-sm tracking-wide hover:opacity-90 transition-opacity">
          Load More Posts
        </button>
      </div>

      <footer className="mt-24 pt-12 border-t border-border-light dark:border-border-dark text-center text-gray-400 text-sm">
        © 2023 Precious Egwuenu. All rights reserved.
      </footer>
    </div>
  );
};

export default Writing;
