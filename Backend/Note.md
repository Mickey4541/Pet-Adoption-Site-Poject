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
```



# Listening to the port:
```js
app.listen(3000, () => {
    console.log("Node.js server has started at port 3000")
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