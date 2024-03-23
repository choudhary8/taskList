const express=require('express');
const router=express.Router();
const {getTasksList,create_a_task}=require('../controllers/tasksList.js');

router.get("/",getTasksList);
router.post("/",create_a_task);

module.exports=router