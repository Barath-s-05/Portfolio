"use client";

import { motion } from "framer-motion";

const About = () => {
  const capabilities = [
    {
      title: "Full-Stack Development",
      description: "Building end-to-end applications with React, Node.js, and modern frameworks.",
    },
    {
      title: "Machine Learning",
      description: "Developing ML models for real-world problems — disease detection, fraud analysis, and more.",
    },
    {
      title: "System Design",
      description: "Architecting scalable, maintainable systems with clean code principles.",
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces that balance aesthetics with usability.",
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
            What I Do
          </span>
        </motion.div>

        <motion.h2
          className="section-title text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Building from concept to deployment.
        </motion.h2>

        <motion.p
          className="section-subtitle max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          CS student specializing in Data Science. I turn complex problems into clean,
          functional applications — whether it&apos;s an ML pipeline or a real-time dashboard.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-subtle p-8 rounded-2xl hover:border-blue-500/15 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
