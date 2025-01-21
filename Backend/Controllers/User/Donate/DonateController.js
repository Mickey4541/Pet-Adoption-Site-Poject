const axios = require("axios");
const mongoose = require("mongoose");
const Donation = require("../../../Model/DonationModel");





exports.initiateKhaltiPayment = async (req, res) => {
    const { username, email, address, amount } = req.body;

    if (!username || !email || !amount || !address) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    const paymentId = new mongoose.Types.ObjectId();

    const donation = new Donation({
        username,
        email,
        address,
        amount,
        paymentId,
        paymentDetails: { status: "pending" }, // Initialize payment details
    });
    await donation.save();

    const data = {
        website_url: 'http://localhost:3000/',
        return_url: "http://localhost:3000/api/payment/success",
        amount: parseInt(amount) * 100,
        purchase_order_id: paymentId.toString(),
        purchase_order_name: `Donation_${paymentId}`,
    };

    try {
        const response = await axios.post(
            "https://a.khalti.com/api/v2/epayment/initiate/",
            data,
            {
                headers: { Authorization: `Key ${process.env.KHALTI_API_KEY}` },
            }
        );

        donation.paymentDetails.pidx = response.data.pidx;
        await donation.save();

        res.status(200).json({ payment_url: response.data.payment_url });
    } catch (error) {
        console.error("Khalti initiation error:", error.response?.data || error.message);
        res.status(500).json({ message: "Payment initiation failed." });
    }
};
