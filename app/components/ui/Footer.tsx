"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid rgba(30,41,59,0.5)" }}>
      <div className="container" style={{ padding: "3rem clamp(1.5rem, 4vw, 5rem)" }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="text-sm font-bold text-white tracking-tight">
              BARATH<span style={{ color: "var(--blue)" }}>.</span>
            </span>
            <p className="text-xs mt-1.5" style={{ color: "var(--text-muted)" }}>
              Creative Developer · Data Science
            </p>
          </div>

          <div className="flex items-center gap-5">
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
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--blue-highlight)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 text-xs" style={{ borderTop: "1px solid rgba(30,41,59,0.5)", color: "var(--text-muted)" }}>
          &copy; {new Date().getFullYear()} Barath
        </div>
      </div>
    </footer>
  );
};

export default Footer;
