"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/mwvnavjj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setFormData({ name: "", email: "", message: "" });
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setIsSubmitting(false);
  };

  const socials = [
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/barath-s05", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/Barath-s-05", label: "GitHub" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/u/Barath0509/", label: "LeetCode" },
    { icon: <FaEnvelope />, href: "https://mail.google.com/mail/?view=cm&fs=1&to=sanbarath0509@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-wide max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <span className="text-sm font-medium tracking-widest uppercase text-blue-400">
            Contact
          </span>
        </motion.div>

        <motion.h2
          className="section-title text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let&apos;s build something together.
        </motion.h2>

        <motion.p
          className="section-subtitle mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          Have a project in mind or just want to connect? I&apos;m always open to conversations.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="glass-subtle p-8 md:p-10 rounded-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
              className="w-full bg-[rgba(30,41,59,0.4)] border border-[rgba(59,130,246,0.1)] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-blue-500/30 transition-colors"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full bg-[rgba(30,41,59,0.4)] border border-[rgba(59,130,246,0.1)] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-blue-500/30 transition-colors"
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell me about your project..."
            className="w-full bg-[rgba(30,41,59,0.4)] border border-[rgba(59,130,246,0.1)] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-[var(--text-muted)] focus:outline-none focus:border-blue-500/30 transition-colors mb-5 resize-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full justify-center"
          >
            {isSubmitting ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
          </button>
        </motion.form>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <div className="flex justify-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass-subtle flex items-center justify-center text-[var(--text-muted)] hover:text-blue-400 hover:border-blue-500/20 transition-all duration-300"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
