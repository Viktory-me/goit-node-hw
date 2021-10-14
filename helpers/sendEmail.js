const nodemailer = require('nodemailer');
require('dotenv').config();

const { EMAIL_PASSWORD } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: 'viktory-me@meta.ua',
    pass: EMAIL_PASSWORD,
  },
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = {
    ...data,
    from: 'viktory-me@meta.ua',
  };
  await transporter.sendMail(email);
};

module.exports = sendEmail;
