
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