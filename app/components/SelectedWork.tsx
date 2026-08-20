"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    title: "ClaimCheck",
    tagline: "Explainable Hallucination Detection",
    category: "AI · Chrome Extension · NLP",
    description: "AI-powered Chrome extension that detects and verifies factual claims in LLM-generated content using claim-level hallucination detection.",
    problem: "LLMs generate plausible but factually incorrect claims. Users have no reliable way to verify AI-generated content in real time.",
    build: "Built a FastAPI backend integrating Ollama for local inference, Wikipedia API for retrieval, and DeBERTa-v3 NLI for claim classification — all served through a Chrome MV3 extension.",
    tech: ["Python", "FastAPI", "Chrome MV3", "Ollama", "Hugging Face", "Wikipedia API"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
  {
    num: "02",
    title: "DevFlow",
    tagline: "DevOps Monitoring & Orchestration",
    category: "DevOps · Cloud Native · Kubernetes",
    description: "Cloud-native platform for automated deployment, monitoring, and management of microservices on Kubernetes with CI/CD and real-time observability.",
    problem: "Managing microservices on Kubernetes requires orchestrating CI/CD pipelines, monitoring, security scanning, and rollback workflows across distributed systems.",
    build: "Combined React dashboards with Node.js orchestration, Python ML services for anomaly detection, and Prometheus/Grafana for full-stack observability.",
    tech: ["React", "Node.js", "Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
  {
    num: "03",
    title: "PCOSense AI",
    tagline: "AI-Powered Healthcare Assistant",
    category: "Healthcare · AI · Full Stack",
    description: "Intelligent conversational assistant for PCOS awareness with session memory, voice interaction, OCR-based medical report analysis, and explainable AI responses.",
    problem: "PCOS awareness is limited, and early symptoms often go unnoticed. Users need accessible, personalized health guidance.",
    build: "Developed a multi-modal AI platform with conversational memory, voice interaction, and OCR-based report analysis using GPT-4o-mini with healthcare safety guardrails.",
    tech: ["Next.js", "FastAPI", "Firebase", "OpenAI", "Tesseract OCR", "Tailwind CSS"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
  {
    num: "04",
    title: "IntelliMon",
    tagline: "Real-Time System Monitoring",
    category: "Monitoring · WebSocket · Visualization",
    description: "Real-time system monitoring dashboard with live metrics visualization, WebSocket streaming, and performance tracking.",
    problem: "System monitoring is often desktop-heavy and lacks real-time browser visibility for distributed environments.",
    build: "Built a real-time dashboard using WebSocket connections for live data streaming with Chart.js visualizations for CPU, memory, and network metrics.",
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
  const visY = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <div
      ref={ref}
      style={{
        padding: "clamp(4rem, 8vh, 7rem) 0",
        borderBottom: index < projects.length - 1 ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="wrap">
        <div className={`proj-grid ${index % 2 !== 0 ? "rev" : ""}`}>
          {/* Visual */}
          <motion.div className="proj-vis" style={{ y: visY }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span
                className="t-mono font-bold"
                style={{ fontSize: "clamp(3rem, 5vw, 5rem)", color: "rgba(30,41,59,0.6)" }}
              >
                {project.num}
              </span>
            </div>
            {/* Simulated UI elements */}
            <div className="absolute" style={{ top: "12%", left: "8%", right: "8%", height: "8%", background: "rgba(30,41,59,0.4)", borderRadius: "4px" }} />
            <div className="absolute" style={{ top: "26%", left: "8%", width: "40%", height: "4%", background: "rgba(30,41,59,0.3)", borderRadius: "2px" }} />
            <div className="absolute" style={{ top: "36%", left: "8%", width: "60%", height: "3%", background: "rgba(30,41,59,0.2)", borderRadius: "2px" }} />
            <div className="absolute" style={{ top: "44%", left: "8%", width: "50%", height: "3%", background: "rgba(30,41,59,0.2)", borderRadius: "2px" }} />
            <div className="absolute" style={{ top: "56%", left: "8%", width: "35%", height: "20%", background: "rgba(59,130,246,0.04)", borderRadius: "4px", border: "1px solid rgba(59,130,246,0.06)" }} />
            <div className="absolute" style={{ top: "56%", left: "48%", width: "44%", height: "20%", background: "rgba(30,41,59,0.25)", borderRadius: "4px" }} />
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,10,15,0.5))" }} />
          </motion.div>

          {/* Content */}
          <div className="proj-body">
            <span className="t-mono" style={{ fontSize: "0.65rem", letterSpacing: "0.1em", color: "var(--text-muted)" }}>
              {project.num}
            </span>
            <div>
              <h3 className="t-subheading text-white">{project.title}</h3>
              <p className="t-label mt-1.5">{project.tagline}</p>
            </div>
            <p className="t-small" style={{ maxWidth: "420px" }}>{project.description}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem", marginTop: "0.5rem" }}>
              <p className="t-label mb-2" style={{ fontSize: "0.55rem" }}>The Problem</p>
              <p className="t-small" style={{ fontSize: "0.8rem", color: "var(--text-muted)", maxWidth: "420px" }}>{project.problem}</p>
            </div>

            <div>
              <p className="t-label mb-2" style={{ fontSize: "0.55rem" }}>The Build</p>
              <p className="t-small" style={{ fontSize: "0.8rem", color: "var(--text-muted)", maxWidth: "420px" }}>{project.build}</p>
            </div>

            <div className="flex flex-wrap gap-x-0 gap-y-1 mt-1">
              {project.tech.map((t) => (
                <span key={t} style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                  {t}<span style={{ color: "rgba(80,90,110,0.4)", margin: "0 0.4rem" }}>·</span>
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-2">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="arrow-link">
                GITHUB
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="arrow-link">
                  LIVE
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
    <section id="work" className="bg-projects relative">
      <div className="wrap" style={{ paddingTop: "clamp(5rem, 10vh, 9rem)" }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-4"
        >
          <span className="t-label">Selected Work</span>
        </motion.div>
      </div>

      {projects.map((project, i) => (
        <ProjectBlock key={project.title} project={project} index={i} />
      ))}
    </section>
  );
};

export default SelectedWork;
