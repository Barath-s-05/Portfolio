"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "4+", label: "Projects" },
  { number: "5+", label: "Hackathons" },
  { number: "2", label: "Patents" },
  { number: "8.5", label: "GPA" },
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

const Recognition = () => {
  return (
    <section id="recognition" style={{ padding: "clamp(6rem, 14vh, 12rem) 0" }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <span className="t-label">Recognition</span>
        </motion.div>

        <div className="stats mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.06 * i }}
            >
              <span className="t-heading text-white">{stat.number}</span>
              <p className="text-sm mt-1.5" style={{ color: "var(--text-muted)" }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.06 * i }}
            >
              <p className="t-label mb-4">{cat.title}</p>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="t-small flex items-start gap-2.5" style={{ fontSize: "0.8rem" }}>
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

export default Recognition;
