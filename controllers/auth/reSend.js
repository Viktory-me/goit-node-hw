const { BadRequest } = require('http-errors');
const { User } = require('../../models');
const { sendEmail, sendSuccessRes } = require('../../helpers');

const reSend = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!email) {
    throw new BadRequest('missing required field email');
  }
  if (user.verify || !user.verificationToken) {
    throw new BadRequest('Verification has already been passed');
  }
  const data = {
    to: email,
    subject: 'Повторное подтверждение регистрации',
    html: `<a href='http://localhost:3000/api/users/verify/${user.verificationToken}' target="blalnk">Подтвердить почту</a>`,
  };
  await sendEmail(data);

  sendSuccessRes(res, { message: 'Verification email sent' });
};
module.exports = reSend;
