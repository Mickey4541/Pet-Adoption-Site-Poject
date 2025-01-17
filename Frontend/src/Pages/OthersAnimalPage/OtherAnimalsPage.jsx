import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimals } from "../../Store/AllAnimalsSlice";

const Petspage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const {data:Animals,status} = useSelector((state) => state.AllAnimals)
  console.log("This is a other animals page", Animals);


  const Pets = Animals.filter((animal) => animal.category === "other")
  

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };


  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAnimals())
  }, [])
  

  // Filter pets based on the search query
  const filteredPets = Pets.filter((pet) =>
    pet.animalName.toLowerCase().includes(searchQuery) ||
    pet.category.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      <Navbar />
      <h2 className="text-4xl font-bold text-center mt-8 mb-6 text-white">
        <span className="text-pink-600">Available Pets</span> for Adoption
      </h2>

      <div className="text-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search pets you need."
          className="bg-black text-white placeholder-white px-8 py-2 border-2 border-white rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPets.length > 0 ? (
            filteredPets.map((pet, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 border-2 border-white"
              >
                <div className="relative">
                  <img
                    src={pet.animalImage}
                    alt={pet.animalName}
                    className="w-full h-52 object-cover p-1 rounded-xl"
                  />




                  <span className="absolute top-full right-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {pet.category}
                  </span>
                  <span className="absolute top-full left-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {pet.status}
                  </span>
                </div>
                <div className="p-4 flex pt-12 flex-col font-[Oswald]">
                  <h3 className="text-3xl text-center font-bold text-White mb-2">
                    {pet.animalName}
                  </h3>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-700">Age:</strong> {pet.animalAge}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Size:</strong> {pet.animalSize}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Gender:</strong> {pet.animalGender}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Vaccinated:</strong> {pet.animalVaccinated ? "Yes" : "No"}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Health Status:</strong> {pet.animalHealthStatus}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Location:</strong> {pet.animalLocation}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Description:</strong> {pet.animalDescription}
                  </p>

                  <div className="flex items-center justify-center mt-4">
                    <Link to={`/singleanimal/${pet._id}`}>
                      <button className="px-3 sm:px-6 py-3 flex items-center text-center bg-transparent text-white border-2 border-white rounded-full shadow-md hover:bg-green-600 transition text-2xl sm:text-sm font-[Oswald]">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-white text-center text-2xl">No pets found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Petspage;
