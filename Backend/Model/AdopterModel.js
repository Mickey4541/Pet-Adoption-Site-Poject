const mongoose = require('mongoose')

const adopterSchema = new mongoose.Schema({
    petId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    adopterName: {
      type: String,
      required: true,
    },
    adopterContact: {
      type: String,
      required: true,
    },
    adopterAddress: {
      type: String,
      required: true,
    },
    adopterEmail: {
      type: String,
      required: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,  // Email validation
    },
    adoptionDate: {
      type: Date,
      default: Date.now,
    },
  });
  
const Adoption = mongoose.model("Adopter", adopterSchema);
module.exports = Adoption;