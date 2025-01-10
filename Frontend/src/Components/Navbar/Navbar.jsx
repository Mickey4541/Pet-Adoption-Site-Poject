import React, { useState, useEffect, useRef } from "react";
import searchIconLight from "../../assets/search-w.png";

const Navbar = ({ openModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const menuRef = useRef(null); // Reference for dropdown menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  const closeDropdown = () => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mt-2 sticky top-0 z-50 w-full bg-pink-50 rounded-full border-2">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2 pt-2">
        <h2 className="font-bold cursor-pointer font-[Oswald] text-[30px]">
          <span className="text-purple-600 font-[Oswald] text-[30px]">
            ADOPT&nbsp;
          </span>
          PETS
        </h2>

        <div className="hidden lg:flex items-center flex-1 justify-center mx-4">
          <div className="flex items-center bg-black border-1 px-4 py-4 rounded-full">
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

        <ul className="hidden lg:flex flex-1 justify-center space-x-8 list-none text-sm sm:text-lg">
          <li className="cursor-pointer hover:text-red-500 font-[Oswald] font-bold text-[30px]">
            Home
          </li>
          <li className="cursor-pointer hover:text-red-500 font-[Oswald] font-bold text-[30px]">
            Pets
          </li>
          <li
            className="relative cursor-pointer font-[Oswald] font-bold text-[30px] categories-dropdown hover:text-red-500"
            onClick={toggleCategories}
          >
            Categories +
            {isCategoriesOpen && (
              <div className="absolute top-full left-0 w-full border bg-pink-50 shadow-lg py-8 mt-4 border-1 border-black z-50 rounded-2xl animate-fade-in-down">
                <ul className="flex flex-col items-center space-y-2 text-lg font-medium">
                  <li className="cursor-pointer hover:bg-pink-200 w-full text-center py-2 border-b-2 hover:text-green-500">
                    Cats
                  </li>
                  <li className="cursor-pointer hover:bg-pink-200 w-full text-center py-2 border-b-2 hover:text-green-500">
                    Dogs
                  </li>
                  <li className="cursor-pointer hover:bg-pink-200 w-full text-center py-2 border-b-2 hover:text-green-500">
                    Birds
                  </li>
                  <li className="cursor-pointer hover:bg-pink-200 w-full text-center py-2 border-b-2 hover:text-green-500">
                    Others
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="cursor-pointer hover:text-red-500 font-[Oswald] font-bold text-[30px]">
            About us
          </li>
        </ul>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-8 h-1 bg-pink-800 mb-1"></div>
          <div className="w-8 h-1 bg-pink-800 mb-1"></div>
          <div className="w-8 h-1 bg-pink-800"></div>
        </div>

        {/* Register Button */}
        <button
          onClick={openModal} // Open modal when clicked
          className="hidden lg:block px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-pink-500 transition duration-300 text-[20px]"
        >
          Register
        </button>
      </div>

      <div
        className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-100 py-2 px-4`}
        ref={menuRef}
      >
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

        <ul className="flex flex-col h-auto items-center space-y-1 text-[25px] font-[Oswald]">
          <li className="cursor-pointer hover:text-gray-500">Home</li>
          <li className="cursor-pointer hover:text-gray-500">Pets</li>
          <li
            className="cursor-pointer hover:text-gray-500"
            onClick={toggleCategories}
          >
            Categories
            {isCategoriesOpen && (
              <div className="mt-4 w-full h-auto py-4">
                <ul className="space-y-4 px-6">
                  <li className="cursor-pointer hover:text-gray-500">Cats</li>
                  <li className="cursor-pointer hover:text-gray-500">Dogs</li>
                  <li className="cursor-pointer hover:text-gray-500">Birds</li>
                  <li className="cursor-pointer hover:text-gray-500">Others</li>
                </ul>
              </div>
            )}
          </li>
          <li className="cursor-pointer hover:text-gray-500">About us</li>
        </ul>

        {/* Register Button */}
        <div className="mt-4 flex justify-center mb-4">
          <button
            onClick={openModal} // Open modal when clicked
            className="px-12 py-3 bg-green-600 text-white font-semibold text-[20px] rounded-full hover:bg-pink-500 transition duration-300 font-[Oswald]"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
