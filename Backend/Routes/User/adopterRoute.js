const express = require("express");
const Animal = require("../../Model/animalModel");
const Adoption = require('../../Model/AdopterModel');
const router = express.Router();
const verifyToken = require('../../Middleware/isAuthenticated');

// POST route for adoption
router.post("/adopt/:id", verifyToken, async (req, res) => {
  const { adopterName, adopterContact, adopterAddress, adopterEmail } = req.body;
  const { id } = req.params;

  try {
    // Check if the pet exists
    const pet = await Animal.findById(id);
    if (!pet) {
      return res.status(400).json({ success: false, message: "Pet not found." });
    }

    // Check if the pet is available for adoption
    if (pet.status !== "Available for adoption") {
      return res.status(400).json({ success: false, message: "This pet has already been adopted." });
    }

    // Create the adoption record
    const adoption = new Adoption({
      petId: id, // Use the pet's ID from the route
      adopterName,
      adopterContact,
      adopterAddress,
      adopterEmail,
    });

    // Save the adoption record to the database
    await adoption.save();

    // Update the pet's status to "Already adopted"
    pet.status = "Already adopted";
    await pet.save();

    res.json({
      success: true,
      message: "Adoption successful!",
      adoption,
    });
  } catch (error) {
    console.error("Error during adoption:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
});

module.exports = router;
