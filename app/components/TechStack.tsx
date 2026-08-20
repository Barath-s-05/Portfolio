"use client";

import { motion } from "framer-motion";

const groups = [
  { cat: "Languages", items: ["Python", "JavaScript", "SQL", "C", "Java"] },
  { cat: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { cat: "Backend", items: ["FastAPI", "Node.js", "Express", "Flask", "Streamlit"] },
  { cat: "Data / AI", items: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Ollama"] },
  { cat: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"] },
  { cat: "Tools", items: ["Git", "GitHub", "GitHub Actions", "Docker", "Kubernetes", "Jenkins"] },
];

const TechStack = () => (
  <section id="stack" className="bg-stack" style={{ padding: "clamp(6rem,14vh,12rem) 0" }}>
    <div className="w">
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-16">
        <span className="lbl">Technology</span>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-10">
        {groups.map((g, i) => (
          <motion.div key={g.cat} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.04 * i }}>
            <p className="lbl mb-3">{g.cat}</p>
            <div className="flex flex-wrap gap-x-0 gap-y-1">
              {g.items.map((item, j) => (
                <span
                  key={item}
                  className="b-sm cursor-none transition-colors duration-300"
                  style={{ fontSize: "0.85rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-l)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {item}{j < g.items.length - 1 && <span style={{ color: "rgba(69,77,98,0.3)", margin: "0 0.4rem" }}>·</span>}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
