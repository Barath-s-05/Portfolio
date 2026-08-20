"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Stack", href: "#stack" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const resumeLink = "https://drive.google.com/file/d/1-wIsbo7c-GtJpeuTaT5KE_WXhhoLY9Df/view?usp=sharing";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-[rgba(6,6,10,0.9)] backdrop-blur-xl" : ""
        }`}
      >
        <div className="container-editorial flex items-center justify-between py-5">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-lg font-bold tracking-tight text-white"
          >
            B<span className="text-[var(--blue)]">.</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-[13px] text-[var(--text-faint)] hover:text-white transition-colors duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.05 * i }}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-2 text-[13px] text-[var(--blue)] border border-[var(--blue-dim)] hover:bg-[var(--blue-dim)] transition-all duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Resume
            </motion.a>
          </nav>

          <button
            className="md:hidden text-[var(--text-faint)] hover:text-white transition-colors cursor-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden bg-[rgba(6,6,10,0.98)] backdrop-blur-xl border-t border-[var(--blue-dim)]"
          >
            <div className="container-editorial flex flex-col py-6 gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 text-[var(--text-dim)] hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-[var(--blue)] border-t border-[var(--blue-dim)] mt-3"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <motion.button
        className="fixed bottom-8 right-8 w-10 h-10 flex items-center justify-center text-[var(--text-faint)] hover:text-white z-40 opacity-0 pointer-events-none transition-all duration-300"
        style={{ pointerEvents: scrolled ? "auto" : "none", opacity: scrolled ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -2 }}
        aria-label="Back to top"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 15l7-7 7 7" />
        </svg>
      </motion.button>
    </>
  );
};

export default Header;
