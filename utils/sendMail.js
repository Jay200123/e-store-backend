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

    const image = path.join(__dirname, '../images/success.jpg')

    const msg = {

        from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
        to: options.email,
        subject: options.subject,
        text: options.text,
        html: body,
        attachments: [
            {
                filename: 'success.jpg',
                path: image,
                cid: 'sucess-icon'
            },
        ]
    }

    await transport.sendMail(msg)
}

module.exports = sendEmail

