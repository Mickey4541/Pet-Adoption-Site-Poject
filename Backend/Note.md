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
