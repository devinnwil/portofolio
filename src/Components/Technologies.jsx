import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Technologies = ({ icon: Icon, text, skillLevel, className }) => {
  const containerRef = useRef(null);
  const [showSkill, setShowSkill] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;

    const handleMouseMove = (e) => {
      const { left, top } = container.getBoundingClientRect();
      setPosition({ x: e.clientX - left + 10, y: e.clientY - top - 20 });
    };

    const handleHover = (enter) => {
      gsap.to(container, { scale: enter ? 1.1 : 1, duration: 0.3, ease: "power2.out" });
      setShowSkill(enter);
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
    <div ref={containerRef} className={`flex items-center px-3 mt-3 mb-2 space-x-3 relative ${className}`}> {/* Added className prop */}
      <div className="flex-shrink-0 relative">
        {Icon && <Icon className="w-h-4 text-[#F6F6F6]" />} 
        {showSkill && skillLevel && (
          <div
            className="absolute text-xs px-4 py-0.5 rounded-lg border border-[#262626] bg-[#030303] pointer-events-none"
            style={{ left: position.x, top: position.y, whiteSpace: "nowrap" }}
          >
            {skillLevel} 
          </div>
        )}
      </div>
      <span className="text-[14px] text-[#F6F6F6]">{text}</span> 
    </div>
  );
};

export default Technologies;
