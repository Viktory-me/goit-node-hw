const express = require('express');
const router = express.Router();
const { contactSchema } = require('../../validationSchemas');
const { controllerWrapper, validation } = require('../../middlewares');
const {
  listContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
} = require('../../controllers/contacts');

router.get('/', controllerWrapper(listContacts));

router.get('/:contactId', controllerWrapper(getContactById));

router.post('/', validation(contactSchema), controllerWrapper(addContact));

router.put(
  '/:contactId',
  validation(contactSchema),
  controllerWrapper(updateContactById)
);

router.delete('/:contactId', controllerWrapper(removeContact));

module.exports = router;
