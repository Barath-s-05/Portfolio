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
    <section id="contact" className="section-gap relative">
      <div
        className="ambient-glow"
        style={{
          width: "600px",
          height: "600px",
          top: "20%",
          left: "30%",
          background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mono text-[0.7rem] tracking-[0.15em] uppercase block mb-6" style={{ color: "var(--text-muted)" }}>
              06 / Let&apos;s Connect
            </span>
            <h2 className="display-lg text-white mb-4">
              Have an idea?
            </h2>
            <h2 className="display-lg mb-8" style={{ color: "var(--blue)" }}>
              Let&apos;s build it.
            </h2>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="text-left max-w-md mx-auto mb-16"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="input-line"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="input-line"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              placeholder="Message"
              className="input-line mb-8"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 text-sm font-medium tracking-wider text-white transition-all duration-300 cursor-none"
              style={{
                background: "var(--blue)",
                border: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-highlight)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue)")}
            >
              {isSubmitting ? "SENDING..." : status === "success" ? "SENT." : "SEND MESSAGE"}
            </button>
          </motion.form>

          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center transition-colors duration-300 cursor-none"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-highlight)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
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
