
//requiring express
const express = require('express')
const app = express()

//middleware::
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


//Routes::
const authRoute = require("./Routes/authRoute")
//authroute
app.use("/api/auth", authRoute)
//userRoute
const userRoutes = require("./Routes/userRoutes")
app.use("/api/users", userRoutes)


//success message from browser.
app.get('/',(request,response) => {
    //yesari response sangai status pani dekhauna milyo.
    response.status(200).json({
        "message": "success"
    })
})



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






























//By default nodejs didn't give access to see the files of its codebase. tara hamile database maa rakheko image files haru frontend maa dekhauna parni xa ra koi user ley request garyo vani dekhauna parni xa. frontend developer ley pani ta frontend develop garda access magxa. so hamile nodejs lai yo sabai access dey hai vanna ko lagi yo code. simply:
// app.use(express.static("./storage/")) serves static files (like images, CSS, or JavaScript) from the ./storage/ folder, making them accessible via URLs. This allows users to access files stored in that directory directly through the browser.
// app.use(express.static("./Storage/")) //./storage folder bhitra ko file ko access matra diyeko.
const path = require('path');
app.use('/storage', express.static(path.join(__dirname, 'Storage')));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Node.js server has started at port ${PORT}`)
})