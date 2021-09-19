const { v4 } = require('uuid');
const getAllContacts = require('./getAllContacts');
const updateAllContacts = require('./updateAllContacts');

async function addContact(name, email, phone) {
  try {
    const contacts = await getAllContacts();
    const newContact = { id: v4(), name, email, phone };
    contacts.push(newContact);
    await updateAllContacts(contacts);
  } catch (error) {
    console.log(error);
  }
}
module.exports = addContact;
