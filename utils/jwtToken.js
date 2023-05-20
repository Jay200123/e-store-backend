require('dotenv').config({ path:'./config/.env' })

const sendToken = (users, statusCode, res)=>{

    cookies = process.env.COOKIE_EXPIRES_TIME

    const token = users.getJwtToken()

    const options = {
        expires: new Date(
            Date.now() + cookies * 24 * 60 * 60 * 1000  
        ),

        httpOnly:true
    }

    res.status(statusCode).cookie('token', token, options).json({
        sucess:true,
        token,
        users
    })
}

module.exports = sendToken