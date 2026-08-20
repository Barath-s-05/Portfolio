"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    period: "Present",
    title: "B.E. Computer Science (Data Science)",
    org: "CMR Institute of Technology",
    detail: "GPA 8.5",
  },
  {
    period: "2025–26",
    title: "Secretary — Higher Studies Club",
    org: "CMRIT",
    detail: "Leadership",
  },
  {
    period: "2025–26",
    title: "Secretary — Rare Club",
    org: "CMRIT",
    detail: "Operations",
  },
  {
    period: "2025–26",
    title: "Soft Skills Lead Coordinator",
    org: "CCA",
    detail: "Communication",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-spaced">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="label mb-4 block">Experience & Leadership</span>
          <h2 className="display-md text-white max-w-lg">
            Where I&apos;ve been.
          </h2>
        </motion.div>

        <div className="max-w-3xl">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-4 md:gap-8 py-8 border-b border-[var(--blue-dim)]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
            >
              <span className="text-[var(--text-faint)] text-sm font-mono">
                {item.period}
              </span>
              <div>
                <h3 className="text-white font-medium text-lg">{item.title}</h3>
                <p className="text-[var(--text-dim)] text-sm mt-1">
                  {item.org}
                  {item.detail && (
                    <span className="text-[var(--text-faint)]"> · {item.detail}</span>
                  )}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
