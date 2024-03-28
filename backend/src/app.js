const express=require('express');
const app=express();
const cors=require('cors');
const tasksRouter=require('./routes/tasksList.js')
const userRouter=require('./routes/user.routes.js')

app.use(cors());
app.use("/api/v1/users",userRouter);
app.get("/",tasksRouter);

module.exports=app;