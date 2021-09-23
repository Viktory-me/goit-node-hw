// Viktory - me;
// ViktoryViktory
// mongodb+srv://Viktory-me:ViktoryViktory@cluster0.syuqz.mongodb.net/db-contacts?retryWrites=true&w=majority

// const mongoose = require('mongoose');

// const DB_HOST =
//   'mongodb+srv://Viktory-me:ViktoryViktory@cluster0.syuqz.mongodb.net/db-contacts?retryWrites=true&w=majority';
// mongoose
//   .connect(DB_HOST, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('Database connect success');
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });
const dotenv = require('dotenv');
dotenv.config();
console.log(process.env.DB_HOST);
