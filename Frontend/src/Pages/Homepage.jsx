import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import HeroSection from '../Components/HeroSection/HeroSection';
import HowToAdoptSection from '../Components/HowToAdoptSection/HowToAdoptSection';
import Footer from '../Components/Footer/Footer';
import OurHappyAdopters from '../Components/OurHappyAdoters/OurHappyAdopters';
import DonateUsSection from '../Components/DonateComponent/DonateUsSection';

const Homepage = ({ openModal }) => {
  return (
    <>
      <Navbar openModal={openModal} />
      <HeroSection />
      <HowToAdoptSection />
      <OurHappyAdopters />
      <DonateUsSection/>
      <Footer />
    </>
  );
};

export default Homepage;
