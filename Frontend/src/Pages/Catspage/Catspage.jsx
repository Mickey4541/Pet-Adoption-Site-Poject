import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Catspage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const Cats = [
    {
      animalName: "Mittens",
      animalAge: "2 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "California",
      animalImage:
        "https://cdn.pixabay.com/photo/2016/11/18/11/36/cat-1833831_1280.jpg",
      animalDescription:
        "Mittens is a playful cat who enjoys cuddling and chasing toys around the house.",
      category: "Cat",
      status: "Available for Adoption",
    },
    {
      animalName: "Whiskers",
      animalAge: "3 years",
      animalSize: "Medium",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Texas",
      animalImage:
        "https://cdn.pixabay.com/photo/2017/09/10/02/42/cat-2730645_1280.jpg",
      animalDescription:
        "Whiskers is a curious and affectionate cat who loves to explore and nap in sunny spots.",
      category: "Cat",
      status: "Available for Adoption",
    },
    {
      animalName: "Shadow",
      animalAge: "5 years",
      animalSize: "Large",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Florida",
      animalImage:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/cat-975348_1280.jpg",
      animalDescription:
        "Shadow is a calm and laid-back cat who enjoys lounging and occasionally playing with toys.",
      category: "Cat",
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
        "https://cdn.pixabay.com/photo/2017/08/30/06/37/cat-2690151_1280.jpg",
      animalDescription:
        "Luna is an energetic kitten who loves to explore and be the center of attention.",
      category: "Cat",
      status: "Available for Adoption",
    },
    {
      animalName: "Bella",
      animalAge: "4 years",
      animalSize: "Medium",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "California",
      animalImage:
        "https://cdn.pixabay.com/photo/2020/03/23/21/44/cat-4955090_1280.jpg",
      animalDescription:
        "Bella is a sweet and independent cat who enjoys spending time by herself and being petted.",
      category: "Cat",
      status: "Adopted",
    },
  ];

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter cats based on the search query
  const filteredCats = Cats.filter((cat) =>
    cat.animalName.toLowerCase().includes(searchQuery) ||
    cat.category.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Navbar />
      <h2 className="text-4xl font-bold text-center mt-8 mb-6 text-white">
        <span className="text-pink-600">Available Cats</span> for Adoption
      </h2>

      {/* Search bar */}
      <div className="text-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Cats here."
          className="bg-black text-white placeholder-white px-8 py-2 border-2 border-white rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCats.length > 0 ? (
            filteredCats.map((Cat, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 border-2 border-white"
              >
                <div className="relative">
                  <img
                    src={Cat.animalImage}
                    alt={Cat.animalName}
                    className="w-full h-52 object-cover p-1 rounded-xl"
                  />
                  {/* Category tag below the image and aligned left */}
                  <span className="absolute top-full right-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {Cat.category}
                  </span>
                  <span className="absolute top-full left-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {Cat.status}
                  </span>
                </div>
                <div className="p-4 flex pt-12 flex-col font-[Oswald]">
                  <h3 className="text-3xl text-center font-bold text-White mb-2">
                    {Cat.animalName}
                  </h3>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-700">Age:</strong> {Cat.animalAge}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Size:</strong> {Cat.animalSize}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Gender:</strong> {Cat.animalGender}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Vaccinated:</strong> {Cat.animalVaccinated ? "Yes" : "No"}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Health Status:</strong> {Cat.animalHealthStatus}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Location:</strong> {Cat.animalLocation}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Description:</strong> {Cat.animalDescription}
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
            <p className="text-white text-center text-2xl">No cats found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catspage;
