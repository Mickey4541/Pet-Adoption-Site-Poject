import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const Petspage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const Pets = [
    {
      animalName: "Hammy",
      animalAge: "2 years",
      animalSize: "Small",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Texas",
      animalImage:
        "https://cdn.pixabay.com/photo/2016/03/09/09/16/hamster-1245864_1280.jpg",
      animalDescription:
        "Hammy is a curious and energetic hamster who loves to run on his wheel and explore.",
      category: "Hamster",
      status: "Available for Adoption",
    },
    {
      animalName: "Gizmo",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "California",
      animalImage:
        "https://cdn.pixabay.com/photo/2017/06/06/22/26/guinea-pig-2379529_1280.jpg",
      animalDescription:
        "Gizmo is a friendly guinea pig who enjoys cuddling and eating fresh veggies.",
      category: "Guinea Pig",
      status: "Available for Adoption",
    },
    {
      animalName: "Fluffy",
      animalAge: "4 years",
      animalSize: "Medium",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Florida",
      animalImage:
        "https://cdn.pixabay.com/photo/2016/04/13/20/45/rabbit-1327854_1280.jpg",
      animalDescription:
        "Fluffy is a sweet and gentle rabbit who loves to hop around and eat carrots.",
      category: "Rabbit",
      status: "Adopted",
    },
    {
      animalName: "Peanut",
      animalAge: "1 year",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://cdn.pixabay.com/photo/2018/01/18/19/16/squirrel-3095949_1280.jpg",
      animalDescription:
        "Peanut is a playful and quick squirrel who enjoys climbing trees and finding snacks.",
      category: "Squirrel",
      status: "Available for Adoption",
    },
    {
      animalName: "Rocky",
      animalAge: "2 years",
      animalSize: "Small",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "Texas",
      animalImage:
        "https://cdn.pixabay.com/photo/2017/02/09/15/14/ferret-2058029_1280.jpg",
      animalDescription:
        "Rocky is a mischievous ferret who enjoys running through tunnels and playing with toys.",
      category: "Ferret",
      status: "Adopted",
    },
  ];

  // Function to handle search input
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

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
            <p className="text-white text-center text-2xl">No pets found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Petspage;
