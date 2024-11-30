const userController = require('../controllers/user.controller');
const {tokenValidateMiddleware, adminValidateMiddleware, currentUserValidateMiddleware} = require('../middlewares/auth.middleware.js');
const express = require('express');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/', tokenValidateMiddleware, adminValidateMiddleware, userController.getAllUsers);
router.get('/me', tokenValidateMiddleware, userController.getCurrentUser);
router.get('/:id', tokenValidateMiddleware, adminValidateMiddleware, userController.getUserByID);
router.patch('/:id', tokenValidateMiddleware, currentUserValidateMiddleware, userController.updateUser);
router.delete('/:id', tokenValidateMiddleware, currentUserValidateMiddleware, userController.deleteUser);

module.exports = router;
