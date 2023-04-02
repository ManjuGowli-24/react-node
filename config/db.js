import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();
const connetDB= async() =>{
    try {
        const conn= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log(`MongoDB connected to : ${conn.connection.host}`);
    } catch (error) {
        console.log(`ERROR : ${error}`);
        console.log(process.env.MONGO_URI)
        process.exit(1);
    }
}

export default connetDB