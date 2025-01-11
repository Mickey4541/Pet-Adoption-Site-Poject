import React from "react";
import petssearch from "../../assets/petssearch.svg";
import filltheformimage from "../../assets/filltheformimage.svg";
import celebrateicon from "../../assets/celebrateicon.svg";
import { Link } from "react-router-dom";

const HowToAdoptSection = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-b from-black to-gray-700">
      <h2 className="text-center font-[Oswald] text-white text-[10vw] font-bold md:text-[40px] sm:text-[40px] pb-6">
        How To <span className="text-pink-500">Adopt your Favourite</span> Pet?
      </h2>
      <div className="flex flex-wrap justify-center gap-5 pb-6 items-center mr-3 ml-3">


        <div className="flex-[1_1_300px] h-[300px] border-2 text-white flex justify-center pt-4 rounded-xl hover:bg-pink-500 transform transition duration-300 hover:scale-105 shadow-xl hover:shadow-pink-500 flex-col items-center bg-transparent">
          <h2 className="font-bold font-[Oswald] text-[40px]">
            Search your Favourite
          </h2>
          <img src={petssearch} alt="" className="w-full h-[70%]" />
        </div>



        <div className="flex-[1_1_300px] h-[300px] border-2 text-white flex justify-center pt-4 rounded-xl hover:bg-pink-500 transform transition duration-300 hover:scale-105 shadow-xl hover:shadow-pink-500 flex-col items-center bg-transparent">
          <h1 className="font-bold font-[Oswald] text-[40px]">Fill the Form</h1>
          <img src={filltheformimage} alt="" className="w-full h-[70%]" />
        </div>



        <div className="flex-[1_1_300px] h-[300px] border-2 text-white flex justify-center pt-4 rounded-xl hover:bg-pink-500 transform transition duration-300 hover:scale-105 shadow-xl hover:shadow-pink-500 flex-col items-center bg-transparent">
          <h1 className="font-bold font-[Oswald] text-[40px]">
            Congratulations❤️
          </h1>
          <img src={celebrateicon} alt="" className="w-full h-[70%]" />
        </div>


      </div>

      
      <div className="flex items-center justify-center h-[10vh]">
        <Link
          to="/contact"
          className="px-4 py-2 w-auto flex items-center justify-center bg-pink-500 text-white border-2 border-white rounded-full shadow-md hover:bg-green-600 transition text-sm sm:text-base font-[Oswald]"
        >Contact us
        </Link>
      </div>
    </div>
  );
};

export default HowToAdoptSection;
