// src/data/projects.ts
export type ProjectCategory = "Web" | "Mobile" | "UI Design";

export type Project = {
  id: string;
  title: string;
  year: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  image: string;

  // detail fields
  role: string;
  timeframe: string;
  client: string;
  overview: string;
  problem: string;
  solution: string;
  stack: string[];
  images: string[];
  liveUrl?: string;
  repoUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: "john-abodunrin",
    title: "John Abodunrin",
    year: "2026",
    category: "Web",
    description:
      "A bold editorial portfolio for a YouTube video editor, built around a scrapbook-inspired visual system, retention-focused storytelling, and a multi-service creator offering.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
    ],

    image: "/assets/projects/john-abodunrin/cover.svg",

    role: "Frontend Developer & UI Designer",
    timeframe: "2026",
    client: "John Abodunrin",

    overview:
      "John Abodunrin is a portfolio website for a YouTube video editor and digital storyteller who specialises in audience retention, pacing, and narrative structure. The site positions him not as a general freelancer, but as a creator-economy specialist working across documentary, true crime, short form, finance, and AI content. Beyond video editing, it presents two supporting services — thumbnail design and scriptwriting — as part of a complete creator stack. The design language borrows from print collage and editorial zines: torn paper labels, tape strips, film perforations, newsprint texture, and a restrained YouTube-red accent against matte black.",

    problem:
      "Most video editor portfolios look the same: a dark grid of embedded videos with no argument behind them. John needed a site that proved his understanding of attention before a visitor watched a single frame. It also had to carry three distinct services without burying the main one, present performance metrics credibly rather than as decoration, and avoid the generic template feel that makes premium pricing hard to justify.",

    solution:
      "I designed and built a six-page React application with a custom scrapbook design system. The homepage opens with a typewriter animation cycling through his three services, then moves through proof metrics, featured work, editing niches, an editor introduction, services, process, tooling, a testimonial carousel, and an FAQ — each section answering a question a prospective client would actually ask. The Work page separates video editing, thumbnail design, and scriptwriting into tabs, with category filtering and hover-to-play video previews. Motion is handled with Framer Motion and Lenis smooth scrolling, tuned to feel edited rather than animated: staggered reveals, paced transitions, and deliberate rhythm. The collage system is built from reusable primitives — paper labels, tape, pins, film strips, dot grids — so the aesthetic stays consistent without becoming visual noise. Layouts were reworked per breakpoint rather than stacked, with dedicated tablet arrangements for the hero, about section, and navigation.",

    stack: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lenis",
      "React Router",
      "Vercel",
    ],

    images: [
      "/assets/projects/john-abodunrin/about-l.png",
      "/assets/projects/john-abodunrin/about-s.png",
      "/assets/projects/john-abodunrin/contact-l.png",
      "/assets/projects/john-abodunrin/home-l.png",
      "/assets/projects/john-abodunrin/home-s.png",
      "/assets/projects/john-abodunrin/menu.png",
      "/assets/projects/john-abodunrin/process-l.png",
      "/assets/projects/john-abodunrin/services-l.png",
      "/assets/projects/john-abodunrin/services-s.png",
      "/assets/projects/john-abodunrin/work-l.png",
    ],

    liveUrl: "https://johnabodunrin.vercel.app/",
    repoUrl: "https://github.com/Josh-kean01/JOHN",
  },
  {
    id: "forth-magazine",
    title: "Forth Magazine",
    year: "2026",
    category: "UI Design",
    description:
      "A premium editorial literary magazine website designed around long-form reading, curated book recommendations, editorial storytelling, and a restrained magazine-inspired visual system.",
    tags: [
      "Figma",
      "UI/UX Design",
      "Editorial Design",
      "Typography",
      "Responsive Design",
    ],

    image: "/assets/projects/forth-magazine/cover.png",

    role: "UI/UX Designer & Editorial Designer",
    timeframe: "2026",
    client: "Concept Project",

    overview:
      "Forth Magazine is a literary magazine website concept designed to feel like a respected print publication translated into a digital reading experience. The project combines editorial stories, essays, interviews, reviews, reading guides, and curated book recommendations within a single visual system. A key part of the concept was integrating affiliate-driven book recommendations without allowing the commercial layer to overpower the publication itself. The result is a calm, typography-led interface where hierarchy, spacing, composition, and reading flow take priority.",

    problem:
      "Forth Magazine needed to balance a serious editorial reading experience with an underlying affiliate-driven business model. The challenge was to introduce book recommendations and commercially relevant content without making the website feel like an ecommerce store, product catalogue, or conventional content blog. The design also needed to support different editorial formats while maintaining a consistent identity across desktop and mobile.",

    solution:
      "I designed Forth Magazine as a complete editorial interface system in Figma, covering the homepage, article experiences, reading guides, category-style layouts, interviews, editorial content lists, and responsive mobile views. The homepage establishes the publication through a dominant editorial story, an Editor's Choice book column, secondary articles, and a restrained newsletter section. Long-form reading pages use a narrow content column, generous spacing, strong typographic hierarchy, and subtle dividers to create a focused reading experience. Affiliate-focused reading guides use large book-cover treatments, editorial commentary, recommendation blocks, and understated outbound links rather than ecommerce-style product cards. I also created responsive mobile layouts that preserve the editorial hierarchy and reading experience on smaller screens.",

    stack: [
      "UI/UX Design",
      "Editorial Design",
      "Figma",
      "Figma Components",
      "Typography",
      "Responsive Design",
      "Design Systems",
      "Prototyping",
    ],

    images: [
      "/assets/projects/forth-magazine/homepage-l.png",
      "/assets/projects/forth-magazine/homepage-s.png",
      "/assets/projects/forth-magazine/reading-guide-l.png",
      "/assets/projects/forth-magazine/reading-guide-l2.png",
      "/assets/projects/forth-magazine/reading-guide-s.png",
      "/assets/projects/forth-magazine/article-l.png",
      "/assets/projects/forth-magazine/article-s.png",
      "/assets/projects/forth-magazine/article-le.png",
      "/assets/projects/forth-magazine/article-se.png",
      "/assets/projects/forth-magazine/category.png",
    ],

    liveUrl: "",
    repoUrl: "",
  },
  {
    id: "tubeinspect-suite",
    title: "TubeInspect Suite",
    year: "2026",
    category: "Web",
    description:
      "A modern YouTube productivity toolkit for extracting metadata, evaluating SEO, downloading thumbnails, creating timestamped clips, and working with video transcripts from one unified interface.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "YouTube APIs"],
    image: "/assets/projects/tubeinspect-suite/cover.svg",

    role: "Frontend Developer & UI Engineer",
    timeframe: "Q1 2026 - 5 Weeks",
    client: "Personal Project",
    overview:
      "TubeInspect Suite is a browser-based collection of tools designed for YouTube creators, marketers, researchers, and content teams. The project brings several commonly separated YouTube utilities into one cohesive experience, including metadata extraction, SEO analysis, thumbnail retrieval, timestamped video clipping, transcript viewing, summary generation, and download guidance. The product was designed around a simple workflow: paste a YouTube link, choose a tool, and receive useful results without navigating through multiple websites. Its interface combines a dark creator-focused visual system, responsive layouts, interactive controls, animated feedback, and reusable components across desktop and mobile.",
    problem:
      "YouTube creators often rely on several disconnected websites to inspect metadata, retrieve thumbnails, create timestamped links, review transcripts, and evaluate video SEO. Many of these tools feel outdated, contain intrusive advertising, hide useful features behind subscriptions, or require users to configure Google Cloud credentials before they can begin. This fragmented workflow creates unnecessary friction, especially for creators who need quick information from a single video link. The challenge was to combine these utilities into one modern product while keeping the experience fast, approachable, responsive, and consistent across every tool.",
    solution:
      "I designed TubeInspect as a unified toolkit with one consistent interaction model across the entire application. Each tool begins with a focused YouTube URL input and produces results inside a purpose-built workspace. The Metadata and SEO Extractor presents titles, descriptions, tags, categories, engagement figures, thumbnail previews, embed code, and an actionable SEO score. The Thumbnail Hub retrieves multiple image resolutions with hover-based copy and save actions. The Video Clipper uses the YouTube IFrame API, custom playback controls, a real seeker, and range markers to generate precise timestamped links and embed code. The Transcript workspace presents searchable caption content, language selection, summaries, statistics, and export-friendly text. I also created a reusable visual system with spotlight cards, gradient accents, animated feedback, loading states, responsive controls, and clear fallback guidance when browser or YouTube restrictions affect a feature.",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "YouTube IFrame API",
      "YouTube Data API",
      "youtube-transcript-api",
      "Responsive UI Design",
    ],
    images: [
      "/assets/projects/tubeinspect-suite/homepage.png",
      "/assets/projects/tubeinspect-suite/homepage-s.png",
      "/assets/projects/tubeinspect-suite/metadata-l.png",
      "/assets/projects/tubeinspect-suite/metadata-s.png",
      "/assets/projects/tubeinspect-suite/thumbnail-l.png",
      "/assets/projects/tubeinspect-suite/thumbnail-s.png",
      "/assets/projects/tubeinspect-suite/video-s.png",
    ],
    liveUrl: "https://youtubeprotools.vercel.app/",
    repoUrl: "https://github.com/Josh-kean01/YoutubePro",
  },
  {
    id: "j-pope-fashion-store",
    title: "J-Pope Fashion Store",
    year: "2026",
    category: "Web",
    description:
      "A luxury fashion e-commerce experience blending editorial storytelling, refined product browsing, and premium shopping interactions across desktop and mobile.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    image: "/assets/projects/j-pope-fashion-store/cover.png",

    role: "Frontend Developer & UI Engineer",
    timeframe: "Q1 2026 — 4 Weeks",
    client: "J-Pope",
    overview:
      "J-Pope Fashion Store is a premium fashion commerce project built to express a minimalist luxury brand through a fully immersive digital experience. The goal was not just to create a storefront, but to design and implement a world around the brand — one that feels editorial, deliberate, and elevated. The site combines cinematic landing moments, collection storytelling, polished product presentation, and practical commerce flows into a cohesive experience. From the manifesto-driven homepage to the lookbook-style collections, account space, cart drawer, mobile menu, and search surfaces, every section was designed to feel intentional and brand-led while still supporting real shopping behavior.",
    problem:
      "Most fashion e-commerce websites fall into one of two extremes: they either feel visually generic and lose the soul of the brand, or they lean too heavily into aesthetics and become difficult to browse, shop, and navigate. For J-Pope, the challenge was to create a site that preserved a premium editorial identity while still functioning like a modern store. The experience needed to support multiple user journeys — first-time visitors discovering the brand, returning users browsing curated collections, customers searching and filtering products, mobile shoppers navigating compact interfaces, and buyers managing wishlist, cart, and account states. The core problem was how to balance atmosphere and usability without sacrificing either.",
    solution:
      "I approached the project as a hybrid of brand storytelling and e-commerce system design. On the presentation side, I built a refined visual language centered on soft neutral palettes, spacious layouts, serif-led luxury typography, carefully framed imagery, and quiet motion that supports rather than distracts. On the commerce side, I designed and implemented clear product archives, category chips and filters, wishlist interactions, account organization, a slide-out shopping bag, and responsive mobile navigation patterns. The homepage was structured to establish identity first, then lead users into featured collections and trending products. Collection and shop pages were designed to feel curated instead of crowded, while overlays such as search, cart, and mobile menu were styled to feel native to the brand rather than bolted on. The result is a fashion storefront that feels premium and editorial but still supports practical shopping flows across desktop and mobile.",
    stack: ["React", "Tailwind CSS", "TypeScript", "Framer Motion", "Vite", "Responsive UI Design",],
    images: [
      "/assets/projects/j-pope-fashion-store/preloader-mobile.png",
      "/assets/projects/j-pope-fashion-store/home-desktop.jpeg",
      "/assets/projects/j-pope-fashion-store/home-mobile.png",
      "/assets/projects/j-pope-fashion-store/shop-desktop.jpeg",
      "/assets/projects/j-pope-fashion-store/cart-drawer-desktop.png",
      "/assets/projects/j-pope-fashion-store/cart-mobile.png",
      "/assets/projects/j-pope-fashion-store/account-desktop.jpeg",
      "/assets/projects/j-pope-fashion-store/collections-mobile.jpeg",
      "/assets/projects/j-pope-fashion-store/search-overlay-mobile.png",
      "/assets/projects/j-pope-fashion-store/shop-mobile.png",
      "/assets/projects/j-pope-fashion-store/mobile-menu.png",
      "/assets/projects/j-pope-fashion-store/trending-mobile.png",
    ],
    liveUrl: "https://j-pope-fashion-store.vercel.app/",
    repoUrl: "https://github.com/Josh-kean01/j-pope-fashion-store.git",
  },
  {
    id: "airtime-tracker-ui",
    title: "Airtime Usage Tracker",
    year: "2026",
    category: "UI Design",
    description:
      "A mobile UI/UX concept for tracking airtime spending—weekly/monthly insights, network breakdown, budgeting alerts, export tools, and complete light/dark themes with key states.",
    tags: ["UI/UX", "Mobile Design", "Design System", "Figma"],
    image: "/assets/projects/airtime-tracker/cover.png",

    role: "Product Designer (UI/UX)",
    timeframe: "2 Weeks",
    client: "Personal / Academic Project",
    overview:
      "Students and everyday mobile users often buy airtime frequently but have no clear way to understand their spending patterns. The goal of Airtime Usage Tracker was to design a mobile experience that makes airtime spending visible and actionable: log purchases, group by network provider, visualize trends, export records, and support budgeting with spending alerts. The design follows a clean, modern dashboard aesthetic with comfortable spacing, soft cards, and a clear typography hierarchy, and it includes complete light and dark theme variants across core flows and states.",
    problem:
      "Airtime spending is typically fragmented across multiple purchases, providers, and dates. Without a dedicated tracker, users can’t easily answer basic questions like: “How much did I spend this week vs this month?”, “Which network drains my money most?”, or “Am I close to my monthly limit?” Existing approaches (notes apps, bank statements, or mental estimates) fail because they don’t categorize by provider, don’t show trends, and don’t provide a frictionless logging flow. In addition, many finance-style trackers feel too complex or table-heavy for quick mobile usage—users need clarity in seconds, not more data.",
    solution:
      "I designed a cards-first dashboard that surfaces the most important answers immediately: weekly and monthly spend summaries, a spending trend visualization, and a quick view of recent transactions. Logging airtime is treated as a high-frequency action, so the Add Airtime flow is a minimal form with strong validation states (e.g., amount required). For analysis, the Summary screen delivers a clear total spend headline, provider comparisons (highest/lowest), and a network breakdown visualization, plus a spending limit control that supports budgeting behavior. The History experience prioritizes speed: provider filter chips, a readable transaction list, a friendly empty state to guide first-time users, and a confirm-delete modal to prevent accidental loss of records. The result is a complete UI system that supports daily usage, edge cases, and dark mode consistency.",
    stack: ["Figma", "Design Tokens", "UI Kit", "iOS/Android Patterns"],
    images: [
      "/assets/projects/airtime-tracker/01-splash-light.jpg",
      "/assets/projects/airtime-tracker/02-splash-dark.jpg",
      "/assets/projects/airtime-tracker/03-home-light.jpg",
      "/assets/projects/airtime-tracker/04-home-dark.jpg",
      "/assets/projects/airtime-tracker/05-add-airtime-light.jpg",
      "/assets/projects/airtime-tracker/06-add-airtime-dark.jpg",
      "/assets/projects/airtime-tracker/07-history-delete-modal-light.jpg",
      "/assets/projects/airtime-tracker/08-history-delete-modal-dark.jpg",
      "/assets/projects/airtime-tracker/09-summary-light.jpg",
      "/assets/projects/airtime-tracker/10-summary-dark.jpg"
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "fintech-dashboard",
    title: "Fintech Dashboard",
    year: "2023",
    category: "Web",
    description:
      "A comprehensive financial analytics platform providing real-time data visualization and asset management tools.",
    tags: ["React", "TypeScript", "D3.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5TALEqexGmAf8JEbTevYfWMIvtj0D1ptotjaDhDBjH1w-VvgMVWZHBL3B-R2XePGyjkHriKhywqrPGTi0Ryut9DBTMgyfc3FiO0eMP4UsYad4nEJ40DMpVsBCJ3okmLZtB194w89QkfPu_VYofpmA3BD2uFn8bsNAPmgcUNX8EQacnnoNR5W93Y0020zkIRgIpWvW7mdDl5Z7HTPtHava9OK6Hh8MI4QZCqz-dT4BBkzg-VUIyaesJY5tdsfEg1qjCmtaYTwgLcQ",

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
    liveUrl: "#",
    repoUrl: "#",
  },

  // 👇 Add detail fields for the rest as you like (even short placeholders).
  {
    id: "mono-ecommerce",
    title: "Mono E-Commerce",
    year: "2023",
    category: "Web",
    description:
      "Minimalist online store template focused on typography and negative space to highlight premium products.",
    tags: ["Next.js", "Tailwind", "Stripe"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaWJEC4RkB0mJOA6hjrqq9cO1FKrDA94Why5b_jkFVR85KXnwoXm_nvdmghEr-eaKwr3exSQbWhngYLWZjRfizfjwDcXZeL1GVoEvrW7uL5t6cXLxvw4qoDicnAb83T8YaiD-pRVJmrBly0v_vq152MCRKvYXnRu_jzjmaYiT7rqlmNbpDlW46qmigSZS2TCYO-DpUMKEjIgZbckNNo_NXKThcCYQ3p5ybOEelsTwFnCodGidJv4moB1eqAzV8dQBSvRBTbS4YYLE",

    role: "Frontend Developer",
    timeframe: "2023 — 4 Weeks",
    client: "Personal / Concept",
    overview:
      "A clean, typography-first storefront template designed to keep attention on product imagery and clear purchase flow.",
    problem:
      "Most templates overuse visual noise which hurts premium perception and readability on smaller screens.",
    solution:
      "Built a minimalist layout system with consistent spacing, strong type hierarchy, and scalable UI components.",
    stack: ["Next.js", "Tailwind CSS", "Stripe"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCaWJEC4RkB0mJOA6hjrqq9cO1FKrDA94Why5b_jkFVR85KXnwoXm_nvdmghEr-eaKwr3exSQbWhngYLWZjRfizfjwDcXZeL1GVoEvrW7uL5t6cXLxvw4qoDicnAb83T8YaiD-pRVJmrBly0v_vq152MCRKvYXnRu_jzjmaYiT7rqlmNbpDlW46qmigSZS2TCYO-DpUMKEjIgZbckNNo_NXKThcCYQ3p5ybOEelsTwFnCodGidJv4moB1eqAzV8dQBSvRBTbS4YYLE",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },

  {
    id: "task-flow",
    title: "Task Flow App",
    year: "2022",
    category: "Mobile",
    description:
      "Productivity application designed for creative professionals to manage complex workflows and team collaboration.",
    tags: ["React Native", "Firebase"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPwNEMXIz_tqhE8frRyZ6Tj1HMN2jUmzM3XVUc1SqDXP2dWZItfO4nZ3zMwkjVYYHgNPoBO3fznMs76_sikmzEil59OlFoAU95OEAG5KaHgWpp6iv6FVbpuRy889nvJsACf5vPIriM6wmhOBCbXZm7GB3Et3VN1IoHgBHD2eMll8JNASIou4lrJ69NDtS4S2xdoWFJeOjW3GXo0iz7JGUYj57jNS-vxAF9ONqbv-A52Kms92q3GFO9KPR50qqEeXHz0GOwKIQ_4oc",

    role: "Mobile Developer",
    timeframe: "2022 — 5 Weeks",
    client: "Personal / Concept",
    overview:
      "A mobile-first workflow tracker that helps teams keep tasks organized, visible, and on schedule.",
    problem:
      "Creative teams lose momentum when task handoffs aren’t clear and updates are scattered across tools.",
    solution:
      "Designed a simple task system with clear states, quick actions, and Firebase-backed syncing.",
    stack: ["React Native", "Firebase"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPwNEMXIz_tqhE8frRyZ6Tj1HMN2jUmzM3XVUc1SqDXP2dWZItfO4nZ3zMwkjVYYHgNPoBO3fznMs76_sikmzEil59OlFoAU95OEAG5KaHgWpp6iv6FVbpuRy889nvJsACf5vPIriM6wmhOBCbXZm7GB3Et3VN1IoHgBHD2eMll8JNASIou4lrJ69NDtS4S2xdoWFJeOjW3GXo0iz7JGUYj57jNS-vxAF9ONqbv-A52Kms92q3GFO9KPR50qqEeXHz0GOwKIQ_4oc",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },

  {
    id: "arch-studio",
    title: "Arch Studio",
    year: "2022",
    category: "UI Design",
    description:
      "A highly visual portfolio for an architecture firm, featuring smooth page transitions and WebGL interactions.",
    tags: ["Vue.js", "Three.js", "GSAP"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMaRan032Re_heII5slU_bUo4GphPYpl55ZBTRcDp7l7syT6TCk-iXHcXaaK58NwwbUGKthsX7H74Xpyq3mCxu9jkbViBdtPIRE6RT8a2v0NRprfdhZKaeBs9olGw3M372x1vDCc3y-2_HRuEydQrYSbi_P6OBGasEuWp-kHhEv8kvXv4jPnlmUnSoxqckGJYImsaZQpENGJb9NWOGaUEOoCfCvuXKOqcsfHNAhU_hIR1POSUhQz7_4SLt_NtFLpJ53VhJDXsrEh0",

    role: "Frontend / Motion",
    timeframe: "2022 — 4 Weeks",
    client: "Arch Studio (Concept)",
    overview:
      "A visual portfolio concept focused on high-impact imagery and smooth transitions to communicate quality.",
    problem:
      "Standard portfolios fail to communicate spatial design work effectively without motion and depth.",
    solution:
      "Built a clean gallery layout with motion-first transitions and interactive visuals.",
    stack: ["Vue.js", "Three.js", "GSAP"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAMaRan032Re_heII5slU_bUo4GphPYpl55ZBTRcDp7l7syT6TCk-iXHcXaaK58NwwbUGKthsX7H74Xpyq3mCxu9jkbViBdtPIRE6RT8a2v0NRprfdhZKaeBs9olGw3M372x1vDCc3y-2_HRuEydQrYSbi_P6OBGasEuWp-kHhEv8kvXv4jPnlmUnSoxqckGJYImsaZQpENGJb9NWOGaUEOoCfCvuXKOqcsfHNAhU_hIR1POSUhQz7_4SLt_NtFLpJ53VhJDXsrEh0",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },

  {
    id: "carbon-metrics",
    title: "Carbon Metrics",
    year: "2021",
    category: "Web",
    description:
      "Interactive data visualization tool helping companies track and reduce their carbon footprint.",
    tags: ["React", "D3.js", "Node.js"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZuK8QIsv6LlrhUx6SbLHek4i5KSu1nCDd8llxZLilJ7gYLbUtvSoShGKnE_4vvsUGjfWdI8--AOuKzaWfpGYGgdQmZkehu5UTm8xHfUetGqweifgvvPHTxRerW3Ivx4SAf6MYmQ-DSYGe-gYE5KrmNNKhJ7BQeC0uy3fwP7O7LoxTpuOGVbgNtYad7VkG53o-zHLIOeGH5yNAoDhO_X7ZW92ZqE0Y2j0kTYe1J0VtxkQGAycUZ41KpuYJrC6AG9l8EYqWDNmc8v4",

    role: "Frontend Engineer",
    timeframe: "2021 — 6 Weeks",
    client: "Concept / Internal",
    overview:
      "A visualization dashboard to track emissions over time and highlight reduction opportunities.",
    problem:
      "Teams lacked a clear view of emissions drivers across time periods and departments.",
    solution:
      "Built interactive charts and summary views with a clean, readable UI and responsive layout.",
    stack: ["React", "D3.js", "Node.js"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZuK8QIsv6LlrhUx6SbLHek4i5KSu1nCDd8llxZLilJ7gYLbUtvSoShGKnE_4vvsUGjfWdI8--AOuKzaWfpGYGgdQmZkehu5UTm8xHfUetGqweifgvvPHTxRerW3Ivx4SAf6MYmQ-DSYGe-gYE5KrmNNKhJ7BQeC0uy3fwP7O7LoxTpuOGVbgNtYad7VkG53o-zHLIOeGH5yNAoDhO_X7ZW92ZqE0Y2j0kTYe1J0VtxkQGAycUZ41KpuYJrC6AG9l8EYqWDNmc8v4",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },
  {
    id: "sonic-stream",
    title: "Sonic Stream",
    year: "2021",
    category: "Mobile",
    description:
      "Conceptual music streaming service with a focus on high-fidelity audio and community-curated playlists.",
    tags: ["Flutter", "Dart"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPRwyWm3DmTH_gVqBHfv5ZtqUMzIZvD4PBvlOKxh3LouFtq_5fL6LvD55QXagNjc3Dfoyx9e-mIn7pxwsjka1OJ9h6eY7q5f2UY2ffq3pmggz9cyHWK3UMT4uKQ4XBM3QttAr8prtfagGSBn3F46YVZwiwDNrjDqeDD8iN_nDITaVJpiRCi7YV-gyriOoslz7H0Xh_Vbx_nm6pGNHumyt7QjxlH3ZrBIRlBZgy4Xdc5j4HfZZK5P7e0MwAUF9C-k_3vYgO0pLjz0A",

    role: "Mobile Engineer",
    timeframe: "2021 — 4 Weeks",
    client: "Concept / Prototype",
    overview:
      "A music streaming concept with curated playlists and a clean player experience focused on discovery.",
    problem:
      "Many player UIs bury key actions and make discovery feel cluttered.",
    solution:
      "Designed a simple browse-to-play flow and a minimal player UI with clear typography.",
    stack: ["Flutter", "Dart"],
    images: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPRwyWm3DmTH_gVqBHfv5ZtqUMzIZvD4PBvlOKxh3LouFtq_5fL6LvD55QXagNjc3Dfoyx9e-mIn7pxwsjka1OJ9h6eY7q5f2UY2ffq3pmggz9cyHWK3UMT4uKQ4XBM3QttAr8prtfagGSBn3F46YVZwiwDNrjDqeDD8iN_nDITaVJpiRCi7YV-gyriOoslz7H0Xh_Vbx_nm6pGNHumyt7QjxlH3ZrBIRlBZgy4Xdc5j4HfZZK5P7e0MwAUF9C-k_3vYgO0pLjz0A",
    ],
    liveUrl: "#",
    repoUrl: "#",
  },

];

// Helper for detail lookup
export function getProjectById(id: string | undefined) {
  if (!id) return null;
  return projectsData.find((p) => p.id === id) ?? null;
}