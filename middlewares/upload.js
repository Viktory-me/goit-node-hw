const multer = require('multer');
const path = require('path');

const tempDir = path.join(__dirname, '../', 'tmp');
// console.log(tempDir);

const uploadConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 2058,
  },
});

const uploadMiddleware = multer({
  storage: uploadConfig,
});

module.exports = uploadMiddleware;