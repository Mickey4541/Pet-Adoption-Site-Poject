
const User = require("../Model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") //whenever the user logged in, in the successful login, we need to give the token to the user.
const validator = require('validator');



const register = async (req, res) => {
    const { username, email, password, role } = req.body;

    // Email validation using Validator.js
    if (!validator.isEmail(email)) {
        return res.status(400).json({
            message: "Invalid email format",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword,
        role: role,
    });
    await newUser.save();

    res.status(201).json({
        message: `User is registered with username ${username}`,
    });
};



const login = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Find user by username or email
        const user = await User.findOne({
            $or: [{ username }, { email }]
        });

        // If user not found
        if (!user) {
            return res.status(404).json({
                message: "Invalid credentials. Please check your username or email."
            });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid credentials."
            });
        }

        // Generate token
        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        // Send response
        res.status(200).json({
            token,
            user: {
                id: user._id,
                username: user.username,
                role: user.role
            }
        });
    } catch (err) {
        res.status(500).json({
            message: "Server error. Please try again later."
        });
    }
};


module.exports = {
    register,
    login,
}