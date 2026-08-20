"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    title: "ClaimCheck",
    subtitle: "Explainable Hallucination Detection",
    description: "AI-powered Chrome extension that detects and verifies factual claims in LLM-generated content using claim-level hallucination detection.",
    tech: ["Python", "FastAPI", "Chrome MV3", "Ollama", "Hugging Face"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
  {
    num: "02",
    title: "DevFlow",
    subtitle: "DevOps Monitoring & Orchestration",
    description: "Cloud-native platform for automated deployment, monitoring, and management of microservices on Kubernetes with CI/CD and real-time observability.",
    tech: ["React", "Node.js", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
  {
    num: "03",
    title: "PCOSense AI",
    subtitle: "AI-Powered Healthcare Assistant",
    description: "Intelligent conversational assistant for PCOS awareness with session memory, voice interaction, OCR-based medical report analysis, and explainable AI responses.",
    tech: ["Next.js", "FastAPI", "Firebase", "OpenAI", "Tesseract OCR"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
  {
    num: "04",
    title: "IntelliMon",
    subtitle: "Real-Time System Monitoring",
    description: "Real-time system monitoring dashboard with live metrics visualization, WebSocket streaming, and performance tracking.",
    tech: ["React", "Node.js", "Socket.io", "Chart.js", "Express"],
    github: "https://github.com/Barath-s-05/IntelliMon",
    live: "https://intellimon.vercel.app/",
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
  const visualY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const borderStyle = index < projects.length - 1 ? "1px solid rgba(30,41,59,0.4)" : "none";

  return (
    <div ref={ref} className="section-gap" style={{ borderBottom: borderStyle }}>
      <div className="container">
        <div className={`project-spread ${index % 2 !== 0 ? "reverse" : ""}`}>
          <motion.div className="project-visual" style={{ y: visualY }}>
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span
                className="mono font-bold"
                style={{
                  fontSize: "clamp(3rem, 6vw, 6rem)",
                  color: "rgba(30, 41, 59, 0.5)",
                }}
              >
                {project.num}
              </span>
            </div>
          </motion.div>

          <div className="project-content">
            <span className="mono text-[0.7rem] tracking-[0.1em]" style={{ color: "var(--text-muted)" }}>
              {project.num}
            </span>
            <div>
              <h3 className="display-md text-white">{project.title}</h3>
              <p className="label mt-2">{project.subtitle}</p>
            </div>
            <p className="body-sm max-w-md">{project.description}</p>
            <div className="flex flex-wrap gap-x-0 gap-y-1">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-6 mt-1">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-cta">
                VIEW CODE
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-cta">
                  LIVE PROJECT
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SelectedWork = () => {
  return (
    <section id="work" className="relative">
      <div className="container" style={{ paddingTop: "clamp(4rem, 8vh, 8rem)" }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="mono text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)" }}>
            01 / Selected Work
          </span>
        </motion.div>
      </div>

      {projects.map((project, i) => (
        <ProjectBlock key={project.title} project={project} index={i} />
      ))}
    </section>
  );
};

export default SelectedWork;
