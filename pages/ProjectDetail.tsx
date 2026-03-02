import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  // In a real app, fetch data based on ID. Using static data for demo matching the snippet.
  const project = {
    title: "Fintech Dashboard Reimagined",
    role: "Lead Product Designer",
    timeframe: "Q3 2023 — 6 Weeks",
    client: "Nova Bank",
    overview:
      "Nova Bank approached us with a challenge: their legacy dashboard was cluttering user experience with redundant data points, leading to a 40% drop-off in engagement. I led the redesign of the web platform, focusing on simplifying the information architecture and introducing a modular component system that scales.",
    problem:
      "Users struggled to find key transaction details within seconds. The previous design relied heavily on tables with poor contrast and lacked mobile responsiveness.",
    solution:
      'We introduced a "cards-first" layout, prioritizing the most accessed features: Account Summary, Recent Transactions, and Quick Transfer. By utilizing a monochrome-first approach with strategic accent colors for actions, we improved readability and accessibility scores by 35%.',
    stack: ["Figma", "React", "Tailwind CSS", "Framer Motion", "Linear"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBCJa93uTfnzm-DrtAS0TzL5TGQNoI2zylgx0RL9LD87eCwkvHe7_t6d0_ooDGxwgKqZWhFAQ9rK1fZ07WJMAXWr16wEN6J4GloHf5gMUm3BaTnru6KIVb-7SWJGdgUbkSAdZM_xAH8zGTH_SynPLjRAnmDBM-jPrGh4AvMjNyFyYFmvLA4R1zfSbxrdkO7AoMyGgVaVyK9BlDS1i4t5SLJOS2FTwp-HXR2IVRYITr_7vwBNBed8ObcYu_eeTYgESgBqu12wpRgNjk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5boBCPuQ2D-pVUGG7z_LwqnACQP7ol9iTNlukcWzm6GM369WAsFntpddmQKSuhIHfAL0nGWOi2vUc1lPErytVkOs5D6OVeqYd00IuLUOBl60GD6wIVMNnl5u-F7Je3_UZsZ-4gT0IlVbDpzWsRcsFMwqaMiSz0EMXLOa1zzRDl6mGqwVf-X-626TWAanxfoMFbbx8AaO5GfvdEho6yFdUOVRYwi5fUe7V-odmOp2Y4pB7OOCBquNKAFsNzOHb8lbMXhpOywbhnmk",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDqSUc_qi64s2_u7a1BH0GORzE9im_uL6vsC-qti7lkwMFRivHC8bRrmepSmHTnxnifeMMndW5efKV9ISqGPhKag3qOkAW1LMsFuPorHopkktC11xmd_v-PNjSFEN98XcVo96u4hzr2yNBwXIQ7SXZ4Xi0PN-hVtRNa_Kd1B7yzwtPznGrZoVWINRo7SSyXEF71dR_yldHm_-ik5f1W_ubTEqw-Q6-sPsHcB2OAD3WK6LbRMk_oI8Ilhfi8lVElI-zOhW1Tq_ghuT4",
    ],
  };

  return (
    <div className="px-6 py-16 md:px-12 lg:px-16 xl:py-16 2xl:py-24 max-w-7xl mx-auto animate-fade-in-up">
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
        {/* Smaller at xl (1366-ish), keep big at 2xl (1920) */}
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

            <a
              href="#"
              className="mt-10 2xl:mt-12 inline-flex items-center gap-2 text-primary dark:text-white border-b border-primary dark:border-white pb-1 font-bold hover:opacity-70 transition-opacity text-xs 2xl:text-sm"
            >
              Visit Live Site <ExternalLink size={14} className="2xl:hidden" />
              <ExternalLink size={16} className="hidden 2xl:block" />
            </a>
          </div>
        </div>
      </div>

      <section className="mt-16 2xl:mt-24 mb-16 2xl:mb-24">
        <div className="flex items-end justify-between mb-6 2xl:mb-8">
          <h2 className="font-display text-lg xl:text-xl 2xl:text-2xl font-bold text-primary dark:text-white">
            Project Gallery
          </h2>
          <span className="text-xs 2xl:text-sm text-gray-400 font-mono hidden sm:inline-block">
            01 — 03
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-6">
          {project.images.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] bg-gray-200 dark:bg-surface-dark rounded-lg overflow-hidden group relative"
            >
              <img
                src={img}
                alt={`Gallery ${i}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-start pt-12 2xl:pt-16 border-t border-border-light dark:border-border-dark">
        <h3 className="font-display text-2xl xl:text-2xl 2xl:text-3xl font-bold mb-6 2xl:mb-8 text-primary dark:text-white">
          Interested in something similar?
        </h3>

        <div className="relative group cursor-pointer inline-block">
          <div className="absolute top-2 left-2 w-full h-full border border-primary dark:border-white rounded-sm bg-transparent transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
          <Link
            to="/contact"
            className="relative block bg-primary dark:bg-white text-white dark:text-primary px-7 2xl:px-8 py-3.5 2xl:py-4 font-display font-medium text-base 2xl:text-lg tracking-wide rounded-sm shadow-xl transition-transform duration-300 active:translate-y-1 active:translate-x-1"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;