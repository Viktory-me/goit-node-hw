const { NotFound } = require('http-errors');
const contactsOperations = require('../../model/contacts');
const { sendSuccessRes } = require('../../helpers');

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getContactById(contactId);
  if (!result) {
    throw new NotFound(`Contact id = ${contactId} not found`);
  }
  sendSuccessRes(res, { result });
};

module.exports = getContactById;
