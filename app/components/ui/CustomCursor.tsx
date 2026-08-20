"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "../../utils/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if ("ontouchstart" in window) return;

    const down = () => setClicked(true);
    const up = () => setClicked(false);
    const over = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        setHovering(!!e.target.closest("a, button, input, textarea, [role='button']"));
      }
    };

    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);
    document.addEventListener("mouseover", over);
    return () => {
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
    };
  }, []);

  if (typeof window !== "undefined" && (window.matchMedia("(prefers-reduced-motion: reduce)").matches || "ontouchstart" in window)) {
    return null;
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          zIndex: 100,
          transform: `translate(${x - 3}px, ${y - 3}px) scale(${clicked ? 0.5 : hovering ? 1.6 : 1})`,
          transition: "transform 0.08s ease-out",
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: "var(--blue-soft)",
            boxShadow: hovering ? "0 0 8px 2px rgba(96,165,250,0.4)" : "0 0 4px 1px rgba(96,165,250,0.15)",
            transition: "box-shadow 0.3s ease",
          }}
        />
      </div>
      <div
        className="fixed top-0 left-0 pointer-events-none"
        style={{
          zIndex: 99,
          transform: `translate(${x - 12}px, ${y - 12}px) scale(${hovering ? 1.6 : 1})`,
          opacity: hovering ? 0.3 : 0.1,
          transition: "all 0.2s ease-out",
        }}
      >
        <div
          className="w-6 h-6 rounded-full"
          style={{ border: "1px solid rgba(96,165,250,0.15)" }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
