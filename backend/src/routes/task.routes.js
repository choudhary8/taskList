const express=require('express');
const { createTask, getAllTask } = require('../controllers/task.controller');
const verifyJWT = require('../middleware/auth.middleware');
const router=express.Router();


router.post('/create-task',verifyJWT,createTask)
router.post("/get-all-tasks",verifyJWT,getAllTask)

module.exports=router