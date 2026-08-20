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

const stats = [
  { n: "4+", l: "Projects" },
  { n: "5+", l: "Hackathons" },
  { n: "2", l: "Patents" },
  { n: "8.5", l: "GPA" },
];

const recognition = [
  { cat: "Awards", items: ["Second Runner Up — The Social Hackathon 2026 (National Level)", "Runner-up — College Mini-Project Competition"] },
  { cat: "Patents", items: ["Proactive Reminder Keychain with Vibration and Wireless Communication System", "Low-Cost Clip-On Flame Detection and Alert System for Conventional Gas Stoves"] },
  { cat: "Certifications", items: ["Divide and Conquer, Sorting and Searching — Stanford (Coursera)", "Databases and SQL for Data Science — IBM (Coursera)", "Learning Full Stack React — Infosys Springboard"] },
];

const Experience = () => (
  <section id="experience" className="bg-exp" style={{ padding: "clamp(6rem,14vh,12rem) 0" }}>
    <div className="w">
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-16">
        <span className="lbl">Experience</span>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-3xl mb-20">
        {timeline.map((item, i) => (
          <motion.div
            key={item.title + item.org}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-3 md:gap-10"
            style={{ padding: "1.5rem 0", borderBottom: i < timeline.length - 1 ? "1px solid var(--border)" : "none" }}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.04 * i }}
          >
            <span className="mono" style={{ fontSize: "0.65rem", color: "var(--text-faint)" }}>{item.period}</span>
            <div>
              <h3 className="font-medium text-white" style={{ fontSize: "0.9rem" }}>{item.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-dim)", marginTop: "2px" }}>{item.org}</p>
              <p className="text-sm" style={{ color: "var(--text-faint)", marginTop: "4px" }}>{item.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recognition */}
      <div className="sep mb-12" />
      <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-12">
        <span className="lbl">Recognition</span>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mb-12" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        {stats.map((s, i) => (
          <motion.div key={s.l} style={{ padding: "1.5rem", borderRight: i < 3 ? "1px solid var(--border)" : "none" }} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.06 * i }}>
            <span className="d-md text-white">{s.n}</span>
            <p className="text-sm mt-1" style={{ color: "var(--text-faint)" }}>{s.l}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {recognition.map((r, i) => (
          <motion.div key={r.cat} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.06 * i }}>
            <p className="lbl mb-3">{r.cat}</p>
            <ul className="space-y-2">
              {r.items.map((item) => (
                <li key={item} className="b-xs flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: "var(--blue)" }} />
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

export default Experience;
