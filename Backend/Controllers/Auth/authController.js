

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") //whenever the user logged in, in the successful login, we need to give the token to the user.
const validator = require('validator');
const User = require("../../Model/userModel");





exports.login = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Please provide email, password, and username"
        });
    }

    console.log(username, email, password, "Email and password and username");

    try {
        const user = await User.findOne({ email: email }); 

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' });
        console.log(token, 'Token generated');
        res.status(200).json({
            token,
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role
            },
        });

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Server error' });
    }
};




exports.register = async (req, res) => {
    const { username, email, password, role } = req.body;

    // Inline validations
    if (!username || typeof username !== 'string' || username.length < 3 || username.length > 20) {
        return res.status(400).json({ message: 'Username must be between 3 and 20 characters.' });
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        return res.status(400).json({ message: 'Invalid email format.' });
    }

    if (!password || password.length < 6) {
        return res.status(400).json({ message: 'Password must be at least 6 characters long.' });
    }

    if (!role || !['user', 'admin'].includes(role)) {
        return res.status(400).json({ message: 'Role must be either "user" or "admin".' });
    }

    try {
        // Check if email already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use.' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 8);

        // Create new user
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            role,
        });

        res.status(200).json({
            message: 'User registered successfully',
            user: {
                id: user.id,
                email: user.email,
                username: user.username,
                role,
            },
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};




// forgot password
exports.forgotPassword = async (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({
            message: "Please provide email "
        })
    }

    // check if that email is registered or not
    const userExist = await User.find({ userEmail: email })
    if (userExist.length == 0) {
        return res.status(404).json({
            message: "Email is not registered"
        })
    }

    // send otp to that email
    const otp = Math.floor(1000 + Math.random() * 9000);
    userExist[0].otp = otp
    await userExist[0].save()
    await sendEmail({
        email: email,
        subject: "Your Otp of AdpotAnimal forgotPassword",
        message: `Your otp is ${otp} . Dont share with anyone`
    })
    res.status(200).json({
        message: "OTP sent successfully"
    })

}




// verify otp 
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body
    if (!email || !otp) {
        return res.status(400).json({
            message: "Please provide email and otp."
        })
    }
    // check if that otp is correct or not of that email
    const userExists = await User.find({ userEmail: email })
    if (userExists.length == 0) {
        return res.status(404).json({
            message: "Email is not registered"
        })
    }
    if (userExists[0].otp !== otp) {
        res.status(400).json({
            message: "Invalid otp"
        })
    } else {
        // dispost the otp so cannot be used next time the same otp
        userExists[0].otp = undefined
        userExists[0].isOtpVerified = true
        await userExists[0].save()
        res.status(200).json({
            message: "Otp is correct"
        })
    }


}





//reset password
exports.resetPassword = async (req, res) => {
    const { email, newPassword, confirmPassword } = req.body
    if (!email || !newPassword || !confirmPassword) {
        return res.status(400).json({
            message: "Please provide email,newPassword,confirmPassword"
        })
    }
    if (newPassword !== confirmPassword) {
        return res.status(400).json({
            message: "newPassword and confirmPassword doesn't match"
        })
    }

    const userExists = await User.find({ userEmail: email })
    if (userExists.length == 0) {
        return res.status(404).json({
            message: "User email not registered"
        })
    }
    if (userExists[0].isOtpVerified !== true) {
        return res.status(403).json({
            message: "You cannot perform this action"
        })
    }

    userExists[0].userPassword = bcrypt.hashSync(newPassword, 10)
    userExists[0].isOtpVerified = false;
    await userExists[0].save()

    res.status(200).json({
        message: "Password changed successfully"
    })
}
