"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
    setSubmitStatus("success");
    setTimeout(() => setSubmitStatus("idle"), 5000);
  };

  return (
    <section id="contact" className="py-24 px-8 md:px-16 lg:px-32 relative">
      <div className="max-w-2xl mx-auto relative z-10">
        <motion.h2
          className="text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Let&apos;s <span className="neon-text">Build</span> Something Great
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Have a project in mind or just want to connect? I&apos;m always open to conversations.
        </motion.p>

        {/* Contact Form */}
        <motion.div className="glass p-8 md:p-10 rounded-3xl border border-cyan-500/20 mb-12">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full bg-gray-800/60 border border-gray-700 rounded-xl px-5 py-4 focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full bg-gray-800/60 border border-gray-700 rounded-xl px-5 py-4 focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Tell me about your project..."
              className="w-full bg-gray-800/60 border border-gray-700 rounded-xl px-5 py-4 mb-6 focus:ring-2 focus:ring-cyan-500"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="glass w-full px-6 py-4 rounded-xl border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-300">
            Connect with me
          </h3>

          <div className="flex justify-center gap-8 text-2xl">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/barath-s05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,238,255,0.6)] transition duration-300 hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Barath-s-05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,238,255,0.6)] transition duration-300 hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <FaGithub />
            </a>

            {/* Email (opens Gmail compose) */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sanbarath0509@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass border border-cyan-500/20 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(0,238,255,0.6)] transition duration-300 hover:-translate-y-1 inline-flex items-center justify-center"
            >
              <FaEnvelope />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
