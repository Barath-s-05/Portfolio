"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Disease Detection",
    subtitle: "ML-Powered Diagnosis",
    description: "A machine learning system that detects diseases based on symptom input. Built with trained ML models served through a Flask API and a React frontend.",
    tech: ["Python", "Scikit-learn", "Flask", "React", "Pickle"],
    github: "https://github.com/Barath-s-05/DiseaseDetection",
    live: "https://disease-detection-rho.vercel.app/",
  },
  {
    title: "IntelliMon",
    subtitle: "Real-Time Monitoring",
    description: "A real-time system monitoring dashboard with live metrics visualization, performance tracking, and WebSocket-powered data streaming.",
    tech: ["React", "Node.js", "Socket.io", "Chart.js", "Express"],
    github: "https://github.com/Barath-s-05/IntelliMon",
    live: "https://intellimon.vercel.app/",
  },
  {
    title: "CapyCares",
    subtitle: "Mental Wellness App",
    description: "A mental wellness web app focused on emotional support, mood tracking, and self-care assistance with a calming, intuitive interface.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Barath-s-05/CapyCares",
    live: "https://capy-cares.vercel.app/",
  },
  {
    title: "Credit Fraud Detection",
    subtitle: "ML Fraud Analysis",
    description: "An ML system that detects fraudulent credit card transactions using data preprocessing, feature engineering, and classification models.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/Barath-s-05/Credit-Fraud-Detection",
    live: "",
  },
];

const SelectedWork = () => {
  return (
    <section id="work" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
            Selected Work
          </span>
        </motion.div>

        <motion.h2
          className="section-title text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Projects I&apos;ve built.
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card p-8 md:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-blue-400 font-medium tracking-wide">
                      {project.subtitle}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-5 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 md:flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost text-sm py-2.5 px-5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm py-2.5 px-5"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedWork;
