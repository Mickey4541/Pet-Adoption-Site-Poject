import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
// import axios from "axios";
import { API } from "../../http";

const DonatePage = () => {
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    email: "",
    amount: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, address, email, amount } = formData;

    if (!username || !email || !address || !amount) {
      alert("Please fill all the fields.");
      return;
    }
    console.log("HAHA");
    

    try {
      const response = await API.post(
        "/payment",
        { username, email, address, amount },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Payment response:", response.data);

      if (response.data.payment_url) {
        window.location.href = response.data.payment_url;
      }
    } catch (error) {
      console.error("Payment error from donate page:", error.response?.data || error.message);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <h2 className="text-white text-center p-8 font-[Oswald]">
        Your support helps us provide a loving home for pets in need.{" "}
        <span className="text-red-500">Every contribution makes a difference.</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center space-y-6 mb-8"
      >
        <div className="flex items-center space-x-4">
          <label htmlFor="username" className="text-white font-bold font-[Oswald]">Name:</label>
          <input
            onChange={handleChange}
            type="text"
            id="username"
            name="username"
            value={formData.username}
            placeholder="Enter Your Name"
            className="text-center p-2 rounded-full placeholder:text-pink-400 font-[Oswald] bg-transparent border border-white text-white"
            style={{ width: "250px" }}
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <label htmlFor="address" className="text-white font-bold font-[Oswald]">Address:</label>
          <input
            onChange={handleChange}
            type="text"
            id="address"
            name="address"
            value={formData.address}
            placeholder="Enter Your Address"
            className="text-center p-2 rounded-full placeholder:text-pink-400 font-[Oswald] bg-transparent border border-white text-white"
            style={{ width: "250px" }}
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <label htmlFor="email" className="text-white font-bold font-[Oswald]">Email:</label>
          <input
            onChange={handleChange}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            className="text-center p-2 rounded-full placeholder:text-pink-400 font-[Oswald] bg-transparent border border-white text-white"
            style={{ width: "250px" }}
            required
          />
        </div>

        <div className="flex items-center space-x-4">
          <label htmlFor="amount" className="text-white font-bold font-[Oswald]">Amount:</label>
          <input
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            placeholder="Enter Donation Amount"
            className="text-center p-2 rounded-full placeholder:text-pink-400 font-[Oswald] bg-transparent border border-white text-white"
            style={{ width: "250px" }}
            required
          />
        </div>

        <button
          type="submit"
          className="p-2 text-white rounded-full px-4 bg-purple-800 hover:bg-purple-700"
        >
          Donate with Khalti
        </button>
      </form>
      <Footer />
    </>
  );
};

export default DonatePage;
