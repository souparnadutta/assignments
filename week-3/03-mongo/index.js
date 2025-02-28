const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT

const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");

// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
