import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import Experiencepg from './Experiencepg';
import Educationpg from './Educationpg';

const Tabs3 = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const tabContentRefs = {
    experience: useRef(null),
    education: useRef(null),
  };

  const tabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
  ];

  const switchTab = (newTab) => {
    const currentContent = tabContentRefs[activeTab];
    const nextContent = tabContentRefs[newTab];

    gsap.to(currentContent.current, {
      opacity: 0,
      x: -50,
      duration: 0.3,
      onComplete: () => {
        setActiveTab(newTab); 
        gsap.fromTo(
          nextContent.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.5, ease: 'power2.out' }
        );
      },
    });
  };

  return (
    <div className="relative p-4">
      {/* Tab Navigation */}
      <div className="flex justify-between mb-4">
        <h1 className="mt-1">Explore my education and experiences..</h1>
        <div className="flex space-x-2">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => switchTab(id)}
              className={`px-3 py-1.5 text-[12px] rounded-full ${
                activeTab === id
                  ? 'bg-[#27272A] text-[#F6F6F6]'
                  : 'text-[#9F9FA8] hover:text-[#F6F6F6]'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 relative">
        <div
          ref={tabContentRefs.experience}
          style={{ display: activeTab === 'experience' ? 'block' : 'none' }}
        >
          <Experiencepg/>
        </div>
        <div
          ref={tabContentRefs.education}
          style={{ display: activeTab === 'education' ? 'block' : 'none' }}
        >
          <Educationpg/>
          <h2 className="text-lg font-bold text-gray-400"></h2>
        </div>
      </div>
    </div>
  );
};

export default Tabs3;
