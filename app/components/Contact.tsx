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
    { icon: <FaEnvelope />, href: "mailto:barathsr05@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="bg-contact relative" style={{ padding: "clamp(8rem, 18vh, 16rem) 0 clamp(6rem, 12vh, 10rem)" }}>
      <div className="glow" style={{ width: "600px", height: "600px", top: "30%", left: "25%", background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 60%)" }} />

      <div className="wrap-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="t-label block mb-8">Let&apos;s Connect</span>
          <h2 className="t-heading text-white mb-2">Have an idea?</h2>
          <h2 className="t-heading" style={{ color: "var(--blue)" }}>Let&apos;s talk.</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="mb-6">
              <label className="t-label mb-3 block" style={{ fontSize: "0.55rem" }}>Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="field"
              />
            </div>
            <div className="mb-6">
              <label className="t-label mb-3 block" style={{ fontSize: "0.55rem" }}>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="field"
              />
            </div>
            <div className="mb-8">
              <label className="t-label mb-3 block" style={{ fontSize: "0.55rem" }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell me about your project..."
                className="field"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="arrow-link w-full justify-center py-4 text-center"
              style={{
                background: "var(--blue)",
                color: "white",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                fontWeight: 600,
                border: "none",
                cursor: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-soft)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue)")}
            >
              {isSubmitting ? "SENDING..." : status === "success" ? "SENT." : "SEND MESSAGE"}
            </button>
          </motion.form>

          {/* Direct Contact */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="flex flex-col justify-between"
          >
            <div className="space-y-8">
              <div>
                <p className="t-label mb-2">Email</p>
                <a href="mailto:barathsr05@gmail.com" className="arrow-link" style={{ fontSize: "0.85rem" }}>
                  barathsr05@gmail.com
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
              <div>
                <p className="t-label mb-2">GitHub</p>
                <a href="https://github.com/Barath-s-05" target="_blank" rel="noopener noreferrer" className="arrow-link" style={{ fontSize: "0.85rem" }}>
                  github.com/Barath-s-05
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
              <div>
                <p className="t-label mb-2">LinkedIn</p>
                <a href="https://www.linkedin.com/in/barath-s05" target="_blank" rel="noopener noreferrer" className="arrow-link" style={{ fontSize: "0.85rem" }}>
                  linkedin.com/in/barath-s05
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-12 lg:mt-0">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 cursor-none"
                  style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-soft)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
