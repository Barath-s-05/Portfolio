"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "4+", label: "Projects Shipped" },
  { number: "2", label: "Patents Filed" },
  { number: "4", label: "Hackathons" },
  { number: "8.5", label: "GPA" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-spaced relative overflow-hidden">
      <div className="blue-light-leak blue-light-leak-1 absolute bottom-0 left-1/4" />

      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="label mb-4 block">Achievements</span>
        </motion.div>

        <div className="achievement-row mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="achievement-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <span className="display-lg text-white">{stat.number}</span>
              <p className="text-[var(--text-faint)] text-sm mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <p className="label mb-4">Hackathons</p>
            <ul className="space-y-2 body-sm">
              <li>Fullstack Fiesta — Areta, Bangalore</li>
              <li>TechXcelerate — BITS Hyderabad</li>
              <li>MSME Idea Hackathon</li>
              <li>SIH Internal Hackathon</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <p className="label mb-4">Patents</p>
            <ul className="space-y-2 body-sm">
              <li>Eco-Friendly Modular Cold Storage</li>
              <li>Smart Reminder Keychain</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <p className="label mb-4">Certifications</p>
            <ul className="space-y-2 body-sm">
              <li>Database & SQL for Data Science</li>
              <li>Divide & Conquer Algorithms</li>
              <li>Python Programming</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
