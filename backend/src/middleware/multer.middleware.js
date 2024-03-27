const multer=require(multer);
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./backend/public/temp")
    },
    fileName:function(req,file,cb){
        cb(null,file.originalName)
    }
})

module.exports.upload=storage
