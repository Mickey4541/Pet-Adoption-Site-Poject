import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import STATUSES from "../../Store/statuses";
import { fetchSingleAnimal } from "../../Store/SingleAnimalSlice";
import { setToken } from "../../Store/AuthSlice";
import { APIAuthenticated } from "../../http";

const SingleAnimalDetailsPage = () => {
  const { id } = useParams();
  const [storedUserRole, setStoredUserRole] = useState("");
  const [flashMessage, setFlashMessage] = useState(null);



  const dispatch = useDispatch();
  const navigate = useNavigate(); 



  // Get single animal data and status from the Redux store using useSelector
  const { data: animal, status } = useSelector(
    (state) => state.SingleAnimal || {}
  );




  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   const userRole = localStorage.getItem("userRole");
  //   if (userRole) {
  //     setStoredUserRole(userRole); // Update state
  //   }
  //   console.log("The user role from single animal page:", userRole);
  //   console.log("The token from single animal page:", storedToken);
  //   if (storedToken) {
  //     dispatch(setToken(storedToken)); // Token is set in Redux.
  //   } else {
  //     console.log("No stored token"); 
  //   }
  //   dispatch(fetchSingleAnimal(id)); // Fetch the animal details using the id from the URL.
  // }, [dispatch, id]); 


  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const userRole = localStorage.getItem("userRole");
  
    if (userRole) {
      setStoredUserRole(userRole);
    }
  
    if (!storedToken || userRole !== "admin") {
      navigate("/login"); // Redirect unauthorized users
      return;
    }
  
    dispatch(setToken(storedToken)); // Token is set in Redux.
    dispatch(fetchSingleAnimal(id)); // Fetch animal details.
  }, [dispatch, id, navigate]);
  




  const handleDelete = async () => {
    const confirmation = window.confirm(
      "Do you really want to delete this animal?"
    );
    if (confirmation) {
      try {
        const response = await APIAuthenticated.delete(
          `http://localhost:3000/animals/${id}`
        );
        if (response.status === 200) {
          setFlashMessage({
            message: "Requested Animal Deleted successfully.",
            type: "success",
          });
          setTimeout(() => {
            navigate("/"); 
          }, 3000);
        } else {
          setFlashMessage({
            message: "Failed to delete the animal.",
            type: "error",
          });
        }
      } catch (error) {
        console.error("Error deleting animal:", error);
        setFlashMessage({
          message: "An error occurred while deleting the animal.",
          type: "error",
        });
      }
    }
  };
  




  if (status === STATUSES.LOADING) {
    return <p>Loading...</p>; 
  }

  if (status === STATUSES.ERROR) {
    return <p>Error fetching animal details!</p>; 
  }

  if (!animal) {
    return <p>Animal not found!</p>; 
  }




  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
      {flashMessage && (
  <div
    className={`p-4 mb-4 text-center font-bold font-[Oswald] text-2xl rounded-full ${
      flashMessage.type === "success" ? "bg-green-700 text-white" : "bg-red-600 text-white"
    }`}
  >
    {flashMessage.message}
  </div>
)}
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
              <strong>Vaccinated:</strong>{" "}
              {animal.animalVaccinated ? "Yes" : "No"}
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
              <Link to={`/adopt/${animal._id}`}>
                <button className="bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-pink-800 transition duration-300">
                  Adopt Me!
                </button>
              </Link>
            )}

            {/* Admin-only Actions */}
            {storedUserRole === "admin" && (
              <>
                <button
                  onClick={handleDelete}
                  className="ml-4 bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-pink-800 transition duration-300"
                >
                  Delete Animal
                </button>
                <Link to={`/update/animal/${animal._id}`}>
                  <button className="ml-4 bg-pink-700 text-white py-2 px-4 rounded-lg hover:bg-pink-800 transition duration-300">
                    Update Animal
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleAnimalDetailsPage;
