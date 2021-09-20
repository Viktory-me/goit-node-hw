const express = require('express');
const router = express.Router();
const { contactSchema } = require('../../validationSchemas');
const { controllerWrapper, validation } = require('../../middlewares');
const { contacts: ctrl } = require('../../controllers');

router.get('/', controllerWrapper(ctrl.listContacts));

router.get('/:contactId', controllerWrapper(ctrl.getContactById));

router.post('/', validation(contactSchema), controllerWrapper(ctrl.addContact));

router.put(
  '/:contactId',
  validation(contactSchema),
  controllerWrapper(ctrl.updateContactById)
);

router.delete('/:contactId', controllerWrapper(ctrl.removeContact));

module.exports = router;
