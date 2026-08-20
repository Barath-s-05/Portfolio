"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => (
  <footer style={{ borderTop: "1px solid var(--border)" }}>
    <div className="w" style={{ padding: "clamp(4rem,8vh,6rem) clamp(1.5rem,4vw,5rem)" }}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="d-lg text-white" style={{ fontSize: "clamp(2rem,3.5vw,3.2rem)" }}>
            BARATH<span style={{ color: "var(--blue)" }}>.</span>
          </h2>
          <p className="mono mt-4" style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-faint)" }}>
            Software · Data · AI
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
          {[
            { l: "GitHub", h: "https://github.com/Barath-s-05" },
            { l: "LinkedIn", h: "https://www.linkedin.com/in/barath-s05/" },
            { l: "LeetCode", h: "https://leetcode.com/u/Barath0509/" },
            { l: "Email", h: "mailto:barathsr05@gmail.com" },
          ].map((link) => (
            <a key={link.l} href={link.h} target={link.l !== "Email" ? "_blank" : undefined} rel={link.l !== "Email" ? "noopener noreferrer" : undefined} className="a-link" style={{ fontSize: "0.75rem" }}>
              {link.l.toUpperCase()}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-14 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5" style={{ borderTop: "1px solid var(--border)" }}>
        <span className="mono" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", color: "var(--text-faint)" }}>
          &copy; {new Date().getFullYear()} BARATH
        </span>
        <div className="flex items-center gap-5">
          {[
            { icon: <FaGithub />, href: "https://github.com/Barath-s-05", l: "GitHub" },
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/barath-s05/", l: "LinkedIn" },
            { icon: <SiLeetcode />, href: "https://leetcode.com/u/Barath0509/", l: "LeetCode" },
            { icon: <FaEnvelope />, href: "mailto:barathsr05@gmail.com", l: "Email" },
          ].map((item) => (
            <a key={item.l} href={item.href} target={item.l !== "Email" ? "_blank" : undefined} rel={item.l !== "Email" ? "noopener noreferrer" : undefined} className="transition-colors duration-300 cursor-none" style={{ color: "var(--text-faint)", fontSize: "0.95rem" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-l)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-faint)")} aria-label={item.l}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
