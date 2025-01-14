import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import searchIconLight from "../../assets/search-w.png";

const BirdsPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const Birds = [
    {
      animalName: "Kiwi",
      animalAge: "2 years",
      animalSize: "Small",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "California",
      animalImage:
        "https://cdn.pixabay.com/photo/2016/09/07/18/10/kiwi-1658876_1280.jpg",
      animalDescription:
        "Kiwi is a playful bird who loves to chirp and fly around the house.",
      category: "Bird",
      status: "Available for Adoption",
    },
    {
      animalName: "Sunny",
      animalAge: "1 year",
      animalSize: "Medium",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Florida",
      animalImage:
        "https://cdn.pixabay.com/photo/2017/05/15/11/35/sun-conure-2312334_1280.jpg",
      animalDescription:
        "Sunny is a bright and energetic conure who enjoys spending time with people.",
      category: "Bird",
      status: "Available for Adoption",
    },
    {
      animalName: "Coco",
      animalAge: "5 years",
      animalSize: "Medium",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Texas",
      animalImage:
        "https://cdn.pixabay.com/photo/2017/09/02/00/12/animal-2702012_1280.jpg",
      animalDescription:
        "Coco is a cheerful parrot who loves singing and imitating sounds.",
      category: "Bird",
      status: "Adopted",
    },
    {
      animalName: "Pip",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://cdn.pixabay.com/photo/2015/05/31/12/43/bird-792323_1280.jpg",
      animalDescription:
        "Pip is a small, sweet finch who enjoys flitting around in its cage.",
      category: "Bird",
      status: "Available for Adoption",
    },
    {
      animalName: "Bella",
      animalAge: "4 years",
      animalSize: "Large",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "California",
      animalImage:
        "https://cdn.pixabay.com/photo/2020/04/01/16/46/blue-and-yellow-macaw-4096112_1280.jpg",
      animalDescription:
        "Bella is a beautiful macaw who enjoys talking and spending time with its owners.",
      category: "Bird",
      status: "Adopted",
    },
    {
      animalName: "Zephyr",
      animalAge: "2 years",
      animalSize: "Small",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://cdn.pixabay.com/photo/2016/06/03/13/47/bluebird-1439846_1280.jpg",
      animalDescription:
        "Zephyr is a calm and gentle bird who enjoys watching the world go by from its perch.",
      category: "Bird",
      status: "Adopted",
    },
    {
      animalName: "Fluff",
      animalAge: "1 year",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://cdn.pixabay.com/photo/2017/07/27/15/38/bird-2547667_1280.jpg",
      animalDescription:
        "Fluff is a cute little lovebird who loves to be around its companions and enjoys being pet.",
      category: "Bird",
      status: "Available for Adoption",
    },
    {
      animalName: "Chirpy",
      animalAge: "3 years",
      animalSize: "Medium",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Florida",
      animalImage:
        "https://cdn.pixabay.com/photo/2016/10/05/23/39/parrot-1716075_1280.jpg",
      animalDescription:
        "Chirpy is an affectionate parrot who loves mimicking sounds and is always ready for a treat.",
      category: "Bird",
      status: "Adopted",
    },
   
  ];

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter birds based on the search query
  const filteredBirds = Birds.filter((bird) =>
    bird.animalName.toLowerCase().includes(searchQuery) ||
    bird.category.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Navbar />
      <h2 className="text-4xl font-bold text-center mt-8 mb-6 text-white">
        <span className="text-pink-600">Available Birds</span> in Our Place
      </h2>

     {/* Search bar */}
<div className="text-center mb-6">
  <input
    type="text"
    value={searchQuery}
    onChange={handleSearch}
    placeholder="Search Birds here."
    className="bg-black text-white placeholder-white px-8 py-2 border-2 border-white rounded-full"
  />
</div>


      <div className="container mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBirds.length > 0 ? (
            filteredBirds.map((Bird, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 border-2 border-white"
              >
                <div className="relative">
                  <img
                    src={Bird.animalImage}
                    alt={Bird.animalName}
                    className="w-full h-52 object-cover p-1 rounded-xl"
                  />
                  {/* Category tag below the image and aligned left */}
                  <span className="absolute top-full right-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {Bird.category}
                  </span>
                  <span className="absolute top-full left-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {Bird.status}
                  </span>
                </div>
                <div className="p-4 flex pt-12 flex-col font-[Oswald]">
                  <h3 className="text-3xl text-center font-bold text-White mb-2">
                    {Bird.animalName}
                  </h3>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-700">Age:</strong>{" "}
                    {Bird.animalAge}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Size:</strong>{" "}
                    {Bird.animalSize}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Gender:</strong>{" "}
                    {Bird.animalGender}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Vaccinated:</strong>{" "}
                    {Bird.animalVaccinated ? "Yes" : "No"}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Health Status:</strong>{" "}
                    {Bird.animalHealthStatus}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Location:</strong>{" "}
                    {Bird.animalLocation}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Description:</strong>{" "}
                    {Bird.animalDescription}
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
            <p className="text-white text-center text-2xl">No birds found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BirdsPage;
