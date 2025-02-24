import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import CodingPage from "./CodingPage";
import DesignPage from "./DesignPage";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("design");
  const pageRefs = {
    coding: useRef(null),
    design: useRef(null),
  };

  const tabs = [
    { id: "coding", label: "Coding" },
    { id: "design", label: "Design" },
  ];

  const switchTab = (newTab) => {
    const currentPage = pageRefs[newTab];
    const nextPage = pageRefs[activeTab];

    gsap.to(nextPage.current, { opacity: 0, duration: 0.3 });
    gsap.fromTo(
      currentPage.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );

    setActiveTab(newTab);
  };

  return (
    <div className="relative p-4 ">
      <div className="flex justify-between">
      <h1 className="mt-1">Tech that I use for my work..</h1>
      <div className=" mb-2 right-4 flex space-x-2">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => switchTab(id)}
            className={`px-3 py-1.5 text-[12px] rounded-full ${
              activeTab === id
                ? "bg-[#27272A] text-[#F6F6F6]"
                : "text-[#9F9FA8] hover:text-[#F6F6F6]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      </div>
      <div>

      </div>
     
      <div className="text-center text-sm text-gray-300 relative">
        <div
          ref={pageRefs.coding}
          style={{ display: activeTab === "coding" ? "block" : "none" }}
        >
          <CodingPage />
        </div>
        <div
          ref={pageRefs.design}
          style={{ display: activeTab === "design" ? "block" : "none" }}
        >
          <DesignPage />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
