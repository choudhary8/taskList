const Task=require('../models/task.js');
const apiError = require('../utils/apiError.js');
const apiResponse = require('../utils/apiResponse.js');
const asyncHandler = require('../utils/asyncHandler.js');



exports.getTasksList=asyncHandler(async(req,res)=>{
    const taskList=await Task.find({});
    if(!taskList){
        throw new apiError(500,"Something went wrong while fetching the data")
    }
    return res
    .stats(200)
    .json(
        new apiResponse(200,taskList,"tasks fetched successfully")
    )
})


exports.create_a_task=(req,res)=>{
let task=req.body.task;
task.save()
.then(task=>{
    console.log("Task Added : ");
    console.log(task);
})
.catch(err=>console.log(err));
}
