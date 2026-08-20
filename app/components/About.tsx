"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-about relative" style={{ padding: "clamp(6rem,14vh,12rem) 0" }}>
      <div className="glow" style={{ width: "400px", height: "400px", top: "25%", right: "5%", background: "radial-gradient(circle,rgba(59,130,246,0.03) 0%,transparent 55%)" }} />

      <div className="w">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className="relative w-full overflow-hidden" style={{ maxWidth: "340px", aspectRatio: "3/4", border: "1px solid var(--border)" }}>
                <Image src="/profile.jpeg" alt="Barath" fill className="object-cover" sizes="(max-width:1024px)80vw,340px" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 55%,rgba(8,9,13,0.35))" }} />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-8">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
              <span className="lbl block mb-6">About</span>
              <h2 className="d-md text-white mb-6" style={{ maxWidth: "480px", lineHeight: 1.15 }}>
                I build at the intersection of software, data and AI.
              </h2>
              <p className="b-lg mb-4" style={{ maxWidth: "480px" }}>
                Computer Science student specializing in Data Science at CMRIT. I build
                full-stack applications, intelligent systems and developer-focused tools.
              </p>
              <p className="b-sm" style={{ maxWidth: "480px" }}>
                Leading technical clubs, building production-grade projects, and seeking
                opportunities to create real impact through engineering.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-0 mt-12"
              style={{ borderTop: "1px solid var(--border)", maxWidth: "480px" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              {[
                { label: "CSE — Data Science", sub: "CMRIT" },
                { label: "GPA", sub: "8.5" },
                { label: "Batches", sub: "2023–2027" },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: "1.25rem 0", borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                  <p className="lbl mb-1" style={{ fontSize: "0.5rem" }}>{item.label}</p>
                  <p className="b-sm" style={{ fontSize: "0.8rem" }}>{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
