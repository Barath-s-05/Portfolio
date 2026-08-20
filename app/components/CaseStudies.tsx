"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const caseStudies = [
  {
    num: "01",
    title: "Disease Detection",
    problem: "Traditional diagnosis is slow and manual. The goal: a fast, accessible preliminary screening tool that anyone can use.",
    solution: "An ML-powered web app that takes symptom input and returns possible diseases with confidence scores. Flask API serves trained Scikit-learn models. React frontend makes it accessible.",
    features: ["Real-time symptom analysis", "ML model predictions via REST API", "Responsive React UI", "Model serialization with Pickle"],
    tech: ["Python", "Scikit-learn", "Flask", "React"],
    github: "https://github.com/Barath-s-05/DiseaseDetection",
    live: "https://disease-detection-rho.vercel.app/",
  },
  {
    num: "02",
    title: "IntelliMon",
    problem: "System monitoring is often desktop-heavy and lacks real-time browser visibility. The need: lightweight, live metrics in a single view.",
    solution: "A real-time monitoring dashboard using WebSocket connections for live data streaming. Chart.js visualizes CPU, memory, and network metrics with smooth animations.",
    features: ["Live WebSocket data streaming", "Real-time chart visualizations", "Lightweight browser-based UI", "Scalable Node.js backend"],
    tech: ["React", "Node.js", "Socket.io", "Chart.js"],
    github: "https://github.com/Barath-s-05/IntelliMon",
    live: "https://intellimon.vercel.app/",
  },
];

const CaseStudyBlock = ({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.03, 0]);

  return (
    <motion.div
      ref={ref}
      className="relative py-24 md:py-32"
      style={{ opacity: 1 }}
    >
      <motion.div
        className="absolute inset-0 bg-[var(--blue)] pointer-events-none"
        style={{ opacity: bgOpacity }}
      />

      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="sticky top-32"
            >
              <span className="project-number">{study.num}</span>
              <h3 className="display-md text-white mt-3">{study.title}</h3>
              <div className="flex flex-wrap gap-2 mt-6">
                {study.tech.map((t) => (
                  <li key={t} className="tech-inline list-none">
                    <span>{t}</span>
                  </li>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-8">
                <a href={study.github} target="_blank" rel="noopener noreferrer" className="link-arrow">
                  Code
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
                {study.live && (
                  <a href={study.live} target="_blank" rel="noopener noreferrer" className="link-arrow">
                    Live
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <p className="label mb-3">Problem</p>
                <p className="body-lg">{study.problem}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <p className="label mb-3">What I Built</p>
                <p className="body-lg">{study.solution}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="label mb-3">Key Features</p>
                <ul className="space-y-2">
                  {study.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 body-sm">
                      <span className="w-1 h-1 rounded-full bg-[var(--blue)] flex-shrink-0" />
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
      <div className="container-editorial pt-24 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="label">Deep Dives</span>
        </motion.div>
      </div>

      {caseStudies.map((study, i) => (
        <CaseStudyBlock key={study.title} study={study} index={i} />
      ))}
    </section>
  );
};

export default CaseStudies;
