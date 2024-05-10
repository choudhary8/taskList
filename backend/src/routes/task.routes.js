const express=require('express');
const { createTask, getAllTask } = require('../controllers/task.controller');
const verifyJWT = require('../middleware/auth.middleware');
const router=express.Router();


router.post('/create-task',createTask)
router.get("/get-all-tasks",getAllTask)

module.exports=router