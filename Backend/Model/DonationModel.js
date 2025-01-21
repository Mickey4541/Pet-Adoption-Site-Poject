const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 1,
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique: true,
    },
    paymentDetails: {
        method: { type: String, default: null },
        status: { type: String, default: "pending" },
        pidx: { type: String, default: null },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;
