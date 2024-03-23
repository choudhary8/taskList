const express=require('express');
const app=express();
const cors=require('cors');
const tasksRouter=require('./routes/tasksList.js')
const mongoose=require('mongoose');


const DB="mongodb+srv://manojbhichchhar8:1kGENxtEVP6nv0Z5@cluster0.18n8ffy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(DB).then(()=>{
    console.log("MongoDB is connected successfully");
})


app.use(cors());
app.get("/",tasksRouter);


module.exports=app;