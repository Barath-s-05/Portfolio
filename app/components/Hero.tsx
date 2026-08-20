"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const y = useTransform(scrollY, [0, 500], [0, 60]);

  useEffect(() => {
    const handleReduced = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.body.style.cursor = "auto";
      }
    };
    handleReduced();
  }, []);

  return (
    <section className="section-hero relative overflow-hidden">
      <div
        className="ambient-glow"
        style={{
          width: "700px",
          height: "700px",
          top: "10%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <motion.div className="container relative z-10" style={{ opacity, y }}>
        <div className="flex flex-col justify-between" style={{ minHeight: "85vh", paddingBottom: "3rem" }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 pt-6"
          >
            <span className="label">Creative Developer · Data Science</span>
          </motion.div>

          <div>
            <motion.h1
              className="display-hero"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              BARATH
            </motion.h1>

            <motion.p
              className="body-lg max-w-lg mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              I build digital systems that turn complex ideas into real products.
            </motion.p>

            <motion.div
              className="flex items-center gap-8 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a href="#work" className="link-cta">
                VIEW SELECTED WORK
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
              <a href="#contact" className="link-cta">
                LET&apos;S CONNECT
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-4"
          >
            <span className="mono text-[0.65rem] tracking-[0.2em] uppercase" style={{ color: "var(--text-muted)" }}>
              Scroll to explore
            </span>
            <div className="w-8 h-px" style={{ background: "var(--navy)" }} />
            <motion.span
              className="mono text-[0.65rem]"
              style={{ color: "var(--text-muted)" }}
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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
