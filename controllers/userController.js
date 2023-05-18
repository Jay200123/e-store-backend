const User = require('../models/user')
const asyncHandler = require('express-async-handler')

exports.allUsers = asyncHandler(async(req, res)=>{

    const users = await User.find()

    if(!users){
        res.status(404).json({ message: "Error Users not Found"})
    }

    res.status(200).json({
        success:true,
        users
    })
})

exports.storeUsers = asyncHandler(async(req, res)=>{

    const users = await User.create(req.body)

    if(!users){
        res.status(500).json({message: "Error Field Required"})
    }

    res.status(200).json({
        success:true,
        users
    })
})

exports.getOneUser = asyncHandler(async(req, res)=>{

    const { id } = req.params
    const users = await User.findById(id)

    if(!users){
        res.status(404).json({ message:"Data not Found"})
    }

    res.status(200).json({
        success:true,
        users
    })
})