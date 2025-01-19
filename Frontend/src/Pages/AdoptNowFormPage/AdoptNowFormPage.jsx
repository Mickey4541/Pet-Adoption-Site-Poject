import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import axios from 'axios';

const AdoptNowFormPage = () => {
  const [formData, setFormData] = useState({
    adopterName: '',
    adopterContact: '',
    adopterAddress: '',
    adopterEmail: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { id } = useParams(); 
  console.log(id, "This is single animal id"); 
  
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in
    const token = localStorage.getItem('token');
    if (!token) {
      // Redirect to login page if not logged in
      navigate(`/login?redirectTo=/adopt/${id}`);
    }
  }, [navigate, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/api/adopt/${id}`,
        { ...formData }, // Send formData without id (id is part of URL)
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`, // Send token in the headers
          },
        }
      );

      if (response.data.success) {
        setSuccessMessage(response.data.message);
        setErrorMessage('');
        setFormData({
          adopterName: '',
          adopterContact: '',
          adopterAddress: '',
          adopterEmail: '',
        });
          // Show success message for 2 seconds before redirecting
          setTimeout(() => {
            navigate('/'); // Redirect to homepage
          }, 3000); // 2000ms = 2 seconds
      } else {
        setErrorMessage(response.data.message || 'Something went wrong.');
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Error submitting adoption form:', error);
      setErrorMessage('An error occurred. Please try again later.');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-lg mx-auto p-6 bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-[Oswald] text-white mb-6 text-center">Adoption Form</h2>
        {successMessage && (
          <div className="p-4 mb-4 text-green-700 bg-green-200 rounded-lg">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="p-4 mb-4 text-red-700 bg-red-200 rounded-lg">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Fields */}
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
      <Footer />
    </>
  );
};

export default AdoptNowFormPage;
