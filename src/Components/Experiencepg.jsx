import React from 'react';
import intikomlogo from "./Group 22.png";

const Experiencepg = () => {
    return (
        <div className="shadow-md rounded-lg overflow-hidden border border-[#262626] border-opacity-70 transition-all duration-300">
            <div className="px-6 py-6 space-y-6">
                <div className="flex items-start gap-3 relative">
                    {/* Logo aligned at the top */}
                    <img src={intikomlogo} alt="Intikom Logo" className="w-[70px] h-[70px]" />
                    
                    {/* Text Content */}
                    <div className="flex-1 text-left px-3">
                        {/* Title and Tag in a flex container */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h1 className="text-[16px] mb-[4px] text-[#F6F6F6] font-bold">
                                    PT. Intikom Berlian Mustika 
                                </h1>
                                <h2 className="text-[16px] text-[#F6F6F6] font-md">
                                    Front End Developer Intern
                                </h2>
                            </div>
                            {/* Tag or Time Period */}
                            <span className="inline-flex items-center border border-[#262626] text-[12px] text-[#D1D1D5] rounded-full px-3 py-1.5 font-medium ">
                                2024 - 2025
                            </span>
                        </div>
                        {/* Description List */}
                        <ul className="pl-4 text-[14px] text-[#F6F6F6] font-light list-disc mt-2">
                            <li>Redesigned and developed the CSIS website for BCA Finance.</li>
                            <li>Developed a reconciliation website for Bank INA.</li>
                            <li>Migrated BINUS printing systems to the newest .NET.</li>
                            <li>Developed a KKB website for Autrans.</li>
                            <li>Designed and developed a payment gateway for internal events.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiencepg;
