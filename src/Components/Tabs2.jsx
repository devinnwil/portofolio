import React, { useState, useRef } from "react";
import { gsap } from "gsap";

import CorporatePage from "./CorporatePage";
import WebsitePage from "./WesbitePage";

const Tabs2 = () => {
  const [activeTab, setActiveTab] = useState("corporate-projects");
  const pageRefs = {
    "corporate-projects": useRef(null),
    website: useRef(null),
    "mobile-apps": useRef(null),
    "3d-render": useRef(null),
  };

  const tabs = [
    { id: "corporate-projects", label: "Corporate Projects" },
    { id: "website", label: "Website" },
    { id: "mobile-apps", label: "Mobile Apps" },
    { id: "3d-render", label: "3D Render" },
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
    <div className="relative p-4">
      <div className="flex justify-between">
        <h1 className="mt-1">Explore my work and projects..</h1>
        <div className="mb-2 right-4 flex space-x-2">
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

      <div className="text-center text-sm text-gray-300 relative">
        <div
          ref={pageRefs["corporate-projects"]}
          style={{ display: activeTab === "corporate-projects" ? "block" : "none" }}
        >
        <CorporatePage/>        
        </div>
        <div
          ref={pageRefs.website}
          style={{ display: activeTab === "website" ? "block" : "none" }}
        >
          <WebsitePage/>
        </div>
        <div
          ref={pageRefs["mobile-apps"]}
          style={{ display: activeTab === "mobile-apps" ? "block" : "none" }}
        >
          <div className="h-[80px] flex items-center justify-center text-xl ">
          Sorry, it's still in progress.
        </div>

        </div>
        <div
          ref={pageRefs["3d-render"]}
          style={{ display: activeTab === "3d-render" ? "block" : "none" }}
        >
          <div className="h-[80px] flex items-center justify-center text-xl ">
          Sorry, it's still in progress.
        </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs2;
