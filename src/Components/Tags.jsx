import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const Tag = ({ text = "English", icon, hoverContent }) => {
  const containerRef = useRef(null);
  const [showHoverContent, setShowHoverContent] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { left, top } = container.getBoundingClientRect();
      setPosition({ x: e.clientX - left + 10, y: e.clientY - top - 20 });
    };

    const handleHover = (enter) => {
      gsap.to(container, { scale: enter ? 1.05 : 1, duration: 0.3, ease: "power2.out" });
      setShowHoverContent(enter);
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", () => handleHover(true));
    container.addEventListener("mouseleave", () => handleHover(false));

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", () => handleHover(true));
      container.removeEventListener("mouseleave", () => handleHover(false));
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex mt-4">
      <span className="inline-flex items-center border border-[#262626] text-[#D1D1D5] rounded-full  py-1.5 text-base font-medium 
        sm:text-[14px] sm:px-2.5 sm:py-1 md:text-md md:px-3 md:py-1.5">
        <div className="mr-2">{icon}</div>
        {text}
      </span>
      {showHoverContent && hoverContent && (
        <div
          className="absolute text-sm px-2 py-1 rounded-lg border border-[#262626] bg-[#030303] z-50"
          style={{
            left: position.x,
            top: position.y,
            whiteSpace: "nowrap",
          }}
        >
          {hoverContent}
        </div>
      )}
    </div>
  );
};

export default Tag;
