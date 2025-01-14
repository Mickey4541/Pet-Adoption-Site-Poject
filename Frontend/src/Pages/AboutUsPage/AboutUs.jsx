import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const AboutUs = () => {
  return (
    <>
    <Navbar/>
    <div className="font-[Oswald] px-4 py-8 bg-gray-900 text-white">
      <div className="max-w-[900px] mx-auto ">
        <h1 className="text-pink-700 text-3xl font-bold text-center mb-4">About Us</h1>
        <p className="text-lg text-white mb-8">
          Welcome to Adopt Pet, where we believe every animal deserves a loving home. We are a platform dedicated to connecting compassionate individuals with homeless pets in need of care and companionship. Acting as a bridge, we showcase a wide variety of animals on our website, helping them find their forever families.
        </p>

        <h2 className="text-pink-700 text-2xl font-bold text-center mb-4">Our Mission</h2>
        <p className="text-lg text-white mb-8">
          At Adopt Pet, our mission is simple:
          <br />
          To ensure that no animal is left without a proper home and every loving family can find their perfect companion. By providing a platform for pet adoption, we aim to create a world where animals and humans come together to build a bond of trust, love, and care.
        </p>

        <h2 className="text-green-700 text-2xl text-center font-bold mb-4">How We Help ??</h2>
        <h3 className="text-pink-700 text-xl text-center font-bold mb-4">Pet Adoption:</h3>
        <p className="text-lg text-white mb-8">
          We feature a diverse range of pets from shelters, rescue organizations, and individual owners. Through our platform, you can browse, select, and adopt pets with ease and confidence.
        </p>

        <h3 className="text-pink-700 text-xl text-center font-bold mb-4">For Pet Owners:</h3>
        <p className="text-lg text-white mb-8">
          If you have an animal that needs a new home due to valid and genuine circumstances, we are here to assist. Our team reviews every case carefully to ensure that only legitimate situations are considered, ensuring the safety and well-being of the pets.
        </p>

        <h3 className="text-pink-700 text-xl text-center font-bold mb-4">Support for Homeless Animals:</h3>
        <p className="text-lg text-white mb-8">
          We work tirelessly to promote pet adoption and provide a second chance for animals who have been abandoned, lost, or need rescue.
        </p>

        <h2 className="text-pink-700 text-2xl text-center font-bold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-5 text-lg text-white mb-8">
          <li><span className='text-pink-400'>Trustworthy Platform:</span> We prioritize the welfare of the animals and only allow genuine adoption cases to ensure a safe and transparent process.</li>
          <li><span className='text-pink-400'>Compassionate Care:</span> Every pet listed on our site is given the best chance to find a loving home, thanks to our dedicated team and supportive community.</li>
          <li><span className='text-pink-400'>Community Engagement:</span> We believe in the power of people to make a difference. Whether you’re adopting, fostering, or listing a pet for adoption, your involvement matters.</li>
        </ul>

        <h2 className="text-pink-700 text-2xl text-center font-bold mb-4">Join Us in Making a Difference</h2>
        <p className="text-lg text-white">
          Together, we can create a brighter future for every animal. Whether you’re looking to adopt a furry friend or need help finding a home for a pet, Adopt Pet is here to guide you through the journey.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutUs;
