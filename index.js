"use strict";
const nodemailer = require("nodemailer");

const options = {
  host: process.env['INPUT_HOST'],
  port: process.env['INPUT_PORT'],
  secure: process.env['INPUT_SECURE'],
  auth: {
    user: process.env['INPUT_USERNAME'],
    pass: process.env['INPUT_PASSWORD']
  }
}

const data = {
  from: process.env['INPUT_FROM'],
  to: process.env['INPUT_TO'],
  subject: process.env['INPUT_SUBJECT'],
}

if (isHtml(process.env['INPUT_BODY']) ) {
    data.html = process.env['INPUT_BODY']
} else {
    data.text = process.env['INPUT_BODY']
}

function isHtml(str) {
    return /<\/?[a-z][\s\S]*>/i.test(str);
}

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport(options);

  // send mail with defined transport object
  let info = await transporter.sendMail(data);

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
