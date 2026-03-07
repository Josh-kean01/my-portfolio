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