const User = require('../models/user')
const jwt = require('jsonwebtoken')
const ErrorHandler = require('../utils/errorHandler')

exports.authUser = async(req, res, next)=>{

    const token = req.cookies

    if(!token){
        return next(ErrorHandler("Login First to Access this Resources", 401))
    }

    const secret_key = process.env.JWT_SECRET

    const decoded = jwt.verify(token, secret_key)

    req.user = await User.findById(decoded.id)
    next()
}