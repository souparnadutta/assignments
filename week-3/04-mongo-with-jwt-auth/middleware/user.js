const jwt=require("jsonwebtoken")
require('dotenv').config();
const secret = process.env.JWT_SECRET

const userMiddleware = (req, res, next) => {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
   
    const authorization = req.headers.authorization
    const token = authorization.split(" ")
    const jwtToken=token[1]

    const decodedValue=jwt.verify(jwtToken,secret)

    if (decodedValue.username){
        res.locals.username=decodedValue.username
        next();
    }else{
        res.status(403).json({
            message:"You are not authenticated"
        })
    }

}

module.exports = userMiddleware;