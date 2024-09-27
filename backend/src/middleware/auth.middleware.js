const User = require("../models/user.model");
const apiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");
const jwt=require("jsonwebtoken")

const verifyJWT=asyncHandler(async(req,res,next)=>{
    console.log(req.cookies);
    const token=req.cookies?.accessToken||req.header("authorization")?.replace("Bearer ","");
    if(!token){
        throw new apiError(401,"Unathuorise request")
    }

    const decodedToken=jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
    const user=await User.findById(decodedToken._id).select("-password -refreshToken")
    if(!user){
        throw new apiError(401,"Invalid Access Token")
    }

    req.user=user
    next()
})

module.exports=verifyJWT