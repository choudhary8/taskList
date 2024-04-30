const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const jwt = require('jsonwebtoken')
const mongooseAggregatePaginate=require('mongoose-aggregate-paginate-v2')
const Task = require('./task.model')

const userSchema=mongoose.Schema(
    {
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    tasks:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:Task
        }
    ],
    profileImage:{
        type:String
    },
    refreshToken:{
        type:String
    }
    },
    {
        timestamps:true
    }

)

userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) return next();
    this.password=await bcrypt.hash(this.password,10);
    next();
})

userSchema.methods.isPasswordCorrect=async function(password){
   return await bcrypt.compare(password,this.password);
}

userSchema.methods.generateAccessToken=function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
    return jwt.sign(
        {
            _id:this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

userSchema.plugin(mongooseAggregatePaginate)
const User=mongoose.model("User",userSchema);
module.exports=User