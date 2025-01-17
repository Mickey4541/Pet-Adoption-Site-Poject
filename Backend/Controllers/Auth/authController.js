

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") //whenever the user logged in, in the successful login, we need to give the token to the user.
const validator = require('validator');
const User = require("../../Model/userModel");




exports.register = async (req, res) => {
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





exports.login = async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password) {
        return res.status(400).json({
            message: "Username, email, and password are required."
        });
    }

    try {
        // Find user by username and email
        const user = await User.findOne({
            $and: [{ username }, { email }]
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




// forgot password
exports.forgotPassword = async (req,res)=>{
    const {email} = req.body;
    if(!email){
        return res.status(400).json({
            message : "Please provide email "
        })
    }

    // check if that email is registered or not
    const userExist = await User.find({userEmail : email})
    if(userExist.length == 0){
        return res.status(404).json({
            message : "Email is not registered"
        })
    }

    // send otp to that email
    const otp = Math.floor(1000 + Math.random() * 9000);
    userExist[0].otp = otp 
    await userExist[0].save()
   await sendEmail({
        email :email,
        subject : "Your Otp of AdpotAnimal forgotPassword",
        message : `Your otp is ${otp} . Dont share with anyone`
    })
    res.status(200).json({
        message : "OTP sent successfully"
    })
  
}




// verify otp 
exports.verifyOtp = async(req,res)=>{
    const {email,otp} = req.body
    if(!email || !otp){
        return res.status(400).json({
            message : "Please provide email and otp."
        })
    }
    // check if that otp is correct or not of that email
   const userExists = await User.find({userEmail : email})
   if(userExists.length == 0){
    return res.status(404).json({
        message : "Email is not registered"
    })
   }
   if(userExists[0].otp !== otp){
    res.status(400).json({
        message : "Invalid otp"
    })
   }else{
    // dispost the otp so cannot be used next time the same otp
    userExists[0].otp = undefined
    userExists[0].isOtpVerified = true
    await userExists[0].save()
    res.status(200).json({
        message : "Otp is correct"
    })
   }


}





//reset password
exports.resetPassword = async (req,res)=>{
    const {email,newPassword,confirmPassword} = req.body
    if(!email || !newPassword || !confirmPassword){
        return res.status(400).json({
            message : "Please provide email,newPassword,confirmPassword"
        })
    }
    if(newPassword !== confirmPassword){
        return res.status(400).json({
            message : "newPassword and confirmPassword doesn't match"
        })
    }

    const userExists = await User.find({userEmail:email})
    if(userExists.length == 0){
        return res.status(404).json({
            message : "User email not registered"
        })
    }
    if(userExists[0].isOtpVerified !== true){
        return res.status(403).json({
            message : "You cannot perform this action"
        })
    }

    userExists[0].userPassword = bcrypt.hashSync(newPassword,10)
    userExists[0].isOtpVerified = false;
    await userExists[0].save()

    res.status(200).json({
        message : "Password changed successfully"
    })
}
