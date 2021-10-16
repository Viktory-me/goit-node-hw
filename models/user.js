const { Schema, model } = require('mongoose');
const Joi = require('joi');
const gr = require('gravatar');

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

    verify: {
      type: Boolean,
      default: false,
    },
    verificationToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
    avatar: {
      type: String,
      default: function () {
        return gr.url(this.email, { s: '250' }, true);
      },
    },
  },
  { versionKey: false, timestamps: true }
);

const joiUserSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const User = model('user', userSchema);

module.exports = { User, joiUserSchema };
