"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "../../utils/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleMouseOver = (e: Event) => {
      if (e.target instanceof HTMLElement) {
        const isClickable = e.target.closest("a, button, input, textarea, [role='button']");
        setHovering(!!isClickable);
      }
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${x - 6}px, ${y - 6}px) scale(${clicked ? 0.6 : hovering ? 1.6 : 1})`,
        }}
      >
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: hovering ? "#00ffff" : "#00eeff",
            boxShadow: hovering
              ? "0 0 20px 6px rgba(0,255,255,0.9)"
              : "0 0 12px 4px rgba(0,238,255,0.7)",
          }}
        />
      </div>

      {/* Outer Glow Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${x - 20}px, ${y - 20}px) scale(${hovering ? 1.2 : 1})`,
          opacity: hovering ? 0.7 : 0.4,
        }}
      >
        <div
          className="w-10 h-10 rounded-full"
          style={{
            border: "1px solid rgba(0,238,255,0.4)",
            boxShadow: "0 0 30px rgba(0,150,255,0.6)",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
