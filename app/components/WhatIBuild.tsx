"use client";

import { motion } from "framer-motion";

const capabilities = [
  { title: "Software", desc: "Full-stack applications, APIs and backend systems." },
  { title: "Intelligence", desc: "Machine learning, data-driven applications and AI systems." },
  { title: "Systems", desc: "Architecture, automation and developer tools." },
];

const WhatIBuild = () => (
  <section style={{ padding: "clamp(4rem,8vh,7rem) 0" }}>
    <div className="w">
      <div className="sep mb-12" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.06 * i }}
            style={{
              padding: "0 2rem 2rem 0",
              borderRight: i < 2 ? "1px solid var(--border)" : "none",
            }}
          >
            <h3 className="d-sm text-white mb-2">{cap.title}</h3>
            <p className="b-sm">{cap.desc}</p>
          </motion.div>
        ))}
      </div>
      <div className="sep mt-12" />
    </div>
  </section>
);

export default WhatIBuild;
