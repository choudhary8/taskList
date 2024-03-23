const mongoose=require('mongoose');
const TaskSchema=mongoose.Schema({
    task:{
        type:String
    }
})

module.exports=mongoose.model("task",TaskSchema)