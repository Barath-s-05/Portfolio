"use client";

import { motion } from "framer-motion";

const timeline = [
  { period: "Mar 2026 — May 2026", title: "Web Developer Intern", org: "Ishay Infotech Pvt Ltd", detail: "Developed responsive web pages, collaborated with design teams, ensured cross-browser compatibility." },
  { period: "2025 — Present", title: "B.E. Computer Science (Data Science)", org: "CMR Institute of Technology, Bengaluru", detail: "GPA: 8.5" },
  { period: "2025 — 2026", title: "Secretary", org: "Higher Studies Club, CMRIT", detail: "Leading club initiatives and career guidance sessions." },
  { period: "2025 — 2026", title: "Soft Skills Lead Coordinator", org: "CCA, CMRIT", detail: "Coordinating communication and interpersonal skills workshops." },
  { period: "2024 — 2025", title: "Secretary", org: "Rare Club, CMRIT", detail: "Managing club operations and technical events." },
  { period: "Sept 2024 — Nov 2024", title: "Web Designer Intern", org: "The Design Theeta, Bengaluru", detail: "Designed responsive layouts, created visual assets, contributed to UI/UX improvements." },
];

const Experience = () => {
  return (
    <section id="experience" style={{ padding: "clamp(6rem, 14vh, 12rem) 0" }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="t-label">Experience</span>
        </motion.div>

        <div className="max-w-3xl">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title + item.org}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10"
              style={{
                padding: "1.75rem 0",
                borderBottom: i < timeline.length - 1 ? "1px solid var(--border)" : "none",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.04 * i }}
            >
              <span className="t-mono" style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                {item.period}
              </span>
              <div>
                <h3 className="font-medium text-white" style={{ fontSize: "0.95rem" }}>{item.title}</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)", marginTop: "2px" }}>{item.org}</p>
                <p className="text-sm" style={{ color: "var(--text-muted)", marginTop: "6px" }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
