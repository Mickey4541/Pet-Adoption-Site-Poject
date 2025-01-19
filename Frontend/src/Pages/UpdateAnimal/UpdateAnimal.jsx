import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const CreateAnimal = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-gray-700 rounded-lg shadow-lg font-[Oswald]">
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-6">Update Animal</h2>
        <form>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Name</label>
              <input
                type="text"
                name="animalName"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Age</label>
              <input
                type="text"
                name="animalAge"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Size</label>
              <input
                type="text"
                name="animalSize"
                placeholder="'Small', 'Medium', 'Large'"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Gender</label>
              <input
                type="text"
                name="animalGender"
                placeholder="Male, Female"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Vaccinated</label>
              <div className="flex items-center">
                <button
                  type="button"
                  className="px-4 py-2 mr-2 bg-gray-300 text-gray-800 rounded-xl"
                >
                  True
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded-xl"
                >
                  False
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Health Status</label>
              <input
                type="text"
                name="animalHealthStatus"
                placeholder="Normal, Affected"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Location</label>
              <input
                type="text"
                name="animalLocation"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Animal Image</label>
              <input
                type="file"
                name="animalImage"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Description</label>
              <textarea
                name="animalDescription"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Category</label>
              <select
                name="category"
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-white mb-2">Status</label>
              <select
                name="status"
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
                Update Animal
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
