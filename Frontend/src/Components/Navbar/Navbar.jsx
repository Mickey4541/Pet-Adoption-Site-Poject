import React, { useState, useEffect, useRef } from "react";
import searchIconLight from "../../assets/search-w.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen((prev) => !prev);
  };

  const closeDropdowns = () => {
    setIsMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeDropdowns();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);




  return (
    <div className="sticky top-0 z-50 w-full bg-pink-50 rounded-full border-2">
      <div className="flex items-center justify-between px-4 sm:px-6 py-2">
        <Link to='/'>
        <h2 className="font-bold cursor-pointer font-[Oswald] text-[30px]">
          <span className="text-purple-600">ADOPT&nbsp;</span>PETS
        </h2>
        </Link>





        {/* Search Bar for Desktop */}
        {/* <div className="hidden lg:flex items-center bg-black border px-4 py-2 rounded-full">
          <input
            type="text"
            placeholder="Search pets"
            className="bg-transparent border-0 outline-none text-white placeholder-white text-lg w-40" onChange={handleSearchChange}
          />
          <img
            src={searchIconLight}
            alt="Search"
            className="w-5 cursor-pointer ml-2"
          />
        </div> */}





        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center space-x-6 font-[Oswald] text-2xl font-bold">
          <Link to="/">
            <li className="hover:text-red-500">Home</li>
          </Link>
          <Link to="/animals">
            <li className="hover:text-red-500">Pets</li>
          </Link>
          <li
            className="relative cursor-pointer hover:text-red-500 font-[Oswald]"
            onClick={toggleCategories}
          >
            Categories +
            {isCategoriesOpen && (
              <ul
                className="absolute top-full left-0 bg-pink-50 shadow-md mt-2 py-2 rounded-md w-40 z-50"
                ref={menuRef}
              >
                <Link to="/category/cats">
                  <li className="hover:bg-pink-200 py-2 px-4">Cats</li>
                </Link>
                <Link to="/category/dogs">
                  <li className="hover:bg-pink-200 py-2 px-4">Dogs</li>
                </Link>
                <Link to="/category/birds">
                  <li className="hover:bg-pink-200 py-2 px-4">Birds</li>
                </Link>
                <Link to="/category/others">
                  <li className="hover:bg-pink-200 py-2 px-4">Others</li>
                </Link>
              </ul>
            )}
          </li>
          <Link to="/aboutus">
            <li className="hover:text-red-500">About us</li>
          </Link>
        </ul>






        {/* Register Button for Desktop */}
        <Link to="/register">
          <button className="hidden lg:block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-pink-500">
            Register
          </button>
        </Link>





        {/* Hamburger Menu for Mobile */}
        <div
          className="lg:hidden cursor-pointer flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <div className="w-8 h-1 bg-pink-800"></div>
          <div className="w-8 h-1 bg-pink-800"></div>
          <div className="w-8 h-1 bg-pink-800"></div>
        </div>
      </div>








      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 py-4 px-6" ref={menuRef}>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full mb-4">
            <input
              type="text"
              placeholder="Search pets"
              className="bg-transparent border-0 outline-none text-white placeholder-white text-lg w-full" 
            />
            <img
              src={searchIconLight}
              alt="Search"
              className="w-5 cursor-pointer ml-2"
            />
          </div>

          <ul className="flex flex-col space-y-4 items-center font-[Oswald] font-bold border-b-2 border-black">
            <Link to="/" onClick={closeDropdowns}>
              <li className="hover:text-gray-700 border-b-2 border-black">Home</li>
            </Link>
            <Link to="/animals" onClick={closeDropdowns}>
              <li className="hover:text-gray-700 border-b-2 border-black">All Pets</li>
            </Link>
            <Link to="/category/cats" onClick={closeDropdowns}>
              <li className="hover:text-gray-700 border-b-2 border-black">Cats</li>
            </Link>
            <Link to="/category/dogs" onClick={closeDropdowns}>
              <li className="hover:text-gray-700 border-b-2 border-black">Dogs</li>
            </Link>
            <Link to="/category/birds" onClick={closeDropdowns}>
              <li className="hover:text-gray-700 border-b-2 border-black">Birds</li>
            </Link>
            <Link to="/category/others" onClick={closeDropdowns}>
              <li className="hover:text-gray-700 border-b-2 border-black">Others</li>
            </Link>
            <Link to="/aboutus" onClick={closeDropdowns}>
              <li className="hover:text-gray-700 border-b-2 border-black">About us</li>
            </Link>
          </ul>






          {/* Register Button for Mobile */}
          <div className="mt-4 flex flex-col items-center">
            <Link to="/register" onClick={closeDropdowns}>
              <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-pink-500">
                Register
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
