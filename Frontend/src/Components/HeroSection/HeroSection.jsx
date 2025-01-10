import React from "react";
import HeroSectionLeftSide from "./HeroSectionLeftSide";
import HeroSectionRightSide from "./HeroSectionRightSide";

const HeroSection = () => {
  return (
    <div className=" pt-4 relative bg-gradient-to-b from-gray-600 via-gray-600 to-black text-white  sm:mt-0 padding">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[88vh]">
          <HeroSectionLeftSide />
          <HeroSectionRightSide />
      </div>
    </div>
  );
};

export default HeroSection;
