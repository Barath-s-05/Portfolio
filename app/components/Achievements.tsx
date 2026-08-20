"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    category: "Hackathons",
    items: [
      "Fullstack Fiesta — Areta, Bangalore (Feb 2025)",
      "TechXcelerate — BITS Hyderabad (Mar 2025)",
      "MSME Idea Hackathon (Aug 2025)",
      "SIH Internal Hackathon (Sept 2025)",
    ],
  },
  {
    category: "Patents",
    items: [
      "Eco-Friendly Modular Cold Storage Using Sugarcane Bagasse Panels",
      "Smart Reminder Keychain with Mobile Checklist Vibration Alerts",
    ],
  },
  {
    category: "Awards & Certifications",
    items: [
      "2nd Prize — College Mini Project Competition",
      "Database & SQL for Data Science with Python",
      "Divide & Conquer Algorithms",
      "Python Programming Certifications",
    ],
  },
  {
    category: "Community",
    items: [
      "Member — Peer Support Team",
      "Organizer — Onotsav (Onam Fest at CMRIT)",
    ],
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
            Achievements
          </span>
        </motion.div>

        <motion.h2
          className="section-title text-white mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Recognition & milestones.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((group, i) => (
            <motion.div
              key={group.category}
              className="glass-subtle p-8 rounded-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <h3 className="text-lg font-semibold text-white mb-5">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
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
};

export default Achievements;
