const mongoose = require('mongoose')

const serviceSchema = mongoose.Schema({

    service_name:{
        type:String,

        required:[true, 'Service Name Field Required'],

        maxLength:[30, 'Service Name characters must not exceed between 30 characters']
    },

    description:{
        type:String,

        required:[true, 'Description Field Required'],
    },

    cost:{
        type:Number,

        required:[true, 'Service Cost Required'],

        maxLength:[5, 'Service Cost must not exceed between 5 characters'],

        default:0.0
    },

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Service', serviceSchema)