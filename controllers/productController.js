const Product = require('../models/product')
const asyncHandler = require('express-async-handler')

exports.allProducts = asyncHandler(async(req, res)=>{

    const product = await Product.find()

    if(!product){
        res.status(404).json({ message:"Cant find any products"})
    }

    res.status(200).json({
        sucesss:true,
        product
    })

})

exports.storeProducts = asyncHandler(async(req, res)=>{

    const product = await Product.create(req.body)

    if(!product){
        res.status(500).json({ message: "Field Required" })
    }

    res.status(200).json({
        sucess:true,
        product
    })
})

exports.getOneProducts = asyncHandler(async(req, res)=>{

    const { id } = req.params
    const product = await Product.findById(id)

    if(!product){
        res.status(404).json({ message: "Error cant find product"})
    }

    res.status(200).json({
        sucess:true,
        product
    })
})

exports.updateProducts = asyncHandler(async(req, res)=>{

    const { id } = req.params

    const product = await Product.findByIdAndUpdate(id, req.body)

    if(!product){
        res.status(500).json({ message: "Error cant update product data"})
    }
    res.status(200).json({
        sucess:true,
        product
    })
})