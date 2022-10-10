const { request, response } = require('express');
const Router = require('express');
const router = new Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// два post метода для регистрации и авторизации
// метод Get нужен, чтобв проверять авторизован ли пользователь
// вторым параметром передаем объект
router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', authMiddleware, userController.check)

module.exports = router;