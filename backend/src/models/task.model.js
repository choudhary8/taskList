const mongoose=require('mongoose');
const User = require('./user.model');
const TaskSchema=mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        require:true
    },
    day:{
        type:Number,
        require:true
    }
})

const Task=mongoose.model("Task",TaskSchema)
module.exports=Task