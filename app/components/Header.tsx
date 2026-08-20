"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

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
      <motion.header
        className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          background: scrolled ? "rgba(10,10,15,0.88)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(30,41,59,0.3)" : "1px solid transparent",
        }}
      >
        <div className="wrap flex items-center justify-between" style={{ height: "60px" }}>
          <a href="#" className="text-sm font-bold tracking-tight text-white" style={{ letterSpacing: "-0.02em" }}>
            BARATH<span style={{ color: "var(--blue)" }}>.</span>
          </a>

          <nav className="hidden md:flex items-center gap-0.5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] uppercase transition-colors duration-300"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {link.name}
              </a>
            ))}
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-1.5 text-[11px] font-medium tracking-[0.12em] uppercase transition-all duration-300"
              style={{ color: "var(--blue)", border: "1px solid rgba(59,130,246,0.2)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(59,130,246,0.06)";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.2)";
              }}
            >
              Resume
            </a>
          </nav>

          <button
            className="md:hidden cursor-none"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ background: "rgba(10,10,15,0.97)", backdropFilter: "blur(24px)" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="t-subheading text-white"
                  style={{ letterSpacing: "-0.02em" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 arrow-link"
                style={{ color: "var(--blue)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setMenuOpen(false)}
              >
                RESUME
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
