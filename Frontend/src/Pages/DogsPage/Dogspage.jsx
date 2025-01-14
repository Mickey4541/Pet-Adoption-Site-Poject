import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Dogspage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const Dogs = [
    {
      animalName: "Buddy",
      animalAge: "3 years",
      animalSize: "Medium",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "California",
      animalImage:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/dog-736885_1280.jpg",
      animalDescription:
        "Buddy is a playful dog who loves to run and fetch toys.",
      category: "Dog",
      status: "Available for Adoption",
    },
    {
      animalName: "Max",
      animalAge: "2 years",
      animalSize: "Large",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Texas",
      animalImage:
        "https://cdn.pixabay.com/photo/2017/09/01/05/51/dog-2693984_1280.jpg",
      animalDescription:
        "Max is an energetic dog who enjoys long walks and playing in the park.",
      category: "Dog",
      status: "Available for Adoption",
    },
    {
      animalName: "Bella",
      animalAge: "4 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Florida",
      animalImage:
        "https://cdn.pixabay.com/photo/2016/01/15/20/25/dog-1135291_1280.jpg",
      animalDescription:
        "Bella is a calm and affectionate dog who loves cuddles and playing with children.",
      category: "Dog",
      status: "Adopted",
    },
    {
      animalName: "Luna",
      animalAge: "1 year",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://cdn.pixabay.com/photo/2020/07/17/12/29/dog-5412800_1280.jpg",
      animalDescription:
        "Luna is a curious dog who enjoys exploring new places and making new friends.",
      category: "Dog",
      status: "Available for Adoption",
    },
    {
      animalName: "Rocky",
      animalAge: "5 years",
      animalSize: "Large",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "California",
      animalImage:
        "https://cdn.pixabay.com/photo/2016/11/19/10/29/dog-1836403_1280.jpg",
      animalDescription:
        "Rocky is a loyal and brave dog who enjoys outdoor adventures and protecting his family.",
      category: "Dog",
      status: "Adopted",
    },
  ];

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter dogs based on the search query
  const filteredDogs = Dogs.filter((dog) =>
    dog.animalName.toLowerCase().includes(searchQuery) ||
    dog.category.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Navbar />
      <h2 className="text-4xl font-bold text-center mt-8 mb-6 text-white">
        <span className="text-pink-600">Available Dogs</span> for Adoption
      </h2>

      {/* Search bar */}
      <div className="text-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Dogs here."
          className="bg-black text-white placeholder-white px-8 py-2 border-2 border-white rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDogs.length > 0 ? (
            filteredDogs.map((dog, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 border-2 border-white"
              >
                <div className="relative">
                  <img
                    src={dog.animalImage}
                    alt={dog.animalName}
                    className="w-full h-52 object-cover p-1 rounded-xl"
                  />
                  {/* Category tag below the image and aligned left */}
                  <span className="absolute top-full right-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {dog.category}
                  </span>
                  <span className="absolute top-full left-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {dog.status}
                  </span>
                </div>
                <div className="p-4 flex pt-12 flex-col font-[Oswald]">
                  <h3 className="text-3xl text-center font-bold text-White mb-2">
                    {dog.animalName}
                  </h3>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-700">Age:</strong> {dog.animalAge}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Size:</strong> {dog.animalSize}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Gender:</strong> {dog.animalGender}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Vaccinated:</strong> {dog.animalVaccinated ? "Yes" : "No"}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Health Status:</strong> {dog.animalHealthStatus}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Location:</strong> {dog.animalLocation}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Description:</strong> {dog.animalDescription}
                  </p>

                  <div className="flex items-center justify-center mt-4">
                    <Link to="/adopt">
                      <button className="px-3 sm:px-6 py-3 flex items-center text-center bg-transparent text-white border-2 border-white rounded-full shadow-md hover:bg-green-600 transition text-2xl sm:text-sm font-[Oswald]">
                        Adopt Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center text-2xl">No dogs found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dogspage;
