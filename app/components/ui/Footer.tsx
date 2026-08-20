"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--blue-dim)]">
      <div className="container-editorial py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-lg font-bold text-white tracking-tight">
              B<span className="text-[var(--blue)]">.</span>
            </span>
            <p className="text-[var(--text-faint)] text-xs mt-2">
              Developer & Problem Solver
            </p>
          </div>

          <div className="flex items-center gap-5">
            {[
              { icon: <FaGithub />, href: "https://github.com/Barath-s-05", label: "GitHub" },
              { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/barath-s05/", label: "LinkedIn" },
              { icon: <SiLeetcode />, href: "https://leetcode.com/u/Barath0509/", label: "LeetCode" },
              { icon: <FaEnvelope />, href: "mailto:sanbarath0509@gmail.com", label: "Email" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-[var(--text-faint)] hover:text-[var(--blue-light)] transition-colors duration-300 cursor-none"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--blue-dim)] text-[var(--text-faint)] text-xs">
          &copy; {new Date().getFullYear()} Barath
        </div>
      </div>
    </footer>
  );
};

export default Footer;
