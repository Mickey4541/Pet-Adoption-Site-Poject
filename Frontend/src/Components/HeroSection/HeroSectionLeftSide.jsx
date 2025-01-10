import React from 'react';
import { Link } from 'react-router-dom';

const HeroSectionLeftSide = () => {
  return (
    <div className="px-6 sm:px-8 lg:px-12 max-w-xl mx-auto text-center lg:text-left">
      <h1 className="text-xl sm:text-xl font-light text-white">
        A Friend, Buddy and part of happiness,
      </h1>
      <p className="mt-4">
        <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight font-[Oswald]">
          Your Perfect Pet is Waiting for you
        </span>
        <span className="block text-3xl sm:text-4xl lg:text-6xl italic font-serif mt-2">
          Adopt Your Pet Now.
        </span>
      </p>
      <p className="mt-6 text-sm sm:text-base lg:text-gray-400 leading-6 lg:leading-7">
        {" "}
        <p className='font-bold text-[Oswald] text-pink-500 text-[20px]'>"Dogs show unconditional love and loyalty, always ready to brighten your day with a wagging tail. Cats, with their soothing purrs and gentle cuddles, bring comfort and warmth to every moment. 🐶💖🐱"</p>
        <span className="text-yellow-300 font-bold"></span>
      </p>
      <p className="mt-4 text-base font-semibold">
        Do you have a interesting Story about your pet?
      </p>

      <div className="flex justify-center lg:justify-start mt-6 space-x-4">
        <Link
          to="/contact"
          className="px-3 sm:px-6 py-3  bg-transparent text-white border-2 border-white rounded-full shadow-md hover:bg-green-600 transition text-xs sm:text-sm font-[Oswald]"
        >
          Contact us
        </Link>
        <Link
          to="#"
          className="px-3 sm:px-6 py-2 sm:py-3 border-2 border-white rounded-full flex items-center hover:bg-white hover:text-black transition text-xs sm:text-sm font-[Oswald]"
        >
          <svg
            className="w-4 sm:w-5 h-4 sm:h-5 mr-2 "
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z "
            />
          </svg>
          Submit Pets stories
        </Link>
      </div>
    </div>
  );
}

export default HeroSectionLeftSide;
