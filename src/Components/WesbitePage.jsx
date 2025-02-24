import React from "react";
import WorkCard from "./workcard";
import bibu from "./bibu.png"

const WebsitePage = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col h-full">
          <WorkCard
            picture={bibu}
            title="Bitgert Website "
            description="A personal project focused on developing a website for the Bitgert crypto coin, showcasing its features and ecosystem."
            technologies={[
              { text: "React", skillLevel: "Advanced", className: "text-sm " },
              { text: "TypeScript", skillLevel: "Intermediate", className: "text-sm " },
              { text: "Tailwind", skillLevel: "Advanced", className: "text-sm" }
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

export default WebsitePage;
