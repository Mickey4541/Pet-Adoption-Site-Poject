
const multer = require("multer");

// File storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Logic to validate the file type (mimetype) to prevent any attacks
        const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!allowedFileTypes.includes(file.mimetype)) {
            cb(new Error("Invalid file type. Only supports PNG, JPEG, and JPG."));  // Send error if invalid file type
            return;
        }

        cb(null, "./Storage"); // Destination folder for the file
    },
    filename: function (req, file, cb) {
        // Save the file with a timestamp for uniqueness
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Multer instance with storage configuration and file size limit (5MB)
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }  // Set file size limit to 5MB
});

// Export the upload middleware
module.exports = upload;
