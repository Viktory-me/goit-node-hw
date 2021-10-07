const { Schema, model } = require('mongoose');
const Joi = require('joi');
// const jwt = require('jsonwebtoken');

// const { SECRET_KEY } = process.env;

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: String,
  },
  { versionKey: false, timestamps: true }
);
// userSchema.methods.createToken = function () {
//   const payload = {
//     _id: this._id,
//   };
//   return jwt.sign(payload, SECRET_KEY);
// };
const joiUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const User = model('user', userSchema);

module.exports = { User, joiUserSchema };
