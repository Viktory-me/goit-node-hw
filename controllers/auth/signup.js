const bcryptjs = require('bcryptjs');
const { Conflict } = require('http-errors');
const { User } = require('../../models');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict('Already register');
  }
  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const newUser = { email, password: hashPassword };
  const result = await User.create(newUser);
  console.log(result);
  res.status(201).json({
    status: 'success',
    code: 201,
    message: 'Success register',
  });
};

module.exports = signup;
