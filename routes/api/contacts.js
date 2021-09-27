const express = require('express');
const router = express.Router();
const {
  contactJoiSchema,
  updateStatusJoiSchema,
} = require('../../models/contacts');
const { controllerWrapper, validation } = require('../../middlewares');
const ctrl = require('../../controllers/contacts');

router.get('/', controllerWrapper(ctrl.listContacts));

router.get('/:contactId', controllerWrapper(ctrl.getContactById));

router.post(
  '/',
  validation(contactJoiSchema),
  controllerWrapper(ctrl.addContact)
);

router.put(
  '/:contactId',
  validation(contactJoiSchema),
  controllerWrapper(ctrl.updateContactById)
);

router.delete('/:contactId', controllerWrapper(ctrl.removeContact));
router.patch(
  '/:contactId/favorite',
  validation(updateStatusJoiSchema),
  controllerWrapper(ctrl.updateStatusContact)
);

module.exports = router;
