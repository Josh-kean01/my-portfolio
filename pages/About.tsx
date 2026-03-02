import React from "react";
import { ArrowRight, CheckCircle, Code, Layout, Smartphone, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="px-6 py-16 md:px-12 lg:px-16 xl:py-16 2xl:py-24 max-w-7xl mx-auto animate-fade-in-up">
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 xl:gap-10 2xl:gap-16 mb-16 xl:mb-16 2xl:mb-24">
        <div className="flex flex-col justify-center space-y-6 xl:space-y-7 2xl:space-y-8">
          <div className="space-y-2">
            <h2 className="text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-5xl text-gray-400 font-display font-light">
              Hello, I'm
            </h2>

            {/* Smaller at xl (1366-ish), keep big at 2xl (1920) */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-display font-bold text-primary dark:text-white tracking-tight">
              Joshua Adekunle
            </h1>
          </div>

          {/* Keep body text calm at xl; let 2xl breathe */}
          <div className="max-w-xl text-sm md:text-base lg:text-base xl:text-base 2xl:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-light">
            <p>
              I am a{" "}
              <strong className="font-semibold text-primary dark:text-white">
                frontend developer
              </strong>{" "}
              with a strong background in creating visually appealing and{" "}
              <strong className="font-semibold text-primary dark:text-white">
                user-friendly web experiences.
              </strong>
            </p>

            <p className="mt-4">
              I am motivated to find a role where I can challenge myself{" "}
              <strong className="font-semibold text-primary dark:text-white">
                and provide value to website users.
              </strong>{" "}
              I am excited to bring my knowledge and experience to a team.
            </p>
          </div>

          <div className="pt-3">
            <div className="relative inline-block group cursor-pointer">
              <div className="absolute top-1.5 left-1.5 w-full h-full border border-primary dark:border-white transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <a href="../adekunle-joshua-resume.pdf" target="_blank" className="relative block bg-primary text-white dark:bg-white dark:text-primary px-10 py-4 text-sm uppercase tracking-widest font-bold border border-transparent hover:shadow-xl transition-all duration-300">
                View Resumé
              </a>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="hidden md:flex items-center justify-center relative">
          <div className="w-full h-full max-h-[520px] 2xl:max-h-[600px] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop"
              alt="Abstract Minimalist Design"
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-10 2xl:gap-12 pt-12 2xl:pt-16 border-t border-border-light dark:border-border-dark">
        <div className="lg:col-span-7 space-y-5 2xl:space-y-6">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3 2xl:mb-4">
            My Story
          </h3>

          {/* BIG FIX: was text-lg fixed; now calm on xl */}
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-base xl:text-base 2xl:text-lg">
            My journey began with a curiosity for how things work on the internet. Starting from
            basic HTML & CSS, I quickly fell in love with the art of crafting interfaces. Over
            the years, I've honed my skills in modern Javascript frameworks and responsive design
            principles.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-base xl:text-base 2xl:text-lg">
            I believe that good design is invisible—it just works. My goal is to build
            applications that not only solve problems but also delight users through seamless
            interactions and thoughtful micro-animations.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-8 2xl:space-y-10">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-5 2xl:mb-6">
              What I Do
            </h3>

            <ul className="space-y-3 2xl:space-y-4">
              {[
                { icon: Code, text: "Frontend Development" },
                { icon: Layout, text: "UI/UX Implementation" },
                { icon: Smartphone, text: "Responsive Web Design" },
                { icon: Zap, text: "Performance Optimization" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
                  <span className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <item.icon size={18} className="text-primary dark:text-white" />
                  </span>
                  <span className="text-sm xl:text-sm 2xl:text-base font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3 2xl:mb-4">
              Tools I Use
            </h3>

            <div className="flex flex-wrap gap-2">
              {["React", "Vue.js", "Tailwind CSS", "Figma", "Git", "Next.js", "VS Code", "TypeScript"].map(
                (tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-[10px] xl:text-[10px] 2xl:text-xs font-medium uppercase tracking-wide"
                  >
                    {tool}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-16 2xl:mt-24 border-t border-border-light dark:border-border-dark pt-10 2xl:pt-12">
        <div className="flex items-center justify-between mb-6 2xl:mb-8">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold">Certifications</h3>

          <div className="flex gap-2">
            <button
              title="Previous certification"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500"
            >
              <ArrowRight className="rotate-180" size={20} />
            </button>
            <button
              title="Next certification"
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-primary dark:text-white"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-5 2xl:gap-6 pb-8 no-scrollbar snap-x">
          {[
            { org: "Google", title: "UX Design Professional", date: "Issued Oct 2022", color: "text-yellow-500" },
            { org: "Meta", title: "Front-End Developer", date: "Issued Jan 2023", color: "text-blue-500" },
            { org: "HackerRank", title: "React (Basic)", date: "Issued Mar 2023", color: "text-green-500" },
            { org: "FreeCodeCamp", title: "JavaScript Algorithms", date: "Issued Jun 2022", color: "text-purple-500" },
          ].map((cert, i) => (
            <div
              key={i}
              className="min-w-[260px] 2xl:min-w-[280px] p-5 2xl:p-6 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-white transition-colors snap-center group cursor-default"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className={cert.color} size={22} />
                <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-wide text-gray-400">
                  {cert.org}
                </span>
              </div>

              <h4 className="text-base 2xl:text-lg font-bold text-primary dark:text-white mb-1 transition-colors">
                {cert.title}
              </h4>

              <p className="text-[10px] 2xl:text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;