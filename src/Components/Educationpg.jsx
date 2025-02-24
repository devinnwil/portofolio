import React from 'react';
import penaburlogo from "./Group 23.png";
import Binuslogo from "./Group 25.png";



const Educationpg = () => {
    return (
        <div className="shadow-md rounded-lg overflow-hidden border border-[#262626] border-opacity-70 transition-all duration-300">
            <div className="px-6 py-6 space-y-6">
            <div className="flex items-start gap-3 relative">
                    {/* Logo aligned at the top */}
                    <img src={penaburlogo} alt="Intikom Logo" className="w-[70px] h-[70px]" />
                    
                    {/* Text Content */}
                    <div className="flex-1 text-left px-3">
                        {/* Title and Tag in a flex container */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-[16px] mb-[4px] text-[#F6F6F6] font-bold">
Smak 4 Penabur Jakarta                                </h1>
                                <h2 className="text-[16px] text-[#F6F6F6] font-md">
Science Stream                                </h2>
                            </div>
                            {/* Tag or Time Period */}
                            <span className="inline-flex items-center border border-[#262626] text-[12px] text-[#D1D1D5] rounded-full px-3 py-1.5 font-medium ">
                                2018 - 2021
                            </span>
                        </div>
                        {/* Description List */}
                        <ul className="pl-4 text-[14px] text-[#F6F6F6] font-light list-disc mt-2">
                            <li>Final Score Overall = A+</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="flex items-start gap-3 relative">
                    {/* Logo aligned at the top */}
                    <img src={Binuslogo} alt="Intikom Logo" className="w-[70px] h-[70px]" />
                    
                    {/* Text Content */}
                    <div className="flex-1 text-left px-3">
                        {/* Title and Tag in a flex container */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-[16px] mb-[4px] text-[#F6F6F6] font-bold">
Bina Nusantara University                               </h1>
                                <h2 className="text-[16px] text-[#F6F6F6] font-md">
Information Systems                              </h2>
                            </div>
                            {/* Tag or Time Period */}
                            <span className="inline-flex items-center border border-[#262626] text-[12px] text-[#D1D1D5] rounded-full px-3 py-1.5 font-medium ">
                                2021 - 2025
                            </span>
                        </div>
                        {/* Description List */}
                        <ul className="pl-4 text-[14px] text-[#F6F6F6] font-light list-disc mt-2">
                            <li>CGPA = 3.51</li>
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default Educationpg;
