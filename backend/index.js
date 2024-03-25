const http=require('http');
const app=require(`./src/app.js`);
const connnectDB=require('./src/db/index.js')
require('dotenv').config()

connnectDB();

const startServer=async()=>{
    const server=await http.createServer(app);
    await server.listen(process.env.PORT,()=>console.log(`listning on ${process.env.PORT}`));
}
startServer();
