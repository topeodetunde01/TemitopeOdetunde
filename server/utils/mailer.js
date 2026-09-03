const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport')
const ejs = require('ejs');
const path = require('path')
const { promisify } = require('util')
require('dotenv').config()

const renderFile = promisify(ejs.renderFile)

function sendOnce(res, status, body) {
  if (res.headersSent) {
    return
  }
  return res.status(status).send(body)
}

async function sendConfirmationMail(res,fullName, phoneNumber, email, service, need){
  const transporter = nodemailer.createTransport(smtpTransport({
    host: 'smtp.livemail.co.uk',
    secureConnection: true,
    tls: {
      rejectUnauthorized: false
    },
    port : 465,
    auth: {
        user: 'info@temitopeodetunde.com',
        pass: process.env.PASS,
      },
  }))

  const pathtofileclient = path.join(__dirname, '..', '/views/emailClient.ejs')
  const pathtofileowner = path.join(__dirname, '..', '/views/emailOwner.ejs')

  try {
    const [clientHtml, ownerHtml] = await Promise.all([
      renderFile(pathtofileclient, {fullName, phoneNumber, email, service, need}),
      renderFile(pathtofileowner, {fullName, phoneNumber, email, service, need}),
    ])

    await transporter.sendMail({
      from: '"Temitope Odetunde"info@temitopeodetunde.com',
      to: email,
      subject: 'Hi there',
      html: clientHtml,
    })

    const info = await transporter.sendMail({
      from : 'Info@temitopeodetunde.com',
      to : 'Topeodetunde@hotmail.com',
      subject: 'New Contact',
      html : ownerHtml
    })

    return sendOnce(res, 200, {success : true, message : info})
  } catch (error) {
    console.log(error)
    return sendOnce(res, 500, {success : false, message : error})
  }
}


module.exports.sendConfirmationMail = sendConfirmationMail
