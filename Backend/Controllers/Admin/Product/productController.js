const Animal = require("../../../Model/animalModel");

const path = require('path'); 
const fs = require('fs').promises;


// Create Animal API
exports.createAnimal =  async (req, res) => {
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
        if (!category || !['cat', 'dog', 'bird', 'other'].includes(category)) {
        return res.status(400).json({ message: "Invalid or missing animal category" });
        }
        if (!status || !['Available for adoption', 'Already adopted'].includes(status)) {
            return res.status(400).json({ message: "Invalid or missing animal status" });
        }
        

        // Default image if none is provided
        const defaultImage = process.env.DEFAULT_ANIMAL_IMAGE || "https://media.istockphoto.com/id/529239795/vector/no-image-signs-for-web-page.jpg?s=612x612&w=0&k=20&c=U3FvupU1VFGiIx5A2K8i79bm-L6bZyeSVUAt8THf_xs=";
        const fileName = req.file ? "http://localhost:3000/Storage/" + req.file.filename : defaultImage;
        console.log(fileName);
        

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
}



// // delete animal
// exports.deleteAnimal = async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Find the animal by ID
//         const oldAnimal = await Animal.findById(id);
//         console.log(oldAnimal, "This is the animal");

//         if (!oldAnimal) {
//             return res.status(404).json({ message: "Animal not found" });
//         }

//         // Retrieve the image URL of the animal
//         const oldImageUrl = oldAnimal.animalImage; // `animalImage` holds the URL of the image
//         console.log("Old Image URL:", oldImageUrl);  // Log the old image URL for debugging

//         // Extract the filename from the URL (use the part after the last '/')
//         const lengthToCut = "http://localhost:3000/Storage/".length; // Correct length of the base URL and 'Storage/'
//         console.log("Length to Cut:", lengthToCut);  // Log the length to cut
//         const finalFilePathAfterCut = oldImageUrl.slice(lengthToCut); // Extract the relative path after 'Storage/'
//         console.log("Final File Path After Cut:", finalFilePathAfterCut);  // Log the extracted path

//         // Corrected path construction: Make sure to join the proper path
//         const imagePath = path.join(__dirname, '..', 'Storage', finalFilePathAfterCut); // Join the root Backend path with 'Storage'
//         console.log("Image Path to Delete:", imagePath);  // Log the final image path

//         // Check if the image exists locally and delete the image file
//         fs.unlink(imagePath, (err) => {
//             if (err) {
//                 console.log("Error deleting image file: ", err);
//                 return res.status(500).json({ message: "Error deleting image file" });
//             } else {
//                 console.log("Image file deleted successfully.");
//             }
//         });

//         // Delete the animal from the database
//         await Animal.findByIdAndDelete(id);

//         // Return success response
//         res.status(200).json({
//             message: "Animal and associated image deleted successfully"
//         });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: "Something went wrong",
//             error: error.message
//         });
//     }
// };



// delete animal
exports.deleteAnimal = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({
            message: "Please provide id"
        });
    }

    const oldData = await Animal.findById(id);
    console.log("The old data is ", oldData);

    if (!oldData) {
        return res.status(404).json({
            message: "No data found with that id"
        });
    }

    const oldAnimalImage = oldData.animalImage; // e.g., "http://localhost:3000/Storage/1736699872222-kathmandu-4012374.jpg"
    console.log("Old animal Image is ", oldAnimalImage);

    const lengthToCut = "http://localhost:3000/Storage/".length; // Length of the URL prefix
    console.log("Length to cut is ", lengthToCut);

    // Remove the base URL to get the relative file path
    const finalFilePathAfterCut = oldAnimalImage.slice(lengthToCut); // e.g., "/Storage/1736699872222-kathmandu-4012374.jpg"
    console.log("The final path after cut is ", finalFilePathAfterCut);

    // Use the relative path directly to delete the file
    const imagePath = './Storage/' + finalFilePathAfterCut; // Direct path to the file
    console.log("Image Path to Delete:", imagePath);

    // REMOVE FILE FROM UPLOADS FOLDER
    fs.unlink(imagePath, (err) => {
        if (err) {
            console.log("Error deleting file", err);
            return res.status(500).json({
                message: "Error deleting file"
            });
        } else {
            console.log("File deleted successfully");
        }
    });

    await Animal.findByIdAndDelete(id);
    res.status(200).json({
        message: "Animal deleted successfully"
    });
};



// Update animal
exports.updateAnimal = async (req, res) => {
    const id = req.params.id; // The ID of the animal to update
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
        status,
    } = req.body;

    // Input validation
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
        console.log("old animal is", oldAnimal);
        
        if (!oldAnimal) {
            return res.status(404).json({ message: "Animal not found" });
        }

        // Track and delete old image if there's a new image
        let fileName;
        if (req.file) {
            const oldImagePath = oldAnimal.animalImage; // Existing image URL
            console.log("Old image path is", oldImagePath);
            
            if (oldImagePath) {
                const localHostUrlLength = "http://localhost:3000/Storage/".length;
                const oldFileName = oldImagePath.slice(localHostUrlLength); // Extract file name
                const oldFilePath = `Storage/${oldFileName}`; // Path to the old file

                try {
                    fs.access(oldFilePath); // Check if file exists
                    fs.unlink(oldFilePath); // Delete the file
                    console.log("Old image deleted successfully:", oldFilePath);
                } catch (err) {
                    console.log("Error deleting old image or file not found:", err);
                }
            }

            // Construct new image URL
            fileName = "http://localhost:3000/Storage/" + req.file.filename;
        } else {
            // Retain old image if no new image is provided
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
            animalImage: fileName, // Updated image or retained old image
            animalDescription,
            category,
            status,
        });

        res.status(200).json({ message: "Animal updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating the animal" });
    }
};






//(Fetch all animals or filter by category)
exports.getallAnimals = async (req, res) => {
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
};



//////single read API:::Fetch a specific animal by ID
exports.getSingleAnimal = async (req, res) => {// here :id is dynamic but only id is static.
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
};












