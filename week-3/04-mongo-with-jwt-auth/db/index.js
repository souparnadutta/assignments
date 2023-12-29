const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_DB_URL = process.env.MONGO_DB_URL
// Connect to MongoDB
mongoose.connect(MONGO_DB_URL);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    purchasedCourses :[
        {
            courseId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
            }
        }
    ]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    courseId: mongoose.Schema.Types.ObjectId,
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    published: Boolean
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}