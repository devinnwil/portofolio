import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Header from "./Components/Header";
import Introduction from "./Components/Introduction";
import Tabs from "./Components/Tabs";
import Tabs2 from "./Components/Tabs2";
import Tabs3 from "./Components/Tabs3";
import Ender from "./Components/Ender"; // ⚠️ case-sensitive FIX

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const appRef = useRef(null);

  useEffect(() => {
    // ✅ ensure browser only
    if (typeof window === "undefined") return;
    if (!appRef.current) return;

    const sections = appRef.current.querySelectorAll(".section");

    sections.forEach((section) => {
      if (!section) return;

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
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // ✅ cleanup (IMPORTANT for prod)
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={appRef} className="max-w-[1054px] mx-auto">
      <section className="section">
        <Header />
      </section>

      <section className="section">
        <Introduction />
      </section>

      <section className="section">
        <Tabs />
      </section>

      <section className="section">
        <Tabs2 />
      </section>

      <section className="section">
        <Tabs3 />
      </section>

      <section className="section relative z-[1]">
        <Ender />
      </section>
    </div>
  );
}
