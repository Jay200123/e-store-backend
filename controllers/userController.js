const User = require('../models/user')
const bcrypt = require('bcrypt')
const asyncHandler = require('express-async-handler')
const sendToken = require('../utils/jwtToken')
const ErrorHandler = require('../utils/errorHandler')

exports.allUsers = asyncHandler(async(req, res, next)=>{

    const users = await User.find()

    if(!users){
       return next(ErrorHandler("Error Users not Found", 404))
    }

    res.status(200).json({
        success:true,
        users
    })
})


exports.storeUsers = asyncHandler(async (req, res, next) => {
  const users = await User.create(req.body);

  if (!users) {
    return next(ErrorHandler("Missing Field Required", 500))
  }

  sendToken(users, 200, res);
  
});


exports.getOneUser = asyncHandler(async(req, res, next)=>{

    const { id } = req.params
    const users = await User.findById(id)

    if(!users){
        return next(ErrorHandler("Cant find User", 404))
    }

    res.status(200).json({
        success:true,
        users
    })
})

exports.updateUsers = asyncHandler(async(req, res, next)=>{

    const { id }  = req.params
    const { password }  = req.body

    if(password){
        req.body.password = await bcrypt.hash(password,10) //keeps the password hash when updating the user's data
    }

    const users = await User.findByIdAndUpdate(id, req.body)

    if(!users){
       return next(ErrorHandler("Error cant update user data", 500))
    }
    res.status(200).json({
        sucess:true,
        users
    })
})

exports.deleteUser = asyncHandler(async(req, res, next)=>{

    const { id } = req.params
    const users = await User.findByIdAndDelete(id)

    if(!users){
        return next(ErrorHandler("Error cant erase user data", 500))
    }

    res.status(200).json({
        sucess:true,
        users
    })
})

exports.userLogin = asyncHandler(async(req, res, next)=>{

    const { email, password } = req.body

    if(!email || !password){
        return next(ErrorHandler("Email & Password Field Required", 400))
    }

    const user = await User.findOne({ email }).select("+password")

    if(!user){
        return next(ErrorHandler("Enter a  valid email & password", 401))
    }

    //validates if the password entered by the user is correct
    const isPassword = await user.comparePassword(password)

    if(!isPassword){
        return next(ErrorHandler("Invalid Password", 401))
    }

    sendToken(user, 200, res)

})

exports.userLogout = asyncHandler(async(req, res)=>{

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        sucess:true,
        message: "User Successfully Logout"
    })
})