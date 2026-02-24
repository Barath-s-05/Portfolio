"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  
  const skills = [
    { 
      name: "Frontend Development", 
      description: "Build responsive, animated, production-ready user interfaces."
    },
    { 
      name: "UI/UX Design", 
      description: "Design intuitive layouts focused on clarity and usability."
    },
    { 
      name: "Problem Solving", 
      description: "Break complex systems into scalable and efficient solutions."
    },
    { 
      name: "Programming Fundamentals", 
      description: "Strong foundation in data structures, algorithms, and system logic."
    }
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-16 lg:px-32">
      
      {/* Section Fade Wrapper (glass removed) */}
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        
        <motion.h2 
          className="text-4xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span className="neon-text">Me</span>
        </motion.h2>

        {/* Centered Profile Image */}
        <motion.div
          className="flex justify-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-cyan-400/20"></div>

            <div className="relative w-40 h-40 rounded-full overflow-hidden border border-cyan-400/40 shadow-[0_0_35px_rgba(0,238,255,0.35)]">
              <Image
                src="/profile.jpeg"
                alt="Barath"
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Bio Card */}
          <motion.div
            className="glass p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden h-full flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>

            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
              My Story
            </h3>

            <div className="flex flex-col flex-grow">
              <p className="text-gray-300 mb-6 leading-relaxed">
                I&apos;m a Creative Developer and Computer Science student specializing in Data Science. I enjoy building full-stack applications that combine clean design with real-world functionality — from machine learning systems to real-time monitoring dashboards.
              </p>

              <p className="text-gray-300 leading-relaxed">
                My focus is on writing scalable, maintainable code and designing interfaces that feel intuitive and purposeful. I’m driven by solving complex problems and turning ideas into polished, production-ready applications.
              </p>
            </div>
          </motion.div>
          
          {/* Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl border border-violet-500/20 relative overflow-hidden"
                onMouseEnter={() => setActiveSkill(index)}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>

                <h4 className="text-xl font-semibold mb-2 relative z-10">
                  {skill.name}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default About;