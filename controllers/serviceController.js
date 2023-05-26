const Service = require('../models/service')
const ErrorHandler = require('../utils/errorHandler')
const asyncHandler = require('express-async-handler')

exports.allService = asyncHandler(async(req, res, next)=>{

    const service = await Service.find()

    if(!service){
        return next(new ErrorHandler("Error Services Not Found", 404))
    }

    res.status(200).json({
        sucess:true,
        service
    })

})

exports.storeService = asyncHandler(async(req, res, next)=>{



    const service = await Service.create(req.body)

    if(!service){
        return next(new ErrorHandler("Missing Field Required", 500))
    }

    res.status(200).json({
        sucess:true,
        service
    })
})