const Task = require("../models/task.model");
const User = require("../models/user.model");
const apiError = require("../utils/apiError");
const apiResponse = require("../utils/apiResponse");
const asyncHandler = require("../utils/asyncHandler");


const createTask=asyncHandler(async(req,res)=>{
    //get the details from frontend
    //need to validate the details
    //check if user exits in db
    //create the user - entry db
    //check the user creation
    //return the user in response


    if(!req.body){
        throw new apiError(400,"request body is empty")
    }
    console.log(req.body);
    const {content,ownerEmail,day}=req.body;
    if(!content||!ownerEmail||!day){
        throw new apiError(400,"All details are required")
    }

    const user=await User.findOne({email:ownerEmail})
    if(!user){
        throw new apiError(401,"Owner doesn't exist")
    }

    const task=await Task.create({
        content,
        owner:user._id,
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


const getAllTask=asyncHandler(async(req,res)=>{
    //get details from front end
    //validate the details-email
    //check if user exists
    //find all task created by user
    //validate the tasks
    //return all tasks

    const {email}=req.body;
    console.log(req.body);
    if(!email){
        throw new apiError(400,"User required")
    }
    const user=await User.findOne({email})
    if(!user){
        throw new apiError(404,"Invalid user")
    }

    const tasks=await Task.find({owner:user._id})
    if(tasks.length==0){
        throw new apiError(404,"No task found")
    }

    return res.status(200).json(
        new apiResponse(200,tasks,"All task fetched successfully")
    )

})

const deleteTask=asyncHandler(async(req,res)=>{
    //get details from frontend
    //get 
})

module.exports={
    createTask,
    getAllTask
}