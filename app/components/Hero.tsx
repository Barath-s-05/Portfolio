"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 450], [1, 0]);
  const y = useTransform(scrollY, [0, 450], [0, 50]);

  return (
    <section className="bg-hero relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Atmospheric glow */}
      <div className="glow" style={{ width: "800px", height: "800px", top: "15%", left: "20%", background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 65%)" }} />
      <div className="glow" style={{ width: "500px", height: "500px", bottom: "10%", right: "10%", background: "radial-gradient(circle, rgba(30,58,95,0.06) 0%, transparent 60%)" }} />

      <motion.div className="wrap relative z-10" style={{ opacity, y }}>
        <div className="flex flex-col" style={{ minHeight: "100vh", justifyContent: "flex-end", paddingBottom: "clamp(4rem, 8vh, 8rem)" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <span className="t-label">Software · Data · AI</span>
          </motion.div>

          <motion.h1
            className="t-display text-white"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            BARATH
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-xl"
          >
            <p className="t-body" style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", lineHeight: 1.7 }}>
              Building digital systems that turn complex ideas into real products.
            </p>
          </motion.div>

          <motion.div
            className="flex items-center gap-8 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="#work" className="arrow-link">
              VIEW WORK
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a href="#contact" className="arrow-link">
              GET IN TOUCH
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <span className="t-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Scroll
            </span>
            <div style={{ width: "24px", height: "1px", background: "var(--navy)" }} />
            <motion.span
              className="t-mono"
              style={{ fontSize: "0.6rem", color: "var(--text-muted)" }}
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
