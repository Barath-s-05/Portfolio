"use client";

import { motion } from "framer-motion";

const groups = [
  {
    category: "Languages",
    items: ["Python", "JavaScript", "SQL", "C", "Java"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Node.js", "Express", "Flask", "Streamlit"],
  },
  {
    category: "Data / AI",
    items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Ollama"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools / DevOps",
    items: ["Git", "GitHub", "GitHub Actions", "Docker", "Kubernetes", "Jenkins", "Terraform"],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="section-gap">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <span className="mono text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "var(--text-muted)" }}>
            03 / Stack
          </span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {groups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.06 * i }}
            >
              <p className="label mb-4">{group.category}</p>
              <div className="flex flex-wrap gap-x-1 gap-y-2">
                {group.items.map((item, j) => (
                  <span
                    key={item}
                    className="text-sm"
                    style={{ color: j === 0 ? "var(--text-secondary)" : "var(--text-muted)" }}
                  >
                    {item}{j < group.items.length - 1 ? <span style={{ color: "rgba(100,116,139,0.3)", margin: "0 0.35rem" }}>·</span> : ""}
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
