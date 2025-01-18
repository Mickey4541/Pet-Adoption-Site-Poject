// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios'


// const Register = ({ onClose }) => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     role: "user", //user default role rakheko
//   });

//   const [flashMessage, setFlashMessage] = useState(""); 


//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log("The name is", name);  //like username
//     console.log("The value is", value); // username ko value
//     setFormData({ ...formData, [name]: value });
//   };


  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const response = await axios.post("http://localhost:3000/api/auth/register", formData);

//       if (response.status === 201) {
//         setFlashMessage("Registration Successful!"); 
//         setTimeout(() => {
//           setFlashMessage(""); 
//           navigate("/login"); 
//         }, 3000);
//       }
//     } catch (error) {
//       if (error.response) {
//         setFlashMessage("Registration Failed: ", error);
//       } else {
//         setFlashMessage("Something went wrong. Please try again.");
//       }

//       // Clear the message after 5 seconds
//       setTimeout(() => {
//         setFlashMessage("");
//       }, 3000);
//     }
//   };

//   //cancel button function handler
//   const handleCancel = () => {
//     if (onClose) {
//       onClose(); 
//     }
//     navigate("/"); 
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//       <div className="bg-pink-500 rounded-lg shadow-lg p-6 w-full max-w-md relative">
//          {/* Flash Message */}
//          {flashMessage && (
//           <div className="bg-green-700 text-white p-3  text-center mb-4 rounded-2xl">
//             {flashMessage}
//           </div>
//         )}
//         <h2 className="text-2xl font-bold text-white mb-4 text-center">Register</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-xl font-medium text-white">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={formData.username}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-xl font-medium text-white">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-xl font-medium text-white">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-xl font-medium text-white">Role</label>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
//               required
//             >
//               <option value="user">User</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>
//           <div className="flex justify-between items-center">
//             <button
//               type="button"
//               onClick={handleCancel}
//               className="px-4 py-2 bg-red-900 text-white rounded-full hover:bg-red-500 transition"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="px-4 py-2 bg-green-900 text-white rounded-full hover:bg-green-600 transition"
//             >
//               Register
//             </button>
//           </div>
//           <p className="text-center font-[Oswald] text-xl text-white">Already have Account ?</p>
//           <Link to='/login'>
          
//           <div className="flex items-center">
//           <button className="text-center bg-blue-800 m-auto p-2 rounded-full px-6 text-white font-[Oswald]">Login</button>
//           </div>
//           </Link>
            
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../Store/AuthSlice"; // Adjust the path based on your file structure

const Register = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // default role
  });

  const [flashMessage, setFlashMessage] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData, 
        [name]: value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await dispatch(registerUser(formData));
      console.log("Success:", result); // Debug successful registration
      setFlashMessage("Registration Successful!");
      setTimeout(() => {
        setFlashMessage("");
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.error("Error:", error); // Debug error message
      setFlashMessage("Registration Failed. Please try again.");
      setTimeout(() => {
        setFlashMessage("");
      }, 3000);
    }
  };
  

  const handleCancel = () => {
    if (onClose) {
      onClose();
    }
    navigate("/");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
      <div className="bg-pink-500 rounded-lg shadow-lg p-6 w-full max-w-md relative">
        {flashMessage && (
          <div className="bg-green-700 text-white p-3 text-center mb-4 rounded-2xl">
            {flashMessage}
          </div>
        )}
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
          <p className="text-center font-[Oswald] text-xl text-white">
            Already have an account?
          </p>
          <Link to="/login">
            <div className="flex items-center">
              <button className="text-center bg-blue-800 m-auto p-2 rounded-full px-6 text-white font-[Oswald]">
                Login
              </button>
            </div>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;

