const express = require('express')

const app = express()


const users = require('./routes/users')
app.use("/api/v1", users)

app.get('/', (req, res)=>{
    const data = { message:"Express Server Running Successfully!"}
    res.status(200).json(data)
})

app.all("*", (req, res)=>{
    const error = { message: "Error 404 Resource not Found"}    
    res.status(404).json(error)
})

module.exports = app