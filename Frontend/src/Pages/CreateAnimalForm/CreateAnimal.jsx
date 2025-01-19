import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { APIAuthenticated } from "../../http";
import { useNavigate } from "react-router-dom";

const CreateAnimal = () => {
const navigate = useNavigate(); 

// State to manage form input fields
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

// State to manage the selected animal image file
const [animalImage, setAnimalImage] = useState(null);
const [flashMessage, setFlashMessage] = useState(null);

// Handles changes in form inputs
const handleChange = (e) => {
  const { name, value, type, checked } = e.target; 
  setFormData((prevData) => ({
    ...prevData,
    [name]: type === "checkbox" ? checked : value, 
  }));
};



// Handles the selection of an image file
const setImage = (e) => {
  const file = e.target.files[0]; // Get gareko selected file
  if (file) {
    setAnimalImage(file); // Update animalImage state with the selected file
  }
};

const handleSubmit = async (e) => {
  e.preventDefault(); 

  const formDataToSubmit = new FormData(); //it is form object which can hold text and image.

  Object.entries(formData).forEach(([key, value]) => {//object.entries ley  key value pair of object lai each array maa convert garxa. aba array maa convert garepaxi foreach loop lagauna ni sakinxa. foreach array ley tyo convert gareko each array dinxa(like all array maa loop lagxa)..
    formDataToSubmit.append(key, value);//form data to submit maa aako array lai append gareko. like animalName maa user ley helako animal ko name append/inject gareko palipilo.
  });

  // Append the selected image file if it exists
  if (animalImage) {
    formDataToSubmit.append("animalImage", animalImage);
  }

  try {
    const response = await APIAuthenticated.post(
      "http://localhost:3000/animals",
      formDataToSubmit,
      {
        headers: {
          "Content-Type": "multipart/form-data", 
        },
      }
    );

    if (response.status === 201) {
      setFlashMessage({
        message: "Animal Added Successfully",
        type: "success"
      });
      

      setFormData({
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
      setAnimalImage(null);
      setTimeout(() => {
        navigate("/"); 
      }, 3000);
     
    } else {
      setFlashMessage({
        message: "failed to Add Animal.",
        type: "error"
      });
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
        
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-6">
          Add Animal
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Animal Name */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Name
              </label>
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
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Age
              </label>
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
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Size
              </label>
              <input
                type="text"
                name="animalSize"
                placeholder="'Small', 'Medium', 'Large'"
                value={formData.animalSize}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Gender */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Gender
              </label>
              <input
                type="text"
                name="animalGender"
                placeholder="Male, Female"
                value={formData.animalGender}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Vaccinated */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Vaccinated
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, animalVaccinated: true })
                  }
                  className={`px-4 py-2 mr-2 rounded-xl ${
                    formData.animalVaccinated
                      ? "bg-pink-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  True
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, animalVaccinated: false })
                  }
                  className={`px-4 py-2 rounded-xl ${
                    !formData.animalVaccinated
                      ? "bg-pink-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  False
                </button>
              </div>
            </div>

            {/* Health Status */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Health Status
              </label>
              <input
                type="text"
                name="animalHealthStatus"
                placeholder="Normal, Affected"
                value={formData.animalHealthStatus}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Location */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Location
              </label>
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
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Image
              </label>
              <input
                type="file"
                name="animalImage"
                onChange={setImage}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Description */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Description
              </label>
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
              <label className="block text-sm font-semibold text-white mb-2">
                Category
              </label>
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
              <label className="block text-sm font-semibold text-white mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="Available for adoption">
                  Available for adoption
                </option>
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
            {flashMessage && (
          <div
            className={`p-4 mb-4 text-center font-bold font-[Oswald] text-2xl rounded-full ${
              flashMessage.type === "success"
                ? "bg-green-700 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {flashMessage.message}
          </div>
        )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreateAnimal;
