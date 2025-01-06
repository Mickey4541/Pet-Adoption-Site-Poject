
//requiring express
const express = require('express')
const app = express()

//requiring .env
require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working

//requiring mongoose
const connectToDatabase = require('./Database')
connectToDatabase()


// CORS PACKAGE REQUIRING::
const cors = require('cors')
app.use(cors({
    origin : '*' //* means all can accept all the incoming request.
}))



app.get('/',(request,response) => {
    //yesari response sangai status pani dekhauna milyo.
    response.status(200).json({
        "message": "success"
    })
})






app.listen(3000, () => {
    console.log("Node.js server has started at port 3000")
})