
//requiring express
const express = require('express')
const app = express()

//middleware::
//this line is important that express itself cannot handle json so we have to tell express to understand it.
app.use(express.json())
//if we are using ejs in nodejs , we have to write this urlencoded line and neglect the express.json() line.
app.use(express.urlencoded({extended : true}))






//multerConfig imports
// const multer = require("./Middleware/multerConfig").multer
// const storage = require("./Middleware/multerConfig").storage

//Destructuring:
// const {multer,storage} = require("./Middleware/MulterConfig")
// const upload = multer({storage : storage})

const upload = require('./Middleware/MulterConfig');  


//requiring .env
require('dotenv').config()




//requiring mongoose
const connectToDatabase = require('./Database')
connectToDatabase()


// CORS PACKAGE REQUIRING::
const cors = require('cors')
app.use(cors({
    origin : '*' //sabai incoming request accept garxa * ley.
}))


//Routes::
const authRoute = require("./Routes/authRoute")
//authroute
app.use("/api/auth", authRoute)
//userRoute
const userRoutes = require("./Routes/userRoutes")
app.use("/api/users", userRoutes)


//success message from browser.
app.get('/',(request,response) => {
    //yesari response sangai status pani dekhauna milyo.
    response.status(200).json({
        "message": "success"
    })
})







//create Animal  API

const Animal = require('./Model/animalModel');
const verifyToken = require("./Middleware/authMiddleware");
const authorizeRoles = require("./Middleware/roleMiddleware");
// Create Animal API
app.post('/animal', verifyToken, authorizeRoles('admin'), upload.single("animalImage"), async (req, res) => {
    try {
        // Manual validation
        const {
            animalName, animalAge, animalSize, animalGender,
            animalVaccinated, animalHealthStatus, animalLocation,
            animalDescription, category, status
        } = req.body;

        if (!animalName || typeof animalName !== 'string') {
            return res.status(400).json({ message: "Invalid or missing animal name" });
        }
        if (!animalAge || isNaN(animalAge) || !Number.isInteger(Number(animalAge))) {
            return res.status(400).json({ message: "Invalid or missing animal age" });
        }
        if (!animalSize || !['Small', 'Medium', 'Large'].includes(animalSize)) {
            return res.status(400).json({ message: "Invalid or missing animal size" });
        }
        if (!animalGender || !['Male', 'Female'].includes(animalGender)) {
            return res.status(400).json({ message: "Invalid or missing animal gender" });
        }
        if (typeof animalVaccinated !== 'boolean' && animalVaccinated !== 'true' && animalVaccinated !== 'false') {
            return res.status(400).json({ message: "Invalid or missing animal vaccination status" });
        }
        if (!animalHealthStatus || typeof animalHealthStatus !== 'string') {
            return res.status(400).json({ message: "Invalid or missing animal health status" });
        }
        if (!animalLocation || typeof animalLocation !== 'string') {
            return res.status(400).json({ message: "Invalid or missing animal location" });
        }
        if (!category || !['cat', 'dog', 'monkey', 'other'].includes(category)) {
        return res.status(400).json({ message: "Invalid or missing animal category" });
        }
        if (!status || !['Available for adoption', 'Already adopted'].includes(status)) {
            return res.status(400).json({ message: "Invalid or missing animal status" });
        }
        

        // Default image if none is provided
        const defaultImage = process.env.DEFAULT_ANIMAL_IMAGE || "https://media.istockphoto.com/id/529239795/vector/no-image-signs-for-web-page.jpg?s=612x612&w=0&k=20&c=U3FvupU1VFGiIx5A2K8i79bm-L6bZyeSVUAt8THf_xs=";
        const fileName = req.file ? "http://localhost:3000/storage/" + req.file.filename : defaultImage;

        const animal = await Animal.create({
            animalName,
            animalAge,
            animalSize,
            animalGender,
            animalVaccinated,
            animalHealthStatus,
            animalLocation,
            animalImage: fileName,
            animalDescription,
            category,
            status
        });

        res.status(201).json({
            message: "Animal details created successfully",
            animal,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});









//all read or get all animal api

// GET /animals (Fetch all animals or filter by category)
app.get('/animals', async (req, res) => {
    const { category } = req.query;  // Category filter passed in query parameters
    
    //hamro valid categories haru
    const validCategories = ['cats', 'dogs', 'monkeys', 'others'];

    try {
        let animals;
        
        if (category) {
            //category lai valid garni
            if (!validCategories.includes(category)) {
                return res.status(400).json({
                    message: "Invalid category",
                    validCategories: validCategories
                });
            }

            // If category is valid, filter by category
            animals = await Animal.find({ 
                category: category 
            });
        } else {
            // Fetch all animals if category is not provided
            animals = await Animal.find();
        }

        res.status(200).json({
            message: "Animals fetched successfully",
            data: animals
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching animals",
            error: error.message
        });
    }
});





///single read API:::Fetch a specific animal by ID
app.get("/animal/:id", async (req, res) => {// here :id is dynamic but only id is static.
    try {
        //console.log(req.params.id); //body maa aako xa vani req.body garda vayo tara url bata aai rako xa ni ta parameter vayera id, tei vayera req.params.id gareko.

        const { id } = req.params;  //destructure garera specific animal ko id aayo aba.
        
        // Find the animal by its ID using Mongoose's findById method
        const animal = await Animal.findById(id); //hamisanga id ta aayo aba Book maa find by id garnu paryo. And findbyId returns object.
        
        if (!animal) {
            return res.status(404).json({
                message: "Animal not found"
            });
        }

        // If animal is found, return it in the response
        res.status(200).json({
            message: "Animal fetched successfully",
            data: animal
        });

    } catch (error) {
        console.error(error);
        // Handle any potential errors
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
});



const fs = require('fs');

app.delete("/animal/:id", verifyToken, authorizeRoles('admin'), async (req, res) => {
    try {
        const { id } = req.params;

        // Find the animal by ID
        const animal = await Animal.findById(id);
        if (!animal) {
            return res.status(404).json({ message: "Animal not found" });
        }

        // Retrieve the image URL of the animal
        const oldImageUrl = animal.animalImage; // `animalImage` holds the URL of the image
        console.log("Old Image URL:", oldImageUrl);  // Log the old image URL for debugging

        // Extract the filename from the URL (use the part after the last '/')
        const imageFilename = oldImageUrl.split('/').pop();  // .pop() gets the last part of the URL
        console.log("Extracted Image Filename:", imageFilename);  // Log the extracted filename for debugging

        // If no image filename is found, return an error
        if (!imageFilename) {
            return res.status(400).json({ message: "Image filename not found" });
        }

        const imagePath = path.join(__dirname, 'Storage', imageFilename); // Corrected path to 'Storage' folder
        console.log("Image Path:", imagePath);  // Log the full image path for debugging

        // Check if the image exists locally and delete the image file
        fs.unlink(imagePath, (err) => {
            if (err) {
                console.log("Error deleting image file: ", err);
                return res.status(500).json({ message: "Error deleting image file" });
            } else {
                console.log("Image file deleted successfully.");
            }
        });

        // Delete the animal from the database
        await Animal.findByIdAndDelete(id);

        // Return success response
        res.status(200).json({
            message: "Animal and associated image deleted successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
});











app.patch("/animal/:id", verifyToken, authorizeRoles('admin'), upload.single("animalImage"), async (req, res) => {
    const id = req.params.id;  // The ID of the animal to update
    const {
        animalName,
        animalAge,
        animalSize,
        animalGender,
        animalVaccinated,
        animalHealthStatus,
        animalLocation,
        animalDescription,
        category,
        status
    } = req.body;  // The updated text fields from the body


    if (!animalName || typeof animalName !== 'string') {
                return res.status(400).json({ message: "Invalid or missing animal name" });
            }
            if (!animalAge || isNaN(animalAge) || !Number.isInteger(Number(animalAge))) {
                return res.status(400).json({ message: "Invalid or missing animal age" });
            }
            if (!animalSize || !['Small', 'Medium', 'Large'].includes(animalSize)) {
                return res.status(400).json({ message: "Invalid or missing animal size" });
            }
            if (!animalGender || !['Male', 'Female'].includes(animalGender)) {
                return res.status(400).json({ message: "Invalid or missing animal gender" });
            }
            if (typeof animalVaccinated !== 'boolean' && animalVaccinated !== 'true' && animalVaccinated !== 'false') {
                return res.status(400).json({ message: "Invalid or missing animal vaccination status" });
            }
            if (!animalHealthStatus || typeof animalHealthStatus !== 'string') {
                return res.status(400).json({ message: "Invalid or missing animal health status" });
            }
            if (!animalLocation || typeof animalLocation !== 'string') {
                return res.status(400).json({ message: "Invalid or missing animal location" });
            }
            if (!category || !['cat', 'dog', 'monkey', 'other'].includes(category)) {
            return res.status(400).json({ message: "Invalid or missing animal category" });
            }
            if (!status || !['Available for adoption', 'Already adopted'].includes(status)) {
                return res.status(400).json({ message: "Invalid or missing animal status" });
            }




    try {
        // Find the existing animal record by ID
        const oldAnimal = await Animal.findById(id);
        if (!oldAnimal) {
            return res.status(404).json({ message: "Animal not found" });
        }

        // Track the old image and delete it if there's a new image
        let fileName;
        if (req.file) {
            // Check if there is an old image before trying to delete it
            const oldImagePath = oldAnimal.animalImage; // Access the animalImage field

            if (oldImagePath) {
                const localHostUrlLength = "http://localhost:3000/".length;  // Adjust this base URL length
                const oldFileName = oldImagePath.slice(localHostUrlLength); // Extract the relative file name
                const oldFilePath = `Storage/${oldFileName}`;  // Use 'Storage' instead of 'storage'

                // Log the old image path and file path
                console.log('Old Image Path:', oldImagePath);
                console.log('Old File Path:', oldFilePath);

                // Check if the file exists before deleting
                fs.access(oldFilePath, fs.constants.F_OK, (err) => {
                    if (err) {
                        console.log("Old image file does not exist:", oldFilePath);
                    } else {
                        fs.unlink(oldFilePath, (err) => {
                            if (err) {
                                console.log("Error deleting old image:", err);
                            } else {
                                console.log("Old image deleted successfully:", oldFilePath);
                            }
                        });
                    }
                });
            }

            // Set the new file URL
            fileName = "http://localhost:3000/" + req.file.filename;  // Updated URL for new image
        } else {
            // If no new image, retain the old image URL
            fileName = oldAnimal.animalImage;
        }

        // Update the animal record with new data
        await Animal.findByIdAndUpdate(id, {
            animalName,
            animalAge,
            animalSize,
            animalGender,
            animalVaccinated,
            animalHealthStatus,
            animalLocation,
            animalImage: fileName,  // Updated image or the same if no new image
            animalDescription,
            category,
            status
        });

        res.status(200).json({
            message: "Animal updated successfully"
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error updating the animal"
        });
    }
});














//By default nodejs didn't give access to see the files of its codebase. tara hamile database maa rakheko image files haru frontend maa dekhauna parni xa ra koi user ley request garyo vani dekhauna parni xa. frontend developer ley pani ta frontend develop garda access magxa. so hamile nodejs lai yo sabai access dey hai vanna ko lagi yo code. simply:
// app.use(express.static("./storage/")) serves static files (like images, CSS, or JavaScript) from the ./storage/ folder, making them accessible via URLs. This allows users to access files stored in that directory directly through the browser.
// app.use(express.static("./Storage/")) //./storage folder bhitra ko file ko access matra diyeko.
const path = require('path');
app.use('/storage', express.static(path.join(__dirname, 'Storage')));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Node.js server has started at port ${PORT}`)
})

