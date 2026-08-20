"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid var(--border)" }}>
      <div className="wrap" style={{ padding: "clamp(3rem, 6vh, 5rem) clamp(1.5rem, 4vw, 5rem)" }}>
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Left */}
          <div>
            <h2 className="t-heading text-white" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              BARATH<span style={{ color: "var(--blue)" }}>.</span>
            </h2>
            <p className="t-mono mt-3" style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)" }}>
              Software · Data · AI
            </p>
          </div>

          {/* Right — Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
            {[
              { label: "GitHub", href: "https://github.com/Barath-s-05" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/barath-s05/" },
              { label: "LeetCode", href: "https://leetcode.com/u/Barath0509/" },
              { label: "Email", href: "mailto:barathsr05@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="arrow-link"
                style={{ fontSize: "0.7rem" }}
              >
                {link.label.toUpperCase()}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          <span className="t-mono" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "var(--text-muted)" }}>
            &copy; {new Date().getFullYear()} BARATH
          </span>
          <div className="flex items-center gap-2">
            {[
              { icon: <FaGithub />, href: "https://github.com/Barath-s-05", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/barath-s05/", label: "LinkedIn" },
              { icon: <SiLeetcode />, href: "https://leetcode.com/u/Barath0509/", label: "LeetCode" },
              { icon: <FaEnvelope />, href: "mailto:barathsr05@gmail.com", label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                className="transition-colors duration-300 cursor-none"
                style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-soft)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
