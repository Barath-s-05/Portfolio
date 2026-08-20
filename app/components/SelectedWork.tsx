"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    title: "Disease Detection",
    subtitle: "ML-Powered Diagnosis",
    description: "Symptom-based disease detection system. Trained ML models served through a Flask API with a React frontend for real-time predictions.",
    tech: ["Python", "Scikit-learn", "Flask", "React"],
    github: "https://github.com/Barath-s-05/DiseaseDetection",
    live: "https://disease-detection-rho.vercel.app/",
  },
  {
    num: "02",
    title: "IntelliMon",
    subtitle: "System Monitoring",
    description: "Real-time system monitoring dashboard with live metrics, WebSocket streaming, and animated chart visualizations.",
    tech: ["React", "Node.js", "Socket.io", "Chart.js"],
    github: "https://github.com/Barath-s-05/IntelliMon",
    live: "https://intellimon.vercel.app/",
  },
  {
    num: "03",
    title: "CapyCares",
    subtitle: "Mental Wellness",
    description: "Mental wellness app for emotional support, mood tracking, and self-care. Calming interface, meaningful interactions.",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/Barath-s-05/CapyCares",
    live: "https://capy-cares.vercel.app/",
  },
  {
    num: "04",
    title: "Credit Fraud Detection",
    subtitle: "ML Fraud Analysis",
    description: "Fraudulent transaction detection using data preprocessing, feature engineering, and classification models on financial data.",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/Barath-s-05/Credit-Fraud-Detection",
    live: "",
  },
];

const ProjectBlock = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <div ref={ref} className="project-full">
      <div className="container-editorial">
        <div className={`project-full-inner ${index % 2 !== 0 ? "reverse" : ""}`}>
          <motion.div
            className="project-visual"
            style={{ y: visualY }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="display-lg text-[var(--blue-dim)]" style={{ fontSize: "clamp(4rem, 8vw, 8rem)" }}>
                {project.num}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-60" />
          </motion.div>

          <div className="project-info">
            <span className="project-number">{project.num}</span>
            <div>
              <h3 className="display-md text-white">{project.title}</h3>
              <p className="label mt-2">{project.subtitle}</p>
            </div>
            <p className="body-lg max-w-md">{project.description}</p>
            <ul className="tech-inline">
              {project.tech.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <div className="flex items-center gap-6 mt-2">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                Code
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow"
                >
                  Live
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      {index < projects.length - 1 && <div className="divider" />}
    </div>
  );
};

const SelectedWork = () => {
  return (
    <section id="work" className="relative">
      <div className="container-editorial pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="label">Selected Work</span>
        </motion.div>
      </div>

      {projects.map((project, i) => (
        <ProjectBlock key={project.title} project={project} index={i} />
      ))}
    </section>
  );
};

export default SelectedWork;
