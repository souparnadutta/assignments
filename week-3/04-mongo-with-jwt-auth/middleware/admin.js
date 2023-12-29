const jwt=require("jsonwebtoken")
require('dotenv').config();
const secret = process.env.JWT_SECRET

// Middleware for handling auth
const adminMiddleware = (req, res, next) =>{
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authorization = req.headers.authorization
    const token = authorization.split(" ")
    const jwtToken=token[1]

    const decodedValue=jwt.verify(jwtToken,secret)
   
    if (decodedValue.username){
        next();
    }else{
        res.status(403).json({
            message:"You are not authenticated"
        })
    }

}

module.exports = adminMiddleware;