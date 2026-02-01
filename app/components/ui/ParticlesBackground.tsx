"use client";
import { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    container.innerHTML = "";

    for (let i = 0; i < 100; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 4 + 2;
      p.className = "absolute rounded-full bg-blue-400/40";
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${Math.random() * 100}%`;
      p.style.top = `${Math.random() * 100}%`;
      p.style.boxShadow = "0 0 10px rgba(0,170,255,0.8)";
      p.style.animation = `float ${Math.random() * 20 + 15}s infinite ease-in-out`;
      container.appendChild(p);
    }
  }, []);

  return <div ref={containerRef} className="absolute inset-0 pointer-events-none -z-10" />;
};

export default ParticlesBackground;
