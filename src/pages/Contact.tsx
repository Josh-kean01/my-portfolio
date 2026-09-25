import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Github, Mail, Twitter } from "lucide-react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mdekdqoe");

  return (
    <div className="px-6 py-14 md:px-12 lg:px-16 xl:py-14 2xl:py-24 min-h-full flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12 2xl:gap-16 items-start max-w-7xl mx-auto w-full">
        <div className="lg:col-span-5 space-y-7 2xl:space-y-8 h-full flex flex-col justify-center">
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
                <a href="mailto:adekunlej960@gmail.com" className="hover:text-primary dark:hover:text-white transition-colors">
                  adekunlej960@gmail.com
                </a>
              </p>
              <p>
                <span className="font-bold text-primary dark:text-white">Location:</span> Lagos,
                Nigeria (GMT+1)
              </p>
            </div>
          </div>

          <div className="pt-6 2xl:pt-8 flex flex-wrap gap-3 2xl:gap-4">
            <a
              href="https://github.com/Josh-kean01/"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-4 2xl:px-5 py-2.5 2xl:py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-sm hover:border-primary dark:hover:border-white transition-all shadow-sm"
            >
              <Github size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white 2xl:hidden" />
              <Github size={20} className="hidden 2xl:block text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white" />
              <span className="text-xs 2xl:text-sm font-medium text-gray-700 dark:text-gray-300">
                GitHub
              </span>
            </a>

            <a
              href="https://x.com/theJoshUx"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-2 px-4 2xl:px-5 py-2.5 2xl:py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-sm hover:border-primary dark:hover:border-white transition-all shadow-sm"
            >
              <Twitter size={18} className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white 2xl:hidden" />
              <Twitter size={20} className="hidden 2xl:block text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white" />
              <span className="text-xs 2xl:text-sm font-medium text-gray-700 dark:text-gray-300">
                Twitter/X
              </span>
            </a>

            <a
              href="mailto:adekunlej960@gmail.com"
              className="group flex items-center gap-2 px-4 2xl:px-5 py-2.5 2xl:py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-sm hover:border-primary dark:hover:border-white transition-all shadow-sm"
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

          {state.succeeded ? (
            <div className="min-h-[360px] flex flex-col justify-center space-y-4" role="status" aria-live="polite">
              <span className="text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-400">
                Message sent
              </span>
              <h2 className="font-display text-2xl 2xl:text-3xl font-bold text-primary dark:text-white">
                Thanks for reaching out.
              </h2>
              <p className="text-sm md:text-base 2xl:text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                Your message is on its way. I will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form className="space-y-7 2xl:space-y-8" onSubmit={handleSubmit}>
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
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-3 text-sm md:text-base xl:text-sm 2xl:text-lg focus:ring-0 focus:!border-b-2 focus:!border-primary dark:focus:!border-white focus:outline-none transition-colors placeholder-gray-300 dark:placeholder-gray-600 text-primary dark:text-white"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
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
                    className="w-full bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-3 text-sm md:text-base xl:text-sm 2xl:text-lg focus:ring-0 focus:!border-b-2 focus:!border-primary dark:focus:!border-white focus:outline-none transition-colors placeholder-gray-300 dark:placeholder-gray-600 text-primary dark:text-white"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Tell me what you would like to build..."
                  required
                  className="w-full bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-3 text-sm md:text-base xl:text-sm 2xl:text-lg focus:ring-0 focus:!border-b-2 focus:!border-primary dark:focus:!border-white focus:outline-none transition-colors placeholder-gray-300 dark:placeholder-gray-600 text-primary dark:text-white"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <fieldset className="md:col-span-2 space-y-3">
                <legend className="block text-[10px] 2xl:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  What are you looking for?
                </legend>
                <div className="flex flex-wrap gap-2 2xl:gap-3">
                  {["Website", "Mobile App", "UI/UX Design", "Website Redesign", "Other"].map(
                    (projectType) => (
                      <label
                        key={projectType}
                        className="group cursor-pointer rounded-sm border border-gray-200 dark:border-gray-700 px-3 py-2 2xl:px-4 2xl:py-2.5 text-xs 2xl:text-sm text-gray-600 dark:text-gray-300 transition-colors has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-white dark:has-[:checked]:border-white dark:has-[:checked]:bg-white dark:has-[:checked]:text-black"
                      >
                        <input
                          type="radio"
                          name="projectType"
                          value={projectType}
                          required
                          className="sr-only"
                        />
                        {projectType}
                      </label>
                    ),
                  )}
                </div>
                <ValidationError prefix="Project type" field="projectType" errors={state.errors} />
              </fieldset>

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
                  className="w-full bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700 px-0 py-3 text-sm md:text-base xl:text-sm 2xl:text-lg focus:ring-0 focus:!border-b-2 focus:!border-primary dark:focus:!border-white focus:outline-none transition-colors placeholder-gray-300 dark:placeholder-gray-600 text-primary dark:text-white resize-none"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {state.errors && (
                <p className="text-sm text-red-600 dark:text-red-400" role="alert">
                  Something went wrong while sending your message. Please try again.
                </p>
              )}

              <div className="pt-3 2xl:pt-4 flex justify-end">
                <button type="submit" disabled={state.submitting} className="relative group inline-block disabled:opacity-60 disabled:cursor-wait">
                  <span className="absolute top-1.5 left-1.5 w-full h-full border border-primary dark:border-white bg-transparent transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"></span>
                  <div className="relative bg-primary dark:bg-white text-white dark:text-black px-8 2xl:px-10 py-3.5 2xl:py-4 font-bold tracking-wide uppercase text-xs 2xl:text-sm border border-primary dark:border-white transition-transform duration-200 group-active:translate-x-1 group-active:translate-y-1">
                    {state.submitting ? "Sending..." : "Send Message"}
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;