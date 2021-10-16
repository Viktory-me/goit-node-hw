const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const getCurrentUser = require('./getCurrentUser');
const avatars = require('./avatars');
const verify = require('./verify');
const reSend = require('./reSend');
module.exports = {
  signup,
  login,
  logout,
  getCurrentUser,
  avatars,
  verify,
  reSend,
};
