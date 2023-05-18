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