const getAllContacts = require('./getAllContacts');
const listContacts = require('./listContacts');
const getContactById = require('./getContactById');
const addContact = require('./addContact');
const removeContact = require('./removeContact');
const updateContactById = require('./updateContactById');
const updateAllContacts = require('./updateAllContacts');

module.exports = {
  getAllContacts,
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContactById,
  updateAllContacts,
};
