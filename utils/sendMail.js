const nodemailer = require('nodemailer')
const fs = require('fs')
const path = require('path')

const sendEmail = async(options)=>{

    const transport = nodemailer.createTransport({

        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
    })

    const body = fs.readFileSync(path.join(__dirname, '../sendMail/message.html'))

    const msg = {

        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.text || `Thank You For Registering to E-Store Web Application`,
        html: body,
    }

    await transport.sendMail(msg)
}

module.exports = sendEmail

