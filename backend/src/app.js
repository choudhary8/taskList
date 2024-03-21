const express=require('express');
const app=express();


let tasks=["kdfnf","kdhfn","khdf"];
app.get("/",(req,res,next)=>{
    res.status(200);
    res.json({
        message:tasks
    });
    res.end();
    console.log("hsfkfbc");
})
app.get("/login",(req,res)=>{
    res.status(200);
    res.json({
        message:"login"
    });
    res.end();
})
app.get("/signup",(req,res)=>{
    res.status(200);
    res.json({
        message:"signup"
    });
    res.end();
})
module.exports=app;