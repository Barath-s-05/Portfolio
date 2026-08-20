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
      if (res.ok) { setFormData({ name: "", email: "", message: "" }); setStatus("success"); }
      else { setStatus("error"); }
    } catch { setStatus("error"); }
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-contact relative" style={{ padding: "clamp(8rem,18vh,16rem) 0 clamp(5rem,10vh,8rem)" }}>
      <div className="glow" style={{ width: "600px", height: "600px", top: "20%", left: "25%", background: "radial-gradient(circle,rgba(59,130,246,0.05) 0%,transparent 55%)" }} />

      <div className="wn relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-20">
          <span className="lbl block mb-8">Contact</span>
          <h2 className="text-white mb-1" style={{ fontSize: "clamp(3.2rem,7.5vw,6.5rem)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>
            HAVE AN IDEA?
          </h2>
          <h2 style={{ fontSize: "clamp(3.2rem,7.5vw,6.5rem)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--blue)" }}>
            LET&apos;S TALK.
          </h2>
          <p className="b-lg mt-8" style={{ maxWidth: "420px" }}>
            Have a project, idea or opportunity? I&apos;d love to hear about it.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>
            <div className="mb-8">
              <label className="lbl mb-3 block" style={{ fontSize: "0.6rem" }}>Name</label>
              <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="fld" />
            </div>
            <div className="mb-8">
              <label className="lbl mb-3 block" style={{ fontSize: "0.6rem" }}>Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="fld" />
            </div>
            <div className="mb-10">
              <label className="lbl mb-3 block" style={{ fontSize: "0.6rem" }}>Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Tell me about it..." className="fld" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="a-link w-full justify-center py-5"
              style={{
                background: "var(--blue)",
                color: "white",
                fontSize: "0.82rem",
                letterSpacing: "0.12em",
                fontWeight: 600,
                border: "none",
                cursor: "none",
                borderRadius: "2px",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--blue-l)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--blue)")}
            >
              {isSubmitting ? "SENDING..." : status === "success" ? "SENT." : "SEND MESSAGE"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </motion.form>

          <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.15 }} className="flex flex-col justify-between">
            <div className="space-y-9">
              {[
                { label: "Email", value: "barathsr05@gmail.com", href: "mailto:barathsr05@gmail.com" },
                { label: "GitHub", value: "github.com/Barath-s-05", href: "https://github.com/Barath-s-05" },
                { label: "LinkedIn", value: "linkedin.com/in/barath-s05", href: "https://www.linkedin.com/in/barath-s05" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="lbl mb-2">{item.label}</p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="a-link" style={{ fontSize: "0.95rem" }}>
                    {item.value}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-14 lg:mt-0">
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/barath-s05", l: "LinkedIn" },
                { icon: <FaGithub />, href: "https://github.com/Barath-s-05", l: "GitHub" },
                { icon: <SiLeetcode />, href: "https://leetcode.com/u/Barath0509/", l: "LeetCode" },
                { icon: <FaEnvelope />, href: "mailto:barathsr05@gmail.com", l: "Email" },
              ].map((s) => (
                <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 cursor-none" style={{ color: "var(--text-faint)", fontSize: "1.15rem" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-l)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-faint)")} aria-label={s.l}>
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
