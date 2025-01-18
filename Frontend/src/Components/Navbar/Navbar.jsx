// import React, { useState, useEffect, useRef } from "react";
// import searchIconLight from "../../assets/search-w.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
//   const menuRef = useRef(null);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const toggleCategories = () => {
//     setIsCategoriesOpen((prev) => !prev);
//   };

//   const closeDropdowns = () => {
//     setIsMenuOpen(false);
//     setIsCategoriesOpen(false);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         closeDropdowns();
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);




//   return (
//     <div className="sticky top-0 z-50 w-full bg-pink-50 rounded-full border-2">
//       <div className="flex items-center justify-between px-4 sm:px-6 py-2">
//         <Link to='/'>
//         <h2 className="font-bold cursor-pointer font-[Oswald] text-[30px]">
//           <span className="text-purple-600">ADOPT&nbsp;</span>PETS
//         </h2>
//         </Link>

//         {/* Desktop Navigation Links */}
//         <ul className="hidden lg:flex items-center space-x-6 font-[Oswald] text-2xl font-bold">
//           <Link to="/">
//             <li className="hover:text-red-500">Home</li>
//           </Link>
//           <Link to="/animals">
//             <li className="hover:text-red-500">Pets</li>
//           </Link>
//           <li
//             className="relative cursor-pointer hover:text-red-500 font-[Oswald]"
//             onClick={toggleCategories}
//           >
//             Categories +
//             {isCategoriesOpen && (
//               <ul
//                 className="absolute top-full left-0 bg-pink-50 shadow-md mt-2 py-2 rounded-md w-40 z-50"
//                 ref={menuRef}
//               >
//                 <Link to="/category/cats">
//                   <li className="hover:bg-pink-200 py-2 px-4">Cats</li>
//                 </Link>
//                 <Link to="/category/dogs">
//                   <li className="hover:bg-pink-200 py-2 px-4">Dogs</li>
//                 </Link>
//                 <Link to="/category/birds">
//                   <li className="hover:bg-pink-200 py-2 px-4">Birds</li>
//                 </Link>
//                 <Link to="/category/others">
//                   <li className="hover:bg-pink-200 py-2 px-4">Others</li>
//                 </Link>
//               </ul>
//             )}
//           </li>
//           <Link to="/aboutus">
//             <li className="hover:text-red-500">About us</li>
//           </Link>
//         </ul>






//         {/* Register Button for Desktop */}
//         <Link to="/add">
//           <button className="hidden lg:block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-pink-500">
//             Add Animals
//           </button>
//         </Link>
//         {/* Register Button for Desktop */}
//         <Link to="/register">
//           <button className="hidden lg:block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-pink-500">
//             Register
//           </button>
//         </Link>





//         {/* Hamburger Menu for Mobile */}
//         <div
//           className="lg:hidden cursor-pointer flex flex-col space-y-1"
//           onClick={toggleMenu}
//         >
//           <div className="w-8 h-1 bg-pink-800"></div>
//           <div className="w-8 h-1 bg-pink-800"></div>
//           <div className="w-8 h-1 bg-pink-800"></div>
//         </div>
//       </div>








//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="lg:hidden bg-gray-100 py-4 px-6" ref={menuRef}>
//           <div className="flex items-center bg-gray-800 px-4 py-2 rounded-full mb-4">
//             <input
//               type="text"
//               placeholder="Search pets"
//               className="bg-transparent border-0 outline-none text-white placeholder-white text-lg w-full" 
//             />
//             <img
//               src={searchIconLight}
//               alt="Search"
//               className="w-5 cursor-pointer ml-2"
//             />
//           </div>

//           <ul className="flex flex-col space-y-4 items-center font-[Oswald] font-bold border-b-2 border-black">
//             <Link to="/" onClick={closeDropdowns}>
//               <li className="hover:text-gray-700 border-b-2 border-black">Home</li>
//             </Link>
//             <Link to="/animals" onClick={closeDropdowns}>
//               <li className="hover:text-gray-700 border-b-2 border-black">All Pets</li>
//             </Link>
//             <Link to="/category/cats" onClick={closeDropdowns}>
//               <li className="hover:text-gray-700 border-b-2 border-black">Cats</li>
//             </Link>
//             <Link to="/category/dogs" onClick={closeDropdowns}>
//               <li className="hover:text-gray-700 border-b-2 border-black">Dogs</li>
//             </Link>
//             <Link to="/category/birds" onClick={closeDropdowns}>
//               <li className="hover:text-gray-700 border-b-2 border-black">Birds</li>
//             </Link>
//             <Link to="/category/others" onClick={closeDropdowns}>
//               <li className="hover:text-gray-700 border-b-2 border-black">Others</li>
//             </Link>
//             <Link to="/aboutus" onClick={closeDropdowns}>
//               <li className="hover:text-gray-700 border-b-2 border-black">About us</li>
//             </Link>
//           </ul>






//           {/* Register Button for Mobile */}
//           <div className="mt-4 flex flex-col items-center">
//             <Link to="/add" onClick={closeDropdowns}>
//               <button className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-pink-500">
//                 Add Animals
//               </button>
//             </Link>
//           </div>
//           <div className="mt-4 flex flex-col items-center">
//             <Link to="/register" onClick={closeDropdowns}>
//               <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-pink-500">
//                 Register
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;







import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setToken, setUser } from "../../Store/AuthSlice";
import searchIconLight from "../../assets/search-w.png";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const menuRef = useRef(null);


  
  const dispatch = useDispatch();
  const { token, data } = useSelector((state) => state.auth);
  console.log("Token is", token);
  





  const [storedUserRole, setStoredUserRole] = useState('')
  // Persist token and user role in localStorage
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const userRole = localStorage.getItem("userRole");
    setStoredUserRole(userRole)

    console.log("The user role  form nav", storedUserRole); //admin aako xa 
    
    if (storedToken) {
      dispatch(setToken(storedToken));
    }else{
      console.log("No stored token");
    }
  
    },[]);





  // // Update localStorage when user data changes
  // useEffect(() => {
  //   if (data?.role) {
  //     localStorage.setItem("userRolefromNavbar", data.role);
  //   }
  // }, [data?.role]);






  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const toggleCategories = () => setIsCategoriesOpen((prev) => !prev);






  const handleLogout = () => {
    dispatch(setToken(null));
    dispatch(setUser(null));
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    window.location.href = "/";
  };


  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsCategoriesOpen(false);
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
        <Link to="/">
          <h2 className="font-bold cursor-pointer font-[Oswald] text-[30px]">
            <span className="text-purple-600">ADOPT&nbsp;</span>PETS
          </h2>
        </Link>

        {/* Desktop ko navigation */}
        <ul className="hidden lg:flex items-center space-x-6 font-[Oswald] text-2xl font-bold">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <Link to="/animals" className="hover:text-red-500">Pets</Link>
          <li
            className="relative cursor-pointer hover:text-red-500"
            onClick={toggleCategories}
          >
            Categories +
            {isCategoriesOpen && (
              <ul
                className="absolute top-full left-0 bg-pink-50 shadow-md mt-2 py-2 rounded-md w-40 z-50"
                ref={menuRef}
              >
                {["cats", "dogs", "birds", "others"].map((category) => (
                  <Link to={`/category/${category}`} key={category}>
                    <li className="hover:bg-pink-200 py-2 px-4 capitalize">{category}</li>
                  </Link>
                ))}
              </ul>
            )}
          </li>
          <Link to="/aboutus" className="hover:text-red-500">About us</Link>
        </ul>

        {/* Desktop ko Buttons */}
        {!token ? (
          <Link to="/register">
            <button className="hidden lg:block px-6 py-2 bg-green-600 text-white rounded-full hover:bg-pink-500">
              Register
            </button>
          </Link>
        ) : (
          <>
            {storedUserRole === "admin" && (
              <Link to="/add">
                <button className="hidden lg:block px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-pink-500">
                  Add Animals
                </button>
              </Link>
            )}
            <button
              className="hidden lg:block px-6 py-2 bg-red-600 text-white rounded-full hover:bg-pink-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}

        {/* Mobile ko  Hamburger Menu */}
        <div
          className="lg:hidden cursor-pointer flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <div className="w-8 h-1 bg-pink-800"></div>
          <div className="w-8 h-1 bg-pink-800"></div>
          <div className="w-8 h-1 bg-pink-800"></div>
        </div>
      </div>

      {/* Mobile ko Menu */}
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
            <Link to="/" onClick={toggleMenu}>Home</Link>
            <Link to="/animals" onClick={toggleMenu}>All Pets</Link>
            {["cats", "dogs", "birds", "others"].map((category) => (
              <Link to={`/category/${category}`} key={category} onClick={toggleMenu}>
                <li className="hover:text-gray-700">{category}</li>
              </Link>
            ))}
            <Link to="/aboutus" onClick={toggleMenu}>About us</Link>
          </ul>

          <div className="mt-4 flex flex-col items-center">
            {!token ? (
              <Link to="/register" onClick={toggleMenu}>
                <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-pink-500">
                  Register
                </button>
              </Link>
            ) : (
              <>
                {storedUserRole === "admin" && (
                  <Link to="/add" onClick={toggleMenu}>
                    <button className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-pink-500">
                      Add Animals
                    </button>
                  </Link>
                )}
                <button
                  className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-pink-500"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
