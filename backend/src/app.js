const express=require('express');
const app=express();
const cors=require('cors');
const cookieParser=require("cookie-parser")
const bodyParser=require("body-parser")
const tasksRouter=require('./routes/task.routes.js')
const userRouter=require('./routes/user.routes.js')


app.use(cors({
    origin: 'http://127.0.0.1:5500', // Replace with your frontend domain
    credentials: true
}));
// app.use(cors());
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tasks",tasksRouter);

module.exports=app;