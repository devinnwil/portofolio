import React from "react";
import WorkCard from "./workcard";
import Propic from './Propic.jpg';
import paymentgateawaypic from "./pgaway.png"
import ciss from "./css.png"
import paymentt from "./payment.png"
import yaop from "./yap.png"
import sry from "./sray.png"


const CorporatePage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 grid-cols-2 gap-6">
        <div className="flex flex-col h-full">
          <WorkCard
            picture={paymentt} 
            title="Payment Gateway"
            description="This website was made for a payment gateway. It’s a project from my internship at PT. Intikom Berlian Mustika."
            technologies={[
              { text: "React", skillLevel: "Advanced", className: "text-sm " },
              { text: "TypeScript", skillLevel: "Intermediate", className: "text-sm " },
              { text: "Tailwind", skillLevel: "Advanced", className: "text-sm" }
            ]}
          />
        </div>
        <div className="flex flex-col h-full">
          <WorkCard
            picture={ciss}
            title="BCA Finance CSIS Wesbite Revamp"
            description="This website was made for CSIS for Bank BCA Finance. This project is from my internship at PT. Intikom Berlian Mustika."
            technologies={[
              { text: "React", skillLevel: "Advanced", className: "text-sm " },
              { text: "JavaScript", skillLevel: "Intermediate", className: "text-sm " },
              { text: "Tailwind", skillLevel: "Advanced", className: "text-sm" }
            ]}
          />
        </div>
        <div className="flex flex-col h-full">
          <WorkCard
            picture={sry}
            title="Autrans"
            description="This website was made for Autrans, Especially for Picking Sheets KKB. This project is from my internship at PT. Intikom Berlian Mustika."
            technologies={[
              { text: ".Net", skillLevel: "Intermediate", className: "text-sm " },
              { text: "Bootstrap", skillLevel: "Intermediate", className: "text-sm " },
              { text: "HTML", skillLevel: "Advanced", className: "text-sm" }
            ]}
          />
        </div> 
        <div className="flex flex-col h-full">
          <WorkCard
            picture={sry}
            title="Bank INA Reconciliation Web"
            description="This website was made for Bank INA. This project is from my internship at PT. Intikom Berlian Mustika."
            technologies={[
              { text: ".Net", skillLevel: "Intermediate", className: "text-sm " },
              { text: "Bootstrap", skillLevel: "Intermediate", className: "text-sm " },
              { text: "HTML", skillLevel: "Advanced", className: "text-sm" }
            ]}
          />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="w-full text-[#F6F6F6] text-[16px] border-2 border-[#1C1C1C] px-2 py-3 rounded-lg transition duration-300 transform hover:scale-105 hover:translate-y-1">
          See More
        </button>
      </div>
    </div>
  );
};

export default CorporatePage;
