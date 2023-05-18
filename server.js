const app = require('./app')

require('dotenv').config({ path: './config/.env'})

const connectDB = require('./config/database')
connectDB()

const port = process.env.PORT

app.listen(port, ()=>{
    console.log(`Express Server Running on Port ${port} on ${ process.env.NODE_ENV }`)    
})