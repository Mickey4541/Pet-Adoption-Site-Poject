const express = require("express");
const { initiateKhaltiPayment, verifyKhaltiPayment } = require("../../Controllers/User/Donate/DonateController");
const isAuthenticated = require("../../Middleware/isAuthenticated");
const catchAsync = require("../../Services/catchAsync");

const router = express.Router();

router.post("/", isAuthenticated, catchAsync(initiateKhaltiPayment));
router.post("/verifypidx", isAuthenticated, catchAsync(verifyKhaltiPayment));

module.exports = router;
