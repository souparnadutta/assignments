const { Admin } = require("../db");

// Middleware for handling auth
const adminMiddleware = async(req, res, next) => {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
   
    try {
      const admin = await Admin.findOne({
          username: req.headers['username'],
          password: req.headers['password']
      });

      if (!admin) {
          return res.status(403).json({ error: "Forbidden - Invalid admin credentials entered" });
      }
      // If admin is found, proceed to the next middleware or route
      next();
  } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;