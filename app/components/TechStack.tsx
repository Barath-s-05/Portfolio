"use client";

import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiFlask,
  SiFastapi,
  SiScikitlearn,
  SiPandas,
  SiSocketdotio,
  SiChartdotjs,
  SiExpress,
} from "react-icons/si";

const techStack = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Flask", icon: SiFlask, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#ffffff" },
  { name: "Chart.js", icon: SiChartdotjs, color: "#FF6384" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
];

const TechStack = () => {
  return (
    <section id="stack" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
            Tech Stack
          </span>
        </motion.div>

        <motion.h2
          className="section-title text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tools I work with.
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="glass-subtle p-5 rounded-xl flex items-center gap-3 hover:border-blue-500/15 transition-all duration-300 group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.03 * i }}
            >
              <tech.icon
                className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{ color: tech.color }}
              />
              <span className="text-sm text-[var(--text-secondary)] group-hover:text-white transition-colors duration-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
