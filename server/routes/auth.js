let express = require('express');
let router = express.Router();

let authController = require('../controllers/auth');

/* POST - processes the Login Page */
router.post('/login', authController.processLoginPage);

/* POST - processes the User Registration Page */
router.post('/register', authController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', authController.performLogout);


module.exports = router;