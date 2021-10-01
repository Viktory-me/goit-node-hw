const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/auth');
const { joiUserSchema } = require('../../models/user');
const { controllerWrapper, validation } = require('../../middlewares');

router.post(
  '/signup',
  validation(joiUserSchema),
  controllerWrapper(ctrl.signup)
);
router.post('/login', validation(joiUserSchema), controllerWrapper(ctrl.login));
router.get('/logout', controllerWrapper(ctrl.logout));
module.exports = router;
