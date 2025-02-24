import React from 'react';
import Tag from './Tags';

const Ender = () => {
  return (
    <footer className="flex justify-center items-center py-4 border-t border-[#262626] text-gray-400">
      <a href="mailto:Devinwilbert22@gmail.com" className="inline-block">
        <Tag
          text="Devinwilbert22@gmail.com"
          hoverContent="just send me an email, I'll reply ASAP"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M3 5.24998L7.19999 8.39997C8.26666 9.19997 9.73333 9.19997 10.8 8.39996L15 5.24994"
                stroke="#D1D1D5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x="2.25"
                y="3.75"
                width="13.5"
                height="10.5"
                rx="2"
                stroke="#D1D1D5"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          }
        />
      </a>
    </footer>
  );
};

export default Ender;
