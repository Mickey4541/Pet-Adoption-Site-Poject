import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { APIAuthenticated } from "../../http";
const CreateAnimal = () => {
  const [formData, setFormData] = useState({
    animalName: "",
    animalAge: "",
    animalSize: "",
    animalGender: "",
    animalVaccinated: false,
    animalHealthStatus: "",
    animalLocation: "",
    animalDescription: "",
    category: "cat",
    status: "Available for adoption",
  });
  
  const [animalImage, setAnimalImage] = useState(null); // state for image file

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const setImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAnimalImage(file); // Update animalImage state with selected file
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData(); // Create FormData to hold both text data and image

    // Append form data fields
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSubmit.append(key, value);
    });
    console.log(formDataToSubmit,"Form to submit");
    // Append the image file
    if (animalImage) {
      formDataToSubmit.append("animalImage", animalImage);
    }

    try {
      const response = await APIAuthenticated.post("http://localhost:3000/animals", formDataToSubmit, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        alert("Animal added successfully!");
        setFormData({
          animalName: "",
          animalAge: "",
          animalSize: "",
          animalGender: "",
          animalVaccinated: false,
          animalHealthStatus: "",
          animalLocation: "",
          animalDescription: "",
          category: "",
          status: "Available for adoption",
        });
        setAnimalImage(null); // Clear the image after successful submit
      } else {
        alert("Failed to add animal");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-gray-700 rounded-lg shadow-lg font-[Oswald]">
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-6">Add Animal</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Animal Name */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Name</label>
              <input
                type="text"
                name="animalName"
                value={formData.animalName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Age */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Age</label>
              <input
                type="text"
                name="animalAge"
                value={formData.animalAge}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Size */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Size</label>
              <input
                type="text"
                name="animalSize"
                value={formData.animalSize}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Gender */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Gender</label>
              <input
                type="text"
                name="animalGender"
                value={formData.animalGender}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Vaccinated */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Vaccinated</label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, animalVaccinated: true })}
                  className={`px-4 py-2 mr-2 rounded-xl ${
                    formData.animalVaccinated ? "bg-pink-500 text-white" : "bg-gray-300 text-gray-800"
                  }`}
                >
                  True
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, animalVaccinated: false })}
                  className={`px-4 py-2 rounded-xl ${
                    !formData.animalVaccinated ? "bg-pink-500 text-white" : "bg-gray-300 text-gray-800"
                  }`}
                >
                  False
                </button>
              </div>
            </div>

            {/* Health Status */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Health Status</label>
              <input
                type="text"
                name="animalHealthStatus"
                value={formData.animalHealthStatus}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Location */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Location</label>
              <input
                type="text"
                name="animalLocation"
                value={formData.animalLocation}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Image */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Image</label>
              <input
                type="file"
                name="animalImage"
                // onChange={handleImageChange}
                onChange={(e)=>setImage(e.target.files[0])}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Description */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Description</label>
              <textarea
                name="animalDescription"
                value={formData.animalDescription}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="Available for adoption">Available for adoption</option>
                <option value="Already adopted">Already adopted</option>
              </select>
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-pink-600 rounded-xl hover:bg-pink-700"
              >
                Add Animal
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateAnimal;
