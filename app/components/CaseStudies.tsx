"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Disease Detection",
    problem: "Traditional disease diagnosis can be slow and reliant on manual symptom analysis. The goal was to create a fast, accessible preliminary screening tool.",
    solution: "Built an ML-powered web app that takes symptom input and returns possible diseases with confidence scores. A Flask API serves trained Scikit-learn models, while a React frontend provides an intuitive interface.",
    tech: ["Python", "Scikit-learn", "Flask", "React", "Pickle"],
    features: ["Real-time symptom analysis", "ML model predictions via REST API", "Responsive React UI", "Model serialization with Pickle"],
    github: "https://github.com/Barath-s-05/DiseaseDetection",
    live: "https://disease-detection-rho.vercel.app/",
  },
  {
    title: "IntelliMon",
    problem: "System monitoring tools are often heavy, desktop-based, and lack real-time visibility. The need was for a lightweight, browser-based dashboard with live metrics.",
    solution: "Developed a real-time monitoring dashboard using WebSocket connections for live data streaming. Chart.js visualizes CPU, memory, and network metrics with smooth animations.",
    tech: ["React", "Node.js", "Socket.io", "Chart.js", "Express"],
    features: ["Live WebSocket data streaming", "Real-time chart visualizations", "Lightweight browser-based UI", "Scalable Node.js backend"],
    github: "https://github.com/Barath-s-05/IntelliMon",
    live: "https://intellimon.vercel.app/",
  },
];

const CaseStudies = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
            Deep Dives
          </span>
        </motion.div>

        <motion.h2
          className="section-title text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          How I build things.
        </motion.h2>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              className="case-study p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              <h3 className="text-3xl font-bold text-white mb-8">{study.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
                    Problem
                  </h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
                    What I Built
                  </h4>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {study.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                      <span className="w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-3">
                  Tech
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <a
                  href={study.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  View Code
                </a>
                {study.live && (
                  <a
                    href={study.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
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

export default CaseStudies;
