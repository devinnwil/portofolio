import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Tabs from "./Components/Tabs";
import Tabs2 from "./Components/Tabs2";
import Ender from "./Components/ender";
import Tabs3 from "./Components/Tabs3";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    const sections = appRef.current.querySelectorAll(".section");

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 }, 
        {
          opacity: 1,
          y: 0, 
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: section,
            start: "top 100%", 
            toggleActions: "play none none none", 
          },
        }
      );
    });
  }, []);

  return (
    <div ref={appRef} className="max-w-[1054px] mx-auto">
      <div className="section">
        <Header />
      </div>
      <div className="section">
        <Introduction />
      </div>
      <div className="section">
        <Tabs />
      </div>
      <div className="section">
        <Tabs2 />
      </div>
      <div className="section">
        <Tabs3 />
      </div>
      <div className="section" style={{ position: 'relative', zIndex: 1 }}>
        <Ender />
      </div>
    </div>
  );
}
