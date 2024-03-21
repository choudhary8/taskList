const http=require('http');
const app=require(`./src/app.js`);
const PORT=3000;
const server=http.createServer(app);
server.listen(PORT,()=>console.log(`listning on ${PORT}`));
