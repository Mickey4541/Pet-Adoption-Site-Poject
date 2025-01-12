const express = require('express');
const router = express.Router();

const catchAsync = require('../../Services/catchAsync');
const { login, register, forgotPassword, verifyOtp, resetPassword } = require('../../Controllers/Auth/authController');



router.route('/register').post(catchAsync(register));
router.route('/login').post(catchAsync(login));
router.route("/forgotPassword").post(catchAsync( forgotPassword))
router.route("/verifyOtp").post(catchAsync(verifyOtp))
router.route("/resetPassword").post(catchAsync(resetPassword))


module.exports = router;
