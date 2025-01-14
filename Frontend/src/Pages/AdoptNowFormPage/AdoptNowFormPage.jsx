import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const AdoptNowFormPage = () => {
  const [formData, setFormData] = useState({
    petId: '',
    adopterName: '',
    adopterContact: '',
    adopterAddress: '',
    adopterEmail: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    console.log(formData);
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg">
      <h2 className="text-3xl font-[Oswald] text-white mb-6 text-center">Adoption Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="text-white block" htmlFor="adopterName">Adopter Name</label>
          <input
            type="text"
            id="adopterName"
            name="adopterName"
            value={formData.adopterName}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-white focus:border-pink-500 focus:outline-none rounded-lg"
            required
          />
        </div>
        <div>
          <label className="text-white block" htmlFor="adopterContact">Adopter Contact</label>
          <input
            type="text"
            id="adopterContact"
            name="adopterContact"
            value={formData.adopterContact}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-white focus:border-pink-500 focus:outline-none rounded-lg"
            required
          />
        </div>
        <div>
          <label className="text-white block" htmlFor="adopterAddress">Adopter Address</label>
          <input
            type="text"
            id="adopterAddress"
            name="adopterAddress"
            value={formData.adopterAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-white focus:border-pink-500 focus:outline-none rounded-lg"
            required
          />
        </div>
        <div>
          <label className="text-white block" htmlFor="adopterEmail">Adopter Email</label>
          <input
            type="email"
            id="adopterEmail"
            name="adopterEmail"
            value={formData.adopterEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 text-white bg-transparent border-2 border-white focus:border-pink-500 focus:outline-none rounded-lg"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-pink-500 text-white font-bold text-lg rounded-lg hover:bg-pink-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default AdoptNowFormPage;
