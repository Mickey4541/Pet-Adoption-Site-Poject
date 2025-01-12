
const jwt = require("jsonwebtoken");
const User = require('../Model/userModel')

const isAuthenticated = async (req, res, next) => {
    try {
        //if we want to make any route(in our case is userRoute.js) protected, we need to pass the access token in the header
        const authHeader = req.headers.authorization;

        // Check if authorization header is present and starts with "Bearer"
        if (!authHeader || !authHeader.startsWith("Bearer")) {
            return res.status(401).json({ message: "No token, authorization denied!" });
        }

        // Extract token from header
        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token not provided!" });
        }
        // if we get the token , we need to decode that token, to decode, we have jwt.verify.
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user exists
        const doesUserExist = await User.findById(decoded.id);
        if (!doesUserExist) {
            return res.status(403).json({ message: "Invalid token: User does not exist!" });
        }

        // Attach user to the request object
        req.user = doesUserExist;
        console.log("Authenticated user:", req.user);

        // Continue to the next middleware
        next();
    } catch (error) {
        console.error("Authentication error:", error);
        res.status(400).json({ message: "Invalid token!" });
    }
};

module.exports = isAuthenticated;
