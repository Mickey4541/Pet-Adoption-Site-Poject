import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = ({ onClose }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // Default role for registration
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Form submitted with data:", formData);
    navigate("/"); // Navigate to homepage after submission
  };

  const handleCancel = () => {
    if (onClose) {
      onClose(); // Close the modal if onClose is provided
    }
    navigate("/"); // Navigate back to the homepage
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-pink-500 rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xl font-medium text-white">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-white">Role</label>
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
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 bg-red-900 text-white rounded-full hover:bg-red-500 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-600 transition"
            >
              Register
            </button>
          </div>
          <Link to='/login'>
          
          <button>Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
