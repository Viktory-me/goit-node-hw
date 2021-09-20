const { v4 } = require('uuid');
const listContacts = require('./listContacts');
const updateAllContacts = require('./updateAllContacts');

async function addContact({ name, email, phone }) {
  try {
    const contacts = await listContacts();
    const newContact = {
      id: v4(),
      name: name,
      email: email,
      phone: phone,
    };
    contacts.push(newContact);
    await updateAllContacts(contacts);
    return newContact;
  } catch (error) {
    console.log(error);
  }
}
module.exports = addContact;
