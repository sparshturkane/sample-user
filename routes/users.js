var express = require('express');
var router = express.Router();
const UserController = require('../controllers/user');

router.get('/', UserController.list);

// router.post('/register', registerUserValidationRules(), validateRegisterUser, UserController.register);

// router.post('/login', loginUserValidationRules(), validateLoginUser, UserController.login);

router.post('/detail', UserController.details);

module.exports = router;

