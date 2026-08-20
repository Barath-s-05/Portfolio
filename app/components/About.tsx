"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-about relative" style={{ padding: "clamp(6rem, 14vh, 12rem) 0" }}>
      <div className="glow" style={{ width: "500px", height: "500px", top: "20%", right: "-5%", background: "radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 60%)" }} />

      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left — Image + Heading */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="t-label block mb-8">About</span>

              <div className="relative w-full overflow-hidden mb-10" style={{ maxWidth: "400px", aspectRatio: "4/5", border: "1px solid var(--border)" }}>
                <Image
                  src="/profile.jpeg"
                  alt="Barath"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 380px"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.4))" }} />
              </div>

              <h2 className="t-heading text-white" style={{ maxWidth: "340px", lineHeight: 1.1 }}>
                Building things that matter.
              </h2>
            </motion.div>
          </div>

          {/* Right — Text + Capabilities */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="t-body mb-6" style={{ maxWidth: "520px", fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}>
                Computer Science student specializing in Data Science, focused on building
                full-stack applications, intelligent systems and developer-focused tools.
                I enjoy turning complex technical problems into products that are simple to use.
              </p>

              <p className="t-body" style={{ maxWidth: "520px" }}>
                Currently pursuing B.E. at CMR Institute of Technology, Bengaluru. Leading technical
                clubs, building production-grade projects, and seeking opportunities to create real impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ marginTop: "clamp(3rem, 5vh, 4rem)" }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-0" style={{ borderTop: "1px solid var(--border)" }}>
                {[
                  { title: "Full-Stack", desc: "Applications, APIs and backend systems." },
                  { title: "Machine Learning", desc: "Data-driven applications and AI systems." },
                  { title: "System Design", desc: "Scalable architecture and developer tools." },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "1.5rem 0",
                      borderBottom: "1px solid var(--border)",
                      borderRight: i < 2 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <p className="t-label mb-2">{item.title}</p>
                    <p className="t-small" style={{ fontSize: "0.8rem" }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
