import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router();
import animal from "../models/animgmodel.js";

router.get('/', asyncHandler(async(req,res)=>{
    const animalid= await animal.find({})

    res.json(animalid)
}))

router.get('/:id',asyncHandler(async (req,res)=>{
    const animalspfid= await animal.findById(req.params.id)

    if (animalspfid){
        res.json(animalspfid)
    }else{
        res.status(404).send('ID YOU ARE SEARCHING FOR WAS NOT FOUND !.')
    }
}))

export default router 