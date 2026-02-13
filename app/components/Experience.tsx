"use client";

import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Technical Development Journey",
      role: "Student Tech Enthusiast",
      period: "Present",
      description: "Continuously learning and building projects in various technologies. Focused on modern web development, UI/UX design, and problem-solving techniques."
    },
    {
      id: 2,
      title: "Engineering & Specialization",
      role: "CMR Institute of Technology - B.E. Computer Science (Data Science)",
      period: "Present | GPA: 8.5",
      description: "Currently pursuing my degree with focus on Data Science concepts, Programming and software development, Problem-solving and system design, Applying theory through real-world technical projects."
    },
    {
      id: 3,
      title: "Higher Secondary - Stream Focus",
      role: "Adarsh Matriculation Higher Secondary School - 12th Grade",
      period: "2023 | 91%",
      description: "Strengthened my interest in technology and computing while developing discipline, consistency, and performance under pressure."
    },
    {
      id: 4,
      title: "Strong Academic Foundation",
      role: "Adarsh Matriculation Higher Secondary School - 10th Grade",
      period: "2021 | 95%",
      description: "Built a strong base in mathematics, logical reasoning, and analytical thinking — the roots of my problem-solving mindset."
    }
  ];

  return (
    <section id="experience" className="py-20 px-8 md:px-16 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My <span className="neon-text">Journey</span>
        </motion.h2>
        
        <div className="relative">
          {/* Animated glowing timeline line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] hidden md:block"
            style={{
              background: "linear-gradient(to bottom, rgba(0,238,255,0.7), rgba(0,120,255,0.5))",
              boxShadow: "0 0 15px rgba(0,238,255,0.5)"
            }}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="flex-1">
                  <motion.div
                    className="glass p-6 rounded-2xl border border-violet-500/20 glass-hover"
                    whileHover={{ y: -6, boxShadow: "0 0 25px rgba(157,78,221,0.25)" }}
                  >
                    <div>
                      <div>
                        <h3 className="text-xl font-bold text-cyan-300">{exp.title}</h3>
                        <p className="text-lg text-gray-300 mb-2">{exp.role}</p>
                        <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                        <p className="text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Glowing animated timeline node */}
                <div className="relative z-10 flex justify-center items-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute w-10 h-10 rounded-full bg-cyan-400/20 animate-ping"></div>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_15px_rgba(0,238,255,0.7)] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
