const contactsOperations = require('../../model/contacts');
const { sendSuccessRes } = require('../../helpers');

const addContact = async (req, res) => {
  const result = await contactsOperations.addContact(req.body);
  sendSuccessRes(res, { result }, 201);
};

module.exports = addContact;