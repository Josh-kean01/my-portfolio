import React from 'react';
import { ArrowRight, CheckCircle, Code, Layout, Smartphone, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="px-6 py-24 md:px-12 lg:px-20 max-w-7xl mx-auto animate-fade-in-up">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-4xl lg:text-5xl text-gray-400 font-display font-light">Hello, I'm</h2>
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-primary dark:text-white tracking-tight">
              Joshua Adekunle
            </h1>
          </div>
          <div className="max-w-xl text-lg lg:text-xl leading-relaxed text-gray-600 dark:text-gray-300 font-light">
            <p>
              I am a <strong className="font-semibold text-primary dark:text-white">frontend developer</strong> with a strong background in creating visually appealing and <strong className="font-semibold text-primary dark:text-white">user-friendly web experiences.</strong>
            </p>
            <p className="mt-4">
              I am motivated to find a role where I can challenge myself <strong className="font-semibold text-primary dark:text-white">and provide value to website users.</strong> I am excited to bring my knowledge and experience to a team.
            </p>
          </div>
          <div className="pt-4">
            <div className="relative inline-block group cursor-pointer">
              <div className="absolute top-1.5 left-1.5 w-full h-full border border-primary dark:border-white transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"></div>
              <a href="../adekunle-joshua-resume.pdf" target="_blank" className="relative block bg-primary text-white dark:bg-white dark:text-primary px-10 py-4 text-sm uppercase tracking-widest font-bold border border-transparent hover:shadow-xl transition-all duration-300">
                View Resumé
              </a>
            </div>
          </div>
        </div>

        {/* Abstract visual or Image could go here, currently keeping it clean as per layout */}
        <div className="hidden lg:flex items-center justify-center relative">
          <div className="w-full h-full max-h-[600px] bg-gray-200 dark:bg-gray-800 rounded-xl overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop"
              alt="Abstract Minimalist Design"
              className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>

      {/* Details Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-16 border-t border-border-light dark:border-border-dark">
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">My Story</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
            My journey began with a curiosity for how things work on the internet. Starting from basic HTML & CSS, I quickly fell in love with the art of crafting interfaces. Over the years, I've honed my skills in modern Javascript frameworks and responsive design principles.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-light text-lg">
            I believe that good design is invisible—it just works. My goal is to build applications that not only solve problems but also delight users through seamless interactions and thoughtful micro-animations.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-10">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">What I Do</h3>
            <ul className="space-y-4">
              {[
                { icon: Code, text: "Frontend Development" },
                { icon: Layout, text: "UI/UX Implementation" },
                { icon: Smartphone, text: "Responsive Web Design" },
                { icon: Zap, text: "Performance Optimization" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-800 dark:text-gray-200">
                  <span className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
                    <item.icon size={18} className="text-primary dark:text-white" />
                  </span>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Tools I Use</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Vue.js', 'Tailwind CSS', 'Figma', 'Git', 'Next.js', 'VS Code', 'TypeScript'].map(tool => (
                <span key={tool} className="px-3 py-1.5 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium uppercase tracking-wide">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-24 border-t border-border-light dark:border-border-dark pt-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold">Certifications</h3>
          <div className="flex gap-2">
            <button title="Previous certification" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-gray-500">
              <ArrowRight className="rotate-180" size={20} />
            </button>
            <button title="Next certification" className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors text-primary dark:text-white">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="flex overflow-x-auto gap-6 pb-8 no-scrollbar snap-x">
          {[
            { org: "Google", title: "UX Design Professional", date: "Issued Oct 2022", color: "text-yellow-500" },
            { org: "Meta", title: "Front-End Developer", date: "Issued Jan 2023", color: "text-blue-500" },
            { org: "HackerRank", title: "React (Basic)", date: "Issued Mar 2023", color: "text-green-500" },
            { org: "FreeCodeCamp", title: "JavaScript Algorithms", date: "Issued Jun 2022", color: "text-purple-500" },
          ].map((cert, i) => (
            <div key={i} className="min-w-[280px] p-6 bg-white dark:bg-surface-dark border border-gray-100 dark:border-gray-800 hover:border-primary dark:hover:border-white transition-colors snap-center group cursor-default">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className={`${cert.color}`} size={24} />
                <span className="text-xs font-bold uppercase tracking-wide text-gray-400">{cert.org}</span>
              </div>
              <h4 className="text-lg font-bold text-primary dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-white transition-colors">
                {cert.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
