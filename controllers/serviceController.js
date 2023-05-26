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

exports.getOneService = asyncHandler(async(req, res, next)=>{

    const { id } = req.params
    
    const service = await Service.findById(id)

    if(!service){
        return next(new ErrorHandler("Service Not Found", 404))
    }
    res.status(200).json({
        sucess:true,
        service
    })
})

exports.updateService = asyncHandler(async(req, res, next)=>{

    const { id } = req.params

    const service = await Service.findByIdAndUpdate(id, req.body)

    if(!service){
        return next(new ErrorHandler("Error Can't Update Service", 500))
    }

    res.status(200).json({
        sucess:true,
        service
    })
})

exports.deleteService = asyncHandler(async(req, res, next)=>{

    const { id } = req.params

    const service = await Service.findByIdAndDelete(id) 

    if(!service){
        return next(new ErrorHandler("Error can't Delete Service", 500))
    }
    
    res.status(200).json({
        sucess:true,
        service
    })
})

