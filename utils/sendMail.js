const nodemailer = require('nodemailer')

const sendEmail = async(options)=>{

    const transport = nodemailer.createTransport({

        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD
        }
    })

    const msg = {

        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.text || `Thank You For Registering to E-Store Web Application`,
        html: options.html,
    }

    await transport.sendMail(msg)
}

module.exports = sendEmail

