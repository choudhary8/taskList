const Task=require('../models/task.js');

let tasks;

exports.getTasksList=(req,res,next)=>{
    res.status(200);
    // res.json({
    //     message:tasks
    // });
    // const task=new Task({
    //     task:"ho gya"
    // })
    // task.save()
    // .then(task=>{
    //     console.log("task added");
    //     console.log(task);
    // })
    // console.log(Task.find());
    Task.find({})
    .then((task)=>{
        console.log(task);
        // tasks.push(task[0]);
        // console.log(tasks);\
        // res.send(task);
        tasks=task.map(fn);
        function fn(item){
            return item.task;
        }
    })
   
    res.send(tasks);
    // res.json(tasks);
    res.end();
    console.log("hsfkfbc");
}


exports.create_a_task=(req,res)=>{
let task=req.body.task;
task.save()
.then(task=>{
    console.log("Task Added : ");
    console.log(task);
})
.catch(err=>console.log(err));
}
