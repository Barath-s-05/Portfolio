"use client";

import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-8 md:px-16 lg:px-32 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Leadership & <span className="neon-text">Achievements</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Leadership & Responsibilities */}
          <motion.div
            className="glass p-8 rounded-3xl border border-cyan-500/20 glass-hover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Leadership & Responsibilities</h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li><strong>Secretary</strong> — Higher Studies Club (2025–26)</li>
              <li><strong>Soft Skills Lead Coordinator</strong> — CCA (2025–26)</li>
              <li><strong>Secretary</strong> — Rare Club (2025–26)</li>
              <li>Member — Peer Support Team</li>
              <li>Organizer — Onotsav (Onam Fest at CMRIT)</li>
            </ul>
          </motion.div>

          {/* Hackathons & Technical Events */}
          <motion.div
            className="glass p-8 rounded-3xl border border-cyan-500/20 glass-hover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Hackathons & Technical Events</h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>Fullstack Fiesta — Areta, Bangalore (Feb 2025)</li>
              <li>TechXcelerate — BITS Hyderabad (Mar 2025)</li>
              <li>MSME Idea Hackathon (Aug 2025)</li>
              <li>SIH Internal Hackathon (Sept 2025)</li>
            </ul>
          </motion.div>

          {/* Patents */}
          <motion.div
            className="glass p-8 rounded-3xl border border-cyan-500/20 glass-hover"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Patents (Under Process)</h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>Eco-Friendly Modular Cold Storage Using Sugarcane Bagasse Panels</li>
              <li>Smart Reminder Keychain with Mobile Checklist Vibration Alerts</li>
            </ul>
          </motion.div>

          {/* Awards & Certifications */}
          <motion.div
            className="glass p-8 rounded-3xl border border-cyan-500/20 glass-hover"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6">Awards & Certifications</h3>
            <ul className="space-y-4 text-gray-300 leading-relaxed">
              <li>2nd Prize — College Mini Project Competition (Weather & Wi-Fi Sensor Robot)</li>
              <li>Database & SQL for Data Science with Python</li>
              <li>Divide & Conquer Algorithms</li>
              <li>Python Programming Certifications</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;
