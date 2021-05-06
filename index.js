"use strict";
const nodemailer = require("nodemailer");

const options = {
  host: process.env['INPUT_HOST'],
  port: process.env['INPUT_PORT'],
  secure: process.env['INPUT_SECURE'] ? true : process.env['INPUT_PORT'] == "465",
  auth: {
    user: process.env['INPUT_USERNAME'],
    pass: process.env['INPUT_PASSWORD']
  }
}

const data = {
  from: process.env['INPUT_FROM'],
  to: process.env['INPUT_TO'],
  subject: process.env['INPUT_SUBJECT'],
  cc: process.env['INPUT_CC'] ? process.env['INPUT_CC'] : undefined,
  bcc: process.env['INPUT_BCC'] ? process.env['INPUT_BCC'] : undefined,
  replyTo: process.env['INPUT_REPLAY_TO'] ? process.env['INPUT_REPLAY_TO'] : undefined,
  text: !isHtml(process.env['INPUT_BODY']) ? process.env['INPUT_BODY']: undefined,
  html: isHtml(process.env['INPUT_BODY']) ? process.env['INPUT_BODY']: undefined,
}


function isHtml(str) {
    return /<\/?[a-z][\s\S]*>/i.test(str);
}

try {
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport(options);

    // send mail with defined transport object
    const info = await transporter.sendMail(data);

    console.log("Message sent: %s", info.messageId);
    }
} catch (error) {
    console.log(error.message);
    exit;
}

main();
