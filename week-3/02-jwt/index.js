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

     if(isValidCredentials(username,password)){
        let token = jwt.sign({username:username,password:password}, jwtPassword);
        return token
     }else{  
       return null
     }
   
/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {

    if(isValidCredentials(username,password)){
       let token = jwt.sign({username:username,password:password}, jwtPassword);
       return token
    }else{  
      return null
    }
  
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {

    try{
        let IsValidToken=jwt.verify(token, jwtPassword);
        return true
    }catch(err){
        return false
    }

}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {

    let decodedJwt=jwt.decode(token,jwtPassword)

    if(decodedJwt){
    return true
    }else{
    return false
    }

}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
