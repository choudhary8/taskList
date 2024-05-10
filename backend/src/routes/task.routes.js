const express=require('express');
const { createTask } = require('../controllers/task.controller');
const verifyJWT = require('../middleware/auth.middleware');
const router=express.Router();


router.post('/create-task',createTask)

module.exports=router