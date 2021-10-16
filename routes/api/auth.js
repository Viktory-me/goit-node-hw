const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth');
const { joiUserSchema } = require('../../models/user');
const {
  controllerWrapper,
  validation,
  authenticate,
  upload,
} = require('../../middlewares');

router.post(
  '/signup',
  validation(joiUserSchema),
  controllerWrapper(ctrl.signup)
);
router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.login));
router.get('/logout', authenticate, controllerWrapper(ctrl.logout));
router.get('/current', authenticate, controllerWrapper(ctrl.getCurrentUser));

router.patch(
  '/avatars',
  authenticate,
  upload.single('avatar'),
  controllerWrapper(ctrl.avatars)
);
router.get('/verify/:verificationToken', controllerWrapper(ctrl.verify));
module.exports = router;
