// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login = ({ onClose }) => {
//   const navigate = useNavigate();

//   const [credentials, setCredentials] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [flashMessage, setFlashMessage] = useState("");

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       navigate("/"); // Redirect if already logged in
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setCredentials({ ...credentials, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/auth/login",
//         credentials
//       );

//       if (response.status === 200) {
//         const { token } = response.data;
//         localStorage.setItem("token", token);

//         setFlashMessage("Login Successful!");
//         setTimeout(() => {
//           setFlashMessage("");
//           navigate("/"); // Redirect to the homepage
//         }, 2000);
//       }
//     } catch (error) {
//       const errorMessage =
//         error.response?.data?.message || "Something went wrong. Please try again.";
//       setFlashMessage(`Login Failed: ${errorMessage}`);

//       setTimeout(() => {
//         setFlashMessage("");
//       }, 3000);
//     }
//   };

//   const handleCancel = () => {
//     if (onClose) {
//       onClose();
//     }
//     navigate("/");
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//       <div className="bg-pink-500 rounded-lg shadow-lg p-6 w-full max-w-md relative">
//         {flashMessage && (
//           <div className="bg-green-700 text-white p-3 text-center mb-4 rounded-2xl">
//             {flashMessage}
//           </div>
//         )}
//         <h2 className="text-2xl font-bold text-white mb-4 text-center">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-xl font-medium text-white">Username</label>
//             <input
//               type="text"
//               name="username"
//               value={credentials.username}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-xl font-medium text-white">Email</label>
//             <input
//               type="email"
//               name="email"
//               value={credentials.email}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-xl font-medium text-white">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={credentials.password}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
//               required
//             />
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
//               Login
//             </button>
//           </div>
//         </form>
//         <p className="text-center font-[Oswald] text-xl text-white mt-4">
//           Don't have an Account?
//         </p>
//         <Link to="/register">
//           <div className="flex items-center">
//             <button className="text-center bg-blue-800 m-auto p-2 rounded-full px-6 text-white font-[Oswald]">
//               Register
//             </button>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Login;











import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Store/AuthSlice";
import STATUSES from "../../Store/statuses";

const Login = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status, token, role, errorMessage } = useSelector((state) => state.auth);
  console.log(role, "This is role");
  
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [flashMessage, setFlashMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // Validate token from localStorage
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setFlashMessage("You're already logged in.");
      setTimeout(() => {
        navigate("/"); 
      }, 4000);
    }
  }, [navigate]);

  // Handle login on form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginUser(credentials)); 
      setFlashMessage("Logging in...");
    } catch (error) {
      setFlashMessage("Login Failed. Please try again.");
      setTimeout(() => {
        setFlashMessage("");
      }, 3000);
    }
  };



  useEffect(() => {
    if (status === STATUSES.SUCCESS && token) {
      setFlashMessage("Login Successful!");
      localStorage.setItem("token", token);
      setTimeout(() => {
        setFlashMessage("");
        navigate("/"); 
      }, 2000);
    } else if (status === STATUSES.ERROR) {
      setFlashMessage(errorMessage || "Login Failed. Please try again.");
      setTimeout(() => {
        setFlashMessage("");
      }, 3000);
    }
  }, [status, token, role, errorMessage, navigate]);
  




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
        <h2 className="text-2xl font-bold text-white mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xl font-medium text-white">Username</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label className="block text-xl font-medium text-white">Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
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
              Login
            </button>
          </div>
        </form>
        <p className="text-center font-[Oswald] text-xl text-white mt-4">
          Don't have an Account?
        </p>
        <Link to="/register">
          <div className="flex items-center">
            <button className="text-center bg-blue-800 m-auto p-2 rounded-full px-6 text-white font-[Oswald]">
              Register
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
