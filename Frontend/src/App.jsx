import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Register from './Components/Register/Register';
import AllAnimalspage from './Pages/AllAnimalPage/AllAnimalspage';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Catspage from './Pages/Catspage/Catspage';
import Dogspage from './Pages/DogsPage/Dogspage';
import Login from './Components/Login/Login';

const App = () => {



  const [isModalOpen, setIsModalOpen] = useState(false);
  // Function to open the modal
  // const openRegisterModal = () => {
  //   setIsModalOpen(true);
  // };

  // Function to close the modal
  const closeRegisterModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage  />} />
        
        {/* Register Route */}
        <Route
          path="/register"
          element={<Register onClose={closeRegisterModal} />}
        />
        <Route
          path="/login"
          element={<Login onClose={closeRegisterModal} />}
        />
        

        <Route path='/animals' element={<AllAnimalspage/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
        <Route path='/category/cats' element={<Catspage/>}/>
        <Route path='/category/dogs' element={<Dogspage/>}/>
      </Routes>

       {/* model pahile nai open xa vani register maa close model pass gareko ani onclose jaha xa tyo open model lai close garna use vayo*/}
      {/* {isModalOpen && <Register onClose={closeRegisterModal} />} */}
    </Router>
  );
};

export default App;
