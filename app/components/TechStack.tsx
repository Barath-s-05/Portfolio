"use client";

import { motion } from "framer-motion";

const groups = [
  { category: "Languages", items: ["Python", "JavaScript", "SQL", "C", "Java"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  { category: "Backend", items: ["FastAPI", "Node.js", "Express", "Flask", "Streamlit"] },
  { category: "Data / AI", items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Ollama"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"] },
  { category: "Tools", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Kubernetes", "Jenkins"] },
];

const TechStack = () => {
  return (
    <section id="stack" className="bg-tech relative" style={{ padding: "clamp(6rem, 14vh, 12rem) 0" }}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="t-label">Technology</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-12">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.04 * i }}
            >
              <p className="t-label mb-4">{group.category}</p>
              <div className="flex flex-wrap gap-x-0 gap-y-1.5">
                {group.items.map((item, j) => (
                  <span key={item} className="t-small" style={{ fontSize: "0.85rem" }}>
                    {item}{j < group.items.length - 1 ? <span style={{ color: "rgba(80,90,110,0.3)", margin: "0 0.4rem" }}>·</span> : ""}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
