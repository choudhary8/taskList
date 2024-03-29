const http=require('http');
const app=require(`./app.js`);
const connnectDB=require('./db/index.js');
require('dotenv').config()


connnectDB();

try{
    const server=http.createServer(app);
    server.on("error",(error)=>{
        throw error;
    })
    server.listen(process.env.PORT,()=>console.log(`listning on ${process.env.PORT}`));
}catch(error)
{
    console.log("sever failed :", error);
}

