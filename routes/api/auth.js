const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth');
const { joiUserSchema } = require('../../models/user');
const {
  controllerWrapper,
  validation,
  authenticate,
} = require('../../middlewares');

router.post(
  '/signup',
  validation(joiUserSchema),
  controllerWrapper(ctrl.signup)
);
router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.login));
router.get('/logout', authenticate, controllerWrapper(ctrl.logout));
module.exports = router;
