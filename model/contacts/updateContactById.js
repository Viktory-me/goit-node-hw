const listContacts = require('./listContacts');
const updateAllContacts = require('./updateAllContacts');

const updateContactById = async (id, data) => {
  const contacts = await listContacts();
  const idx = contacts.findIndex((item) => item.id === id);
  if (idx === -1) {
    return null;
  }
  const updatedContacts = { ...contacts[idx], ...data };
  contacts[idx] = updatedContacts;
  await updateAllContacts(contacts);
  return updatedContacts;
};

module.exports = updateContactById;
