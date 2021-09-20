const { NotFound } = require('http-errors');
const contactsOperations = require('../model/contacts');
const { sendSuccessRes } = require('../helpers');

const listContacts = async (req, res) => {
  const result = await contactsOperations.listContacts();
  sendSuccessRes(res, { result });
};
const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getContactById(contactId);
  if (!result) {
    throw new NotFound(`Contact id = ${contactId} not found`);
  }
  sendSuccessRes(res, { result });
};
const addContact = async (req, res) => {
  const result = await contactsOperations.addContact(req.body);
  sendSuccessRes(res, { result }, 201);
};
const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateContactById(
    contactId,
    req.body
  );
  if (!result) {
    throw new NotFound(`Contact id = ${contactId} not found`);
  }
  sendSuccessRes(res, { result });
};
const removeContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
  if (!result) {
    throw new NotFound(`Contact id = ${contactId} not found`);
  }
  sendSuccessRes(res, { message: 'contact deleted' });
};

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
};
