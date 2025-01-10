import React, { useState } from "react";
import axios from "axios"; 



const Register = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // Default role for registration
  });

  const [isLogin, setIsLogin] = useState(false); // State to track whether it's login or register form

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = isLogin
    ? "http://localhost:3000/api/auth/login" // Replace with your login API URL
    : "http://localhost:3000/api/auth/register"; // Replace with your register API URL

  const requestBody = isLogin
    ? {
        username : formData.username,
        email: formData.email,
        password: formData.password,
      }
    : {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: formData.role,
      };

  try {
    const response = await axios.post(apiUrl, requestBody);
    console.log("API Response:", response.data); // Handle the API response here

    // You can handle additional logic after a successful API call
    onClose(); // Close modal on success, if necessary
  } catch (error) {
    console.error("Error:", error);
    // Handle error (e.g., show a notification, set error state, etc.)
  }
    onClose(); // Close modal after submission
  };

  const handleLoginClick = () => {
    setIsLogin(true); // Switch to login form
  };

  const handleRegisterClick = () => {
    setIsLogin(false); // Switch to register form
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-pink-500 rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {/* Cross Button (X) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-3xl font-bold text-white hover:text-gray-800"
        >
          X
        </button>

        <h2 className="text-2xl font-bold text-white mb-4 text-center font-[Oswald]">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          
            <div>
              <label className="block text-xl font-medium text-white font-[Oswald]">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              />
            </div>
         

          {/* Email (for both Login and Register) */}
          <div>
            <label className="text-white text-xl font-[Oswald] block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          {/* Password (for both Login and Register) */}
          <div>
            <label className="block text-white text-xl font-[Oswald] font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>

          {/* Role (only in Register form) */}
          {!isLogin && (
            <div>
              <label className="block text-white text-xl font-[Oswald] font-medium">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                required
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between items-center">
            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-900 text-white rounded-full hover:bg-red-500 transition"
            >
              Cancel
            </button>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-600 transition"
            >
              {isLogin ? "Login" : "Register"}
            </button>
          </div>
        </form>

        {/* Toggle between Login and Register */}
        <div className="flex flex-col justify-center items-center mt-4">
          <p className="text-white font-[Oswald]">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </p>
          <button
            onClick={isLogin ? handleRegisterClick : handleLoginClick}
            className="text-white p-1 text-[20px] font-[Oswald] bg-green-600 hover:bg-green-700 rounded-full w-[10vw] transition duration-200 ease-in-out"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
