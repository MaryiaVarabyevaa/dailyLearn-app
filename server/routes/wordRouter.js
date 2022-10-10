const Router = require('express');
const router = new Router();
const wordController = require('../controllers/wordController');

router.post('/', wordController.create);
// чтобы взять все сразу, но думаю, что мне это не нужно
router.get('/', wordController.getAll);


module.exports = router;