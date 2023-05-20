const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: './config/.env' })

const userSchema = new mongoose.Schema({

    fname:{

        type:String,

        required:[true, 'Fname Field Required'],

        maxLength:[30, 'User First Name must not exceed to 30 Characters']
    },

    lname:{
        type:String,

        required:[true, 'Last Name Field Required'],

        maxLength:[30, 'Last Name must not exceed to 30 Characters']
    },

    phone:{
        type:String,

        required:[true, 'Phone Field Required'],

        maxLength:[11, 'Phone Characters must not exceed to 11  Characters']
    },

    address:{
        type:String,

        required:[true, 'Address Field Required'],

        maxLength:[255, 'Adress Field Must not exceed to 255 Characters']
    },

    city:{
        type:String,

        required:[true, 'City Field Required'],

        maxLength:[30, 'City Characters must not exceed to 30']
    },

    email:{
        type:String,

        required: [true, 'Email Field Required'],

        unique:true,
        
        validate: [validator.isEmail, 'Please Enter a valid email address'],
    },

    password:{
        type:String,

        required: [true, 'Password Field Required'],

        minlength:[6, "Your Password must be longer than 6 characters"],
        
        select:false,
    },

    role:{

        type:String,
        default:'user',

    },

    createdAt:{

        type:Date,
        default:Date.now
    }
    
})

userSchema.pre('save', async function(next){

    if(!this.isModified('password')){
        next()
    }

    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.getJwtToken = function(){

    key = process.env.JWT_SECRET,
    expire_time = process.env.JWT_EXPIRES_TIME

    return jwt.sign({ id: this._id }, key, {
        expiresIn: expire_time
    })
}

module.exports = mongoose.model('User', userSchema)