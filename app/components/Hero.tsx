"use client";

import { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const y = useTransform(scrollY, [0, 600], [0, 100]);

  return (
    <section className="section-full relative overflow-hidden">
      <div className="blue-light-leak blue-light-leak-1 absolute top-1/4 -left-48" />
      <div className="blue-light-leak blue-light-leak-2 absolute bottom-0 right-0" />

      <motion.div
        className="container-editorial relative z-10"
        style={{ opacity, y }}
      >
        <div className="flex flex-col justify-between min-h-[85vh] py-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex items-center justify-between"
          >
            <span className="label">Portfolio / 2025</span>
            <span className="label">Chennai, India</span>
          </motion.div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="display-xl text-white">
                BARATH
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 max-w-xl"
            >
              <p className="body-lg">
                Developer crafting intelligent systems — from ML pipelines
                to real-time dashboards. Clean code, bold execution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-10 flex items-center gap-8"
            >
              <a href="#work" className="link-arrow">
                View selected work
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="link-arrow">
                Get in touch
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center gap-6 text-[var(--text-faint)] text-xs tracking-widest uppercase"
          >
            <span>Scroll</span>
            <div className="w-px h-8 bg-[var(--blue-dim)]" />
            <span>↓</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
