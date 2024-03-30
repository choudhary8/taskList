const express=require('express')
const router=express.Router()
const {registerUser,loginUser}=require('../controllers/user.controller.js')
const upload=require('../middleware/multer.middleware.js').upload;

// console.log(registerUser);
router.post("/register", upload.fields([
    {
        name:"profileImage",
        maxCount:1
    }
]),
registerUser
)

router.post("/login",loginUser)
// const userRouter=router.route("/register").post(
//     upload.fields([
//         {
//             name:"profileImage",
//             maxCount:1
//         }
//     ]),
//     registerUser
//     )

module.exports=router

