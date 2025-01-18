import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { fetchAnimals } from "../../Store/AllAnimalsSlice";
import { useDispatch, useSelector } from 'react-redux'
import { setRole } from "../../Store/AuthSlice";

const AllAnimalspage = () => {

  const data = useSelector((state)=>state.auth)
  console.log("Auth role data is", data?.role);
  



//   const adoptionState = useSelector((state) => state);
// console.log("Full Redux State:", adoptionState);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  
 //data ra status lai destructure gareko ani data lai aauta alias(nickname) diyako.
 const {data:Animals,status} = useSelector((state)=>state.AllAnimals)//(state) vaneko store vayo hamro main store.js file. ani state.product vaneko store bhitra reducer product: productSlice vayo. so store bhitra ko productSlice lai refer gariraako xa.
 console.log(Animals, "This is my data");



  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAnimals())
  },[])




  const filteredAnimals = Animals.filter((animal) => {
    return (
      animal.animalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      animal.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });




  if (status === 'LOADING') return <p>Loading...</p>;
  if (status === 'ERROR') return <p>Error fetching animals!</p>;


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
                  <Link to={`/singleanimal/${animal._id}`}>
                      <button className="px-3 sm:px-6 py-3 flex items-center text-center bg-transparent text-white border-2 border-white rounded-full shadow-md hover:bg-green-600 transition text-2xl sm:text-sm font-[Oswald]">
                        View Details.
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
