import React, { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimals } from "../../Store/AdoptionAvailableOrNotSlice";

const Catspage = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query


  //seeing full redux state.
  // const adoptionState = useSelector((state) => state);
  // console.log("Full Redux State:", adoptionState);
  
  const {data:Animals, status} = useSelector((state)=>state.AdoptionAvailableOrNot)//(state) vaneko store vayo hamro main store.js file. ani state.AdoptionAvailableOrNot vaneko store bhitra reducer product: productSlice vayo. so store bhitra ko productSlice lai refer gariraako xa.
  
  console.log("This is cat data in Catspage:", Animals);

   // Filtering the data to include only cats
   const Cats = Animals.filter((animal) => animal.category === 'cat');
  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  
 const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAnimals())
  }, [])
  
  // Filter cats based on the search query
  const filteredCats = Cats.filter((cat) =>
    cat.animalName.toLowerCase().includes(searchQuery) ||
    cat.category.toLowerCase().includes(searchQuery)
  );


  // const dispatch = useDispatch()
  // useEffect(() => {
  //   if (Animals.length === 0) {
  //     dispatch(fetchAnimals()); // Fetch animals if data is not already in the store
  //     console.log("Data fetched through api");
      
  //   }
  // }, [dispatch, Animals.length]);

  if (status === 'LOADING') return <p>Loading...</p>;
  if (status === 'ERROR') return <p>Error fetching animals!</p>;
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
