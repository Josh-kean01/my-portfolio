export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogArticle = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  intro: string;
  sections: BlogSection[];
};

export const blogs: BlogArticle[] = [
  {
    slug: "mastering-tailwind-css-configuration",
    date: "Oct 24, 2023",
    title: "Mastering Tailwind CSS Configuration",
    excerpt:
      "Tailwind CSS is more than just utility classes. Learn how to leverage the configuration file to build a robust, scalable design system for your projects.",
    readTime: "5 MIN READ",
    intro:
      "Tailwind becomes much more useful when it reflects the way a team actually designs and builds. The configuration file is not just a place for one-off color tweaks; it is where the visual rules of a product become repeatable decisions.",
    sections: [
      {
        heading: "Start with the system you already have",
        paragraphs: [
          "Before adding new tokens, audit the patterns already present in the interface. Look for repeated colors, spacing values, type scales, radii, and shadows. Those repetitions are the raw material for a design system.",
          "A small, intentional theme is easier to maintain than a long list of nearly identical values. Name tokens by purpose, such as surface, border, accent, and muted text, so components do not become tied to a single page or feature.",
        ],
      },
      {
        heading: "Use semantic tokens for flexibility",
        paragraphs: [
          "Semantic tokens let a component describe what a value means instead of where it came from. A button using a primary background can keep the same class while the light and dark themes assign different values to that token.",
          "This also makes redesigns less expensive. When the visual direction changes, you can update the theme in one place instead of searching through every component for hard-coded colors.",
        ],
      },
      {
        heading: "Keep configuration close to the product",
        paragraphs: [
          "The best Tailwind configuration is specific enough to create consistency without becoming a second framework. Extend the defaults when they are useful, remove choices only when they create confusion, and document decisions that are not obvious.",
          "Treat the configuration as living product infrastructure. Review it when the interface grows, and let real component needs guide the next addition rather than adding tokens speculatively.",
        ],
      },
    ],
  },
  {
    slug: "the-art-of-minimalist-web-design",
    date: "Sep 12, 2023",
    title: "The Art of Minimalist Web Design",
    excerpt:
      "Minimalism isn't just about removing elements; it's about prioritizing content. Explore the principles that make simple interfaces powerful.",
    readTime: "8 MIN READ",
    intro:
      "Minimal interfaces are not empty interfaces. They are carefully edited experiences where every visible choice helps a person understand what matters and what they can do next.",
    sections: [
      {
        heading: "Remove friction, not personality",
        paragraphs: [
          "A minimalist layout should make the important path obvious, but it should still feel like it belongs to a real brand or person. Voice, typography, motion, and a considered accent color can create personality without adding clutter.",
          "The goal is not to reduce the number of elements at any cost. It is to remove anything that competes with the task, repeats information, or asks the user to make an unnecessary decision.",
        ],
      },
      {
        heading: "Let hierarchy do the work",
        paragraphs: [
          "Strong hierarchy gives a simple page its rhythm. Use scale, spacing, contrast, and alignment to distinguish a primary message from supporting detail. When everything is loud, nothing is prioritized.",
          "A useful test is to blur the page or squint at it. The main action and the main idea should still be easy to find. If they are not, adjust the hierarchy before adding more decoration.",
        ],
      },
      {
        heading: "Design the quiet states too",
        paragraphs: [
          "Minimalism is most visible in the moments between actions: empty states, loading states, validation messages, and error recovery. These moments need enough guidance to be useful without overwhelming the user.",
          "When those quieter states are designed with the same care as the main screen, the whole product feels calmer and more trustworthy.",
        ],
      },
    ],
  },
  {
    slug: "accessibility-first-development",
    date: "Aug 05, 2023",
    title: "Accessibility First Development",
    excerpt:
      "Why accessibility should never be an afterthought. Practical tips for ensuring your frontend code is inclusive for all users.",
    readTime: "6 MIN READ",
    intro:
      "Accessibility is part of frontend quality, not a separate polish pass. Building with it from the first component usually produces clearer structure, better feedback, and a more resilient experience for everyone.",
    sections: [
      {
        heading: "Begin with meaningful HTML",
        paragraphs: [
          "Semantic elements provide useful structure before any CSS or JavaScript is added. Headings should describe the content hierarchy, buttons should perform actions, and links should move people to another location.",
          "This gives assistive technology a reliable map of the page and makes the interface easier to navigate with a keyboard or other input method.",
        ],
      },
      {
        heading: "Make every interaction understandable",
        paragraphs: [
          "Interactive elements need a visible focus state, a clear label, and feedback after an action. Icon-only controls should expose an accessible name, while form fields should be paired with explicit labels rather than relying on placeholders.",
          "Do not communicate meaning with color alone. Pair color changes with text, icons, position, or another visual cue so important information remains available in different conditions.",
        ],
      },
      {
        heading: "Test with real constraints",
        paragraphs: [
          "Automated checks can catch missing labels and invalid structure, but they cannot replace using the interface. Navigate with only a keyboard, zoom the page, test reduced motion, and try a screen reader when possible.",
          "Small, frequent checks are more effective than waiting for a final accessibility audit. They keep inclusive behavior close to the code that created it.",
        ],
      },
    ],
  },
  {
    slug: "optimizing-react-performance",
    date: "Jul 19, 2023",
    title: "Optimizing React Performance",
    excerpt:
      "A deep dive into memoization, lazy loading, and other techniques to keep your React applications running smoothly at scale.",
    readTime: "12 MIN READ",
    intro:
      "React performance work is most effective when it starts with evidence. Before reaching for memoization or splitting code, find the interaction or render that users can actually feel and measure what is causing it.",
    sections: [
      {
        heading: "Measure before you optimize",
        paragraphs: [
          "Use the browser Performance panel and React DevTools Profiler to understand where time is spent. Look for long tasks, repeated renders, expensive calculations, and network requests that block the first useful view.",
          "A clear baseline turns optimization into an engineering decision. It also helps you avoid making code harder to understand for a performance gain that users will never notice.",
        ],
      },
      {
        heading: "Keep rendering work local",
        paragraphs: [
          "Large state objects and broad context providers can cause updates to travel farther than necessary. Keep state near the components that own it, and split providers when independent parts of the interface change at different times.",
          "Stable component boundaries often help more than adding memoization everywhere. Memoize a measured expensive calculation or component, but do not make every render path harder to follow by default.",
        ],
      },
      {
        heading: "Load less, then do less",
        paragraphs: [
          "Code splitting and lazy loading reduce the amount of JavaScript needed for the first route. Image sizing, modern formats, and lazy loading can make an equally large difference for visual content.",
          "After the initial load, focus on interaction cost. Debounce expensive filtering, virtualize very long lists, and move work away from the critical input path so the interface continues to feel responsive.",
        ],
      },
    ],
  },
];

export const getBlogBySlug = (slug?: string) => blogs.find((blog) => blog.slug === slug);
