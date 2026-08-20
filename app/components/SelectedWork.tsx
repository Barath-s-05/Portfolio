"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
    problem: "PCOS awareness is limited. Users need accessible, personalized health guidance without replacing professional medical advice.",
    build: "Multi-modal AI platform with conversational memory, voice interaction, and OCR-based report analysis using GPT-4o-mini with healthcare safety guardrails.",
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
    problem: "System monitoring is often desktop-heavy and lacks real-time browser visibility.",
    build: "WebSocket connections for live data streaming with Chart.js visualizations for CPU, memory, and network metrics.",
    tech: ["React", "Node.js", "Socket.io", "Chart.js", "Express"],
    github: "https://github.com/Barath-s-05/IntelliMon",
    live: "https://intellimon.vercel.app/",
    layout: "d" as const,
  },
];

/* ═════�════════════════════════════════════
   LAYOUT A — Large visual left, content right (hero project)
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
              <span className="mono font-bold" style={{ fontSize: "clamp(4rem,7vw,7rem)", color: "rgba(30,41,59,0.5)" }}>{p.num}</span>
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
            <h3 className="d-lg text-white">{p.title}</h3>
            <p className="b-sm" style={{ maxWidth: "380px" }}>{p.desc}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.8rem" }}>
              <p className="lbl mb-1.5" style={{ fontSize: "0.5rem" }}>Problem</p>
              <p className="b-xs" style={{ maxWidth: "380px" }}>{p.problem}</p>
            </div>
            <div>
              <p className="lbl mb-1.5" style={{ fontSize: "0.5rem" }}>Build</p>
              <p className="b-xs" style={{ maxWidth: "380px" }}>{p.build}</p>
            </div>

            <div className="flex flex-wrap gap-x-0 gap-y-1 mt-1">
              {p.tech.map((t,i) => <span key={t} className="b-xs">{t}{i<p.tech.length-1 && <span style={{color:"rgba(69,77,98,0.4)",margin:"0 0.35rem"}}>·</span>}</span>)}
            </div>

            <div className="flex items-center gap-5 mt-1">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="a-link">GITHUB <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="a-link">LIVE <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg></a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   LAYOUT B — Reversed: content left, visual right
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
              <span className="mono font-bold" style={{ fontSize: "clamp(4rem,7vw,7rem)", color: "rgba(30,41,59,0.5)" }}>{p.num}</span>
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
            <h3 className="d-lg text-white">{p.title}</h3>
            <p className="b-sm" style={{ maxWidth: "380px" }}>{p.desc}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.8rem" }}>
              <p className="lbl mb-1.5" style={{ fontSize: "0.5rem" }}>Problem</p>
              <p className="b-xs" style={{ maxWidth: "380px" }}>{p.problem}</p>
            </div>
            <div>
              <p className="lbl mb-1.5" style={{ fontSize: "0.5rem" }}>Build</p>
              <p className="b-xs" style={{ maxWidth: "380px" }}>{p.build}</p>
            </div>

            <div className="flex flex-wrap gap-x-0 gap-y-1 mt-1">
              {p.tech.map((t,i) => <span key={t} className="b-xs">{t}{i<p.tech.length-1 && <span style={{color:"rgba(69,77,98,0.4)",margin:"0 0.35rem"}}>·</span>}</span>)}
            </div>

            <div className="flex items-center gap-5 mt-1">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="a-link">GITHUB <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="a-link">LIVE <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg></a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   LAYOUT C — Centered large visual, text below
   ═══════════════════════════════════════════ */
const LayoutC = ({ p }: { p: typeof projects[0] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const visY = useTransform(scrollYProgress, [0, 1], [15, -15]);

  return (
    <div ref={ref} style={{ padding: "clamp(5rem,10vh,8rem) 0", borderBottom: "1px solid var(--border)" }}>
      <div className="w">
        <div className="proj-c">
          <span className="lbl">{p.cat}</span>
          <motion.h3 className="d-lg text-white" style={{ textAlign: "center" }}>{p.title}</motion.h3>

          <motion.div className="p-vis w" style={{ y: visY, maxWidth: "900px", aspectRatio: "16/9" }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="mono font-bold" style={{ fontSize: "clamp(4rem,7vw,7rem)", color: "rgba(30,41,59,0.5)" }}>{p.num}</span>
            </div>
            <div className="absolute" style={{ left: "10%", right: "10%", top: "12%", height: "10%", background: "rgba(30,41,59,0.4)", borderRadius: "4px" }} />
            <div className="absolute" style={{ left: "10%", right: "10%", top: "28%", bottom: "15%", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3%" }}>
              {[0,1,2].map(i => <div key={i} style={{ background: i===0 ? "rgba(59,130,246,0.03)" : "rgba(30,41,59,0.25)", borderRadius: "4px", border: i===0 ? "1px solid rgba(59,130,246,0.06)" : "none" }} />)}
            </div>
            <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 60%,rgba(8,9,13,0.4))" }} />
          </motion.div>

          <div className="max-w-lg text-center" style={{ marginTop: "-1rem" }}>
            <p className="b-sm mb-4">{p.desc}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "0.8rem", textAlign: "left" }}>
              <p className="lbl mb-1.5" style={{ fontSize: "0.5rem" }}>Problem</p>
              <p className="b-xs mb-3" style={{ textAlign: "left" }}>{p.problem}</p>
              <p className="lbl mb-1.5" style={{ fontSize: "0.5rem" }}>Build</p>
              <p className="b-xs" style={{ textAlign: "left" }}>{p.build}</p>
            </div>

            <div className="flex flex-wrap gap-x-0 gap-y-1 mt-3 justify-center">
              {p.tech.map((t,i) => <span key={t} className="b-xs">{t}{i<p.tech.length-1 && <span style={{color:"rgba(69,77,98,0.4)",margin:"0 0.35rem"}}>·</span>}</span>)}
            </div>

            <div className="flex items-center gap-5 mt-3 justify-center">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="a-link">GITHUB <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
              {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="a-link">LIVE <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg></a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════
   LAYOUT D — Compact horizontal feature
   ═══════════════════════════════════════════ */
const LayoutD = ({ p }: { p: typeof projects[0] }) => (
  <div style={{ padding: "clamp(4rem,8vh,6rem) 0" }}>
    <div className="w">
      <div className="proj-a" style={{ alignItems: "center" }}>
        <div className="p-vis" style={{ aspectRatio: "16/10" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="mono font-bold" style={{ fontSize: "clamp(3rem,5vw,5rem)", color: "rgba(30,41,59,0.5)" }}>{p.num}</span>
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
          <h3 className="d-md text-white">{p.title}</h3>
          <p className="b-xs" style={{ maxWidth: "360px" }}>{p.desc}</p>
          <div className="flex flex-wrap gap-x-0 gap-y-1">
            {p.tech.map((t,i) => <span key={t} className="b-xs">{t}{i<p.tech.length-1 && <span style={{color:"rgba(69,77,98,0.4)",margin:"0 0.35rem"}}>·</span>}</span>)}
          </div>
          <div className="flex items-center gap-5">
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="a-link">GITHUB <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg></a>
            {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="a-link">LIVE <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg></a>}
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
          <span className="lbl">Selected Work</span>
        </motion.div>
      </div>

      {projects.map((p) => {
        const Layout = layouts[p.layout];
        return <Layout key={p.title} p={p} />;
      })}
    </section>
  );
};

export default SelectedWork;
