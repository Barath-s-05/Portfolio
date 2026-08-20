"use client";

import { useEffect, useState } from "react";
import { useMousePosition } from "../../utils/useMousePosition";

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [clicked, setClicked] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
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

  return (
    <>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[100] transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${x - 3}px, ${y - 3}px) scale(${clicked ? 0.6 : hovering ? 1.4 : 1})`,
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: "#60a5fa",
            boxShadow: hovering
              ? "0 0 10px 2px rgba(96,165,250,0.6)"
              : "0 0 6px 1px rgba(96,165,250,0.3)",
          }}
        />
      </div>
      <div
        className="fixed top-0 left-0 pointer-events-none z-[99] transition-all duration-200 ease-out"
        style={{
          transform: `translate(${x - 14}px, ${y - 14}px) scale(${hovering ? 1.4 : 1})`,
          opacity: hovering ? 0.4 : 0.15,
        }}
      >
        <div
          className="w-7 h-7 rounded-full"
          style={{ border: "1px solid rgba(96,165,250,0.25)" }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
