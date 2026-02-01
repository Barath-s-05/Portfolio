"use client";

import { motion } from "framer-motion";

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-24 px-8 md:px-16 lg:px-32 relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className="neon-text">Projects</span>
        </motion.h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* 🧬 Disease Detection */}
          <motion.div
            className="glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all group"
            whileHover={{ y: -10 }}
          >
            <div className="text-4xl mb-4">🧬</div>

            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition">
              Disease Detection
            </h3>

            <p className="text-gray-400 mb-4">
              Detecting diseases using symptoms with machine learning models.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Scikit-learn</span>
              <span className="tech-badge">Flask API</span>
              <span className="tech-badge">React</span>
              <span className="tech-badge">Pickle Models</span>
            </div>

            <a
              href="https://github.com/Barath-s-05/Disease-Detection"
              target="_blank"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              View Project →
            </a>
          </motion.div>

          {/* 🏨 Hotel Management System */}
          <motion.div
            className="glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all group"
            whileHover={{ y: -10 }}
          >
            <div className="text-4xl mb-4">🏨</div>

            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition">
              Hotel Management System
            </h3>

            <p className="text-gray-400 mb-4">
              DBMS-based hotel system handling bookings, billing, and services.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">SQLite</span>
              <span className="tech-badge">CLI Application</span>
              <span className="tech-badge">DBMS Concepts</span>
            </div>

            <a
              href="https://github.com/Barath-s-05/Hotel-Management-System"
              target="_blank"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              View Project →
            </a>
          </motion.div>

          {/* 💳 Credit Fraud Detection */}
          <motion.div
            className="glass rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all group"
            whileHover={{ y: -10 }}
          >
            <div className="text-4xl mb-4">💳</div>

            <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-300 transition">
              Credit Fraud Detection
            </h3>

            <p className="text-gray-400 mb-4">
              ML system that detects fraudulent credit card transactions.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="tech-badge">Python</span>
              <span className="tech-badge">Machine Learning</span>
              <span className="tech-badge">Pandas</span>
              <span className="tech-badge">Scikit-learn</span>
              <span className="tech-badge">Data Preprocessing</span>
            </div>

            <a
              href="https://github.com/Barath-s-05/Credit-Fraud-Detection"
              target="_blank"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              View Project →
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
