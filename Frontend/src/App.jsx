import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Register from './Components/Register/Register';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open the modal
  const openRegisterModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeRegisterModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<Homepage openModal={openRegisterModal} />} />
        
        {/* Register Route */}
        <Route
          path="/register"
          element={<Register onClose={closeRegisterModal} />}
        />
        
      </Routes>

       {/* model pahile nai open xa vani register maa close model pass gareko ani onclose jaha xa tyo open model lai close garna use vayo*/}
      {isModalOpen && <Register onClose={closeRegisterModal} />}
    </Router>
  );
};

export default App;
