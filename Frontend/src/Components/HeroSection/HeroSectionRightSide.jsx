


import React from 'react';
import heroimage from "../../assets/heroimage.png";

const HeroSectionRightSide = () => {
  return (
    <div className="relative lg:pr-12">
      {/* Image */}
      <img
        className="w-full h-full object-cover rounded-xl bg-transparent"
        src={heroimage}
        alt="Academic Hero Section Image of person working on a computer"
      />
    </div>
  );
};

export default HeroSectionRightSide;
