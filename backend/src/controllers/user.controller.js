const asyncHandler=require('../utils/asyncHandler.js')
const apiError=require('../utils/apiError.js')
const User=require('../models/user.model.js')
const uploadOnClodinary=require('../utils/cloudinary.js');
const apiResponse=require('../utils/apiResponse.js')

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
    
    if([email].some((field)=>
    field?.trim()==="")
    ){
        throw new apiError(401,"All details are rewuired")
    }

    // console.log(req.body);
    const existedUSer=await User.findOne({email})
    if(existedUSer)
    {
        throw new apiError(400,"User already exist")
    }

    // console.log(req.files);
    const profileImageLocalPath=await req.files?.profileImage[0]?.path;
    // console.log(profileImageLocalPath);
    const path=await uploadOnClodinary(profileImageLocalPath)
    // console.log(path);

    if(path.url==="")
    {
        throw new apiError(400,"Profile Image is required")
    }

    // console.log(path.url);

    const user=await User.create({
        email,
        password,
        profileImage:path.url
    })

    const createdUser=await User.findById(user._id).select(
        "-password -refreshToken"
    )

    // console.log(createdUser);

    if(!createdUser){
        throw new apiError(500,"Something went wrong while creating the User")
    }
    
    return res.status(201).json(
        new apiResponse(200,createdUser,"User Created Successfully")
    )
// return res.status(200).json({message:"ok"})
})

module.exports=registerUser