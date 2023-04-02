import mongoose from "mongoose";

const aniSchema=mongoose.Schema({
    name :{type : String, require: true},
    image :{type : String, require : true},
    alt :{type : String, require : true},
    discription  :{type : String, require : true},
  
})

const animal=mongoose.model('Animal',aniSchema)
export default animal