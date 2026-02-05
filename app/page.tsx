"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import Header from "@/app/components/Header";
import About from "@/app/components/About";
import Projects from "@/app/components/Projects";
import Achievements from "./components/Achievements";
import Experience from "@/app/components/Experience";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/ui/Footer";
import CustomCursor from "@/app/components/ui/CustomCursor";
import GlobalParticles from "@/app/components/ui/GlobalParticles";




const HomePage = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["Developer", "Problem Solver", "Tech Explorer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
  <div className="min-h-screen relative z-10 overflow-hidden">



    <GlobalParticles />
    <CustomCursor />
    <Header />

    {/* HERO SECTION */}
    <section className="min-h-screen flex items-center justify-between px-8 md:px-16 lg:px-32 py-20 relative z-10">

        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hey, I&apos;m <span className="neon-text">Barath</span>
          </h1>

          <div className="text-xl md:text-2xl text-cyan-300 mb-6">
            {texts[currentTextIndex]}
          </div>

          <p className="text-lg text-gray-300 mb-8 max-w-lg">
            I build smart, clean, and interactive digital experiences.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-6 py-3 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 btn-hover"
              >
                View My Work
              </motion.button>
            </Link>

            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-6 py-3 rounded-lg border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 btn-hover"
              >
                Contact Me
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT HERO ORB (SOFTER NOW) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block w-full md:w-2/5"
        >
          <div className="relative w-72 h-72 mx-auto">

            {/* 🌌 Outer Glow Aura */}
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-[120px] animate-pulse"></div>

            {/* 🌀 Orbit Ring */}
            <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-spin-slow"></div>

            {/* 🛰️ Moving Satellite Dot */}
            <div className="absolute w-full h-full animate-spin-slow">
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(0,238,255,0.9)]"></div>
            </div>

            {/* 🌠 Middle Glow */}
            <div className="absolute inset-6 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 blur-3xl opacity-70 animate-pulse"></div>

            {/* 🔵 Inner Planet Core */}
            <div className="absolute inset-14 rounded-full bg-gradient-to-br from-cyan-200 via-blue-300 to-indigo-400 shadow-[0_0_60px_rgba(0,238,255,0.6)]"></div>

          </div>


        </motion.div>
      </section>

      <About />
      <Projects />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
