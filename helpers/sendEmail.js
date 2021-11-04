const nodemailer = require('nodemailer');
require('dotenv').config();

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.ukr.net',
  port: 2525,
  secure: true,
  auth: {
    user: 'testing_it@ukr.net',
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: 'testing_it@ukr.net',
  };
  await transporter.sendMail(email);
};

module.exports = sendEmail;
