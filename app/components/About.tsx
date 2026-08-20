"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="section-spaced relative overflow-hidden">
      <div className="blue-light-leak blue-light-leak-2 absolute top-1/3 -right-32" />

      <div className="container-editorial">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full aspect-[3/4] max-w-sm overflow-hidden rounded-sm">
                <Image
                  src="/profile.jpeg"
                  alt="Barath"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 80vw, 400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-40" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-[var(--blue-dim)] rounded-sm -z-10" />
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="label mb-6 block">About</span>
              <h2 className="display-md text-white mb-8 max-w-lg">
                Building things that matter.
              </h2>
              <div className="space-y-5 max-w-lg">
                <p className="body-lg">
                  CS student specializing in Data Science at CMRIT. I work across the stack —
                  from training ML models to shipping production web apps.
                </p>
                <p className="body-lg">
                  I care about clean architecture, thoughtful UI, and solving problems that
                  actually need solving. Currently leading clubs, building projects, and
                  looking for opportunities to create real impact.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8 max-w-lg">
                <div>
                  <p className="label mb-2">Focus</p>
                  <p className="body-sm">Full-Stack · ML · System Design</p>
                </div>
                <div>
                  <p className="label mb-2">Education</p>
                  <p className="body-sm">B.E. CS (Data Science) — CMRIT</p>
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
