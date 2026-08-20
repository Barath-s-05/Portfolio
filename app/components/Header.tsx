"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
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
      <motion.div
        className={`island ${scrolled ? "scrolled" : ""}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="#" style={{ color: "var(--text)", fontWeight: 700, fontSize: "0.8rem", paddingLeft: "8px" }}>
          B<span style={{ color: "var(--blue)" }}>.</span>
        </a>

        <nav className="hidden md:flex">
          {links.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </nav>

        <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="resume-link">
          RESUME
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: "11px", height: "11px", marginLeft: "4px" }}><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>

        <button
          className="menu-btn hidden"
          style={{ color: "var(--text-faint)", background: "none", border: "none", cursor: "default", padding: "4px" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden flex flex-col items-center justify-center gap-8"
            style={{ background: "rgba(8,9,13,0.97)", backdropFilter: "blur(24px)" }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="d-md"
                style={{ color: "var(--text)", textDecoration: "none" }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 * i }}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="a-link"
              style={{ color: "var(--blue)", marginTop: "1rem" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              onClick={() => setMenuOpen(false)}
            >
              RESUME
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
