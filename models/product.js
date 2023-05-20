const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    product_name:{
        type:String,

        required:[true, 'Product Name Field Required'],

        maxLength:[255, 'Product Name characters must not exceed between 255 characters']
    },

    brand:{
        type:String,

        required:[true, 'Product Brand Field Required'],

        maxLength:[100, 'Product Brand Characters must not exceed between 100 characters']
    },

    description:{

        type:String,

        required:[true, 'Description Field Required'],

    },

    price:{
        type:Number,

        required:[true, 'Price Field Required'],

        maxLength:[5, 'Price must not exceed between 5 characters'],

        default: 0.0
    },

    stock:{
        type:Number,

        required:[true, 'Stock Field Required'],

        maxLength:[10, 'Stock must not exceed to 10 characters']
    },

    seller:{
        type:String,

        required:[true,'Seller Field Required'],

        maxLength:[30, 'Seller Name must not exceed to 30 characters']
    },

    createdAt:{
        type:Date,
        default:Date.now
    }
})


module.exports = mongoose.model('Product', productSchema)