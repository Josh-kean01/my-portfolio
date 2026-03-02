import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="px-6 py-14 md:px-12 lg:px-16 xl:py-14 2xl:py-24 min-h-full flex flex-col justify-center animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 2xl:gap-16 items-start max-w-7xl mx-auto w-full">
        <div className="lg:col-span-5 space-y-7 2xl:space-y-8">
          <div className="space-y-3 2xl:space-y-4">
            {/* tighter for 1366-ish */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-5xl font-bold text-gray-400">
              Let's start a
            </h2>
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-display font-bold text-primary dark:text-white leading-tight">
              Conversation.
            </h1>
          </div>

          <div className="space-y-5 2xl:space-y-6 text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-base xl:text-sm 2xl:text-xl leading-relaxed max-w-md font-light">
            <p>
              I'm currently available for freelance work or full-time opportunities. If you have
              a project that needs some creative touch, I'd love to hear about it.
            </p>

            <div className="pt-3 2xl:pt-4">
              <p className="mb-1">
                <span className="font-bold text-primary dark:text-white">Email: </span>
                thejosh.webdev@gmail.com
              </p>
              <p>
                <span className="font-bold text-primary dark:text-white">Location:</span> Lagos,
                Nigeria (GMT+1)
              </p>
            </div>
          </div>

          <div className="pt-6 2xl:pt-8 flex flex-wrap gap-3 2xl:gap-4">
            <a
              href="#"
              className="group flex items-center gap-2 px-4 2xl:px-5 py-2.5 2xl:py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-full hover:border-primary dark:hover:border-white transition-all shadow-sm"
            >
              <Github size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white 2xl:hidden" />
              <Github size={20} className="hidden 2xl:block text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white" />
              <span className="text-xs 2xl:text-sm font-medium text-gray-700 dark:text-gray-300">
                GitHub
              </span>
            </a>

            <a
              href="#"
              className="group flex items-center gap-2 px-4 2xl:px-5 py-2.5 2xl:py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-full hover:border-blue-600 dark:hover:border-blue-500 transition-all shadow-sm"
            >
              <Linkedin size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500 2xl:hidden" />
              <Linkedin size={20} className="hidden 2xl:block text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
              <span className="text-xs 2xl:text-sm font-medium text-gray-700 dark:text-gray-300">
                LinkedIn
              </span>
            </a>

            <a
              href="mailto:thejosh.webdev@gmail.com"
              className="group flex items-center gap-2 px-4 2xl:px-5 py-2.5 2xl:py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-full hover:border-primary dark:hover:border-white transition-all shadow-sm"
            >
              <Mail size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white 2xl:hidden" />
              <Mail size={20} className="hidden 2xl:block text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white" />
              <span className="text-xs 2xl:text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white dark:bg-surface-dark p-6 md:p-8 xl:p-7 2xl:p-12 rounded-sm shadow-sm border border-gray-100 dark:border-gray-800 relative group">
          <div className="absolute top-4 left-4 w-full h-full border border-primary dark:border-gray-600 rounded-sm -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></div>

          <form className="space-y-7 2xl:space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 2xl:gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-3 text-sm md:text-base xl:text-sm 2xl:text-lg focus:ring-0 focus:border-primary dark:focus:border-white transition-colors placeholder-gray-300 dark:placeholder-gray-600 text-primary dark:text-white"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-3 text-sm md:text-base xl:text-sm 2xl:text-lg focus:ring-0 focus:border-primary dark:focus:border-white transition-colors placeholder-gray-300 dark:placeholder-gray-600 text-primary dark:text-white"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="block text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your project..."
                required
                className="w-full bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-3 text-sm md:text-base xl:text-sm 2xl:text-lg focus:ring-0 focus:border-primary dark:focus:border-white transition-colors placeholder-gray-300 dark:placeholder-gray-600 text-primary dark:text-white resize-none"
              ></textarea>
            </div>

            <div className="pt-3 2xl:pt-4 flex justify-end">
              <button type="submit" className="relative group inline-block">
                <span className="absolute top-1.5 left-1.5 w-full h-full border border-primary dark:border-white bg-transparent transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                <div className="relative bg-primary dark:bg-white text-white dark:text-primary px-8 2xl:px-10 py-3.5 2xl:py-4 font-bold tracking-wide uppercase text-xs 2xl:text-sm border border-primary dark:border-white transition-transform duration-200 group-active:translate-x-1 group-active:translate-y-1">
                  Send Message
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;