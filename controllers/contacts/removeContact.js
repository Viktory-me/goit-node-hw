const { NotFound } = require('http-errors');
const { Contact } = require('../../models');
const { sendSuccessRes } = require('../../helpers');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndDelete(contactId);
  if (!result) {
    throw new NotFound(`Contact id = ${contactId} not found`);
  }
  sendSuccessRes(res, { message: 'contact deleted' });
};

module.exports = removeContact;
