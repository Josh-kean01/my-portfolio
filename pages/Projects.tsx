import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, ExternalLink, Search } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
}

const projectsData: Project[] = [
  {
    id: 'fintech-dashboard',
    title: 'Fintech Dashboard',
    year: '2023',
    category: 'Web',
    description: 'A comprehensive financial analytics platform providing real-time data visualization and asset management tools.',
    tags: ['React', 'TypeScript', 'D3.js'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5TALEqexGmAf8JEbTevYfWMIvtj0D1ptotjaDhDBjH1w-VvgMVWZHBL3B-R2XePGyjkHriKhywqrPGTi0Ryut9DBTMgyfc3FiO0eMP4UsYad4nEJ40DMpVsBCJ3okmLZtB194w89QkfPu_VYofpmA3BD2uFn8bsNAPmgcUNX8EQacnnoNR5W93Y0020zkIRgIpWvW7mdDl5Z7HTPtHava9OK6Hh8MI4QZCqz-dT4BBkzg-VUIyaesJY5tdsfEg1qjCmtaYTwgLcQ',
  },
  {
    id: 'mono-ecommerce',
    title: 'Mono E-Commerce',
    year: '2023',
    category: 'Web',
    description: 'Minimalist online store template focused on typography and negative space to highlight premium products.',
    tags: ['Next.js', 'Tailwind', 'Stripe'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaWJEC4RkB0mJOA6hjrqq9cO1FKrDA94Why5b_jkFVR85KXnwoXm_nvdmghEr-eaKwr3exSQbWhngYLWZjRfizfjwDcXZeL1GVoEvrW7uL5t6cXLxvw4qoDicnAb83T8YaiD-pRVJmrBly0v_vq152MCRKvYXnRu_jzjmaYiT7rqlmNbpDlW46qmigSZS2TCYO-DpUMKEjIgZbckNNo_NXKThcCYQ3p5ybOEelsTwFnCodGidJv4moB1eqAzV8dQBSvRBTbS4YYLE',
  },
  {
    id: 'task-flow',
    title: 'Task Flow App',
    year: '2022',
    category: 'Mobile',
    description: 'Productivity application designed for creative professionals to manage complex workflows and team collaboration.',
    tags: ['React Native', 'Firebase'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPwNEMXIz_tqhE8frRyZ6Tj1HMN2jUmzM3XVUc1SqDXP2dWZItfO4nZ3zMwkjVYYHgNPoBO3fznMs76_sikmzEil59OlFoAU95OEAG5KaHgWpp6iv6FVbpuRy889nvJsACf5vPIriM6wmhOBCbXZm7GB3Et3VN1IoHgBHD2eMll8JNASIou4lrJ69NDtS4S2xdoWFJeOjW3GXo0iz7JGUYj57jNS-vxAF9ONqbv-A52Kms92q3GFO9KPR50qqEeXHz0GOwKIQ_4oc',
  },
  {
    id: 'arch-studio',
    title: 'Arch Studio',
    year: '2022',
    category: 'UI Design',
    description: 'A highly visual portfolio for an architecture firm, featuring smooth page transitions and WebGL interactions.',
    tags: ['Vue.js', 'Three.js', 'GSAP'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMaRan032Re_heII5slU_bUo4GphPYpl55ZBTRcDp7l7syT6TCk-iXHcXaaK58NwwbUGKthsX7H74Xpyq3mCxu9jkbViBdtPIRE6RT8a2v0NRprfdhZKaeBs9olGw3M372x1vDCc3y-2_HRuEydQrYSbi_P6OBGasEuWp-kHhEv8kvXv4jPnlmUnSoxqckGJYImsaZQpENGJb9NWOGaUEOoCfCvuXKOqcsfHNAhU_hIR1POSUhQz7_4SLt_NtFLpJ53VhJDXsrEh0',
  },
  {
    id: 'carbon-metrics',
    title: 'Carbon Metrics',
    year: '2021',
    category: 'Web',
    description: 'Interactive data visualization tool helping companies track and reduce their carbon footprint.',
    tags: ['React', 'D3.js', 'Node.js'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZuK8QIsv6LlrhUx6SbLHek4i5KSu1nCDd8llxZLilJ7gYLbUtvSoShGKnE_4vvsUGjfWdI8--AOuKzaWfpGYGgdQmZkehu5UTm8xHfUetGqweifgvvPHTxRerW3Ivx4SAf6MYmQ-DSYGe-gYE5KrmNNKhJ7BQeC0uy3fwP7O7LoxTpuOGVbgNtYad7VkG53o-zHLIOeGH5yNAoDhO_X7ZW92ZqE0Y2j0kTYe1J0VtxkQGAycUZ41KpuYJrC6AG9l8EYqWDNmc8v4',
  },
  {
    id: 'sonic-stream',
    title: 'Sonic Stream',
    year: '2021',
    category: 'Mobile',
    description: 'Conceptual music streaming service with a focus on high-fidelity audio and community-curated playlists.',
    tags: ['Flutter', 'Dart'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPRwyWm3DmTH_gVqBHfv5ZtqUMzIZvD4PBvlOKxh3LouFtq_5fL6LvD55QXagNjc3Dfoyx9e-mIn7pxwsjka1OJ9h6eY7q5f2UY2ffq3pmggz9cyHWK3UMT4uKQ4XBM3QttAr8prtfagGSBn3F46YVZwiwDNrjDqeDD8iN_nDITaVJpiRCi7YV-gyriOoslz7H0Xh_Vbx_nm6pGNHumyt7QjxlH3ZrBIRlBZgy4Xdc5j4HfZZK5P7e0MwAUF9C-k_3vYgO0pLjz0A',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All Work');
  const [search, setSearch] = useState('');

  const filteredProjects = projectsData.filter(project => {
    const matchesFilter = filter === 'All Work' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="px-6 py-24 md:px-12 lg:px-20 max-w-7xl mx-auto animate-fade-in-up">
      <header className="mb-16">
        <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6 tracking-tight text-primary dark:text-white">
          Selected Projects
        </h1>
        <p className="text-lg lg:text-xl text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          A curated selection of my work in <strong className="text-primary dark:text-gray-200 font-semibold">web development</strong> and <strong className="text-primary dark:text-gray-200 font-semibold">UI design</strong>. Building digital products that focus on functionality and aesthetics.
        </p>
      </header>

      {/* Filter & Search */}
      <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-border-light dark:border-border-dark pb-8">
        <div className="flex flex-wrap gap-2">
          {['All Work', 'Web', 'Mobile', 'UI Design'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 text-sm font-medium transition-all rounded-sm 
                ${filter === cat 
                  ? 'bg-primary text-white dark:bg-white dark:text-primary' 
                  : 'text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-white'}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64 group">
          <input 
            type="text" 
            placeholder="Search projects..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent border-b border-gray-300 dark:border-gray-700 py-2 pl-0 pr-8 text-sm focus:ring-0 focus:border-primary dark:focus:border-white transition-colors placeholder-gray-400 text-primary dark:text-white"
          />
          <Search size={18} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {filteredProjects.map((project) => (
          <article key={project.id} className="group">
            <Link to={`/projects/${project.id}`} className="block">
              <div className="relative overflow-hidden mb-5 bg-gray-200 dark:bg-gray-800 aspect-[4/3] border border-border-light dark:border-border-dark">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="w-10 h-10 bg-white dark:bg-black flex items-center justify-center text-primary dark:text-white shadow-lg border border-border-light dark:border-gray-700">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </Link>
            
            <div className="flex justify-between items-start mb-2">
              <Link to={`/projects/${project.id}`}>
                <h3 className="text-xl font-bold font-display text-primary dark:text-white group-hover:underline decoration-1 underline-offset-4 decoration-gray-400">
                  {project.title}
                </h3>
              </Link>
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 border border-gray-200 dark:border-gray-800 px-2 py-1 rounded-sm">
                {project.year}
              </span>
            </div>
            
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 text-center">
        <button className="relative inline-block bg-primary dark:bg-white text-white dark:text-primary font-medium px-10 py-4 transition-transform active:translate-y-1">
          Load More Projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
