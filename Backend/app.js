
//requiring express
const express = require('express')
const app = express()



//middleware::
//this line is important that express itself cannot handle json so we have to tell express to understand it.
app.use(express.json())
//if we are using ejs in nodejs , we have to write this urlencoded line and neglect the express.json() line.
app.use(express.urlencoded({extended : true}))




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
//authroute
const authRoute = require("./Routes/Auth/authRoute")
app.use("/api/auth", authRoute)

//userRoute
const userRoutes = require("./Routes/User/userRoutes")
app.use("/api/users", userRoutes)

// adopter routes
const adopterRoutes = require("./Routes/User/adopterRoute");  
app.use("/api", adopterRoutes); 

//product route
const productRoute = require('./Routes/Admin/productRoute')
app.use('/animals', productRoute)





//success message from browser.
app.get('/',(request,response) => {
    //yesari response sangai status pani dekhauna milyo.
    response.status(200).json({
        "message": "success"
    })
})


const DonateRoute = require('./Routes/User/DonateRoute')
app.use("/api/payment", DonateRoute)


//By default nodejs didn't give access to see the files of its codebase. tara hamile database maa rakheko image files haru frontend maa dekhauna parni xa ra koi user ley request garyo vani dekhauna parni xa. frontend developer ley pani ta frontend develop garda access magxa. so hamile nodejs lai yo sabai access dey hai vanna ko lagi yo code. simply:
// app.use(express.static("./storage/")) serves static files (like images, CSS, or JavaScript) from the ./storage/ folder, making them accessible via URLs. This allows users to access files stored in that directory directly through the browser.
// app.use(express.static("./Storage/")) //./storage folder bhitra ko file ko access matra diyeko.
const path = require('path');
app.use('/storage', express.static(path.join(__dirname, 'Storage')));

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Node.js server has started at port ${PORT}`)
})

