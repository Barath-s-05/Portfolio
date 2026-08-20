"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding">
      <div className="container-wide relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
              Developer & Problem Solver
            </span>
          </motion.div>

          <motion.h1
            className="hero-title text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            BARATH
          </motion.h1>

          <motion.p
            className="section-subtitle max-w-2xl mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I build intelligent, full-stack digital experiences — from machine learning systems
            to real-time dashboards. Clean code, bold design, real impact.
          </motion.p>

          <motion.div
            className="flex gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="#work">
              <span className="btn-primary">View My Work</span>
            </Link>
            <Link href="#contact">
              <span className="btn-ghost">Get In Touch</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Subtle gradient orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default Hero;
