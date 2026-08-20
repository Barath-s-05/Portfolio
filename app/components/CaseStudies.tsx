"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const studies = [
  {
    num: "01",
    title: "ClaimCheck",
    problem: "LLMs generate plausible but factually incorrect claims. Users have no reliable way to verify AI-generated content in real time.",
    approach: "Designed a Chrome extension architecture with a FastAPI backend integrating Ollama for local inference, Wikipedia API for retrieval, and DeBERTa-v3 NLI for claim classification.",
    solution: "A browser extension that highlights unverified claims in LLM output, classifies them as supported, contradicted, or unverifiable, and provides source attribution with reliability scoring.",
    features: [
      "Real-time claim-level hallucination detection",
      "Automated corrections with source attribution",
      "Reliability scoring and UI-based claim highlighting",
      "Privacy-first with local Ollama inference",
    ],
    tech: ["Python", "FastAPI", "Chrome MV3", "Ollama", "Hugging Face Transformers", "Wikipedia API"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
  {
    num: "02",
    title: "DevFlow",
    problem: "Managing microservices on Kubernetes requires orchestrating CI/CD pipelines, monitoring, security scanning, and rollback workflows across distributed systems.",
    approach: "Built a cloud-native platform combining React dashboards with Node.js orchestration layer, Python ML services for anomaly detection, and Prometheus/Grafana for observability.",
    solution: "An end-to-end DevOps platform with automated deployment workflows, GitOps integration, security scanning, rollback support, and real-time dashboards with log visualization.",
    features: [
      "CI/CD pipeline automation with rollback support",
      "GitOps workflows and DevSecOps security scanning",
      "Real-time observability with Prometheus and Grafana",
      "ML-based anomaly detection for operational metrics",
    ],
    tech: ["React", "Node.js", "Python", "Docker", "Kubernetes", "Jenkins", "Terraform", "Prometheus", "Grafana"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
  {
    num: "03",
    title: "PCOSense AI",
    problem: "PCOS awareness is limited, and early symptoms often go unnoticed. Users need accessible, personalized health guidance without replacing professional medical advice.",
    approach: "Developed a multi-modal AI platform with conversational memory, voice interaction, and OCR-based report analysis using GPT-4o-mini with healthcare safety guardrails.",
    solution: "An AI-powered healthcare assistant providing PCOS awareness, symptom tracking, personalized lifestyle recommendations, and explainable responses with medical report analysis.",
    features: [
      "Conversational AI with session memory and voice input",
      "OCR-based medical report analysis",
      "Explainable AI responses with safety guardrails",
      "Personalized lifestyle recommendations",
    ],
    tech: ["Next.js", "React", "FastAPI", "Python", "Firebase", "OpenAI GPT-4o-mini", "Tesseract OCR", "Tailwind CSS"],
    github: "https://github.com/Barath-s-05",
    live: "",
  },
];

const CaseStudyBlock = ({ study }: { study: (typeof studies)[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.02, 0]);

  return (
    <motion.div ref={ref} className="relative py-20 md:py-28">
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--blue)", opacity: bgOpacity }}
      />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:sticky lg:top-32"
            >
              <span className="mono text-[0.7rem] tracking-[0.1em]" style={{ color: "var(--text-muted)" }}>
                {study.num}
              </span>
              <h3 className="display-md text-white mt-2">{study.title}</h3>
              <div className="flex flex-wrap gap-x-0 gap-y-1 mt-5">
                {study.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
              <div className="flex items-center gap-5 mt-6">
                <a href={study.github} target="_blank" rel="noopener noreferrer" className="link-cta">
                  GITHUB
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                {study.live && (
                  <a href={study.live} target="_blank" rel="noopener noreferrer" className="link-cta">
                    LIVE
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              {[
                { label: "The Problem", text: study.problem },
                { label: "The Approach", text: study.approach },
                { label: "The Solution", text: study.solution },
              ].map((section, i) => (
                <motion.div
                  key={section.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                >
                  <p className="label mb-3">{section.label}</p>
                  <p className="body-lg">{section.text}</p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <p className="label mb-3">Key Features</p>
                <ul className="space-y-2">
                  {study.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 body-sm">
                      <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--blue)" }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CaseStudies = () => {
  return (
    <section id="case-studies" className="relative">
      <div className="container" style={{ paddingTop: "clamp(4rem, 8vh, 8rem)" }}>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <span className="mono text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)" }}>
            04 / Case Studies
          </span>
        </motion.div>
      </div>

      {studies.map((study) => (
        <CaseStudyBlock key={study.title} study={study} />
      ))}
    </section>
  );
};

export default CaseStudies;
