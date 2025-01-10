
import React from 'react'
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from './Components/HeroSection/HeroSection';
import Footer from './Components/Footer/Footer';
import HowToAdoptSection from './Components/HowToAdoptSection/HowToAdoptSection';
import AdoptAPetSection from './Components/AdoptAPetSection.jsx/AdoptAPetSection';

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <HowToAdoptSection/>
    <AdoptAPetSection/>
    <Footer/>
    </>
  )
}

export default App
