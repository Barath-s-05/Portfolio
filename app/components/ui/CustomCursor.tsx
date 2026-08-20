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

  if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none transition-transform duration-75 ease-out"
        style={{
          zIndex: 100,
          transform: `translate(${x - 3}px, ${y - 3}px) scale(${clicked ? 0.5 : hovering ? 1.5 : 1})`,
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: "var(--blue-highlight)",
            boxShadow: hovering
              ? "0 0 8px 2px rgba(96,165,250,0.5)"
              : "0 0 4px 1px rgba(96,165,250,0.2)",
          }}
        />
      </div>
      <div
        className="fixed top-0 left-0 pointer-events-none transition-all duration-200 ease-out"
        style={{
          zIndex: 99,
          transform: `translate(${x - 12}px, ${y - 12}px) scale(${hovering ? 1.5 : 1})`,
          opacity: hovering ? 0.35 : 0.12,
        }}
      >
        <div
          className="w-6 h-6 rounded-full"
          style={{ border: "1px solid rgba(96,165,250,0.2)" }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
