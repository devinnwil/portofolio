import React, { useRef } from "react";
import { gsap } from "gsap";

const WorkCard = ({ picture, title, description, technologies }) => {
  const imgContainerRef = useRef(null);

  const handleMouseMove = (e) => {
    const imgContainer = imgContainerRef.current;
    if (!imgContainer) return;

    const rect = imgContainer.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100; // Calculate X percentage
    const y = ((e.clientY - rect.top) / rect.height) * 100; // Calculate Y percentage

    gsap.to(imgContainer, {
      backgroundPosition: `${x}% ${y}%`,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    const imgContainer = imgContainerRef.current;
    if (!imgContainer) return;

    gsap.to(imgContainer, {
      backgroundSize: "300%", // Zoom effect on hover
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    const imgContainer = imgContainerRef.current;
    if (!imgContainer) return;

    gsap.to(imgContainer, {
      backgroundSize: "100%", // Reset zoom
      backgroundPosition: "center", // Reset position to center
      duration: 0.5,
      ease: "power2.inOut",
    });
  };

  return (
    <div className="shadow-md rounded-lg overflow-hidden border border-[#262626] border-opacity-70 transition-all duration-300">
      <div className="flex flex-col items-start p-4">
        <div
          ref={imgContainerRef}
          className="w-full h-[50vh] sm:h-[vh] md:h-[30vh] lg:h-[34vh] rounded-md mb-4 overflow-hidden"
          style={{
            backgroundImage: `url(${picture})`,
            backgroundSize: "100%", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat",
            borderRadius: "0.375rem", 
            objectFit: "cover", 
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div className="w-full">
          <h2 className="text-[16px] font-bold text-[#F6F6F6] text-left">{title}</h2>
          <p className="text-[14px] text-[#F6F6F6] mt-2 text-left">{description}</p>
          <div className="mt-4">
            <ul className="flex flex-wrap space-x-2 mt-2">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center space text-[#F6F6F6] text-xs rounded-full border border-[#262626] px-3 py-1"
                >
                  <span>{tech.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
