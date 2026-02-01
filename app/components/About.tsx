"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [activeSkill, setActiveSkill] = useState(0);
  
  const skills = [
    { name: "Frontend Development", percentage: 85, icon: "💻" },
    { name: "UI/UX Design", percentage: 74, icon: "🎨" },
    { name: "Problem Solving", percentage: 80, icon: "🧩" },
    { name: "Programming Fundamentals", percentage: 88, icon: "🔧" }
  ];

  return (
    <section id="about" className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About <span className="neon-text">Me</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 🌟 Bio Card */}
          <motion.div
            className="glass p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Glow sweep */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 pointer-events-none"></div>

            <h3 className="text-2xl font-semibold mb-4 text-cyan-300">My Story</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I&apos;m a passionate Creative Developer and Student Tech Enthusiast currently pursuing my 
              B.E. in Computer Science (Data Science). With a strong foundation in programming and a keen eye for design, I create intuitive and engaging user experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in tech began with curiosity and evolved into a passion for solving complex 
              problems with elegant solutions. I specialize in responsive, performant, and accessible web applications.
            </p>
          </motion.div>
          
          {/* 🚀 Skills */}
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-xl border border-violet-500/20 relative overflow-hidden"
                onMouseEnter={() => setActiveSkill(index)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Glow sweep */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none"></div>

                <div className="flex items-center mb-3 relative z-10">
                  <motion.span
                    className="text-2xl mr-3"
                    animate={{ scale: activeSkill === index ? 1.2 : 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    {skill.icon}
                  </motion.span>
                  <h4 className="text-xl font-semibold">{skill.name}</h4>
                  <span className="ml-auto text-cyan-300">{skill.percentage}%</span>
                </div>

                {/* Animated progress bar */}
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden relative z-10">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(0,238,255,0.6)]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
