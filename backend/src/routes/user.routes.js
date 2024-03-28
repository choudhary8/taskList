const express=require('express')
const router=express.Router()
const registerUser=require('../controllers/user.controller.js')
const {upload}=require('../middleware/multer.middleware.js')

console.log(upload);
// const userRouter=router.post("/register",registerUser)
const userRouter=router.route("/register").post(
    upload.fields([
        {
            name:"profileImage",
            maxCount:1
        }
    ]),
    registerUser
    )

module.exports=userRouter

