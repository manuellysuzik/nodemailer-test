const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: process.env.MAILHOG_HOST,
  port:'1025',
  auth:null
})

transport.sendMail({
  from:"Manuelly Suzik <manu@testecommailhong.com>",
  to:"Manuelly Nunes <manuellysuzik@gmail.com>",
  subject:"Testando o Mailhog",
  html:"<h1> Você conseguiu mandar um e-mail</h1>"
})