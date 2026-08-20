"use client";

import { motion } from "framer-motion";

const technologies = [
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "FastAPI",
  "Flask",
  "MongoDB",
  "Docker",
  "Git",
  "Tailwind CSS",
  "Scikit-learn",
  "Pandas",
  "Socket.io",
  "Chart.js",
  "Express",
];

const TechStack = () => {
  return (
    <section id="stack" className="section-spaced">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="label mb-4 block">Tech Stack</span>
          <h2 className="display-md text-white max-w-lg">
            Tools of the trade.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {technologies.map((tech, i) => (
              <motion.span
                key={tech}
                className="text-[var(--text-faint)] hover:text-[var(--text)] transition-colors duration-300 cursor-none"
                style={{
                  fontSize: "clamp(1rem, 2vw, 1.5rem)",
                  fontWeight: 300,
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.02 * i }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
