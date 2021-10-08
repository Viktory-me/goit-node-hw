const mongoose = require('mongoose');
require('dotenv').config();
const app = require('../app');
const createFolderIsNotExist = require('../helpers/create-folder');

const { DB_HOST, PORT = 3000 } = process.env;
const UPLOAD_DIR = process.env.UPLOAD_DIR;
const AVATAR_OF_USERS = process.env.AVATAR_OF_USERS;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, async () => {
      await createFolderIsNotExist(UPLOAD_DIR);
      await createFolderIsNotExist(AVATAR_OF_USERS);
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
