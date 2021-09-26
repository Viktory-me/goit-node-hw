const { Schema, model } = require('mongoose');
const Joi = require('joi');

const messageValidation = {
  'any.required': 'missing required name field',
};
const messageValidationFavorite = {
  'any.required': 'missing field favorite',
};
const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

const contactJoiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required().messages(messageValidation),
  phone: Joi.string().required().messages(messageValidation),
  favorite: Joi.boolean().messages(messageValidation),
});

const updateStatusJoiSchema = Joi.object({
  favorite: Joi.boolean().required().messages(messageValidationFavorite),
});

const Contact = model('contact', contactSchema);

module.exports = { contactJoiSchema, updateStatusJoiSchema, Contact };
