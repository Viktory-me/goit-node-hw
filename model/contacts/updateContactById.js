const getAllContacts = require('./getAllContacts');
const updateAllContacts = require('./updateAllContacts');

const updateContactById = async (id, data) => {
  const contacts = await getAllContacts();
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
