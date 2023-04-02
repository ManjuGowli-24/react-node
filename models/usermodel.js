import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    name :{
        type : String,
        require : true,
    },
    email:{
        type : String,
        require : true,
        unique : true,
    },
    password:{
        type : String,
        require : true,
    },
},{timestamps : true})

const user =mongoose.model('users',userSchema)
export default user