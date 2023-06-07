const Product = require('../models/product')
const asyncHandler = require('express-async-handler')
const ErrorHandler = require('../utils/errorHandler')

exports.allProducts = asyncHandler(async(req, res, next)=>{

    const product = await Product.find()

    if(!product){
        return next(new ErrorHandler('Error Products, not Found', 404))
    }

    res.status(200).json({
        sucess:true,
        product
    })
})

exports.storeProducts = asyncHandler(async(req, res, next)=>{

    const product = await Product.create(req.body)

    if(!product){
        return next(new ErrorHandler("Missing Field Required", 500))
    }

    res.status(200).json({
        sucess:true,
        product
    })
})

exports.getOneProducts = asyncHandler(async(req, res, next)=>{

    const { id } = req.params

    const product = await Product.findById(id)

    if(!product){
        return next(new ErrorHandler("Error Product Not Found", 404))
    }

    res.status(200).json({
        sucess:true,
        product
    })
})

exports.updateProducts = asyncHandler(async(req, res, next)=>{

    const { id } = req.params

    const product = await Product.findByIdAndUpdate(id, req.body)

    if(!product){
        return next(new ErrorHandler("Error Missing Field Required", 500))
    }

    res.status(200).json({
        sucess:true,
        product
    })

})

exports.deleteProducts = asyncHandler(async(req, res, next)=>{

    const { id } = req.params
    
    const product = await Product.findByIdAndDelete(id)

    if(!product){
        return next(new ErrorHandler("Error Product Cannot Remove", 500))
    }

    res.status(200).json({
        sucess:true,
        product
    })
})
