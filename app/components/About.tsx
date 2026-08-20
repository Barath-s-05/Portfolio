"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-about relative" style={{ padding: "clamp(6rem,14vh,12rem) 0" }}>
      <div className="glow" style={{ width: "500px", height: "500px", top: "20%", right: "10%", background: "radial-gradient(circle,rgba(59,130,246,0.03) 0%,transparent 55%)" }} />

      <div className="w">
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="mb-16">
          <span className="lbl">About</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          <div className="lg:col-span-7">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>
              <h2 className="d-lg text-white mb-8" style={{ maxWidth: "560px", lineHeight: 1.05 }}>
                BUILDING THINGS
                <br />
                THAT MATTER<span style={{ color: "var(--blue)" }}>.</span>
              </h2>

              <p className="b-lg mb-5" style={{ maxWidth: "500px" }}>
                Computer Science student specializing in Data Science at CMRIT, Bengaluru.
                I build full-stack applications, intelligent systems and developer-focused tools
                that solve real problems.
              </p>
              <p className="b-md" style={{ maxWidth: "500px" }}>
                Leading technical clubs, building production-grade projects, and creating
                systems that connect software, data and AI into cohesive products.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-0 mt-14"
              style={{ borderTop: "1px solid var(--border)", maxWidth: "500px" }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {[
                { label: "CSE · Data Science", sub: "CMRIT, Bengaluru" },
                { label: "GPA", sub: "8.5" },
                { label: "Batches", sub: "2023–2027" },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: "1.25rem 0", borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                  <p className="lbl mb-1.5" style={{ fontSize: "0.6rem" }}>{item.label}</p>
                  <p className="b-sm" style={{ fontSize: "0.9rem" }}>{item.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
              style={{ maxWidth: "380px" }}
            >
              <div
                className="relative w-full overflow-hidden"
                style={{ aspectRatio: "3/4", border: "1px solid var(--border)" }}
              >
                <Image src="/profile.jpeg" alt="Barath" fill className="object-cover" sizes="(max-width:1024px)80vw,380px" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 50%,rgba(8,9,13,0.3))" }} />
              </div>
              <div
                className="absolute"
                style={{
                  bottom: "-12px",
                  right: "-12px",
                  width: "60%",
                  height: "60%",
                  border: "1px solid rgba(59,130,246,0.08)",
                  borderRadius: "2px",
                  zIndex: -1,
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
