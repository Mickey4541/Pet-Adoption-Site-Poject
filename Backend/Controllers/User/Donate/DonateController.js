const axios = require("axios");
const mongoose = require("mongoose");
const Donation = require("../../../Model/DonationModel");






exports.initiateKhaltiPayment = async (req, res) => {
    const { username, email, address, amount } = req.body;

    console.log(username, email, address, amount, "This is from the initiate khalti payment.");


    if (!username || !email || !amount || !address) {
        return res.status(400).json({ message: "Missing required fields." });
    }
    const paymentId = new mongoose.Types.ObjectId(); // Generate unique ID for reference
    console.log("all fine");
    
    const data = {
        website_url: "http://localhost:5173/",
        return_url: `http://localhost:5173/api/payment/success`,
        // return_url: `http://localhost:5173/api/payment/success`,
        amount: parseInt(amount) * 100,
        purchase_order_id: paymentId.toString(),
        purchase_order_name: `Donation_${paymentId}`,
        customer_info: {
        name: username,
        email : email,
        address : address
    }
    };
    console.log("all fine 2");
    try {
        const response = await axios.post(
            "https://a.khalti.com/api/v2/epayment/initiate/",
            data,
            {
                headers: { Authorization: `Key ${process.env.KHALTI_API_KEY}` },
            }
        );
        const khaltiResponse = response.data
        console.log("all fine 3");
        res.status(200).json({ 
            message: "Payment done Successfully",
            payment_url: khaltiResponse.payment_url, //"payment_url": "https://test-pay.khalti.com/?pidx=Qs3Ng5apcHzgKcWZyYZVwE"
            data: data
        });
    } catch (error) {
        console.error("Khalti initiation error:", khaltiResponse.data || error.message);
        res.status(500).json({ 
            message: "Payment initiation failed." 
        });
    }
};







// exports. verifyKhaltiPayment = async (req, res) => {
//     const { paymentId } = req.query; // Extract paymentId from query parameters
//     const { pidx } = req.body; // Extract pidx sent by Khalti on success
//     if(!pidx){
//         res.status(400).json({
//             message: "Please provide Pidx."
//         })
//     }

//     try {
//         // Verify the payment with Khalti
//         const verifyResponse = await axios.post(
//             "https://a.khalti.com/api/v2/epayment/lookup/",
//             { pidx },
//             {
//                 headers: { Authorization: `Key ${process.env.KHALTI_API_KEY}` },
//             }
//         );
//         console.log("Verify Response is", verifyResponse);
        
//         const data = verifyResponse.data
//         console.log("VerifyResponse Data is", data);
//         console.log("This is the status", data.status);
        
        
//         if (data.status === "Completed") {
//             // Save donation details to the database after successful payment
//             const { username, email, address, amount } = verifyResponse.data;

//             const donation = new Donation({
//                 username: username,
//                 email: email,
//                 address,
//                 amount,
//                 paymentId,
//                 paymentDetails: {
//                     status: "success",
//                     pidx,
//                 },
//             });
//             console.log(donation, "This is donation.");
            
//             await donation.save();

//             res.status(200).json({ 
//                 message: "Payment verified and donation saved in the database." 
//             });
//         } else {
//             res.status(400).json({ 
//                 message: "Payment not verified." 
//             });
//         }
//     } catch (error) {
//         console.error("Payment verification error:", error.response?.data || error.message);
//         res.status(500).json({ message: "Payment verification failed." });
//     }
// };

exports.verifyKhaltiPayment = async (req, res) => {
    // const { paymentId } = req.query; // Extract paymentId from query parameters
    const { pidx } = req.body; // Extract pidx sent by Khalti on success
    
    console.log("pidx from verify khalti payment is:", pidx);

    if (!pidx) {
        console.log("Missing pidx in request.");
        return res.status(400).json({ message: "Please provide Pidx." });
    }

    try {
        // Verify the payment with Khalti
        console.log("Verifying payment with pidx:", pidx);
        const verifyResponse = await axios.post(
            "https://a.khalti.com/api/v2/epayment/lookup/",
            { pidx },
            {
                headers: { Authorization: `Key ${process.env.KHALTI_API_KEY}` },
            }
        );
        
        console.log("KHALTI_API_KEY:", process.env.KHALTI_API_KEY);
        const data = verifyResponse.data;
        console.log("Khalti API response:", data);

        if (data.status === "Completed") {
            // Extract necessary fields from the Khalti payment response
            const { total_amount, transaction_id } = data;
            console.log("Fucking data", data);


            
            // Create a new donation instance
            const donation = new Donation({
                username: username,
                email: email,
                address: address,
                amount: total_amount / 100,  // Convert to original amount
                paymentId: transaction_id,
                paymentDetails: {
                    status: "success",
                    pidx: pidx,
                    method: "Khalti",
                },
            });

            console.log("Saving donation:", donation);

            // Save the donation to the database
            await donation.save();

            return res.status(200).json({
                message: "Payment verified and donation saved in the database.",
            });
        } else {
            console.log("Payment not completed:", data.status);
            return res.status(400).json({ message: "Payment not verified." });
        }
    } catch (error) {
        console.error(
            "Payment verification error:",
            error.response?.data || error.message
        );
        return res
            .status(500)
            .json({ message: "Payment verification failed." });
    }
};
