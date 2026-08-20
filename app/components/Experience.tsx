"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "B.E. Computer Science (Data Science)",
    org: "CMR Institute of Technology",
    period: "Present",
    detail: "GPA: 8.5",
    description: "Focusing on Data Science, software development, and system design. Building real-world projects to apply理论 knowledge.",
  },
  {
    title: "Secretary — Higher Studies Club",
    org: "CMRIT",
    period: "2025–26",
    detail: "",
    description: "Leading club initiatives, organizing career guidance sessions, and coordinating faculty-student interactions.",
  },
  {
    title: "Secretary — Rare Club",
    org: "CMRIT",
    period: "2025–26",
    detail: "",
    description: "Managing club operations and driving technical and cultural events for the student community.",
  },
  {
    title: "Soft Skills Lead Coordinator",
    org: "CCA",
    period: "2025–26",
    detail: "",
    description: "Coordinating communication and interpersonal skills workshops for peers across departments.",
  },
  {
    title: "12th Grade",
    org: "Adarsh Matriculation Higher Secondary School",
    period: "2023",
    detail: "91%",
    description: "Strengthened interest in technology while building discipline and analytical thinking.",
  },
  {
    title: "10th Grade",
    org: "Adarsh Matriculation Higher Secondary School",
    period: "2021",
    detail: "95%",
    description: "Built a strong foundation in mathematics, logic, and problem-solving.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
            Experience & Leadership
          </span>
        </motion.div>

        <motion.h2
          className="section-title text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          My journey so far.
        </motion.h2>

        <div className="relative max-w-3xl mx-auto">
          <div className="timeline-line hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                className="relative flex flex-col md:flex-row items-start gap-6 md:gap-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
              >
                <div className="hidden md:flex md:w-1/2 md:justify-end md:pr-10">
                  {i % 2 === 0 && (
                    <div className="text-right">
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{exp.org}</p>
                      <p className="text-xs text-blue-400 mt-1">{exp.period}{exp.detail ? ` · ${exp.detail}` : ""}</p>
                    </div>
                  )}
                </div>

                <div className="relative z-10 flex-shrink-0 mt-1 md:mt-0">
                  <div className="timeline-node" />
                </div>

                <div className="flex-1 md:w-1/2 md:pl-10">
                  {i % 2 !== 0 ? (
                    <div>
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{exp.org}</p>
                      <p className="text-xs text-blue-400 mt-1">{exp.period}{exp.detail ? ` · ${exp.detail}` : ""}</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  ) : (
                    <div className="md:hidden">
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{exp.org}</p>
                      <p className="text-xs text-blue-400 mt-1">{exp.period}{exp.detail ? ` · ${exp.detail}` : ""}</p>
                      <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">{exp.description}</p>
                    </div>
                  )}
                  {i % 2 !== 0 && (
                    <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed md:hidden">{exp.description}</p>
                  )}
                  {i % 2 === 0 && (
                    <p className="text-sm text-[var(--text-secondary)] mt-2 leading-relaxed hidden md:block">{exp.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
