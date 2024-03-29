const mongoose=require('mongoose');
// const DB_NAME=require('../constants.js')
// require('dotenv').config('../../.env')
// console.log(process.env.DB_URI);
// console.log(DB_NAME);
const connnectDB=async()=>{
    try{
       let dbConnectionInstance=await mongoose.connect(`${process.env.DB_URI}`)
       console.log("DB connected successfully : ",dbConnectionInstance.connection.host);
    }
    catch(error){
            console.log("MongoDB connection failed",error);
            process.exit(1);
        }
}

module.exports=connnectDB;