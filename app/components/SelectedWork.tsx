"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    num: "01",
    cat: "Machine Learning · NLP",
    title: "ClaimCheck",
    tagline: "Explainable Hallucination Detection",
    desc: "AI-powered Chrome extension that detects and verifies factual claims in LLM-generated content using claim-level hallucination detection.",
    problem: "LLMs generate plausible but factually incorrect claims. Users have no reliable way to verify AI-generated content.",
    build: "FastAPI backend integrating Ollama for local inference, Wikipedia API for retrieval, and DeBERTa-v3 NLI for claim classification — served through a Chrome MV3 extension.",
    tech: ["Python", "FastAPI", "Chrome MV3", "Ollama", "Hugging Face"],
    github: "https://github.com/Barath-s-05",
    live: "",
    layout: "a" as const,
  },
  {
    num: "02",
    cat: "DevOps · Cloud Native",
    title: "DevFlow",
    tagline: "DevOps Monitoring & Orchestration",
    desc: "Cloud-native platform for automated deployment, monitoring, and management of microservices on Kubernetes with CI/CD and real-time observability.",
    problem: "Managing microservices on Kubernetes requires orchestrating CI/CD pipelines, monitoring, security scanning, and rollback workflows.",
    build: "React dashboards with Node.js orchestration, Python ML services for anomaly detection, and Prometheus/Grafana for full-stack observability.",
    tech: ["React", "Node.js", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
    github: "https://github.com/Barath-s-05",
    live: "",
    layout: "b" as const,
  },
  {
    num: "03",
    cat: "Healthcare · AI",
    title: "PCOSense AI",
    tagline: "AI-Powered Healthcare Assistant",
    desc: "Intelligent conversational assistant for PCOS awareness with session memory, voice interaction, OCR-based medical report analysis, and explainable AI.",
    features: ["VOICE", "OCR", "MEMORY", "EXPLAINABLE AI"],
    tech: ["Next.js", "FastAPI", "Firebase", "OpenAI", "Tesseract OCR"],
    github: "https://github.com/Barath-s-05",
    live: "",
    layout: "c" as const,
  },
  {
    num: "04",
    cat: "Monitoring · Real-Time",
    title: "IntelliMon",
    tagline: "Real-Time System Monitoring",
    desc: "Real-time system monitoring dashboard with live metrics visualization, WebSocket streaming, and performance tracking.",
    tech: ["React", "Node.js", "Socket.io", "Chart.js", "Express"],
    github: "https://github.com/Barath-s-05/IntelliMon",
    live: "https://intellimon.vercel.app/",
    layout: "d" as const,
  },
];

/* ═══════════════════════════════════════════
   LAYOUT A — ClaimCheck — Hero project, large visual left
   ═══════════════════════════════════════════ */
const LayoutA = ({ p }: { p: typeof projects[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const visY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <div ref={ref} style={{ padding: "clamp(5rem,10vh,8rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="w">
        <div className="proj-a">
          <motion.div className="p-vis" style={{ y: visY, aspectRatio: "4/3" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="mono font-bold" style={{ fontSize: "clamp(4rem,8vw,8rem)", color: "rgba(30,41,59,0.5)" }}>{p.num}</span>
            </div>
            <div className="absolute" style={{ inset: "8%", background: "rgba(30,41,59,0.25)", borderRadius: "6px", border: "1px solid rgba(59,130,246,0.04)" }}>
              <div style={{ height: "12%", margin: "6% 6% 0", background: "rgba(30,41,59,0.5)", borderRadius: "3px" }} />
              <div style={{ display: "flex", gap: "4%", height: "70%", margin: "4% 6% 0" }}>
                <div style={{ flex: 1, background: "rgba(59,130,246,0.03)", borderRadius: "3px", border: "1px solid rgba(59,130,246,0.05)" }} />
                <div style={{ flex: 1, background: "rgba(30,41,59,0.3)", borderRadius: "3px" }} />
              </div>
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 55%,rgba(8,9,13,0.5))" }} />
          </motion.div>

          <div className="p-body">
            <span className="lbl">{p.cat}</span>
            <h3 className="d-lg text-white" style={{ fontSize: "clamp(2.2rem,4.5vw,3.5rem)" }}>{p.title}</h3>
            <p className="b-lg" style={{ maxWidth: "440px" }}>{p.desc}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
              <p className="lbl mb-2" style={{ fontSize: "0.6rem" }}>Problem</p>
              <p className="b-sm" style={{ maxWidth: "440px" }}>{p.problem}</p>
            </div>
            <div>
              <p className="lbl mb-2" style={{ fontSize: "0.6rem" }}>Build</p>
              <p className="b-sm" style={{ maxWidth: "440px" }}>{p.build}</p>
            </div>

            <div className="flex flex-wrap gap-x-0 gap-y-1 mt-2">
              {p.tech.map((t, i) => <span key={t} className="b-sm">{t}{i < p.tech.length - 1 && <span style={{ color: "rgba(69,77,98,0.4)", margin: "0 0.4rem" }}>·</span>}</span>)}
            </div>

            <div className="flex items-center gap-5 mt-2">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="a-link">GITHUB <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="a-link">LIVE <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg></a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   LAYOUT B — DevFlow — Reversed
   ═══════════════════════════════════════════ */
const LayoutB = ({ p }: { p: typeof projects[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const visY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <div ref={ref} style={{ padding: "clamp(5rem,10vh,8rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="w">
        <div className="proj-a rev">
          <motion.div className="p-vis" style={{ y: visY }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="mono font-bold" style={{ fontSize: "clamp(4rem,8vw,8rem)", color: "rgba(30,41,59,0.5)" }}>{p.num}</span>
            </div>
            <div className="absolute" style={{ inset: "8%", background: "rgba(30,41,59,0.25)", borderRadius: "6px" }}>
              <div style={{ display: "flex", gap: "3%", height: "100%", padding: "5%" }}>
                <div style={{ width: "15%", background: "rgba(30,41,59,0.4)", borderRadius: "3px" }} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4%" }}>
                  <div style={{ height: "8%", background: "rgba(30,41,59,0.5)", borderRadius: "3px" }} />
                  <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3%" }}>
                    <div style={{ background: "rgba(59,130,246,0.03)", borderRadius: "3px", border: "1px solid rgba(59,130,246,0.05)" }} />
                    <div style={{ background: "rgba(30,41,59,0.3)", borderRadius: "3px" }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 55%,rgba(8,9,13,0.5))" }} />
          </motion.div>

          <div className="p-body">
            <span className="lbl">{p.cat}</span>
            <h3 className="d-lg text-white" style={{ fontSize: "clamp(2.2rem,4.5vw,3.5rem)" }}>{p.title}</h3>
            <p className="b-lg" style={{ maxWidth: "440px" }}>{p.desc}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
              <p className="lbl mb-2" style={{ fontSize: "0.6rem" }}>Problem</p>
              <p className="b-sm" style={{ maxWidth: "440px" }}>{p.problem}</p>
            </div>
            <div>
              <p className="lbl mb-2" style={{ fontSize: "0.6rem" }}>Build</p>
              <p className="b-sm" style={{ maxWidth: "440px" }}>{p.build}</p>
            </div>

            <div className="flex flex-wrap gap-x-0 gap-y-1 mt-2">
              {p.tech.map((t, i) => <span key={t} className="b-sm">{t}{i < p.tech.length - 1 && <span style={{ color: "rgba(69,77,98,0.4)", margin: "0 0.4rem" }}>·</span>}</span>)}
            </div>

            <div className="flex items-center gap-5 mt-2">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="a-link">GITHUB <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="a-link">LIVE <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg></a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   LAYOUT C — PCOSense — Distinct product presentation
   ═══════════════════════════════════════════ */
const LayoutC = ({ p }: { p: typeof projects[2] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const visY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <div ref={ref} style={{ padding: "clamp(5rem,10vh,8rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="w">
        <span className="lbl">{p.cat}</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-6">
          {/* Left: Title + features */}
          <div className="lg:col-span-5">
            <h3 className="d-lg text-white mb-3" style={{ fontSize: "clamp(2.2rem,4.5vw,3.8rem)" }}>{p.title}</h3>
            <p className="b-lg mb-8" style={{ maxWidth: "380px" }}>{p.tagline}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {p.features?.map((f) => (
                <span
                  key={f}
                  className="mono"
                  style={{
                    fontSize: "0.65rem",
                    letterSpacing: "0.15em",
                    padding: "6px 14px",
                    border: "1px solid rgba(59,130,246,0.15)",
                    borderRadius: "4px",
                    color: "var(--blue)",
                  }}
                >
                  {f}
                </span>
              ))}
            </div>

            <p className="b-sm mb-5" style={{ maxWidth: "380px" }}>{p.desc}</p>

            <div className="flex flex-wrap gap-x-0 gap-y-1 mb-6">
              {p.tech.map((t, i) => <span key={t} className="b-sm">{t}{i < p.tech.length - 1 && <span style={{ color: "rgba(69,77,98,0.4)", margin: "0 0.4rem" }}>·</span>}</span>)}
            </div>

            <div className="flex items-center gap-5">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="a-link">GITHUB <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-7">
            <motion.div className="p-vis" style={{ y: visY, aspectRatio: "16/10" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="mono font-bold" style={{ fontSize: "clamp(4rem,8vw,8rem)", color: "rgba(30,41,59,0.5)" }}>{p.num}</span>
              </div>
              <div className="absolute" style={{ inset: "6%", background: "rgba(30,41,59,0.25)", borderRadius: "8px", border: "1px solid rgba(59,130,246,0.04)" }}>
                {/* Chat-like interface mockup */}
                <div style={{ padding: "6% 6% 0", display: "flex", flexDirection: "column", gap: "5%", height: "100%" }}>
                  <div style={{ height: "8%", background: "rgba(30,41,59,0.5)", borderRadius: "3px", width: "40%" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "4%", flex: 1 }}>
                    <div style={{ alignSelf: "flex-end", width: "55%", height: "20%", background: "rgba(59,130,246,0.06)", borderRadius: "6px 6px 0 6px", border: "1px solid rgba(59,130,246,0.06)" }} />
                    <div style={{ alignSelf: "flex-start", width: "65%", height: "25%", background: "rgba(30,41,59,0.3)", borderRadius: "6px 6px 6px 0" }} />
                    <div style={{ alignSelf: "flex-end", width: "45%", height: "15%", background: "rgba(59,130,246,0.06)", borderRadius: "6px 6px 0 6px", border: "1px solid rgba(59,130,246,0.06)" }} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 55%,rgba(8,9,13,0.5))" }} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   LAYOUT D — IntelliMon — Compact horizontal
   ═══════════════════════════════════════════ */
const LayoutD = ({ p }: { p: typeof projects[0] }) => (
  <div style={{ padding: "clamp(4rem,8vh,6rem) 0" }}>
    <div className="w">
      <div className="proj-a" style={{ alignItems: "center" }}>
        <div className="p-vis" style={{ aspectRatio: "16/10" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="mono font-bold" style={{ fontSize: "clamp(3rem,6vw,6rem)", color: "rgba(30,41,59,0.5)" }}>{p.num}</span>
          </div>
          <div className="absolute" style={{ inset: "10%", background: "rgba(30,41,59,0.3)", borderRadius: "4px" }}>
            <div style={{ display: "flex", height: "100%", padding: "5%", gap: "3%" }}>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4%" }}>
                <div style={{ height: "10%", background: "rgba(30,41,59,0.5)", borderRadius: "2px" }} />
                <div style={{ flex: 1, background: "rgba(59,130,246,0.03)", borderRadius: "3px", border: "1px solid rgba(59,130,246,0.05)" }} />
              </div>
              <div style={{ width: "30%", background: "rgba(30,41,59,0.3)", borderRadius: "3px" }} />
            </div>
          </div>
        </div>

        <div className="p-body">
          <span className="lbl">{p.cat}</span>
          <h3 className="d-md text-white" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>{p.title}</h3>
          <p className="b-sm" style={{ maxWidth: "380px" }}>{p.desc}</p>
          <div className="flex flex-wrap gap-x-0 gap-y-1">
            {p.tech.map((t, i) => <span key={t} className="b-sm">{t}{i < p.tech.length - 1 && <span style={{ color: "rgba(69,77,98,0.4)", margin: "0 0.4rem" }}>·</span>}</span>)}
          </div>
          <div className="flex items-center gap-5">
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="a-link">GITHUB <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
            {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="a-link">LIVE <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg></a>}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const layouts = { a: LayoutA, b: LayoutB, c: LayoutC, d: LayoutD };

const SelectedWork = () => {
  return (
    <section id="work" className="bg-work relative">
      <div className="w" style={{ paddingTop: "clamp(5rem,10vh,9rem)" }}>
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <span className="lbl">Work</span>
        </motion.div>
      </div>

      {projects.map((p) => {
        const Layout = layouts[p.layout];
        return <Layout key={p.title} p={p as any} />;
      })}
    </section>
  );
};

export default SelectedWork;
