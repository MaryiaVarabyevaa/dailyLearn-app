const Router = require('express');
const router = new Router();
const bodyParser = require('body-parser');
const {check} = require('express-validator');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const validation = require('./validation');

const urlEncodeParser = bodyParser.urlencoded({
    extended: false,
});

router.post('/registration',
    urlEncodeParser,
    validation,
    userController.registration)
router.post('/login',
    urlEncodeParser,
    validation,
    userController.login)
router.get('/auth', authMiddleware, userController.check)

module .exports = router;