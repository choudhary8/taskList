const Task = require("../models/task.model");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");


const createTask=asyncHandler(async(req,res)=>{
    //get the details from frontend
    //need to validate the details
    //create the user - entry db
    //check the user creation
    //return the user in response

    console.log(req.body);
    if(!req.body){
        throw new apiError(400,"request body is empty")
    }

    const {content,owner,day}=req.body;
    // if(!content||!owner||!day){
    //     throw new apiError(400,"All details are required")
    // }

    const task=await Task.create({
        content,
        owner,
        day
    })

    const createdTask=await Task.findById(task._id)
    if(!createdTask){
        throw new apiError(500,"Error while creating the task in db")
    }

    return res.status(201).json(
        new apiResponse(200,createdTask,"Task created successfully")
    )
})


module.exports={
    createTask
}