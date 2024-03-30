const asyncHandler=require('../utils/asyncHandler.js')
const apiError=require('../utils/apiError.js')
const User=require('../models/user.model.js')
const uploadOnClodinary=require('../utils/cloudinary.js');
const apiResponse=require('../utils/apiResponse.js')
const mongoose=require("mongoose")

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
    if(!profileImageLocalPath){
        throw new apiError(400,"Profile Image required")
    }
    const profileImage=await uploadOnClodinary(profileImageLocalPath)
    // console.log(path);

    if(profileImage.url==="")
    {
        throw new apiError(400,"Profile Image is required")
    }

    // console.log(path.url);

    const user=await User.create({
        email,
        password,
        profileImage:profileImage.url
    })
    // console.log(user.refreshToken);

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

const generateAccessAndRefreshToken=async(userId)=>{
    try {
        // console.log(userId);
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}

    } catch (error) {
        console.log(error);
        throw new apiError(500,"Something went wrong while generating accessn and refresh tokens")
    }
}

const loginUser=asyncHandler(async(req,res)=>{
    //user detais from req body
    //validate details
    //check for user in db
    //check for password
    //generate access and refresh tokens
    //passing tokens in cookies

    // console.log(req);
    const {email,password}=req.body

    if(!email){
        throw new apiError(400,"Email is required");
    }

    const user=await User.findOne({email});
    if(!user){
        throw new apiError(404,"User doesn't exist")
    }

    const isPasswordValid=await user.isPasswordCorrect(password);
    if(!isPasswordValid){
        throw new apiError(400,"Credentials wrong")
    }

    const {accessToken,refreshToken}=await generateAccessAndRefreshToken(user._id)

    const loggedInUser=await User.findById(user._id).select("-password -refreshToken")

    const options={
        httpOnly:true,
        secure:true
    }

    return res
    .status(201)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new apiResponse(
            200,
            {
                user:loggedInUser,accessToken,refreshToken
            },
            "User logged In Successfully"
        )
    )

})

const logoutUser=asyncHandler(async(req,res)=>{
    //making access and refresh token as undefined
    //clear cookies
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set:{
                refreshToken:undefined
            }
        },
        {
            new:true
        }
    )

    const options={
        httpOnly:true,
        secure:true
    }
    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new apiResponse(200,{},"User logged out")
    )
})

module.exports = {
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser:logoutUser
};