const bcryptjs = require('bcryptjs');
const { generate } = require('shortid');
const { Conflict } = require('http-errors');
const { User } = require('../../models');
const { sendEmail } = require('../../helpers');

const signup = async (req, res) => {
  const { email, password, avatar } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Already register');
  }
  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const verificationToken = generate();
  const newUser = {
    email,
    password: hashPassword,
    avatar,
    verificationToken,
  };
  const result = await User.create(newUser);
  const data = {
    to: email,
    subject: 'Подтверждениe регистрации на сайте',
    html: `
            <a href="http://localhost:3000/api/users/verify/${verificationToken}" target="_blank">Подтвердить почту</a>
            `,
  };
  await sendEmail(data);

  console.log(result);
  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Success register',
  });
};

module.exports = signup;
