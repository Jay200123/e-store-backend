const mongoose = require('mongoose')

const connectDB = async()=>{

    try{
        await mongoose.connect(process.env.DATABASE, {

            useNewUrlParser:true,
            useUnifiedTopology:true
        })
    }catch(err){
        console.log(err)
    }

    console.log(`Mongo DB Connection Established Successfully with host ${mongoose.connection.host}`)
}

module.exports = connectDB