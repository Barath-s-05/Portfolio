"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress((winScroll / height) * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeLink = "https://drive.google.com/file/d/1-wIsbo7c-GtJpeuTaT5KE_WXhhoLY9Df/view?usp=sharing";

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[2px] z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
          style={{ width: `${progress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          scrolled ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-xl border-b border-blue-500/5" : ""
        }`}
      >
        <div className="container-wide flex items-center justify-between py-5 px-6 lg:px-10">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold tracking-tight text-white"
          >
            B<span className="text-blue-400">.</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm text-[var(--text-secondary)] hover:text-blue-400 transition-colors duration-300 rounded-lg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 text-sm text-blue-400 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
            >
              Resume
            </motion.a>
          </nav>

          <button
            className="md:hidden text-[var(--text-secondary)] hover:text-blue-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(10,10,15,0.95)] backdrop-blur-xl border-t border-blue-500/5"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 text-[var(--text-secondary)] hover:text-blue-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-blue-400 border-t border-blue-500/10 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <motion.button
        className="fixed bottom-8 right-8 w-11 h-11 rounded-full bg-[rgba(30,41,59,0.6)] backdrop-blur-sm border border-blue-500/10 flex items-center justify-center text-blue-400 z-40 opacity-0 pointer-events-none"
        style={{ pointerEvents: progress > 15 ? "auto" : "none", opacity: progress > 15 ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </>
  );
};

export default Header;
