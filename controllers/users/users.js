const path = require('path');
const fs = require('fs/promises');

const { User } = require('../../models');

const avatarsDir = path.join(__dirname, '../../', 'public/avatars');

const add = async (req, res) => {
  const { path: tempStorage, originalname } = req.file;
  try {
    const newAvatar = {
      name: req.body.name,
      photo: '/public/avatars/default.jpg',
    };
    const result = await User.create(newAvatar);
    const [extention] = originalname.split('.').reverse();
    const newFileName = `avatar_main-image_${result._id}.${extention}`;
    const resultStorage = path.join(avatarsDir, newFileName);
    await fs.rename(tempStorage, resultStorage);
    const photo = path.join('/avatars', newFileName);
    const avatar = await User.findByIdAndUpdate(
      result._id,
      { photo },
      { new: true }
    );
    res.status(201).json({
      result: avatar,
    });
  } catch (error) {
    await fs.unlink(tempStorage);
    throw error;
  }
};

const getAll = async (req, res) => {
  const result = await User.find({});
  res.json(result);
};

module.exports = {
  add,
  getAll,
};
