const { NotFound } = require('http-errors');
const contactsOperations = require('../../model/contacts');
const { sendSuccessRes } = require('../../helpers');

const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
  if (!result) {
    throw new NotFound(`Contact id = ${contactId} not found`);
  }
  sendSuccessRes(res, { message: 'contact deleted' });
};

module.exports = removeContact;
