"use client";

import { motion } from "framer-motion";

const capabilities = [
  { title: "FULL-STACK", desc: "Applications, APIs and backend systems." },
  { title: "MACHINE LEARNING", desc: "Data-driven applications and AI systems." },
  { title: "SYSTEM DESIGN", desc: "Scalable architecture and developer tools." },
];

const WhatIBuild = () => (
  <section style={{ padding: "clamp(3rem,6vh,5rem) 0" }}>
    <div className="w">
      {capabilities.map((cap, i) => (
        <motion.div
          key={cap.title}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 * i }}
          className="cap-row"
        >
          <div className="flex items-baseline gap-6">
            <h3 className="cap-title">{cap.title}</h3>
            <p className="cap-desc">{cap.desc}</p>
          </div>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "16px", height: "16px", color: "var(--text-faint)", flexShrink: 0 }}>
            <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      ))}
    </div>
  </section>
);

export default WhatIBuild;
