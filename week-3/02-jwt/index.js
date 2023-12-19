const jwt = require('jsonwebtoken');
const jwtPassword = "secret";
const z =require('zod')


// Write a function that takes in a username and password and returns a JWT token with the username encoded. Should return null if the username is not a valid email or if the password is less than 6 characters. Try using the zod library here
// Write a function that takes a jwt as input and returns true if the jwt can be DECODED (not verified). Return false otherwise
// Write a function that takes a jwt as input and returns true if the jwt can be VERIFIED. Return false otherewise
// To test, go to the 02-jwt folder and run npx jest ./tests

const isValidCredentials = (username,password) =>{
    
    const userSchema = z.object({
        username:z.string().email(),
        password:z.string().min(6)
    })

    const userData={
        username:username,
        password:password
    }

    const result = userSchema.safeParse(userData)

    // if (!result.success) {
    //     console.log('Validation errors:', result.error.errors);
    //   }

    return result.success
}

function signJwt(username, password) {

     if(isValidCredentials(username,password)){
        let token = jwt.sign({username:username,password:password}, jwtPassword);
        return token
     }else{  
       return null
     }
   
}

function verifyJwt(token) {

    try{
        let IsValidToken=jwt.verify(token, jwtPassword);
        return true
    }catch(err){
        return false
    }

}

function decodeJwt(token) {

    let decodedJwt=jwt.decode(token,jwtPassword)

    if(decodedJwt){
    return true
    }else{
    return false
    }

}

// const token = signJwt('kirat@gmail.com', '123456' );
// console.log(token)
// const decoded = jwt.decode(token);
// console.log(decoded)

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}