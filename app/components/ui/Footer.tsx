"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="relative border-t border-blue-500/5">
      <div className="container-wide px-6 lg:px-10 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold text-white tracking-tight">
              B<span className="text-blue-400">.</span>
            </span>
            <p className="text-[var(--text-muted)] text-sm mt-1">
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
                className="text-[var(--text-muted)] hover:text-blue-400 transition-colors duration-300"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-blue-500/5 text-center text-[var(--text-muted)] text-xs">
          &copy; {new Date().getFullYear()} Barath. Built with precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
