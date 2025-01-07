//..................................................
const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config();

// Use the actual environment variable
const connectionString = process.env.MONGO_URI;

// It is an asynchronous task, so use async/await.
async function connectToDatabase() {
    try {
        const connection = await mongoose.connect(connectionString);
        console.log(`Connected to database successfully. ${connection.connection.host}, ${connection.connection.name}`);
    } catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectToDatabase;
