const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(cookieParser())

const users = require('./routes/users')
app.use("/api/v1", users)

const products = require('./routes/products')
app.use("/api/v1", products)

const services = require('./routes/services')
app.use("/api/v1", services)

app.get('/', (req, res)=>{
    const data = { message:"Express Server Running Successfully!"}
    res.status(200).json(data)
})

app.all("*", (req, res)=>{
    const error = { message: "Error 404 Resource not Found"}    
    res.status(404).json(error)
})

module.exports = app