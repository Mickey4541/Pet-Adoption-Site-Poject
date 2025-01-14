import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";

const AllAnimalspage = () => {
  // Demo data for animals
  const demoAnimals = [
    {
      animalName: "Charlie",
      animalAge: "2 years",
      animalSize: "Medium",
      animalGender: "Male",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "California",
      animalImage:
        "https://plus.unsplash.com/premium_photo-1728545290865-cecc097be765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww",
      animalDescription:
        "Charlie is a playful and loving dog who enjoys running around and meeting new people.",
      category: "Dog",
      status: "Available for Adoption",
    },
    {
      animalName: "Bella",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzrc_ihk17wJ9R8zSC2_snymkqSYEQKbO1Pg&s",
      animalDescription:
        "Bella is a sweet and calm cat who loves snuggling and staying indoors.",
      category: "Dog",
      status: "Available for Adoption",
    },
    {
      animalName: "Harry",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnOrOwY43A2IXz1v0yLjmHVWj0d2_YMm_6eA&s",
      animalDescription:
        "Harry is a sweet and calm cat who loves snuggling and staying indoors.",
      category: "Cat",
      status: "Adopted",
    },
    {
      animalName: "Marky",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_1280.jpg",
      animalDescription:
        "Marky is a sweet and calm cat who loves snuggling and staying indoors.",
      category: "Dog",
      status: "Available for Adoption",
    },
    {
      animalName: "Bob",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaZTFntLKHks7sruJKKpB99HTHavTQEyv-Hg&s",
      animalDescription:
        "BoB is a sweet and calm cat who loves snuggling and staying indoors.",
      category: "Cat",
      status: "Adopted",
    },
    {
      animalName: "Oggy",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://static.scientificamerican.com/sciam/cache/file/2AE14CDD-1265-470C-9B15F49024186C10_source.jpg?w=1200",
      animalDescription:
        "Oggy is a sweet and calm cat who loves snuggling and staying indoors.",
      category: "Cat",
      status: "Adopted",
    },
    {
      animalName: "Pintu",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScpeV2asqy9rcTkcu09nqC9-PK4v8Ji74DiA&s",
      animalDescription:
        "Pintu is a sweet and calm cat who loves snuggling and staying indoors.",
      category: "Dog",
      status: "Adopted",
    },
    {
      animalName: "Kalu",
      animalAge: "3 years",
      animalSize: "Small",
      animalGender: "Female",
      animalVaccinated: true,
      animalHealthStatus: "Healthy",
      animalLocation: "New York",
      animalImage:
        "https://germanshepherdpuppiesnc.com/wp-content/uploads/2023/12/black-german-shepherd-lab-mix.jpeg",
      animalDescription:
        "Kalu is a sweet and calm cat who loves snuggling and staying indoors.",
      category: "Dog",
      status: "Adopted",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredAnimals = demoAnimals.filter((animal) => {
    return (
      animal.animalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <Navbar />
      <h2 className="text-4xl font-bold text-center mt-8 mb-6 text-white">
        <span className="text-pink-600">Available Animals</span> in Our Place
      </h2>

      {/* Search bar */}
      <div className="text-center mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search any pets here."
          className="bg-black text-white placeholder-white px-8 py-2 border-2 border-white rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 pb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAnimals.length > 0 ? (
            filteredAnimals.map((animal, index) => (
              <div
                key={index}
                className="bg-gray-800 text-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200 border-2 border-white"
              >
                <div className="relative">
                  <img
                    src={animal.animalImage}
                    alt={animal.animalName}
                    className="w-full h-52 object-cover p-1 rounded-xl"
                  />
                  {/* Category tag below the image and aligned left */}
                  <span className="absolute top-full right-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {animal.category}
                  </span>
                  <span className="absolute top-full left-4 mt-2 bg-pink-700 text-white font-medium font-[Oswald] text-sm  px-3 py-2 rounded-full">
                    {animal.status}
                  </span>
                </div>
                <div className="p-4 flex pt-12 flex-col font-[Oswald]">
                  <h3 className="text-3xl text-center font-bold text-White mb-2">
                    {animal.animalName}
                  </h3>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-700">Age:</strong>{" "}
                    {animal.animalAge}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Size:</strong>{" "}
                    {animal.animalSize}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Gender:</strong>{" "}
                    {animal.animalGender}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Vaccinated:</strong>{" "}
                    {animal.animalVaccinated ? "Yes" : "No"}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Health Status:</strong>{" "}
                    {animal.animalHealthStatus}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Location:</strong>{" "}
                    {animal.animalLocation}
                  </p>
                  <p className="text-xl text-white mb-1">
                    <strong className="text-pink-600">Description:</strong>{" "}
                    {animal.animalDescription}
                  </p>

                  <div className="flex items-center justify-center mt-4">
                    <Link to="/adopt">
                      <button className="px-3 sm:px-6 py-3 flex items-center text-center bg-transparent text-white border-2 border-white rounded-full shadow-md hover:bg-green-600 transition text-2xl sm:text-sm font-[Oswald]">
                        View single description page.
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No animals found.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllAnimalspage;
