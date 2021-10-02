const bcryptjs = require('bcryptjs');
const { Unauthorized } = require('http-errors');
const { User } = require('../../models');

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }, '_id email password');
  if (!user || !bcryptjs.compareSync(password, user.password)) {
    throw new Unauthorized('Email or password is wrong');
  }
  const token = 'ghsdfsdfsfg.hsgfdhdghdh.dfgdhdhsdsasa';
  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
