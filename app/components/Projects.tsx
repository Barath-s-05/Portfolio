"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Disease Detection",
    description: "Detecting diseases using symptoms with machine learning models.",
    tech: ["Python", "Machine Learning", "Scikit-learn", "Flask API", "React", "Pickle Models"],
    github: "https://github.com/Barath-s-05/Disease-Detection",
    live: "https://disease-detection-ten.vercel.app/"
  },
  {
    title: "Hotel Management System",
    description: "DBMS-based hotel system handling bookings, billing, and services.",
    tech: ["Python", "SQLite", "CLI Application", "DBMS Concepts"],
    github: "https://github.com/Barath-s-05/Hotel-Management-System",
    live: "" // add later if deployed
  },
  {
    title: "Credit Fraud Detection",
    description: "ML system that detects fraudulent credit card transactions.",
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Data Preprocessing"],
    github: "https://github.com/Barath-s-05/Credit-Fraud-Detection",
    live: "" // add later if deployed
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span className="neon-text">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass rounded-2xl p-6 border border-cyan-500/20 glass-hover flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -10, boxShadow: "0 0 25px rgba(0,238,255,0.25)" }}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass px-4 py-2 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] transition text-sm"
                >
                  View Code
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 hover:shadow-[0_0_15px_rgba(0,238,255,0.5)] transition text-sm"
                  >
                    View Site
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
