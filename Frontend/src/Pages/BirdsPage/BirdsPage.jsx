import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import searchIconLight from "../../assets/search-w.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimals } from "../../Store/AllAnimalsSlice";

const BirdsPage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

 const {data:Animals, status} = useSelector((state) => state.AllAnimals)
 console.log("This is a data from birds page", Animals);
 

 const Birds = Animals.filter((animal) => animal.category === 'bird')

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter birds based on the search query
  const filteredBirds = Birds.filter((bird) =>
    bird.animalName.toLowerCase().includes(searchQuery) ||
    bird.category.toLowerCase().includes(searchQuery)
  );

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAnimals())
  }, [])

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
                  <Link to={`/singleanimal/${Bird._id}`}>
                      <button className="px-3 sm:px-6 py-3 flex items-center text-center bg-transparent text-white border-2 border-white rounded-full shadow-md hover:bg-green-600 transition text-2xl sm:text-sm font-[Oswald]">
                        View Details
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
