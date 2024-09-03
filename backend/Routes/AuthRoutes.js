const { registerValidation, loginValidation } = require('../Middlewares/AuthValidation');
const { register, login } = require('../Controllers/AuthController');
const router = require('express').Router();


router.post('/register', registerValidation, register);
router.post('/login', loginValidation, login);

module.exports = router;
