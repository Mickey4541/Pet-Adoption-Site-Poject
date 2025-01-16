import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { fetchAnimals } from "../../Store/AdoptionAvailableOrNotSlice";  // Assuming you have an action to fetch animals
import STATUSES from "../../Store/statuses";

const SingleAnimalDetailsPage = () => {
  // const { id } = useParams();
  // console.log("This is single animal:", id);
  
  // const dispatch = useDispatch();

  // // Get data and status from the Redux store
  // const { data: Animals, status } = useSelector((state) => state.AdoptionAvailableOrNot || {});

  // // Fetch the animal from the data array
  // const animal = Animals ? Animals.find((animal) => animal._id === id) : null;

  // // Dispatch fetch action if data is not available
  // useEffect(() => {
  //   if (!Animals || Animals.length === 0) {
  //     dispatch(fetchAnimals()); // Fetch animals if data is missing
  //   }
  // }, [dispatch, Animals]);

  // if (status === STATUSES.LOADING) {
  //   return <p>Loading...</p>; // Show loading while fetching data
  // }

  // if (status === STATUSES.ERROR) {
  //   return <p>Error fetching animal details!</p>; 
  // }
  // if (!animal) {
  //   return <p>Animal not found!</p>;
  // }

  console.log("This is the animal details", animal);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Animal Image and Basic Information */}
          <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              src={animal.animalImage}
              alt={animal.animalName}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Animal Details */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
              {animal.animalName}
            </h2>
            <p className="text-xl mb-2">
              <strong>Age:</strong> {animal.animalAge}
            </p>
            <p className="text-xl mb-2">
              <strong>Size:</strong> {animal.animalSize}
            </p>
            <p className="text-xl mb-2">
              <strong>Gender:</strong> {animal.animalGender}
            </p>
            <p className="text-xl mb-2">
              <strong>Vaccinated:</strong> {animal.animalVaccinated ? "Yes" : "No"}
            </p>
            <p className="text-xl mb-2">
              <strong>Health Status:</strong> {animal.animalHealthStatus}
            </p>
            <p className="text-xl mb-2">
              <strong>Location:</strong> {animal.animalLocation}
            </p>
            <p className="text-xl mb-4">
              <strong>Status:</strong> {animal.status}
            </p>
            <p className="text-lg mb-4">
              <strong>Description:</strong> {animal.animalDescription}
            </p>

            {/* Adoption Button */}
            {animal.status === "Available for adoption" && (
              <Link to='/adopt'>
              <button className="bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-pink-800 transition duration-300">
                Adopt Me!
              </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleAnimalDetailsPage;
