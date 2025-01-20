import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import {APIAuthenticated } from "../../http";
import { useParams, Navigate, useNavigate } from "react-router-dom";

const UpdateAnimal = () => {

  const {id} = useParams()
  
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    animalName: "",
    animalAge: "",
    animalSize: "",
    animalGender: "",
    animalVaccinated: false,
    animalHealthStatus: "",
    animalLocation: "",
    animalDescription: "",
    category: "",
    status: "",
  });
  
  const [image, setImage] = useState(null) //making different usestate to handle image because object of data,setdata usestate cannot handle the image, it can only handle the url
  
  //for updating image::
  const [currentImageUrl, setCurrentImageUrl] = useState(''); // To store the old image URL
  const [flashMessage, setFlashMessage] = useState()
  
  
  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    const {name,value} = e.target //form input maa jaha change garxa ra jun maa change garxa tesko name ra change vako value chhiyo . 
    setFormData({ // hamile name ra value lirako xam e.target maa, aba input maa user ley jun name/field maa change garxa mathi setFormData maa name vaneko animalName vayo ra value vaneko animal ko name k halyo user ley input bata.
      ...formData, //initial hamile data empty banako xam data,setdata usestate maa, aba jaba user ley book ko name fill garxa tyo fill vayo ani aba bookprice fill garna lagyo vani agi ko bookname jasta ko testai basni vayo ra bookprice user ley fill garyo. Like preserving the initially filled data and updating only the specific field that changed. This ensures the form data stays complete with each new input update.
      [name] : value //The syntax [name]: value dynamically assigns the value to the property specified by name in the data object. This means if name is "animalName" and value is "New Animal", it will update data as { ...data, bookName: "New Book" }, preserving other properties.
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formPayload = new FormData(); // Created a new form object to hold text and image.
    
    
    Object.entries(formData).forEach(([key, value]) => {//object.entries ley  key value pair of object lai each array maa convert garxa. aba array maa convert garepaxi foreach loop lagauna ni sakinxa. foreach array ley tyo convert gareko each array dinxa(like all array maa loop lagxa)..
      formPayload.append(key, value);//form data maa aako array lai append agreko. like animalName maa user ley helako animal ko name append/inject gareko palipilo.
    });
    
    // Add image to the form payload if it's provided
    if (image) {
      formPayload.append('animalImage', image);
    }
    
    try {
      const response = await APIAuthenticated.patch(`/animals/${id}`, formPayload, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        setFlashMessage({ 
          message: "Updated Successfully", 
          type: "success" 
        });
        setTimeout(() => {
          setFlashMessage(null);  
          navigate('/');  
        }, 3000);  
      } else {
        setFlashMessage("Something went wrong. Please try again.");
        setTimeout(() => {
          setFlashMessage(null);
        },3000)
      }
    } catch (error) {
      console.error(error);
      setFlashMessage("Error updating animal. Please check the details.");
      setTimeout(()=>{
        setFlashMessage(null);
      },3000)
    }
  };
  


  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Correct way to access file from the input
    setCurrentImageUrl(URL.createObjectURL(e.target.files[0])); // Preview the selected image
  };
  
  

//form edit garni bela form pahile nai fill vayera aauni banauna ko lagi hami sanga id ta pahile nai xa, aba id xa vani tyo id ko book fetch garna milyo
const fetchAnimal = async () => {
  if (!id) return; // Prevent API call if ID is not present
  try {
    const response = await APIAuthenticated.get(`/animals/${id}`);
    if (response.status === 200) {
      setFormData(response?.data?.data);
      setupdateImage(response?.data?.imageUrl);
      setCurrentImageUrl(response?.data?.imageUrl);
    }
  } catch (error) {
    setFlashMessage("Error fetching animal details.");
  }
};


useEffect(() => {
  fetchAnimal()
}, [])
  
  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-gray-700 rounded-lg shadow-lg font-[Oswald]">
        
        <h2 className="text-4xl font-bold text-pink-600 text-center mb-6">
          Add Animal
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Animal Name */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Name
              </label>
              <input
                type="text"
                name="animalName"
                value={formData.animalName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Age */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Age
              </label>
              <input
                type="text"
                name="animalAge"
                value={formData.animalAge}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Size */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Size
              </label>
              <input
                type="text"
                name="animalSize"
                placeholder="'Small', 'Medium', 'Large'"
                value={formData.animalSize}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Gender */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Gender
              </label>
              <input
                type="text"
                name="animalGender"
                placeholder="Male, Female"
                value={formData.animalGender}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Vaccinated */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Vaccinated
              </label>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, animalVaccinated: true })
                  }
                  className={`px-4 py-2 mr-2 rounded-xl ${
                    formData.animalVaccinated
                      ? "bg-pink-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  True
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, animalVaccinated: false })
                  }
                  className={`px-4 py-2 rounded-xl ${
                    !formData.animalVaccinated
                      ? "bg-pink-500 text-white"
                      : "bg-gray-300 text-gray-800"
                  }`}
                >
                  False
                </button>
              </div>
            </div>

            {/* Health Status */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Health Status
              </label>
              <input
                type="text"
                name="animalHealthStatus"
                placeholder="Normal, Affected"
                value={formData.animalHealthStatus}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Location */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Location
              </label>
              <input
                type="text"
                name="animalLocation"
                value={formData.animalLocation}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Animal Image */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Animal Image
              </label>
              <input
                type="file"
                name="animalImage"
                onChange={handleImageChange}
                required={!currentImageUrl}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              
            </div>

            {/* Animal Description */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Description
              </label>
              <textarea
                name="animalDescription"
                value={formData.animalDescription}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="cat">Cat</option>
                <option value="dog">Dog</option>
                <option value="bird">Bird</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-semibold text-white mb-2">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="Available for adoption">
                  Available for adoption
                </option>
                <option value="Already adopted">Already adopted</option>
              </select>
            </div>

            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 text-white bg-pink-600 rounded-xl hover:bg-pink-700"
              >
                Add Animal
              </button>
            </div>
            {flashMessage && (
          <div
            className={`p-4 mb-4 text-center font-bold font-[Oswald] text-2xl rounded-full ${
              flashMessage.type === "success"
                ? "bg-green-700 text-white"
                : "bg-red-600 text-white"
            }`}
          >
            {flashMessage.message}
          </div>
        )}
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default UpdateAnimal;
