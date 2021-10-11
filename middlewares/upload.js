const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const tempDir = path.join(__dirname, '../', 'tmp');
// console.log(tempDir);

const uploadConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    const [, extension] = file.originalname.split('.');
    cb(null, `${uuidv4()}.${extension}`);
  },
});

const upload = multer({
  storage: uploadConfig,
  limits: {
    fileSize: 2000000,
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.includes('image')) {
      cb(null, true);
      return;
    }
    const error = new Error('Wrong format file for avatar');
    error.status = 400;
    cb(error);
  },
});

module.exports = upload;
