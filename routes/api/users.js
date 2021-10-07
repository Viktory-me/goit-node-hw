const express = require('express');
const router = express.Router();
const ctrl = require('../../controllers/users');
// const { joiUserSchema } = require('../../models/user');
const {
  //   authenticate,
  uploadMiddleware,
  controllerWrapper,
} = require('../../middlewares');

router.post('/', uploadMiddleware.single('photo'), controllerWrapper(ctrl.add));

router.get('/', controllerWrapper(ctrl.getAll));

module.exports = router;
