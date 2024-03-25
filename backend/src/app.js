const express=require('express');
const app=express();
const cors=require('cors');
const tasksRouter=require('./routes/tasksList.js')


app.use(cors());
app.get("/",tasksRouter);

module.exports=app;