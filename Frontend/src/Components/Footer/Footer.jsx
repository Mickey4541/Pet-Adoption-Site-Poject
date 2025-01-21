import React from "react";
import CopyrightSection from "../CopyrightSection/CopyrightSection";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pink-900 text-white py-8">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-4 md:px-12 space-y-8 md:space-y-0">


        
        {/* Logo Section */}
        <div className="flex-1 text-center md:text-left flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold text-purple-500 mb-4 font-[Oswald]">ADOPT <span className="text-white">PETS</span></h2>
          <p className="text-sm text-gray-300 font-[Oswald]">
          <img
            src="https://dm6g3jbka53hp.cloudfront.net/static-images/cat-vet-30032020.png"
            alt="Adopt a Friend"
            className="h-[200px] rounded-lg shadow-lg font-[Oswald]"
          />
            We connect loving pets with caring families. <br /> Discover your new best
            friend today!
          </p>
        </div>




        {/* Quick Links */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold mb-4 font-[Oswald]">Quick <span className="text-pink-500">Links</span></h3>
          <ul className="space-y-2 text-center">
            <Link to='/privacypolicy'>
            <li className="hover:text-green-400 cursor-pointer font-[Oswald]">
              Privacy Policy
            </li>
            </Link>
            <Link to='/contactus'>
            <li className="hover:text-green-400 cursor-pointer font-[Oswald]">Contact Us</li>
            </Link>
            <Link to='/donate'>
            <li className="hover:text-green-400 cursor-pointer font-[Oswald]">Donate Us</li>
            </Link>
            <Link to='/tac'>
            <li className="hover:text-green-400 cursor-pointer font-[Oswald]">
              Terms and Conditions
            </li>
            </Link>
            <Link to='/aboutdeveloper'>
            <li className="hover:text-green-400 cursor-pointer font-[Oswald]">
              About Developer
            </li>
            </Link>
          </ul>
        </div>



        {/* Image Section */}
        <div className="flex-1 flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4 font-[Oswald]">Adopt a <span className="text-pink-500">Friend</span></h3>
          <img
            src="https://dm6g3jbka53hp.cloudfront.net/static-images/dog-on-phone-30032020.png"
            alt="Adopt a Friend"
            className="h-[200px] rounded-lg shadow-lg"
          />
         <Link to='/contactus'>
         <button className="text-xl mt-6 px-6 py-2 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition duration-300 font-[Oswald] border-none">
            Contact Now
          </button>
         </Link>
        </div>
      </div>
      {/* Footer Bottom */}
      <CopyrightSection/>
    </footer>
  );
};

export default Footer;
