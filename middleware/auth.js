const User = require('../models/user')
const jwt = require('jsonwebtoken')
const ErrorHandler = require('../utils/errorHandler')

exports.userAuth = async(req, res, next)=>{

    const { token } = req.cookies

    if(!token){
        return next(new ErrorHandler("You Need to Login First to Access this Resources", 401))
    }

    const secret_key = process.env.JWT_SECRET
    const decode = jwt.verify(token, secret_key)

    req.user = await User.findById(decode.id)

    next()
}