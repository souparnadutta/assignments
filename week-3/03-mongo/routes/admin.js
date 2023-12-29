const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin,User,Course} = require("../db");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    try{Admin.create({
        username:req.body.username,
        password:req.body.password
    })
    res.status(200).json({ message: 'Admin created successfully'})
    }catch(err){
    res.status(404).json({error:"Problem while signing up. Please try again"})}
    })

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
        try {
            const course = await Course.create({
                title: req.body.title,
                description: req.body.description,
                price: req.body.price,
                imageLink: req.body.imageLink
            });
    
            res.status(200).json({ message: 'Course created successfully', courseId: course._id });
        } catch (err) {
            console.error(err);
            res.status(404).json({ error: "Invalid course data entered" });
        }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
     const courses = await Course.find({})
     res.status(200).json(courses)
    }catch(err){
    res.status(500).json({error:"Issues while fetching data from db"})
     }
});

module.exports = router;