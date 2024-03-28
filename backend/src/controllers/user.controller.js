const asyncHandler=require('../utils/asyncHandler.js')
const apiError=require('../utils/apiError.js')
const User=require('../models/user.model.js')


const registerUser=asyncHandler(async (req,res)=>{
    //get user details from frontend
    //validate details -email
    //check if user already exist
    //get file path
    //upload file on cloudinary
    //create user - entry in DB
    //remove refreshToken and paasword
    //check for user creation
    //return user

    const {email,password}=req.body
    if([{email}].some((field)=>
    field?.trim()==="")
    ){
        return new apiError(401,"All details are rewuired")
    }

    const existedUSer=User.findOne({email})
    if(existedUSer)
    {
        return new apiError(400,"User already exist")
    }

    



})

module.exports=registerUser