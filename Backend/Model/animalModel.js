const mongoose = require("mongoose");


//a schema defines the structure of the documents within a MongoDB collection, including field names, types, validation rules, and default values.it is a constructor function provided by the Mongoose library. It allows you to define the structure of documents within a MongoDB collection.When you create a new schema using new mongoose.Schema(), you are invoking this constructor function to create a new schema object.
const animalSchema = new mongoose.Schema({
    animalName: {
        type: String,
        unique: true,
    },
    animalAge: {
        type: String,
    },
    animalSize: {
        type: String,
    },
    animalGender: {
        type: String,
    },
    animalVaccinated: {
        type: Boolean,
    },
    animalHealthStatus: {
        type: String,
    },
    animalLocation: {
        type: String,
    },
    animalImage: {
        type: String,
    },
    animalDescription: {
        type: String,
    },
    category: {
        type: String,
        enum: ['cat', 'dog', 'monkey', 'other'], // You can add more categories here
        required: true,
    },
    status: {
        type: String,
        enum: ["Available for adoption", "Already adopted"], // Only these two statuses
        default: "Available for adoption", // Default value
      },
});

const Animal = mongoose.model('Animal', animalSchema)// model is like a table of sql in mongodb, here we are telling that make a animal table/Model and the columns/fields inside it are animalschema. yaha hamile animal model banako xam, collection maa chai animals banxa name.

module.exports = Animal
//jaba samma banako table/model maa operation hudaina taba samma model collection maa dekhidaina.