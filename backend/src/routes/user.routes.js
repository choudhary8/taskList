const express=require('express')
const router=express.Router()
const {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    updatePassword,
    getCurrentUser,
    updateProfileImage
}=require('../controllers/user.controller.js');
const verifyJWT = require('../middleware/auth.middleware.js');
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

//secured routes
router.post("/logout",verifyJWT,logoutUser)
router.post("/refresh-token",refreshAccessToken)
router.post("/update-password",verifyJWT,updatePassword)
router.get("/current-user",verifyJWT,getCurrentUser)
router.patch("/update-profileImage",verifyJWT,upload.single("profileImage"),updateProfileImage)


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

