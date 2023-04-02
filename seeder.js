import  mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import Animals from "./data/Animal.js";
import animal from "./models/animgmodel.js";
import user from "./models/usermodel.js";
import connectDB from "./config/db.js";

dotenv.config()

connectDB()

const importData = async () =>{
    try { 
        // const createuser=user.insertMany()
        const createuser=users.map( use =>{
            return {...use}
        })

        await user.insertMany(createuser)
        
        const detAnimals =Animals.map(ani =>{
            return{ ...ani }
        })

        await animal.insertMany(detAnimals)

        console.log("Data imported..")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const deletedData = async ()=>{
    try {
        await animal.deleteMany()               
        await user.deleteMany()  

        console.log('Data is deleted ....')
    } catch (error) {
            console.log(error)
            process.exit(1)        
    }
}


if (process.argv[2]==='-d'){
    deletedData()
}else{
    importData()
}