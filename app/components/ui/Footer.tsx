"use client";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-cyan-500/10 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-8 md:px-16 lg:px-32 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left Side */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold neon-text">Barath</h2>
            <p className="text-gray-400 mt-2">
              Creative Developer & Student Tech Enthusiast
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-gray-400 text-lg">
            <a
              href="https://github.com/Barath-s-05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/barath-s05/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/Barath0509/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
              aria-label="Leetcode"
            >
              <SiLeetcode />
            </a>
            
            <a
              href="mailto:sanbarath0509@gmail.com"
              className="hover:text-cyan-300 transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.7)]"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-6 border-t border-cyan-500/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Barath. Built with 💙 and lots of chocolate.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
