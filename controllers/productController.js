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