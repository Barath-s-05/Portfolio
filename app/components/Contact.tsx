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

  return (
    <section id="contact" className="section-spaced relative cta-section">
      <div className="blue-light-leak blue-light-leak-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container-editorial relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="label mb-6 block">Let&apos;s Connect</span>
            <h2 className="display-lg text-white mb-6">
              Let&apos;s build<br />something great.
            </h2>
            <p className="body-lg max-w-md mx-auto mb-16">
              Have a project in mind or just want to talk? I&apos;m always open to new conversations.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="text-left max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="input-clean"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="input-clean"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              placeholder="Message"
              className="input-clean mb-8"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-[var(--blue)] text-white rounded-sm font-medium text-sm tracking-wide hover:bg-[var(--blue-light)] transition-all duration-300 cursor-none"
            >
              {isSubmitting ? "Sending..." : status === "success" ? "Sent." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            className="flex justify-center gap-6 mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {[
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/barath-s05", label: "LinkedIn" },
              { icon: <FaGithub />, href: "https://github.com/Barath-s-05", label: "GitHub" },
              { icon: <SiLeetcode />, href: "https://leetcode.com/u/Barath0509/", label: "LeetCode" },
              { icon: <FaEnvelope />, href: "mailto:sanbarath0509@gmail.com", label: "Email" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center text-[var(--text-faint)] hover:text-[var(--blue-light)] transition-colors duration-300 cursor-none"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
