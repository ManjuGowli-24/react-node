import express from 'express'
import dotenv from 'dotenv'
import connetDB from './config/db.js'
// import Animal from './data/Animal.js'
import router from "./route/animalRoute.js"
import cors from 'cors'

connetDB()

dotenv.config()
const app =express()

app.get('/',(req,res)=> {
    res.send("API is running and its autosvaing.....")
})

// app.get('/api/animal',(req,res)=>{
//     res.json(Animal)
// })
// app.get('/api/animal/:id',(req,res)=>{
//     const animal= Animal.find((p)=>p.id === req.params.id)
//     res.json(animal)
// })

app.use('/api/animal',router)

// user login info
app.post('/users/add', (req,res)=>{
    const userInfo=req.body;
    console.log('User Information : ', userInfo);
})

const corsOptions ={
    origin:'*', 
    credentials:true,            
    optionSuccessStatus:200,
 }
 app.use(cors(corsOptions))


// PORT and NODE_ENV from .env file 
const PORT = process.env.PROT || 5000

app.listen (PORT, console.log(`server is runing on ${process.env.NODE_ENV} mode port ${PORT}`))