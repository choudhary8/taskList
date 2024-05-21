// const getAllTask = require("./getAllTasks");
// import axios from 'axios';
// const axios = require('axios/dist/browser/axios.cjs');
// const ok = require('./getAllTasks.js');
// import axios from '../../node_modules/axios/dist/browser/axios.cjs';

import tasksList from "./getAllTasks.js";


let getList=document.getElementsByTagName("button");
getList[0].addEventListener("click",tasksList);



//logout user
const logoutUser=async()=>{
    const res=await axios.post("http://localhost:3000/api/v1/users/logout")
    const data=res.data;
    console.log(data.message);
}

let logout=document.getElementById("logout");
logout.addEventListener("click",logoutUser);

