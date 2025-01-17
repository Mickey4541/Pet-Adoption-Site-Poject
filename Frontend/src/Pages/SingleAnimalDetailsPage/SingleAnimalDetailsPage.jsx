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

  // console.log("This is the animal details", animal);

  return (
    <>
      <Navbar />
     
      <Footer />
    </>
  );
};

export default SingleAnimalDetailsPage;
