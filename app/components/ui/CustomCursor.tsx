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
        setHovering(!!e.target.closest("a, button, input, textarea, [role='button']"));
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
      <div
        className="fixed top-0 left-0 pointer-events-none z-[100] transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${x - 4}px, ${y - 4}px) scale(${clicked ? 0.7 : hovering ? 1.3 : 1})`,
        }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{
            background: "#60a5fa",
            boxShadow: hovering
              ? "0 0 12px 3px rgba(96,165,250,0.7)"
              : "0 0 8px 2px rgba(96,165,250,0.4)",
          }}
        />
      </div>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${x - 16}px, ${y - 16}px) scale(${hovering ? 1.3 : 1})`,
          opacity: hovering ? 0.5 : 0.25,
        }}
      >
        <div
          className="w-8 h-8 rounded-full"
          style={{
            border: "1px solid rgba(96,165,250,0.3)",
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
