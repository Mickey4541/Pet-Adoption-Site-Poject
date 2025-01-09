import React, { useState, useEffect } from "react";
import searchIconLight from "../../assets/search-w.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".dropdown-menu") === null) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className=" mt-2 sticky top-0 z-100  w-full bg-pink-50  rounded-full  border-2">
      {/* Main Navbar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 pt-4 sm:pt-2">

        {/* Logo */}
        <h2 className=" font-bold cursor-pointer font-[Oswald] text-[30px]">
          <span className="text-purple-600 font-[Oswald] text-[30px]">ADOPT&nbsp;</span>PETS
        </h2>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center flex-1 justify-center mx-4">
  <div className="flex items-center bg-black border-1   px-4 py-4 rounded-full"> {/* Increased padding here */}
    <input
      type="text"
      placeholder="Search pets"
      className="bg-transparent border-0 outline-none text-white text-[20px] w-40 placeholder-white"
    />
    <img
      src={searchIconLight}
      alt="Search"
      className="w-5 cursor-pointer ml-2 text-black"
    />
  </div>
</div>


        {/* Navigation Menu for Desktop */}
        <ul className="hidden lg:flex flex-1 justify-center space-x-8 list-none text-sm sm:text-lg">
          <li className="cursor-pointer hover:text-gray-500 font-[Oswald] font-bold text-[30px]">Home</li>
          <li className="cursor-pointer hover:text-gray-500 font-[Oswald] font-bold text-[30px]">Pets</li>
          <li className="cursor-pointer hover:text-gray-500 font-[Oswald] font-bold text-[30px]">Categories</li>
          <li className="cursor-pointer hover:text-gray-500 font-[Oswald] font-bold text-[30px]">About us</li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div
          className="lg:hidden cursor-pointer"
          onClick={(e) => {
            e.stopPropagation(); // Prevent triggering the outside click handler
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <div className="w-8 h-1 bg-pink-800 mb-1"></div>
          <div className="w-8 h-1 bg-pink-800 mb-1"></div>
          <div className="w-8 h-1 bg-pink-800"></div>
        </div>

        {/* Register Button */}
        <button className="hidden lg:block px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-pink-500 transition duration-300 text-[20px]">
          Register
        </button>
      </div>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`lg:hidden dropdown-menu bg-gray-100 py-2 px-4 transform transition-transform duration-300 ${
          isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        {/* Search Bar in Dropdown */}
        <div className="flex items-center bg-gray-800 px-4 py-4 rounded-full mb-4">
          <input
            type="text"
            placeholder="Search Pets"
            className="bg-transparent border-0 outline-none text-white text-[20px] w-full placeholder-white"
          />
          <img
            src={searchIconLight}
            alt="Search"
            className="w-5 cursor-pointer ml-2"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col items-center space-y-4 text-[25px] font-[Oswald]">
          <li className="cursor-pointer hover:text-gray-500">Home</li>
          <li className="cursor-pointer hover:text-gray-500">Pets</li>
          <li className="cursor-pointer hover:text-gray-500">Categories</li>
          <li className="cursor-pointer hover:text-gray-500">About us</li>
        </ul>

        {/* Register Button with margin for spacing */}
        <div className="mt-4 flex justify-center mb-4">
          <button className="px-12  py-3 bg-green-600 text-white font-semibold text-[20px] rounded-full hover:bg-pink-500 transition duration-300 font-[Oswald]">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
