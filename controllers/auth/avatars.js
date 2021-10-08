const { User } = require('../../models');
const UploadAVatarService = require('../../services/local-upload');

const avatars = async (req, res, next) => {
  try {
    const id = req.user.id;
    const tmp = new UploadAVatarService(process.env.AVATAR_OF_USERS);
    const avatarURL = await tmp.saveAvatar({ idUser: id, file: req.file });
    await User.updateOne({ _id: id }, { avatar: avatarURL });
    res.json({ message: 'done' });
  } catch (error) {
    next(error);
  }
};

module.exports = avatars;
