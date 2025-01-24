# Initializing Node.js / Setup:::
(npm, yarn, pnpm etc are some methods but we use npm (node package manager.))::

- Make a folder and open it in terminal or VS Code.
- Run the command: npm init
- Package name: just enter or you can give a preferred name.
- Version: simply enter (we can make changes later.)
- Description: simply enter
- Main: simply enter
- Test command: simply enter
- GitHub repo: simply enter
- Keyword: simply enter
- Author: simply enter
- License: simply enter
- Then press enter.

# Express:
- npm install express
```js
//Inside app.js file:
//requiring express
const express = require('express')
const app = express()

//this line is important that express itself cannot handle json so we have to tell express to understand it.
app.use(express.json())
//if we are using ejs in nodejs , we have to write this urlencoded line and neglect the express.json() line.
app.use(express.urlencoded({extended : true}))
```

# Multer for file Handeling:
- npm i multer
```js
const multer = require("multer");

// File storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // Logic to validate the file type (mimetype) to prevent any attacks
        const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        if (!allowedFileTypes.includes(file.mimetype)) {
            cb(new Error("Invalid file type. Only supports PNG, JPEG, and JPG."));  // Send error if invalid file type
            return;
        }

        cb(null, "./Storage"); // Destination folder for the file
    },
    filename: function (req, file, cb) {
        // Save the file with a timestamp for uniqueness
        cb(null, Date.now() + "-" + file.originalname);
    }
});

// Multer instance with storage configuration and file size limit (5MB)
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }  // Set file size limit to 5MB
});

// Export the upload middleware
module.exports = upload;

```
- And inside app.js , require it by:

```js
//multerConfig imports
// const multer = require("./Middleware/multerConfig").multer
// const storage = require("./Middleware/multerConfig").storage

//Destructuring:
// const {multer,storage} = require("./Middleware/MulterConfig")
// const upload = multer({storage : storage})

const upload = require('./Middleware/MulterConfig'); 

```



# Listening to the port:
```js
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Node.js server has started at port ${PORT}`)
})
```



# Nodemon:
- npm install nodemon
```js
// Inside package.json and inside scripts:
    "start": "nodemon app.js"

```



# Mongoose:
- npm install mongoose.
```js
//requiring mongoose
const connectToDatabase = require('./Database')
connectToDatabase()
```



# dotenv package:
- npm install dotenv
```js
//requiring .env
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

```



# Cors:
- npm install cors
```js
// CORS PACKAGE REQUIRING::
const cors = require('cors')
app.use(cors({
    origin : '*' //* means all can accept all the incoming request.
}))
```

- Now my app.js looks like this and this code starts nodejs server in port 3000 and database is connected successfully.
```js

//requiring express
const express = require('express')
const app = express()

//this line is important that express itself cannot handle json so we have to tell express to understand it.
app.use(express.json())
//if we are using ejs in nodejs , we have to write this urlencoded line and neglect the express.json() line.
app.use(express.urlencoded({extended : true}))






//multerConfig imports
// const multer = require("./Middleware/multerConfig").multer
// const storage = require("./Middleware/multerConfig").storage

//Destructuring:
// const {multer,storage} = require("./Middleware/MulterConfig")
// const upload = multer({storage : storage})

const upload = require('./Middleware/MulterConfig');  


//requiring .env
require('dotenv').config()




//requiring mongoose
const connectToDatabase = require('./Database')
connectToDatabase()


// CORS PACKAGE REQUIRING::
const cors = require('cors')
app.use(cors({
    origin : '*' //sabai incoming request accept garxa * ley.
}))


//success message from browser.
app.get('/',(request,response) => {
    //yesari response sangai status pani dekhauna milyo.
    response.status(200).json({
        "message": "success"
    })
})




//By default nodejs didn't give access to see the files of its codebase. tara hamile database maa rakheko image files haru frontend maa dekhauna parni xa ra koi user ley request garyo vani dekhauna parni xa. frontend developer ley pani ta frontend develop garda access magxa. so hamile nodejs lai yo sabai access dey hai vanna ko lagi yo code. simply:
// app.use(express.static("./storage/")) serves static files (like images, CSS, or JavaScript) from the ./storage/ folder, making them accessible via URLs. This allows users to access files stored in that directory directly through the browser.
// app.use(express.static("./Storage/")) //./storage folder bhitra ko file ko access matra diyeko.
const path = require('path');
app.use('/storage', express.static(path.join(__dirname, 'Storage')));


const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Node.js server has started at port ${PORT}`)
})
```

The folder Database and inside this index.js folder looks like this:
```js
//..................................................
const mongoose = require("mongoose");

// Load environment variables
require("dotenv").config();

// Use the actual environment variable
const connectionString = process.env.MONGO_URI;

// It is an asynchronous task, so use async/await.
async function connectToDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log("Connected to database successfully.");
    } catch (error) {
        console.error("Failed to connect to database:", error);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectToDatabase;

```
> Till here, we have started our nodejs server in port 3000 and our database to mongodb atlas has connected successfully. Other thing like making .env file inside Backend folder and putting the mongodb connection url there and adding that .env file in .gitignore file is necesssary.

- 'module.exports' for exporting file and 'require' to importing file is a common js system/convention. like we do in nodejs here.
- But ' import from ' to import file and 'export default' to export file like in react is es(ecma script) system.


# API for Creating Animals :
```js

//create API
const Animal = require('./Model/animalModel');
app.post('/animal', upload.single("animalImage"), async (req, res) => {
    console.log(req.file);
    
    let fileName;
    if (!req.file) {
        fileName = "https://media.istockphoto.com/id/529239795/vector/no-image-signs-for-web-page.jpg?s=612x612&w=0&k=20&c=U3FvupU1VFGiIx5A2K8i79bm-L6bZyeSVUAt8THf_xs=";
    } else {
        fileName = "http://localhost:3000/storage/" + req.file.filename;
    }

    const {
        animalName, animalAge, animalSize, animalGender,
        animalVaccinated, animalHealthStatus, animalLocation,
        animalDescription
    } = req.body;

    await Animal.create({
        animalName,
        animalAge,
        animalSize, 
        animalGender,
        animalVaccinated, 
        animalHealthStatus, 
        animalLocation, 
        animalImage: fileName, 
        animalDescription
    });

    res.status(201).json({
        message: "Animal details created successfully"
    });
});

```
# Bcryptjs:
- npm install bcryptjs

# Json Web Token (JWT):
- npm install jsonwebtoken


 # Folder Structure:
 - make a Controller folder and inside that, make a authController.js file.

  # Email validator:
 - npm install validator

- Now our authcontroller.js file looks like this:
```js
//authcontroller.js

const User = require("../Model/userModel")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken") //whenever the user logged in, in the successful login, we need to give the token to the user.
const validator = require('validator');


//register
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


//login
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
```

 - Make a Routes folder and inside that make a authRoute folder and inside that make a authRoute.js file.
 ```js
const express = require('express');
const router = express.Router();
const {register, login} = require("../Controllers/authController")



router.post('/register', register);
router.post('/login', login);

module.exports = router;


 ```
- Create a userModel.js file for the login and register model.
```js
//usermodel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true 
},
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
  role: { 
    type: String, 
    required : true,
    enum: ['user', 'admin'], 
    default: 'user' 
},
}, 
{ 
    timestamps: true 
});

module.exports = mongoose.model('User', userSchema);
```

- and then import the route in app.js
```js

//Routes::
const authRoute = require("./Routes/authRoute")
app.use("/api/auth", authRoute)

```

- Now make a userRoute.js file inside Routes folder to make route of admin and user.
```js
//userRoute.js
const express = require("express")
const router = express.Router()

//Only admin can access this router:::
router.get("/admin", (req, res) => {
    res.status(200).json({
        message : "Welcome Admin"
    })
})

// Only user can access this router:::
router.get("/user", (req, res) => {
    res.status(200).json({
        message : "Welcome user"
    })
})

module.exports = router
```

> Now we have to make a route of user and admin protected. In order to do a protected route, we need to do is, we will only allow if a user is authenticated, than only you can access these route, and how we are going to authenticate user is we can authenticate user based on the access token.
- So, make a authmiddleware.js file inside Middleware folder. It will just intercept the request and then it will check the token and see that if the user is authenticated, then only it will allow the user to access those route.
```js
//authmiddleware.js

const jwt = require("jsonwebtoken")


const verifyToken = (req, res, next) => {
    let token;

    //if we want to make any route(in our case is userRoute.js) protected, we need to pass the access token in the header
    let authHeader = req.headers.Authorization || req.headers.authorization
    if(authHeader && authHeader.startsWith("Bearer")){
        token = authHeader.split(" ")[1];

        if(!token){
            return res.status(401).json({
                message: "No Token, Authorization Denied !!!"
            });
        }
        // if we get the token , we need to decode that token, to decode, we have jwt.verify.
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decode;
            console.log("The decoded user is", req.user);
            next();
            
        } catch (error) {
            res.status(400).json({
                message : "Token is Invalid !!!"
            })
        }
    }else{
        return res.status(401).json({
            message: "No Token, Authorization Denied !!!"
        });
    }
        
};
module.exports = verifyToken;
```
- Now we have to import the authmiddleware in the userRoute.js file to protect it.
```js
//userRoutes.js
const express = require("express")
const router = express.Router()
const verifyToken = require("../Middleware/authMiddleware")


//Only admin can access this router:::
router.get("/admin", verifyToken, (req, res) => {
    res.status(200).json({
        message : "Welcome Admin"
    })
})


// Only user can access this router:::
router.get("/user", verifyToken, (req, res) => {
    res.status(200).json({
        message : "Welcome user"
    })
})

module.exports = router
```
- Till here, we have a protected route, Now we have to build a role based access control. If a user has a particular role, then we only allow the user to access that particular route. So, 

- Create a roleMiddleware.js file inside Middleware folder.
```js
//First require it in userRoute.js
const express = require("express")
const router = express.Router()
const verifyToken = require("../Middleware/authMiddleware")
const authorizeRoles = require("../Middleware/roleMiddleware")

//Only admin can access this router:::
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.status(200).json({
        message : "Welcome Admin"
    })
})




// Only user can access this router:::
//we can authorize like this: ("admin","user") both to user and admin.
router.get("/user", verifyToken, authorizeRoles("admin","user"), (req, res) => {
    res.status(200).json({
        message : "Welcome user"
    })
})


module.exports = router
```
- RoleMiddleware.js file look like this:
```js
//roleMiddleware.js
const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
        console.log(req.user.role);
        /*
        The output of req.user.role while hitting the admin route is:
        The decoded user is {
        id: '677ce939fc6acb52c8793700', 
        role: 'admin',
        iat: 1736243929,
        exp: 1736251129
        }
        admin        
        */
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({
                message : "Access Denied"
            })
        }
        next();
    }
}

module.exports = authorizeRoles;
```
- Till here, we have completed a role based access control and protected our routes by using access token.


# now do CRUD of animal and add adopterroute and adoptermodel.js for storing the details of adopter who adopt the animal.




# Khalti payment initiation code:

```js

const axios = require("axios");
const mongoose = require("mongoose");
const Donation = require("../../../Model/DonationModel");






exports.initiateKhaltiPayment = async (req, res) => {
    const { username, email, address, amount } = req.body;

    console.log(username, email, address, amount);
    
    if (!username || !email || !amount || !address) {
        return res.status(400).json({ message: "Missing required fields." });
    }

    const paymentId = new mongoose.Types.ObjectId(); // Generate unique ID for reference
    console.log("all fine");
    
    const data = {
        website_url: "http://localhost:3000/",
        return_url: `http://localhost:3000/api/payment/success?paymentId=${paymentId}`,
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
            payment_url: khaltiResponse.payment_url //"payment_url": "https://test-pay.khalti.com/?pidx=Qs3Ng5apcHzgKcWZyYZVwE"
        });
    } catch (error) {
        console.error("Khalti initiation error:", khaltiResponse.data || error.message);
        res.status(500).json({ 
            message: "Payment initiation failed." 
        });
    }
};







exports. verifyKhaltiPayment = async (req, res) => {
    const { paymentId } = req.query; // Extract paymentId from query parameters
    const { pidx } = req.body; // Extract pidx sent by Khalti on success
    if(!pidx){
        res.status(400).json({
            message: "Please provide Pidx."
        })
    }

    try {
        // Verify the payment with Khalti
        const verifyResponse = await axios.post(
            "https://a.khalti.com/api/v2/epayment/lookup/",
            { pidx },
            {
                headers: { Authorization: `Key ${process.env.KHALTI_API_KEY}` },
            }
        );
        console.log("Verify Response is", verifyResponse);
        
        const data = verifyResponse.data
        console.log("VerifyResponse Data is", data);
        console.log("This is the status", data.status);
        
        
        if (data.status === "Completed") {
            // Save donation details to the database after successful payment
            const { username, email, address, amount } = verifyResponse.data;

            const donation = new Donation({
                username: username,
                email: email,
                address,
                amount,
                paymentId,
                paymentDetails: {
                    status: "success",
                    pidx,
                },
            });
            console.log(donation, "This is donation.");
            
            await donation.save();

            res.status(200).json({ 
                message: "Payment verified and donation saved in the database." 
            });
        } else {
            res.status(400).json({ 
                message: "Payment not verified." 
            });
        }
    } catch (error) {
        console.error("Payment verification error:", error.response?.data || error.message);
        res.status(500).json({ message: "Payment verification failed." });
    }
};

```