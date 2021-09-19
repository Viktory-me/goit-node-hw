const updateAllContacts = require('./updateAllContacts');
const getAllContacts = require('./getAllContacts');

async function removeContact(contactId) {
  try {
    const contacts = await getAllContacts();
    const idx = contacts.findIndex(
      (contact) => contact.id.toString() === contactId
    );
    if (idx === -1) {
      return null;
    }
    contacts.splice(idx, 1);
    await updateAllContacts(contacts);
  } catch (error) {
    console.log(error);
  }
}
module.exports = removeContact;
