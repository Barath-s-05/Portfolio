"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
          
          {/* Bio Card */}
          <motion.div
            className="glass p-8 rounded-2xl border border-cyan-500/20 relative overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
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
          
          {/* Skills */}
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
      </div>
    </section>
  );
};

export default About;