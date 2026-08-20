"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(10,10,15,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        }}
      >
        <div className="container flex items-center justify-between" style={{ height: "64px" }}>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base font-bold tracking-tight text-white"
          >
            BARATH<span style={{ color: "var(--blue)" }}>.</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-[12px] font-medium tracking-wider uppercase transition-colors duration-300"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
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
              className="ml-3 px-4 py-2 text-[12px] font-medium tracking-wider uppercase transition-all duration-300"
              style={{
                color: "var(--blue)",
                border: "1px solid rgba(59,130,246,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.08)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Resume
            </motion.a>
          </nav>

          <button
            className="md:hidden transition-colors duration-300 cursor-none"
            style={{ color: "var(--text-muted)" }}
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
            className="md:hidden"
            style={{ background: "rgba(10,10,15,0.98)", backdropFilter: "blur(20px)", borderTop: "1px solid rgba(30,41,59,0.5)" }}
          >
            <div className="container flex flex-col py-6 gap-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-3 text-sm transition-colors"
                  style={{ color: "var(--text-secondary)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 text-sm mt-2"
                style={{ color: "var(--blue)", borderTop: "1px solid rgba(30,41,59,0.5)" }}
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <motion.button
        className="fixed bottom-8 right-8 w-10 h-10 flex items-center justify-center z-40 opacity-0 pointer-events-none transition-all duration-300"
        style={{ color: "var(--text-muted)" }}
        animate={{ opacity: scrolled ? 0.6 : 0, pointerEvents: scrolled ? "auto" : "none" }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        whileHover={{ y: -2, opacity: 1 }}
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
