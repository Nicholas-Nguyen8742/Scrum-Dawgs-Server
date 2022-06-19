const router = require('express').Router();
const authController = require('../controllers/authController');
const authenticate = require("../middleware/authenticate");

router
    .route('/register')
    .post(authController.register);

router
    .route('/login')
    .post(authController.login);

router 
    .route('/current')
    .get(authenticate, authController.current);


module.exports = router;
