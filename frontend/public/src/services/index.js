// const getAllTask = require("./getAllTasks");
// import axios from 'axios';
// const axios = require('axios/dist/browser/axios.cjs');
// const ok = require('./getAllTasks.js');
// import axios from '../../node_modules/axios/dist/browser/axios.cjs';
axios.defaults.withCredentials = true;
import tasksList from "./getAllTasks.js";
// const accessToken=Cookies.get('accessToken');
// const accessToken=document.cookie.access-token;
// const t=getCookie('accessToken');
//         console.log(t);

// let getList=document.getElementsByTagName("button");
// getList[1].addEventListener("click",tasksList);

// document.addEventListener('DOMContentLoaded',tasksList);


// logout user
const logoutUser=async()=>{
    const res=await axios.post("http://localhost:3000/api/v1/users/logout")
    const data=res.data;
    console.log(data.message);
    window.location.replace('login.html');
}

let logout=document.getElementById("logout");
logout.addEventListener("click",logoutUser);

