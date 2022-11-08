const Router = require('express');
const router = new Router();
const cardController = require('../controllers/cardController');
const validation = require('./validation');
const bodyParser = require("body-parser");
const {check} = require("express-validator");

const urlEncodeParser = bodyParser.urlencoded({
    extended: false,
});

// todo: finish backend validation
router.post('/add',
    urlEncodeParser,
    validation,
    cardController.create);
router.get('/', cardController.getAll);
// router.get('/', cardController.check);

module.exports = router;