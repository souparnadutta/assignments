const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require('../db')


// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username:req.body.username,
        password:req.body.password
    })

    res.status(200).json({ message: "User created successfully" })
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

    const updated_User = await User.updateOne({
        username:req.headers.username,
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
    const user= await User.findOne({
        username:req.headers.username,
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