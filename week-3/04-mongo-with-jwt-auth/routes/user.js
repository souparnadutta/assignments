const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db")
const jwt= require("jsonwebtoken")
require('dotenv').config();
const secret = process.env.JWT_SECRET


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    try{User.create({
        username:req.body.username,
        password:req.body.password
    })
    res.status(200).json({ message: 'User created successfully'})
    }catch(err){
    res.status(404).json({error:"Problem while signing up. Please try again"})}
    
})


router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username
    const password=req.body.password

    const admin=User.findOne({
        username,
        password
    })

    if(admin){
        const token = jwt.sign({username},secret)
        res.json({token})
    }else{
        res.status(411).json({message:"Invalid username"})
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        const courses = await Course.find({})
        res.status(200).json(courses)
       }catch(err){
       res.status(500).json({error:"Issues while fetching data from db"})
        }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    try{
        const courseId= req.params.courseId

        const username = res.locals.username
    
        const updated_User = await User.updateOne({
            username
        },{
            $push: { purchasedCourses: { courseId }  },
        })
    
        res.status(200).json({ message: 'Course purchased successfully' })
    
        }catch(err){
            console.log(err)
            res.status(500).json({error:"Issues while purchasing course. Please try again"})
        }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const username = res.locals.username

        const user= await User.findOne({
            username
        })
    
        const purchasedCoursesId = user.purchasedCourses.map( c => c.courseId)
    
        const courses = await Course.find({
            _id: { $in: purchasedCoursesId }
        });
    
    
        res.status(200).json(courses) 
    
        }catch(err){
            res.status(500).json({error:"Issues while fetching data from db"})
        }
});

module.exports = router;