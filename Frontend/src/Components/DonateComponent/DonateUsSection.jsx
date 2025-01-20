import React from 'react';
import DonateRight from '../../../src/assets/DonateRight.png';
import DonateLeft from '../../../src/assets/DonateLeft.png';
import { Link } from 'react-router-dom';

const DonateUsSection = () => {
  return (
    <section className="text-white bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 w-full h-[40vh] flex items-center justify-between px-8">
        
      {/* Left Image */}
      <div className="left h-full w-1/4 flex items-center">
        <img
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          src={DonateLeft}
          alt="Left Illustration"
        />
      </div>

      {/* Middle Content */}
      <div className="middle text-center space-y-4">
        <h2 className="font-[Oswald] text-4xl font-bold tracking-wide text-pink-500">
          Donate For Us
        </h2>
        <p className="text-lg text-gray-300">
          Your support helps us provide a loving home for pets in need. Every
          contribution makes a difference.
        </p>
        <Link to='/donate'>
        <button className="px-6 py-3 bg-pink-600 rounded-full text-lg font-medium hover:bg-pink-500 transition duration-300 ease-in-out shadow-lg">
          Donate Now
        </button>
        </Link>
      </div>

      {/* Right Image */}
      <div className="right h-full w-1/4 flex items-center">
        <img
          className="w-full h-auto object-contain rounded-lg shadow-lg"
          src={DonateRight}
          alt="Right Illustration"
        />
      </div>
    </section>
  );
};

export default DonateUsSection;
