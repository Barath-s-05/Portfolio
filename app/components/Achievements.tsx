"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "3", label: "Projects Shipped" },
  { number: "2", label: "Patents Filed" },
  { number: "5+", label: "Hackathons" },
  { number: "2", label: "Internships" },
];

const categories = [
  {
    title: "Awards",
    items: [
      "Second Runner Up — The Social Hackathon 2026 (National Level)",
      "Runner-up — College Mini-Project Competition (Weather Station & Wi-Fi Sensor Robot)",
    ],
  },
  {
    title: "Patents",
    items: [
      "Proactive Reminder Keychain with Vibration and Wireless Communication System",
      "Low-Cost Clip-On Flame Detection and Alert System for Conventional Gas Stoves",
    ],
  },
  {
    title: "Certifications",
    items: [
      "Divide and Conquer, Sorting and Searching, and Randomized Algorithms — Stanford (Coursera)",
      "Databases and SQL for Data Science with Python — IBM (Coursera)",
      "Learning Full Stack React — Infosys Springboard",
    ],
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-gap relative">
      <div
        className="ambient-glow"
        style={{
          width: "500px",
          height: "500px",
          bottom: "0%",
          right: "-5%",
          background: "radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <span className="mono text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)" }}>
            Achievements
          </span>
        </motion.div>

        <div className="stat-row mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08 * i }}
            >
              <span className="display-lg text-white">{stat.number}</span>
              <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.08 * i }}
            >
              <p className="label mb-4">{cat.title}</p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="body-sm flex items-start gap-2.5">
                    <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: "var(--blue)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
