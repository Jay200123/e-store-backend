const ErrorHandler = require('../utils/errorHandler')

exports.userRole = (...roles)=>{

    return (req, res, next)=>{
        if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`${req.user.role} are not allowed to access this resources`, 403))
        }
        next()
    }
    
}