const express = require("express");
const Animal = require("../../Model/animalModel");
const Adoption = require('../../Model/AdopterModel')
const router = express.Router();

// POST route
router.post("/adopt", async (req, res) => {
  const { petId, adopterName, adopterContact, adopterAddress, adopterEmail } = req.body;

  try {
    // pet animal xa ki xaina check garnu paryo aba
    const pet = await Animal.findById(petId);
    if (!pet) {
      return res.status(400).json({ success: false, message: "Pet not found." });
    }

    // pet ajhai available xa ki nai adoption ko lagi check garnu paryo
    if (pet.status !== "Available for adoption") {
      return res.status(400).json({ success: false, message: "This pet has already been adopted." });
    }

    // Create the adoption record
    const adoption = new Adoption({
      petId,
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
