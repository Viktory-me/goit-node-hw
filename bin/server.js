const mongoose = require('mongoose');
require('dotenv').config();
const appUser = require('../app');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    appUser.listen(PORT);
    console.log('Database connection successful');
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
