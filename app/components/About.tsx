"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-gap relative">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mono text-[0.7rem] tracking-[0.15em] uppercase block mb-6" style={{ color: "var(--text-muted)" }}>
                02 / About
              </span>
              <div className="relative w-full aspect-[4/5] max-w-sm overflow-hidden" style={{ border: "1px solid rgba(30,41,59,0.6)" }}>
                <Image
                  src="/profile.jpeg"
                  alt="Barath"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 380px"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(10,10,15,0.5))" }} />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="display-md text-white mb-8 max-w-lg" style={{ lineHeight: 1.2 }}>
                I build software at the intersection of engineering, data and design.
              </h2>
              <div className="space-y-5 max-w-lg mb-12">
                <p className="body-lg">
                  Computer Science student specializing in Data Science, focused on building
                  full-stack applications, intelligent systems and developer-focused tools.
                  I enjoy turning complex technical problems into products that are simple to use.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div>
                  <p className="label mb-3">Software Development</p>
                  <p className="body-sm">Full-stack applications and scalable backend systems.</p>
                </div>
                <div>
                  <p className="label mb-3">AI / Data</p>
                  <p className="body-sm">Machine learning, data-driven systems and intelligent applications.</p>
                </div>
                <div>
                  <p className="label mb-3">Product / UI</p>
                  <p className="body-sm">Interfaces that make complex technology easier to use.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
