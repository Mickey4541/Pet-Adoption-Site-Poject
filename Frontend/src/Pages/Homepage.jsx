import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/HeroSection/HeroSection';
import HowToAdoptSection from '../Components/HowToAdoptSection/HowToAdoptSection';
import AdoptAPetSection from '../Components/AdoptAPetSection.jsx/AdoptAPetSection';
import Footer from '../Components/Footer/Footer';

const Homepage = ({ openModal }) => {
  return (
    <>
      <Navbar openModal={openModal} />
      <HeroSection />
      <HowToAdoptSection />
      <AdoptAPetSection />
      <Footer />
    </>
  );
};

export default Homepage;
