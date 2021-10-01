const { Conflict } = require('http-errors');
const { User } = require('../../models');

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);
  if (user) {
    throw new Conflict('Already register');
  }
};

module.exports = signup;
