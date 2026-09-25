import React from 'react';
import { Code2, Palette, Terminal, Smartphone } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: Array<{ name: string, icon?: string }> }) => (
  <div className="group">
    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-light dark:border-border-dark">
      <Icon className="text-2xl text-primary dark:text-white" size={28} />
      <h2 className="text-xl font-display font-bold tracking-wide uppercase text-primary dark:text-white">{title}</h2>
    </div>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, idx) => (
        <div key={idx} className="cursor-default px-4 py-3 bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-white transition-all duration-300 rounded-sm flex items-center gap-2 group/chip">
          {skill.icon && <img src={skill.icon} alt={skill.name} className="w-5 h-5 opacity-60 grayscale group-hover/chip:grayscale-0 group-hover/chip:opacity-100 transition-all" />}
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <div className="px-6 py-24 md:px-12 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-display font-light text-gray-400 mb-6">
          Expertise & <br />
          <span className="text-primary dark:text-white font-bold">Capabilities</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          I have cultivated a diverse set of skills through years of hands-on experience and continuous learning. My focus is on creating performant, accessible, and visually stunning digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
        <SkillCard
          icon={Code2}
          title="Frontend Development"
          skills={[
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss' },
            { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
          ]}
        />

        <SkillCard
          icon={Palette}
          title="Design & UI/UX"
          skills={[
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
            { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' },
            { name: 'Prototyping' },
            { name: 'Wireframing' },
            { name: 'Design Systems' },
          ]}
        />

        <SkillCard
          icon={Terminal}
          title="Tooling"
          skills={[
            { name: 'Git & GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Webpack', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg' },
            { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg' },
            { name: 'Command Line' },
            { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg' },
          ]}
        />

        <SkillCard
          icon={Smartphone}
          title="Mobile & Backend"
          skills={[
            { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
            { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
          ]}
        />
      </div>

      <div className="mt-24 text-center md:text-left">
        <div className="relative inline-block group cursor-pointer">
          <div className="absolute top-1.5 left-1.5 w-full h-full border border-primary dark:border-white transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1"></div>
          <a href="../adekunle-joshua-resume.pdf" download className="relative block bg-primary text-white dark:bg-white dark:text-black px-10 py-4 text-sm uppercase tracking-widest font-bold border border-transparent hover:shadow-xl transition-all duration-300">
            Download Full Resumé
          </a>
        </div>
      </div>
    </div>
  );
};

export default Skills;
