const User = require('../models/user')
const bcrypt = require('bcrypt')
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

exports.updateUsers = asyncHandler(async(req, res)=>{

    const { id }  = req.params
    const { password }  = req.body

    if(password){
        req.body.password = await bcrypt.hash(password,10) //keeps the password hash when updating the user's data
    }

    const users = await User.findByIdAndUpdate(id, req.body)

    if(!users){
        res.status(500).json({message:"Error cant update data"})
    }
    res.status(200).json({
        sucess:true,
        users
    })
})

exports.deleteUser = asyncHandler(async(req, res)=>{

    const { id } = req.params
    const users = await User.findByIdAndDelete(id)

    if(!users){
        res.status(500).json({ message:"Error cant remove the data"})
    }

    res.status(200).json({
        sucess:true,
        users
    })
})