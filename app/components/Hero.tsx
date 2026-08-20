"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 40]);

  return (
    <section className="bg-hero relative overflow-hidden" style={{ minHeight: "88vh" }}>
      {/* Atmospheric glow */}
      <div className="glow" style={{ width: "700px", height: "700px", top: "20%", right: "15%", background: "radial-gradient(circle,rgba(59,130,246,0.045) 0%,transparent 60%)" }} />

      {/* Wireframe geometry */}
      <div className="wire-grid">
        <div className="wire-cross" />
      </div>

      <motion.div className="w relative z-10" style={{ opacity, y }}>
        <div className="flex flex-col" style={{ minHeight: "88vh", justifyContent: "flex-end", paddingBottom: "clamp(3rem, 6vh, 5rem)" }}>
          <motion.span
            className="lbl block mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Software · Data · AI
          </motion.span>

          <motion.h1
            className="d-hero text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            BARATH
          </motion.h1>

          <motion.p
            className="b-lg mt-7 max-w-lg"
            style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Building digital systems that turn complex ideas into real products.
          </motion.p>

          <motion.div
            className="flex items-center gap-7 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            <a href="#work" className="a-link">
              VIEW WORK
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="#contact" className="a-link">
              CONTACT
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </motion.div>

          <motion.div
            className="flex items-center gap-6 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <span className="mono" style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-faint)" }}>
              Based in India
            </span>
            <span style={{ width: "1px", height: "12px", background: "var(--navy)" }} />
            <span className="mono" style={{ fontSize: "0.55rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-faint)" }}>
              Available for opportunities
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
