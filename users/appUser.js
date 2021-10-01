const express = require('express');
const cors = require('cors');

const app = express();

const authRouter = require('../routes/api/auth');

app.use(cors());
app.use(express.json());
app.use('api/auth', authRouter);
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    code: 404,
    message: 'Not found',
  });
});

app.use((error, req, res, next) => {
  const { status = 500, message = 'Server error' } = error;
  res.status(status).json({
    status: 'error',
    code: status,
    message,
  });
});

module.exports = app;
